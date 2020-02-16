import React from 'react';
import { render } from '@testing-library/react';
import Map from '../Map';

/* 
Unable to test more using the real components as really is loding from google api
Need to mock the google maps
*/
test('renders the loading component', async () => {
  const wrapper = render(<Map />);
  expect(wrapper.getByText('Loading...')).toBeTruthy();
});
