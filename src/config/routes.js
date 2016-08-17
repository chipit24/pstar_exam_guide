import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';

/* All our layouts & components */
import MainLayout from '../components/MainLayout'
import QuizSelect from '../components/QuizSelect'
import Quiz from '../components/Quiz'

const routes = (
  <Route path="/" component={MainLayout}>
    <IndexRoute component={QuizSelect} />
    <Route path=":quizIndex" component={Quiz} />
  </Route>
);

// <Route path="signup" component={Signup} />
export default routes;