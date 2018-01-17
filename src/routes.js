import NotFound, { path as notFoundPath } from 'pages/NotFound';
import Home from 'pages/Home';
import App from 'frames/App';

export default () => ({
  component: App,
  childRoutes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: notFoundPath,
      component: NotFound,
      status: 404,
      withoutFrame: true,
    },
  ],
});
