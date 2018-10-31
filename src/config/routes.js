import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Layout from '../components/layout';
import List from '../components/list/list';
import Posts from '../components/posts/posts';
import Learning from '../components/learning/learning';
import About from '../components/about/about';

const routes = [
	{
		key: '主体',
		path: '/react-blog',
		component: Layout,
		routes: [
      {
				key: '文章',
        path: '/react-blog',
        component: List
      },
      {
        path: '/react-blog/posts/:id',
        component: Posts
			},
			{
        path: '/react-blog/learning',
        component: Learning
			},
			{
        path: '/react-blog/about',
        component: About
      }
    ]
	}
];

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export default () => (
	<Router>
	  <Switch>
			{routes.map((route, i) => (
        <RouteWithSubRoutes key={route.key} {...route} />
      ))}
			<Redirect from='/' to='/react-blog'/>
	  </Switch>
	</Router>
)


