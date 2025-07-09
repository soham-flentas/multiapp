# Use official Node 22 LTS image
FROM node:22-slim

# Set working directory
WORKDIR /app

# Copy package files first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm ci --omit=dev

# Copy rest of the source code
COPY . .

# Set environment variables (optional)
ENV NODE_ENV=production

# Expose app port
EXPOSE 9002

# Run the app
CMD ["node", "soham.js"]
