import React, { useMemo, useState, useEffect, useCallback } from 'react';
import { node } from 'prop-types';

import MarkersContext from './Context';
import env from '../../libs/env';

export default function MarkersProvider({ children }) {
  const [markers, setMarkers] = useState([]);

  const context = useMemo(
    () => ({
      markers,
    }),
    [markers],
  );

  const fetchMarkers = useCallback(async () => {
    try {
      const response = await fetch(env.get('REACT_APP_MARKER_URL'));
      const json = await response.json();
      setMarkers(json);
    } catch (err) {
      console.error('fetchMarkers -> err', err)
      setMarkers([]);
    }
  }, []);

  useEffect(() => {
    fetchMarkers();
  }, [fetchMarkers]);

  return <MarkersContext.Provider value={context}>{children}</MarkersContext.Provider>;
}

MarkersContext.propTypes = {
  children: node.isRequired,
};
