import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Aidensuccess from './views/aidensuccess'
import WAIT from './views/wait'
import FAQ from './views/faq'
import Type2diabetessuccess from './views/type2diabetessuccess'
import Page from './views/page'
import Home from './views/home'
import Vijaysuccess from './views/vijaysuccess'
import SuccessStories from './views/success-stories'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Aidensuccess} exact path="/aidensuccess" />
        <Route component={WAIT} exact path="/wait" />
        <Route component={FAQ} exact path="/faq" />
        <Route
          component={Type2diabetessuccess}
          exact
          path="/type2diabetessuccess"
        />
        <Route component={Page} path="**" />
        <Route component={Home} exact path="/" />
        <Route component={Vijaysuccess} exact path="/vijaysuccess" />
        <Route component={SuccessStories} exact path="/success-stories" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
