FROM node:20-alpine
WORKDIR /app

# Copy the rest of the application
COPY . .

# Expose the port (must match the one in package.json)
EXPOSE 3010

# Command to run the application
CMD ["npm", "run", "dev"]
