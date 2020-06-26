import React, { Component } from 'react'
import { Route } from 'react-router-dom';

import ViewDefectDetails from './../viewDefectDetails/ViewDefectDetails';

export class body extends Component {
    render() {
        return (
            <div>
                <ViewDefectDetails />
            </div>
        )
    }
}

export default body
