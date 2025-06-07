FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Copy prisma schema and generate client
COPY prisma ./prisma/
RUN npx prisma generate

# Install dependencies
RUN npm install --frozen-lockfile

# Copy the rest of the application
COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
