# Josef

Josef is an in-browser educational programming language for beginners.
You are guiding a robot through a grid and learn the basics of programming.

Inspired by (Karel)[https://en.wikipedia.org/wiki/Karel_(programming_language)]
and its many descendants. 
[Josef is Karel's brother](https://en.wikipedia.org/wiki/Brothers_%C4%8Capek)

## Motivation

There are many educational programming languages and environments
but most of them don't skip two basic hurdles that arise
when teaching programming to kids:

a) environment
  - It is hard to setup the programming environment at home.

b) language barrier 
  - You have to speak English.

While those things are often overcome when you kids are already
motivated, it can discourage them before they even try.

Josef is therefor:

 - web application - anyone with a browser can immediately start to program
 - localized (only Czech language for now)

## Implementation

Josef is a disguised __Ruby__ programming language with localized keywords and 
DSL build to control the robot. (Opal)[https://github.com/opal/opal] - Ruby
in the browser - is used so that it can live happily on the web.

- Ruby 
- Opal
- Ruby on Rails
- React

## Development

To run it locally (tested on Ubuntu 16.04):
   
    cd web
    bundle install

    # run local server
    rails server

    # in other terminal
    bin/webpack-dev-server

## Progress

Josef is currently a working proof of concept but many more features 
are yet to come. You are welcome to participate on the project - fork
it and implement some features like:

- Game: solve some puzzle inside the maze and progress in levels
- 


## The Brothers

- https://en.wikipedia.org/wiki/Josef_%C4%8Capek
- https://en.wikipedia.org/wiki/Karel_%C4%8Capek

