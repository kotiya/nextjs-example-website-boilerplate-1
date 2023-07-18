import nextRoutes from 'next-routes';

const routes = nextRoutes();

routes.add('blog', '/blog/:slug?');
routes.add('generic', '/:pagename');

export default routes;
