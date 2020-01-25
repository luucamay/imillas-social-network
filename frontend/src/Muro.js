import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Muro = () => {
  let history = useHistory();
  useEffect(() => {
    if (!localStorage.getItem('_TOKEN')) {
      history.push('/login')
    }
  })

  return (
    <div className="App">
      <header className="App-header">
        Bienvenidx <strong>{localStorage.getItem('username')}</strong>!
      </header>
    </div>
  );
};
export default Muro;
