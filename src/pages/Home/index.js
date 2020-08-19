import React, { useEffect, useState } from "react";
import { getQuestions } from "../../services/api";

const Home = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
  const handleApiResponse = async () => {
    const response = await getQuestions();
        setQuestions(response.data.results);
      }
      handleApiResponse();
    }, [])
    
  return (
    <h1>Hello Firma</h1>
  )

};


export default Home;
