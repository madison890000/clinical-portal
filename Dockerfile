FROM node:14.21.1 as builder
LABEL version="1.0"
LABEL description="This is the base docker image for the clinical portal"
LABEL maintainer = ["madison.sss.ma@gmail.com"]


COPY package*.json ./

RUN npm install --production

RUN npm build

FROM nginx
COPY --from=builder /build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.confdoce

COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 3000

# Run nginx  foreground
CMD ["nginx", "-g", "daemon off;"]
