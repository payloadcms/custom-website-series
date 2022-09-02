# Payload Custom Website Series

In this series, we'll show you how to build a professionally designed, custom website from scratch.

## Installation

Here is a step-by-step guide for how to use this repo:

1. Clone this repo using `git clone --depth=1 https://github.com/payloadcms/custom-website-series.git <YOUR_PROJECT_NAME>`
3. Run `cp .env.example .env` to create an `.env` file
4. Fill out your `.env` file with values that describe your environment
5. Run `yarn` or `npm install`
6. Run `yarn dev` to open a development environment
7. *optional* Run `yarn seed` to add sample pages and a Media upload
8. Go to [http://localhost:3000/admin](http://localhost:3000/admin) to create your first user

## Building and serving in Production

This repo contains everything you need to both build your project for production purposes as well as serve it after it's been built.

- To build, run `yarn build` or `npm run build`.
- To serve, run `yarn serve` or `npm run serve`.
