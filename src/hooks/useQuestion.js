import { useState } from "react";
import { useEffect } from "react";

export default function useQuestion(
  questionNumber /* 题号 */,
  setHtml,
  setCss,
  setJavascript
) {
  const [questionObject, setQuestionObject] = useState({
    md: "",
    html: "",
    css: "",
    js: "",
  });

  useEffect(() => {
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
      ([md, html, css, js]) => {
        setQuestionObject({
          md,
          html,
          css,
          js,
        });
        if (setHtml) {
          setHtml(html);
        }
        if (setCss) {
          setCss(css);
        }
        if (setJavascript) {
          setJavascript(js);
        }
      }
    );
  }, [questionNumber]);

  return questionObject;
}
