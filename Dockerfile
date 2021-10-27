FROM node:14.0.0-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . . 
EXPOSE 6050
CMD [ "npm","start" ]    
