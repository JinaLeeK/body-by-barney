FROM node:slim

# A bunch of `LABEL` fields for GitHub to index
LABEL "com.github.actions.name"="Body by Barney"
LABEL "com.github.actions.description"="Auto-populate empty PR descriptions."
LABEL "com.github.actions.icon"="edit"
LABEL "com.github.actions.color"="purple"
LABEL "repository"="http://github.com/jinaleek/body-by-barney"
LABEL "homepage"="http://github.com/jinaleek/body-by-barney"
LABEL "maintainer"="Jina Lee (https://github.com/jinaleek)"

# install
COPY package*.json ./
RUN npm ci --only=production

# start
COPY . .
ENTRYPOINT ["node", "/index.js"]
