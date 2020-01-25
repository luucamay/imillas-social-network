import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Muro = () => {
  let history = useHistory();
  useEffect(() => {
    if (!localStorage.getItem('_TOKEN')) {
      history.push('/login')
    }
  }, [])

  return (
    <div>
      Bienvenido <strong>{localStorage.getItem('username')}</strong>!
        </div>
  );
};
export default Muro;
