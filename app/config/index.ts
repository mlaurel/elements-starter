import { Config } from '@elements/application';

/**
 * Server only app config settings.
 */
export default Config.create((config: Config) => {
  // server
  config.set('server.port', 4000);
  config.set('server.ssl.on', !config.is('dev'));
  config.set('server.ssl.key', '/path/to/ssl.key');
  config.set('server.ssl.cert', '/path/to/ssl.crt');
  config.set('server.log.hideTimeStamps', false);

  // session
  config.set('session.secret', '69f9797e01b854bae12af96b46171a56b056b733');
  config.set('session.loggedInExpires', undefined);
  config.set('session.loggedOutExpires', undefined);

  // database
  config.set('db.database', '');
  config.set('db.host', 'localhost');
  config.set('db.user', process.env['USER']);
  config.set('db.password', '');

  // email smtp settings
  config.set('email.live', false);
  config.set('email.host', '');
  config.set('email.port', 465);
  config.set('email.user', '');
  config.set('email.password', '');
  config.set('email.from', '');
});
