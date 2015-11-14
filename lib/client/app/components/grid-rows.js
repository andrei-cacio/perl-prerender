/* jshint esnext: true */

import React from 'react';
import ReactDOM from 'react-dom';
import Griddle from 'griddle-react';
import {fakeData} from '../fixtures/grid';

/* jshint ignore:start */
export const GriddleRows = React.createClass({
    componentWillMount() {
        this.setState({
            rows: this.props.params.rows
        })
    },

    render() {
        return <Griddle results={fakeData} resultsPerPage={this.state.rows}></Griddle>;
    }
})
/* jshint ignore:end */