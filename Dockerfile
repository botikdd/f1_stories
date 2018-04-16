# Start out with the same node image
FROM node:8.9.1-alpine

RUN mkdir /f1stories

# Copy all local files to VM
# Hint: add a .dockerignore file to ignore certain files on COPY
COPY . /f1stories

# Set the working directory
WORKDIR /f1stories

# Retrieve all dependencies
RUN npm install
RUN npm install md5

# Expose port 7777
ENV PORT=7777
EXPOSE 7777

# What gets called when VM launches
CMD node javascript/server.js
