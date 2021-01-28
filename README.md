# Elements Starter
This project helps you get started building an Elements app quickly.

It has a couple of common boilerplate items and demonstrates a few ideas in
elements apps:

  * Routes for the home and login urls.
  * React pages for home, login and errors.
  * Reusable components.
  * Reusable css styles.
  * Handling for error events like data or urls not found, unauthorized, or
    unhandled errors.
  * Tailwindcss integration.
  * Server and browser app config settings.
  * Restful api routes.
  * Calling service functions over the wire from routes.

## Usage
First create an empty elements app.

```bash
elements create app demo
cd demo
```

Then copy the contents of this github repo into your project using the curl and
tar programs. Make sure you're in your new project's directory!

```bash
curl -L https://github.com/elementscode/starter/tarball/master | tar --strip-components=1 -xf -
```

Finally, install packages and start the app.

```bash
elements install
elements start
```

## Discussion
If you'd like to propose changes or discuss anything, open a new
[discussion](https://github.com/elementscode/starter/discussions)!
