import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import { Container, Input, Label } from './styles';

const Home = () => {
  const [registerNickname, setRegisterNickname] = useState('');
  const [isShowing, setIsShowing] = useState(false);

  const history = useHistory();

  const handleChange = (event) => {
    setRegisterNickname(event.target.value);
  };

  const handleStartGame = (event) => {
    event.preventDefault();
    if (!registerNickname) {
      return;
    }
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
        <Button onClick={handleModal}>
          start game
        </Button>
      </Container>
      <Modal isShowing={isShowing}>
        <form onSubmit={handleStartGame}>
          <Label>
            Insert your name
            <Input
              type="text"
              placeholder="type your nickname"
              onChange={handleChange}
              value={registerNickname}
            />
          </Label>
          <Button>
            Play
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default Home;
