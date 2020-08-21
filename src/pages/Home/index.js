import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import { Container, Input, Label } from './styles';

import { setNickname } from '../../store/actions/game';

const Home = () => {
  const { nickname } = useSelector((state) => state.game);
  const [isShowing, setIsShowing] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (event) => {
    dispatch(setNickname(event.target.value));
  };

  const handleStartGame = (event) => {
    event.preventDefault();
    if (!nickname) {
      return;
    }
    localStorage.setItem('NICKNAME', nickname);
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
              value={nickname}
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
