FROM node:20-alpine AS builder

WORKDIR /app/smakone-website
COPY smakone-website/package*.json ./

RUN npm ci --legacy-peer-deps || npm install --legacy-peer-deps
COPY smakone-website/ ./

ENV NODE_ENV=production
ENV CI=false
RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf

# App stage
COPY --from=builder /app/smakone-website/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
