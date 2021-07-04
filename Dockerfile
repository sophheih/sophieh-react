#node image with alpine tag
FROM node:12.2.0-alpine as build

RUN mkdir /app
WORKDIR /app
#copy the react app to the container
COPY . /app/

#prepare the container for building react
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent
RUN npm run build

#prepare nginx
FROM nginx:1.16.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d

#fire up nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

## docker build -t sophieh/react-app .
## to find the docker file in my current dir
## docker run -p 8080:443 sophieh/react-app