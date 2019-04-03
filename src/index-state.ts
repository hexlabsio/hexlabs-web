import { RouterState } from 'connected-react-router';
import { default as initialLandingState, IndexState } from './features/Landing/index-state';

export interface RootState {
  router?: RouterState;
  landing: IndexState;
}

const initialRootState: RootState = {
  landing: initialLandingState,
};

export default initialRootState;
