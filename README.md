# github-resume

> One-click github resume generator

[![Build Status](https://travis-ci.com/stavros-liaskos/github-resume.svg?branch=master)](https://travis-ci.org/stavros-liaskos/github-resume) [![Greenkeeper badge](https://badges.greenkeeper.io/stavros-liaskos/stavrosliaskos.svg)](https://greenkeeper.io/) 

## Build Setup

``` bash
# install dependencies
$ yarn

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project (used at production server)
$ yarn generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## Favicon
I use [cli-real-favicon](https://github.com/RealFaviconGenerator/cli-real-favicon) for generating icons.   
To generate new favicons run:  
```shell
yarn favicon-gen
``` 
You can visit the [website](https://realfavicongenerator.net) for info AND for testing the favicons   
[Source](https://realfavicongenerator.net)

## Now
Deploy `master` with now to https://github-resume.now.sh/:
```shell
yarn deploy
```

## Useful Links
- [Nuxt layouts](https://www.youtube.com/watch?v=YOKnSTp7d38)  
- [Typed.js](https://www.npmjs.com/package/vue-typer#getting-started)


## Pages
/   
/about   
/cv   
/contact   
/privacy-policy   
/404   

## Ranking
Google Audits:
> Mobile
> - 88 Performance 
> - 64 PWA          
> - 100 Accessibility
> - 100 Best Practices
> - 82 SEO

> Desktop
> - 100 Performance 
> - 45 PWA          
> - 100 Accessibility
> - 100 Best Practices
> - 91 SEO

[page speed insights](https://developers.google.com/speed/pagespeed/insights/) 95 mobile / 100 desktop

[sitechecker](https://sitechecker.pro/) : 58%  

[structured data](https://search.google.com/structured-data/testing-tool/):  0/0/0
 
[structured data linter](http://linter.structured-data.org/): 0 

[mobile friendly test](https://search.google.com/test/mobile-friendly): passed  

## CLI Checker
Using [Webhint](https://webhint.io/) :

```
yarn hint
```

## License

The code is available under the [MIT license](LICENSE).
