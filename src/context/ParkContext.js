import { createContext, useContext, useEffect, useState } from 'react';
import { Alert, AlertTitle } from '@mui/material';

import axios from 'axios';

const ParkContext = createContext();

export const ParkContextProvider = ({ children }) => {
  const [parkData, setParkData] = useState([]);
  const [numFreeSpots, setNumFreeSpots] = useState(0);
  const [parkError, setParkError] = useState('');

  const fetchParkData = async () => {
    setParkError('');

    try {
      const result = (await axios.get(process.env.REACT_APP_API_URL + 'all')).data;
      setParkData(result.data);

      const count = result.data.reduce((counter, obj) => {
        if (obj.freeSpot) counter += 1;
        return counter;
      }, 0);

      setNumFreeSpots(count);
    } catch (err) {
      console.log(err);
      setParkError(err.response.data.message);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => fetchParkData(), 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ParkContext.Provider value={{ parkError, numFreeSpots, parkData }}>
      {parkError && (
        <Alert
          severity='error'
          sx={{ mb: 2 }}
          onClose={() => {
            setParkError('');
          }}>
          <AlertTitle>Error</AlertTitle>
          {parkError}
        </Alert>
      )}
      {children}
    </ParkContext.Provider>
  );
};

export const Park = () => {
  return useContext(ParkContext);
};
