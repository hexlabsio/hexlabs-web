export interface IndexState {
  name: string;
  email: string;
  telephone: string;
  message: string;
}

const initialState: IndexState = {
  name: '',
  email: '',
  telephone: '',
  message: '',
};

export default initialState;
