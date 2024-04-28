# Build and Test
FROM node:21.4.0-alpine3.18 as test
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY src ./src
COPY public ./public
COPY ./next.config.mjs ./package.json ./tsconfig.json ./package-lock.json ./tailwind.config.ts ./postcss.config.js ./

ARG EMAIL_USERNAME
ENV EMAIL_USERNAME=$EMAIL_USERNAME
ARG EMAIL_PASSWORD
ENV EMAIL_PASSWORD=$EMAIL_PASSWORD

RUN npm run build
CMD npm run lint

# Production
FROM node:21.4.0-alpine3.18 as prod
ENV NODE_ENV=production

WORKDIR /app
COPY ./package.json ./package-lock.json ./
COPY --from=test /app/node_modules ./node_modules
RUN npm install --production
COPY ./public ./public
COPY --from=test /app/.next ./.next
USER 1000
CMD npm run start
