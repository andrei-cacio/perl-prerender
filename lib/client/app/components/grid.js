/* jshint esnext: true */

import React from 'react';
import ReactDOM from 'react-dom';
import Griddle from 'griddle-react';
import {fakeData} from '../fixtures/grid';

/* jshint ignore:start */
export const GriddleDefault = React.createClass({
    render() {
        return (
            <div id="table-area">
                <Griddle results={fakeData} resultsPerPage={18}></Griddle>
            </div>
        );
    }
});

/* jshint ignore:end */
