FROM node:18-alpine

# Copy all
COPY ./ ./

# Install git, make
RUN apk add git make

# Run pre-install script
RUN make pre-install

# Install and build
RUN yarn install --frozen-lockfile
RUN yarn build

# Expose port
EXPOSE 3000

# Start the Node.js server
ENV NODE_ENV=production
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["yarn", "start"]