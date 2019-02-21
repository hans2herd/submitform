import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home.js'

import Form from './component/Form'

const Routing = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/' component={Form} />
        </Switch>
    </Router>
)

export default Routing 