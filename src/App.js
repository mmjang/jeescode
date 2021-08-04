import logo from "./logo.svg";
import "./App.css";
import "gitalk/dist/gitalk.css";
import Sandbox from "./components/Sandbox";
import Banner from "./components/Banner";
import Comment from "./components/Comment";
import useQuestionList from "./hooks/useQuestionList";
import { useEffect, useState } from "react";
import useQuestionNumber from "./hooks/useQuestionNumber";

function App() {
  const questionList = useQuestionList();
  const questionNumber = useQuestionNumber();
  const [selected, setSelected] = useState(questionNumber);
  const [showComment, setShowComment] = useState(false);

  function onSelectionChange(event) {
    window.location.href = `#${event.target.value}`;
    setSelected(event.target.value);
  }

  useEffect(() => {
    setShowComment(false);
  }, [questionNumber]);

  return (
    <div className="w-screen h-screen flex flex-col">
      <Banner>
        <span className="pl-4 p-1 text-blue-700">题目列表：</span>
        <select value={selected} onChange={onSelectionChange}>
          {questionList.map((q) => (
            <option value={q.questionNumber} key={q.questionNumber}>
              {`${q.questionNumber}. ${q.title}`}
            </option>
          ))}
        </select>
        <button
          onClick={() => {
            setShowComment(true);
          }}
          className="shadow-md ml-4 bg-white p-1"
        >
          查看评论
        </button>
      </Banner>
      <Sandbox questionNumber={questionNumber}></Sandbox>
      {showComment ? (
        <div
          className="fixed w-screen h-screen flex items-center justify-center"
          onClick={(e) => {
            setShowComment(false);
          }}
        >
          <div
            className="w-3/6 h-5/6 bg-gray-50 rounded-xl shadow-md p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <Comment></Comment>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
