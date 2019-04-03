export interface IndexState {
  navigationOpen: boolean;
  showStickyHeader: boolean;
}

const initialState: IndexState = {
  navigationOpen: false,
  showStickyHeader: false,
};

export default initialState;
