# Use an older Node.js version compatible with your project
FROM node:8

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vue.js application
RUN npm run build

# Use a simple HTTP server to serve the static files
RUN npm install -g http-server

# Expose the port your app runs on
EXPOSE 8080

# Command to serve the built files
CMD [ "http-server", "dist" ]