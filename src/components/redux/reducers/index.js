import { combineReducers } from "redux";
import ReducerDefect from '../reducers/ReducerDefect';
import ReducerProject from './../reducers/ReducerProjects';
import DefectUpdate from './../reducers/ReducerDefectsUpdate';


const allReducer = combineReducers({
    ReducerDefect,
    ReducerProject,
    defects_task: DefectUpdate
});

export default allReducer; 