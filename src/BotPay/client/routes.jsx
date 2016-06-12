import { Route } from 'react-router';
import MainApp from './components/MainApp';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';

export default (
  <Route component="MainApp">
    <Route path="/" component={Landing} />
    <Route path="/dashboard" component={Dashboard} />
  </Route>
);
