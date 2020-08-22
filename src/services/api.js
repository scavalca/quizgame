import axios from 'axios';

export const fetchTriviaQuestions = async () => axios.get('https://opentdb.com/api.php?amount=50&category=11');
