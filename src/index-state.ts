import { RouterState } from 'connected-react-router';
import { IndexState as LandingState } from './features/Landing/index-state';
import { IndexState as ContactState } from './features/Contact/index-state';

export interface RootState {
  router?: RouterState;
  landing: LandingState;
  contact: ContactState;
}
