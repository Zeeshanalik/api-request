import axios from 'axios';
import React, { useEffect } from 'react';
function App() {
  const onRequest = ({ method = 'GET', url, header = {}, data = {} }) =>
    axios.request({
      method: method,
      url: url,
      header: header,
      data: data,
    });
  useEffect(() => {
    const params = {
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/users/',
    };
    onRequest(params).then((response) => {
      console.log(response?.data ?? []);
    });
  }, []);
  return <> </>;
}

export default App;
