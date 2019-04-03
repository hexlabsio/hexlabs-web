export const STICKY_HEADER_CHECK = '@@Landing/STICKY_HEADER_CHECK';
export const TOGGLE_NAVIGATION = '@@Landing/TOGGLE_NAVIGATION';

export type STICKY_HEADER_CHECK = { type: typeof STICKY_HEADER_CHECK; pageYOffset: number; };
export type TOGGLE_NAVIGATION = { type: typeof TOGGLE_NAVIGATION; };

export const stickyHeaderCheck: (pageYOffset: number) => STICKY_HEADER_CHECK = (pageYOffset: number) => {
  return { pageYOffset, type: STICKY_HEADER_CHECK };
};

export const toggleNavigation: () => TOGGLE_NAVIGATION = () => {
  return { type: TOGGLE_NAVIGATION };
};

export type ACTIONS = STICKY_HEADER_CHECK | TOGGLE_NAVIGATION;
