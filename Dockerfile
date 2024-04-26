# Build and Test
FROM node:21.4.0-alpine3.18 as test
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY src ./src
COPY public ./public
COPY ./next-env.d.ts ./next.config.js ./package.json ./tsconfig.json ./yarn.lock ./

ARG EMAIL_USERNAME
ENV EMAIL_USERNAME=$EMAIL_USERNAME
ARG EMAIL_PASSWORD
ENV EMAIL_PASSWORD=$EMAIL_PASSWORD

RUN yarn build
CMD yarn lint

# Production
FROM node:21.4.0-alpine3.18 as prod
ENV NODE_ENV=production

WORKDIR /app
COPY ./package.json ./yarn.lock ./
COPY --from=test /app/node_modules ./node_modules
RUN yarn install --ignore-scripts --prefer-offline
COPY ./public ./public
COPY --from=test /app/.next ./.next
USER 1000
CMD yarn start
