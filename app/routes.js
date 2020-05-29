import App from './containers/App';
import Home from './pages/Home';
import About from './pages/About';

const routes = [{
  component: App,
  routes: [{
    path: '/search',
    component: Home,
  }, {
    path: '/user',
    component: About,
  }, {
    path: '/',
    component: Home,
  }],
}];

export default routes;
