import axios from "axios";

export const getQuestions = async () =>
  axios.get("https://opentdb.com/api.php?amount=50&category=11");
