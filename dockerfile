FROM node:20-bullseye AS builder
WORKDIR /app

ARG STRAPI_URL
ARG STRAPI_MEDIA_URL
ARG STRAPI_TOKEN

ENV STRAPI_URL=$STRAPI_URL
ENV STRAPI_MEDIA_URL=$STRAPI_MEDIA_URL
ENV STRAPI_TOKEN=$STRAPI_TOKEN
ENV NODE_ENV=production

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:20-bullseye AS runner
WORKDIR /app

ARG STRAPI_TOKEN
ENV STRAPI_TOKEN=$STRAPI_TOKEN

ENV HOST=0.0.0.0
ENV PORT=4321
ENV NODE_ENV=production

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 4321

CMD ["node", "./dist/server/entry.mjs"]