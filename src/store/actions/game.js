import { SET_NICKNAME } from '../types/game';

export const setNickname = (nickname) => ({
  type: SET_NICKNAME,
  payload: nickname,
});
