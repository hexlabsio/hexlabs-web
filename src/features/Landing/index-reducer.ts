import {Reducer} from 'redux';
import * as Actions from './index-actions';
import {default as initialState, IndexState} from "./index-state";

const indexReducer: Reducer<IndexState, Actions.ACTIONS> = (state = initialState, action: Actions.ACTIONS) => {
    switch (action.type) {
        case Actions.STICKY_HEADER_CHECK:
            return {...state,  showStickyHeader: action.pageYOffset > 0};
        case Actions.TOGGLE_NAVIGATION:
            return {...state, navigationOpen: !state.navigationOpen};
        default:
            return state;
    }
};

export default indexReducer;
