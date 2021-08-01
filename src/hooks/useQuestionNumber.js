import { useEffect, useState } from "react";
import { getQuestionNumberFromHash } from "../utils";

export default function useQuestionNumber() {
  const [questionNumber, setQuestionNumber] = useState(
    getQuestionNumberFromHash(window.location.hash)
  );
  useEffect(() => {
    function onHashChange() {
      const hash = window.location.hash;
      const num = getQuestionNumberFromHash(hash);
      if (!hash) {
        window.location.hash = "#1";
      }
      setQuestionNumber(num);
    }
    window.addEventListener("hashchange", onHashChange);
    onHashChange();
    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);
  return questionNumber;
}
