import {
  Application,
  IRequest,
  NotFoundError,
} from '@elements/application';

// create the elements application
let app = new Application();
export default app;

app.routes('/', require('app/routes'));

// server only code goes in ./server.ts
app.server(require('./server'));

// events
app.on('notFoundError', async function(this: IRequest, error: NotFoundError) {
  this.title('Not Found');
  this.render('app/pages/errors/not-found', {
    error: error
  });
});

app.on('unhandledError', async function(this: IRequest, error: any) {
  this.title('Unhandled Error');
  this.render('app/pages/errors/unhandled', {
    error: error
  });
});
