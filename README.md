# Josef

Josef is a [Ruby]-based educational programming language for beginners.

You are guiding a robot through a grid world, learning the programming 
basics along the way. It runs inside a browser thanks to [Opal].
Inspired by [Karel] and its many descendants. [Josef is Karel's brother].

## Example in Czech

```
prikaz robot.vpred
  pokud robot.vidi_zed?
    robot.vlevo_vbok
    robot.krok
    robot.vpravo_vbok
    2.krat { robot.krok }
    robot.vpravo_vbok
    robot.krok
    robot.vlevo_vbok
  jinak
    3.krat { robot.krok }
  konec
konec

```

## Implementation

Josef is [Ruby] whose keywords are localized and the
DSL to control the robot. [Opal] makes it run in 
the browser.

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

## Progress & TODO

Josef is currently a working PROOF OF CONCEPT but many more features 
are yet to come. You are welcome to participate on the project - fork
it and implement some features like:

- Story mode: solve puzzles and progress in levels
- User management
- Saving projects and world
- Graphics (based on Josef's Capek pictures)



## Motivation

There are many educational programming languages and environments
but most of them don't skip two basic hurdles that arise
when teaching programming to kids:

- __Environment__ - It is hard to setup the programming environment at home.
- __Language__ - You have to speak English to understand the programming languages.

While those things are often overcome when you kids are already
motivated, it can discourage them before they even try. Josef is therefor:

 - a web application - anyone with a browser can immediately start to program
 - localized (only Czech language for now)

## The Čapek Brothers

Not really related, yet somehow it is:

- https://en.wikipedia.org/wiki/Josef_%C4%8Capek
- https://en.wikipedia.org/wiki/Karel_%C4%8Capek

[Opal]: https://github.com/opal/opal
[Ruby]:  https://www.ruby-lang.org/
[Karel]: https://en.wikipedia.org/wiki/Karel_(programming_language)
[Josef is Karel's brother]: https://en.wikipedia.org/wiki/Brothers_%C4%8Capek)(https://en.wikipedia.org/wiki/Brothers_%C4%8Capek
