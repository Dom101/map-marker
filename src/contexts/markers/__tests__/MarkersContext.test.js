import React, { useContext } from 'react';
import { render, waitForElement } from '@testing-library/react';

import MarkersContext from '../Context';
import MarkersProvider from '../Provider';
import env from '../../../libs/env';

jest.mock('../../../libs/env');

const config = {
  REACT_APP_MARKER_URL: 'https://test.com'
};
env.get.mockImplementation((key) => config[key]);

function TestComponent() {
  const { markers } = useContext(MarkersContext);

  function displayMarkers() {
    return markers.map((marker, i) => {
      return (
        <span
          key={i}
        >
          {marker}
        </span>
      )
    }
    );
  }

  return (
    <div data-testid="test-component">
      {displayMarkers()}
    </div>
  );
}

afterEach(() => {
  jest.clearAllMocks();
});

test('Should not render any test ID when no markers are returned', async () => {
  const markers = [];
  jest.spyOn(global, 'fetch').mockResolvedValue({ json: jest.fn().mockResolvedValue(markers) })

  const wrapper = render(
    <MarkersProvider>
      <TestComponent />
    </MarkersProvider>,
  );

  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith('https://test.com');
  expect(wrapper.getByTestId('test-component')).toBeTruthy();
  expect(wrapper.queryByText('M1')).toBeNull();
});

test('Should display all the components returned by fetch', async () => {
  const markers = ['M1', 'M2', 'M3'];
  jest.spyOn(global, 'fetch').mockResolvedValue({ json: jest.fn().mockResolvedValue(markers) });

  const wrapper = render(
    <MarkersProvider>
      <TestComponent />
    </MarkersProvider>,
  );

  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith('https://test.com');
  expect(wrapper.getByTestId('test-component')).toBeTruthy();
  await waitForElement(() => wrapper.getByText('M1'));

  expect(wrapper.getByText('M1')).toBeTruthy();
  expect(wrapper.getByText('M2')).toBeTruthy();
  expect(wrapper.getByText('M3')).toBeTruthy();
});

test('Should return an empty object when fetch errors', async () => {
  jest.spyOn(global, 'fetch').mockRejectedValue('BAD REQUEST');

  const wrapper = render(
    <MarkersProvider>
      <TestComponent />
    </MarkersProvider>,
  );

  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith('https://test.com');
  expect(wrapper.getByTestId('test-component')).toBeTruthy();
  expect(wrapper.queryByText('M1')).toBeNull();
});