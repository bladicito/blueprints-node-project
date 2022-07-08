FROM node:16.15.1
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

## we install gulp used for the build
RUN npm install --global gulp-cli

COPY package.json .
## we install the dependencies
RUN npm install

## we copy all the files and ignore the ones on the dockerignore file
COPY . .

# ## update browser list
# RUN npx browserslist@latest --update-db

## we run the build task
RUN npm run build

EXPOSE 8081
CMD npm run start
