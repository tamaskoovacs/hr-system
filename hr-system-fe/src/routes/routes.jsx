import Charts from 'views/Charts/Charts';
import HrSystemBoard from 'views/HrSystemBoard/HrSystemBoard';

const routes = [
  {
    path: "/",
    component: <HrSystemBoard/>,
  },
  {
    path: "/charts",
    component: <Charts/>,
  }
];

export default routes;
