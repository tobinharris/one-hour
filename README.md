For project building it`s used https://github.com/yeoman/generator-gulp-webapp.

## Getting Started

- Install dependencies: `npm install --global gulp bower`
- Run `npm install; bower install` to install packages
- Run `gulp serve` to run project locally. This will fire up a local web server, open http://localhost:9000 in your default browser and watch files for changes, reloading the browser automatically via LiveReload.
- Run `bower install --save <package>` to install frontend dependencies
- Run `gulp` to build your webapp for production
- Run `gulp serve:dist` to preview the production build

## Structure of the project

  - app: source code. It's used SCSS preprocessor and Bootstrap3 for stylesheets, vanilla Java Script and HTML for everything else.
  - dist: production build
  
## Google Analytics

  To add Google Analytics uncomment block in app/index.html file and change UA-XXXXXX-X to be your site's ID.


## Hosting project on GitHub

To host project please follow the instruction https://pages.github.com/
Just need to clone this project to your repository and create gh-pages branch. Fire up a browser and go to http://username.github.io/repository.
