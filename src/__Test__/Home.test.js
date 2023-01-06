import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Home from '../Components/Home/Home';
import store from '../Redux/ConfigureStore';

describe('should render the home page', () => {
  test('check the home page', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Home />
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});
