import { SET_NICKNAME } from '../types/game';

const nicknameFromLocalStorage = localStorage.getItem('NICKNAME');

const INITIAL_STATE = {
  nickname: nicknameFromLocalStorage || '',
};

const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_NICKNAME:
      return { ...state, nickname: action.payload };
    default:
      return state;
  }
};

export default gameReducer;
