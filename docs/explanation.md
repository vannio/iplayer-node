# Why did you do it like that?!

Some _quick_ notes (because today is my birthday :birthday:) as to why certain decisions were made.

### Node.js / Express (web framework)
  - Quick and easy to set up a web-application
  - Easy to add useful middleware and routes
  - Only need to write code in one language for both client-side and server-side

### Nunjucks (templating engine) / `*.njk`
  - Well maintained and documented
  - Has a snazzy name
  - Nice-to-read templates, unlike `ejs` templates for example
  - Templates can inherit from each other for DRY-er code

### SCSS (CSS pre-processor)
  - Allows nesting of selectors for cleaner, encapsulated CSS
  - Can be split into partials for further encapsulation
  - Allows use of variables for quick changes to multiple files
  - Looks most similar to standard CSS

### API calls on server side
  - Mostly for accessibility reasons. Not all clients have javascript enabled for client-side API calls
  - No need to have templates on both client-side and server-side
  - Easier for search engines to crawl

### Folder structure / Naming convention
  - Loosely follows an MVC pattern to ensure clear separation of concerns
  - Sass and template partials are prefixed with an underscore to differentiate between partials (to be imported somewhere) and higher-level files.
