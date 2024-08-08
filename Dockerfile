FROM node:18-alpine

# Set working directory
COPY ./ ./

# Install and build
COPY package*.json ./
RUN npm ci
RUN npm run build

# Expose port
EXPOSE 3000

# Start the Node.js server
ENV NODE_ENV=production
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["npm", "start"]
