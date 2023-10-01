# build stage
FROM node:lts-alpine as build-stage

ARG GID=1000
ARG UID=1000

# create user and group for application

WORKDIR /var/www
ARG APIGW_BASE_URL
ENV APIGW_BASE_URL="${APIGW_BASE_URL}"


COPY --chown=www-data:www-data ./app/package*.json /var/www/

RUN npm install
COPY . .
COPY --chown=www-data:www-data ./app .

RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
ARG APIGW_BASE_URL
ENV APIGW_BASE_URL="${APIGW_BASE_URL}"
COPY --from=build-stage ./var/www/dist /usr/share/nginx/html

COPY /docker/app/nginx/conf.d/default.conf.template /etc/nginx/conf.d/default.conf.template
RUN echo "`env | awk -F = '{printf \" $$%s\", $$1}'`\""
RUN envsubst "`env | awk -F = '{printf \" $$%s\", $$1}'`\"" < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf \
    && rm -f /etc/nginx/conf.d/*.template

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]