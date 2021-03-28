import Home from './Home';
import HOC from './HOC';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
    breadcrumbName: 'Home'
  },
  {
    path: '/hoc',
    component: HOC,
    exact: true,
    breadcrumbName: 'HOC'
  }
];

export default routes;