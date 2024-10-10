
# Use an official Node.js runtime as a parent image
FROM node:14

# Set working directory
WORKDIR /usr/src/app

# Copy the app.js file to the container
COPY app.js .

# Command to run the Node.js app
CMD ["node", "app.js"]