import { useEffect, useState } from "react";

export default function useQuestionNumber() {
  const [questionNumber, setQuestionNumber] = useState(1);
  useEffect(() => {
    function onHashChange() {
      const hash = window.location.hash;
      debugger;
      if (hash.match(/^#[0-9]+$/)) {
        const questionNumber = +hash.slice(1);
        setQuestionNumber(questionNumber);
      } else {
        window.location.href = "#1";
        setQuestionNumber(1);
      }
    }
    window.addEventListener("hashchange", onHashChange);
    onHashChange();
    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);
  return questionNumber;
}
