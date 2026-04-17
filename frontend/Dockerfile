# Use Node 18 as base image
FROM node:18-slim

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend code
COPY . .

# Expose the port
EXPOSE 3000

# Command to run the application in development mode
CMD ["npm", "run", "dev"]
