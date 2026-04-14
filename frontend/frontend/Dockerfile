FROM node:22-alpine

WORKDIR /app

# Kopieer package files
COPY package.json package-lock.json* ./

# Installeer alles
RUN npm install

# Kopieer de rest
COPY . .

# Start de boel
CMD ["npm", "run", "dev"]