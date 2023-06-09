# main file where docker run flow mentioned

# base image is node
FROM node:16.14.2
# directory at which code will copied to
WORKDIR /opt/app
# copy package json and yarn before the code
COPY package*.json ./
COPY yarn*.lock ./


# FOLLOWING CODE INSTALL ONLY DEV DEPENDICIES ON local, INSTALLS ONLY dependencied on production, no dev dependecies,
# BUT OUR STRATEGY NEEDS TO BUILD ON PRODUCTION, HENCE DEV DEPENDECIES REQUIRED...
# HENCE COMMENTING THE CODE 

# arg either come from command line or docker compose
ARG NODE_ENV
# conditionals
RUN if [$NODE_ENV == "development" ]; then \
      yarn install --frozen-lockfile; \
      else \
      yarn install --frozen-lockfile --production; \
      fi

# copy all from working dir to /opt/app except whatever mentioned in the .docekrignore
COPY . ./

# CMD npm start
CMD node -r dotenv/config build/launcher-index.js