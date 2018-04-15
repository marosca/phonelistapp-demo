##STEP 1: Build app
FROM node:8 as builder

COPY phonelistapp /phonelistapp

WORKDIR /phonelistapp

RUN npm install
RUN $(npm bin)/ng build

## STEP2: Run nginx to serve app
FROM nginx

COPY --from=builder /phonelistapp/dist/* /usr/share/nginx/html/

EXPOSE 80
