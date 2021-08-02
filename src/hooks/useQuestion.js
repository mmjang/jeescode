import { useState } from "react";
import { useEffect } from "react";

export default function useQuestion(
  questionNumber /* 题号 */,
  setHtml,
  setCss,
  setJavascript
) {
  const [questionObject, setQuestionObject] = useState(null);

  useEffect(() => {
    setQuestionObject(null);
    const mdPromise = fetch(`/questions/q${questionNumber}/question.md`).then(
      (r) => r.text()
    );
    const htmlPromise = fetch(
      `/questions/q${questionNumber}/question.html`
    ).then((r) => r.text());
    const cssPromise = fetch(`/questions/q${questionNumber}/question.css`).then(
      (r) => r.text()
    );
    const jsPromise = fetch(`/questions/q${questionNumber}/question.js`).then(
      (r) => r.text()
    );

    Promise.all([mdPromise, htmlPromise, cssPromise, jsPromise]).then(
      ([md, html, css, javascript]) => {
        setQuestionObject({
          questionNumber,
          md,
          html,
          css,
          javascript,
        });
      }
    );
  }, [questionNumber]);

  return questionObject;
}
