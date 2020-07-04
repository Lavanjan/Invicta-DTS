import { combineReducers } from "redux";
import ReducerDefect from '../reducers/ReducerDefect';
import ReducerProject from './../reducers/ReducerProjects';
import ReducerEmployee from './../reducers/ReducerEmployee';


const allReducer = combineReducers({
    ReducerDefect,
    ReducerProject,
    ReducerEmployee
});

export default allReducer; 