import React, { Component } from 'react'
import { Route } from 'react-router-dom';

import ViewDefectDetails from './../viewDefectDetails/ViewDefectDetails';
import AddDefectDetails from './../addDefectDetails/AddDefectDetails';

export class body extends Component {
    render() {
        return (
            <div>
                {/* <ViewDefectDetails /> */}
                <AddDefectDetails />
            </div>
        )
    }
}

export default body
