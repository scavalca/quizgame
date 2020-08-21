import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import { Container } from './styles';

const Home = () => {
  const [registerNickname, setRegisterNickname] = useState('');
  const [isShowing, setIsShowing] = useState(false);

  const history = useHistory();

  const handleChange = (event) => {
    setRegisterNickname(event.target.value);
  };

  const handleStartGame = (event) => {
    event.preventDefault();
    history.push('/game');
  };

  const handleModal = () => {
    setIsShowing(!isShowing);
  };

  return (
    <>
      <Container>
        <div>
          <h1>Movies Quiz</h1>
        </div>
      </Container>
      <Button onClick={handleModal}>
        start game
      </Button>
      <Modal isShowing={isShowing}>
        <form onSubmit={handleStartGame}>
          <input
            type="text"
            placeholder="Type your nickname"
            onChange={handleChange}
            value={registerNickname}
          />
          <h2>Cadastre seu nickname</h2>
          <Button>
            Play
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default Home;
