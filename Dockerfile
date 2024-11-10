# Stage 1: Build the React frontend
FROM node:18-alpine AS frontend-build

WORKDIR /app

# Copy package.json and install dependencies first to utilize Docker cache
COPY frontend/package.json frontend/package-lock.json ./ 
RUN npm install

# Copy the rest of the frontend code and build the React app
COPY frontend/ ./

# Build the app with environment-specific configuration
ARG REACT_APP_ENV=production
ENV REACT_APP_ENV=$REACT_APP_ENV

# Copy the appropriate .env file
# This assumes .env.development and .env.production are in the frontend directory
RUN if [ "$REACT_APP_ENV" = "development" ]; then cp ./.env.development .env; else cp ./.env .env; fi


RUN npm run build

# Stage 2: Build the Spring Boot backend
FROM maven:3.9.0-eclipse-temurin-17 AS backend-build

WORKDIR /app

COPY pom.xml ./

# Download all dependencies (this step will cache dependencies if the `pom.xml` is not changed)
RUN mvn clean install -DskipTests

# Copy the rest of the backend source code
COPY src/ ./src/

# Copy the React build output to Spring Boot's static folder
COPY --from=frontend-build /app/build/ src/main/resources/static/

# Build the Spring Boot application
RUN mvn clean package -DskipTests

# Stage 3: Create a minimal image with only Java 17 runtime
FROM eclipse-temurin:17-jre-alpine

WORKDIR /app

# Copy the Spring Boot JAR from the previous build stage
COPY --from=backend-build /app/target/*.jar ScaleupApplication-0.0.1-SNAPSHOT.jar

# Expose the port Spring Boot will run on
EXPOSE 8080

# Run the Spring Boot app
ENTRYPOINT ["java", "-jar", "ScaleupApplication-0.0.1-SNAPSHOT.jar"]
