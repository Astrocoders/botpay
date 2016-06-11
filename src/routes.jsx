import { Route } from 'react-router';
import { ReactRouterSSR } from 'meteor/reactrouter:react-router-ssr';
import routes from 'BotPay/client/routes';

ReactRouterSSR.Run(
  <Route>
    {routes}
  </Route>
);
