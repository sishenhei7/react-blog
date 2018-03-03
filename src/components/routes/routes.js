import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import List from '../list/list';
import Posts from '../posts/posts';
import Learning from '../learning/learning';
import About from '../about/about';

const parts = [{
  key: '文章',
  path: '/react-blog',
  component: List
}, {
    key: '文章详情',
    path: '/react-blog/posts/:id',
    component: Posts
}, {
  key: '作品',
  path: '/react-blog/learning',
  component: Learning
}, {
  key: '关于我',
  path: '/react-blog/about',
  component: About
}];

class Routes extends Component {
  render() {
    return (
        <div>
          {parts.map(({ key, path, component }) => (
            <Route exact key={key} path={path} component={component}/>
            ))}
        </div>
    );
  }
}

export default Routes;
