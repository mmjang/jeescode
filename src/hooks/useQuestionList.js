import { useEffect, useState } from "react";

export default function useQuestionList() {
  const [questionList, setQuestionList] = useState([]);
  useEffect(() => {
    fetch("/questions.json")
      .then((r) => r.json())
      .then((data) => {
        setQuestionList(data.list);
      });
  }, []);
  return questionList;
}
