export const ENABLE_STICKY_HEADER = 'SHOW_STICKY_HEADER';
export const DISABLE_STICKY_HEADER = 'HIDE_STICKY_HEADER';
export const TOGGLE_NAVIGATION = 'TOGGLE_NAVIGATION';

export function deriveStickyHeader(pageYOffset) {
    return (dispatch, getState) =>
        new Promise(resolve => {
            if (!getState().landing.stickyHeader && pageYOffset > 0)
                return resolve(dispatch({ type: ENABLE_STICKY_HEADER }));
            if (getState().landing.stickyHeader && pageYOffset === 0)
                return resolve(dispatch({ type: DISABLE_STICKY_HEADER }));
            return resolve();
        });
}

export function toggleNavigation() {
    return dispatch =>
        new Promise(resolve => {
            return resolve(dispatch({ type: TOGGLE_NAVIGATION }));
        });
}
