import React, { Component } from 'react'
import { Route } from 'react-router-dom';

import ViewDefectDetails from './../viewDefectDetails/ViewDefectDetails';
import AddDefectDetails from './../addDefectDetails/AddDefectDetails';

export class body extends Component {
    render() {
        return (
            <div>
                {/* <ViewDefectDetails /> */}
                <Route exact path = "/" component = { ViewDefectDetails } />
                <Route path = "/add-defect" component = { AddDefectDetails } />
            </div>
        )
    }
}

export default body
