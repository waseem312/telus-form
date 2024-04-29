import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import FormComponent from './components/FormComponent';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <FormComponent />
      </div>
    </Provider>
  );
};

export default App;
