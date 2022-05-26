FROM node:latest

# Set working directory
WORKDIR /app

# Copy package.json file to install dependencies
COPY package*.json /app/

# Install the packages
RUN npm install

# Copy the project
COPY . /app/

# Exposed port for the express server
EXPOSE 5000

# Server start command
CMD ["npm", "start"]
