import { Router, IRequest } from '@elements/application';
import { getHelloWorld, getWelcomeMessage } from 'app/services';

let router = new Router();
export default router;

router.page('/', async function(this: IRequest) {
  this.title('Home');
  this.description('');
  this.render('app/pages/home', {
      title: await getWelcomeMessage(),
      subtitle: await getHelloWorld()
  });
});

router.page('/login', async function(this: IRequest) {
  this.title('Login');
  this.description('');
  this.render('app/pages/login');
});
