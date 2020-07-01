import { combineReducers } from "redux";
import ReducerDefect from '../reducers/ReducerDefect';
import ReducerProject from './../reducers/ReducerProjects';


const allReducer = combineReducers({
    ReducerDefect,
    ReducerProject
});

export default allReducer; 