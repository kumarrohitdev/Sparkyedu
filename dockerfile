FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose port 3000 (assuming your application runs on port 3000)
EXPOSE 3000

# Command to run the application
CMD [ "npm", "run", "dev" ]
