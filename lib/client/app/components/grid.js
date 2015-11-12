/* jshint esnext: true */

import React from 'react';
import ReactDOM from 'react-dom';
import Griddle from 'griddle-react';
import {fakeData} from '../fixtures/grid';

/* jshint ignore:start */
ReactDOM.render(<Griddle results={fakeData} resultsPerPage={20}></Griddle>, document.getElementById('griddle'));
/* jshint ignore:end */