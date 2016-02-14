# perl-prerender
A simple implementation of the "Godfather" approach

## Setup

to powerup the solution simply run

```bash
$ vagrant up && vagrant ssh
```

## Server-side`
### Start the web server

```bash
$ cd lib/server
$ perl server.pl
# >> Dancer2 v0.163000 server 1718 listening on http://0.0.0.0:3000
```

Now you should be able to access [http://localhost:9001](http://localhost:9001)
  
### Start the PhantomJS server

```bash
cd lib/server
perl prerender.pl
# >> Dancer2 v0.163000 server 1722 listening on http://0.0.0.0:3001
```

## Client-side app
The client-side app is build with ReactJS, to build or watch your changes simply run

```bash
$ cd lib/client
$ webpack --watch
```

## Grabbing the prerendered content

```bash
$ curl -A "googlebot" http://localhost:9001
```
