import React from 'react';
import { render, waitForElement } from '@testing-library/react';

import App from './App';
import env from './libs/env';

jest.mock('./libs/env');

const config = {
  REACT_APP_MARKER_URL: 'https://test.com'
};
env.get.mockImplementation((key) => config[key]);

const markers = ['M1', 'M2', 'M3'];
jest.spyOn(global, 'fetch').mockResolvedValue({ json: jest.fn().mockResolvedValue(markers) });

jest.mock('./components/Map', () => () =>
  (
    <div data-testid="test-map">MAP</div>
  )
);
let wrapper;

test('renders the app', async () => {
  wrapper = render(<App />);
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith('https://test.com');
  await waitForElement(() => wrapper.getByTestId('test-map'));
  wrapper.debug();
  expect(wrapper.getByText('MAP')).toBeTruthy();
});
