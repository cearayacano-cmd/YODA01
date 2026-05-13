# Use Node.js base image
FROM node:20-slim

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port (must match the one in package.json)
EXPOSE 3010

# Command to run the application
CMD ["npm", "run", "dev"]
