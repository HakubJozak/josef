# Josef

Josef is an educational programming language for beginners based on [Ruby].
You are guiding a robot through a grid world, learning the basics of
programming as you go. It runs inside a browser thanks to [Opal].

Inspired by [Karel] and its many descendants. [Josef is Karel's brother.](https://en.wikipedia.org/wiki/Brothers_%C4%8Capek)

## Motivation

There are many educational programming languages and environments
but most of them don't skip two basic hurdles that arise
when teaching programming to kids:

- __Environment__ - It is hard to setup the programming environment at home.

- __Language__ - You have to speak English to understand the programming languages.

While those things are often overcome when you kids are already
motivated, it can discourage them before they even try.

Josef is therefor:

 - web application - anyone with a browser can immediately start to program
 - localized (only Czech language for now)

## Implementation

Josef is a disguised [Ruby] with localized keywords and 
DSL build to control the robot. [Opal] - Ruby
in the browser - is used so that it can live happily on the web.

## Development

To start developing locally (tested on Ubuntu 16.04):
   
    cd web
    bundle install

    # run local server
    rails server

    # in other terminal
    bin/webpack-dev-server
    
Main used technologies are:

- Opal
- Ruby on Rails
- React
- Bootstrap

## Progress

Josef is currently a working proof of concept but many more features 
are yet to come. You are welcome to participate on the project - fork
it and implement some features like:

- Game: solve some puzzle inside the maze and progress in levels
- User management
- Saving 


## The Čapek Brothers

Not really related, yet somehow it is:

- https://en.wikipedia.org/wiki/Josef_%C4%8Capek
- https://en.wikipedia.org/wiki/Karel_%C4%8Capek

[Opal]: https://github.com/opal/opal
[Karel]: https://en.wikipedia.org/wiki/Karel_(programming_language)
[Ruby]:  https://www.ruby-lang.org/
