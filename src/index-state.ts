import { RouterState } from 'connected-react-router';
import { IndexState } from './features/Landing/index-state';

export interface RootState {
  router?: RouterState;
  landing: IndexState;
}
