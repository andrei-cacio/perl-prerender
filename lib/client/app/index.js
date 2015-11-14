/* jshint esnext: true */

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';

import {GriddleDefault} from './components/grid';
import {GriddleRows} from './components/grid-rows';
import { createHistory, useBasename } from "history";

const browserHistory = useBasename(createHistory)({
    basename: "/app_name"
});

/* jshint ignore:start */
ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={GriddleDefault}/>
        <Route path="/:rows" component={GriddleRows}/>
    </Router>
), document.getElementById('griddle'));
/* jshint ignore:end */
