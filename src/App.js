import axios from 'axios';
import React, { useEffect } from 'react';
const App = () => {
  const makeAPIRequest = ({ method = 'GET', url, header = {}, data = {} }) =>
    axios.request({
      method,
      url,
      header,
      data,
    });
  useEffect(() => {
    const params = {
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/users/',
    };
    makeAPIRequest(params).then((response) => {
      console.log(response?.data ?? []);
    });
  }, []);
  return <> </>;
};

export default App;
