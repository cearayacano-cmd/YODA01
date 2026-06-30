FROM node:20-alpine
WORKDIR /app

COPY . .
EXPOSE 3010

# Command to run the application
CMD ["npm", "run", "dev"]
