import {
    ENABLE_STICKY_HEADER,
    DISABLE_STICKY_HEADER,
    TOGGLE_NAVIGATION,
} from './LandingActions';

export const initialState = {
    navigationOpen: false,
    stickyHeader: false,
};

export function landingReducer(state = initialState, action) {
    switch (action.type) {
        case ENABLE_STICKY_HEADER:
            return Object.assign({}, state, {
                stickyHeader: true,
            });
        case DISABLE_STICKY_HEADER:
            return Object.assign({}, state, {
                stickyHeader: false,
            });
        case TOGGLE_NAVIGATION:
            return Object.assign({}, state, {
                navigationOpen: !state.navigationOpen,
            });
        default:
            return state;
    }
}
