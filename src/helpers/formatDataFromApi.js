import { decodeHTML } from 'entities';

export default function formatDataFromApi(data) {
  return data.map((question) => ({
    category: question.category,
    type: question.type,
    difficulty: question.difficulty,
    question: decodeHTML(question.question),
    correctAnswer: decodeHTML(question.correct_answer),
    answers: [
      ...question.incorrect_answers,
      question.correct_answer,
    ].map(decodeHTML).sort(() => Math.random() - 0.5),
  }));
}
