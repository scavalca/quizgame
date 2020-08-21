import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';

const Home = () => {
  const history = useHistory();
  return (
    <Button
      onClick={() => history.push('/game')}
    >
      start game
    </Button>
  );
};

export default Home;
