import axios from 'axios';

export const fetchTriviaQuestions = async () => axios.get('http://localhost:2020/results');
