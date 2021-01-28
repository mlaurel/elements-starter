import { Router, IRequest } from '@elements/application';

let router = new Router();
export default router;

router.page('/', async function(this: IRequest) {
  this.render('app/pages/home');
});

router.page('/login', async function(this: IRequest) {
  this.render('app/pages/login');
});
