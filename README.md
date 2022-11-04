# Node Playground
My awesome first project to re-learn node

## env setup
To run the project you will need the following:
- node `18.12` or greater [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
- typescript `4.8.4`, run this command to install `npm install -g typescript`

## running the project
meh.. super easy just:
1. run `npm install`
2. run `npm run dev`
simple!

## running it in docker
1. run `docker build . -t node_playground`
2. run `docker run --rm -p 49160:8080 node_playground`
3. visit the url, it's probably something like [http://127.0.0.1:49160](http://127.0.0.1:49160)

