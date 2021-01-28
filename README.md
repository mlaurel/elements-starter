# Elements Starter
This project helps you get started with an Elements application quickly.

It integrates with tailwindcss for creating beautiful pages. It shows examples
of creating pages, using shared components, calling a service rpc function and
creating restful api routes. It has pages for not found and unhandled errors.

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
