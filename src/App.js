import logo from "./logo.svg";
import "./App.css";
import "gitalk/dist/gitalk.css";
import Sandbox from "./components/Sandbox";
import Banner from "./components/Banner";
import Comment from "./components/Comment";
import useQuestionList from "./hooks/useQuestionList";
import { useEffect, useState } from "react";
import useQuestionNumber from "./hooks/useQuestionNumber";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "./components/Select";
import { faRedo } from "@fortawesome/free-solid-svg-icons";

function App() {
  const questionList = useQuestionList();
  const questionNumber = useQuestionNumber();
  const [selected, setSelected] = useState(questionNumber);
  const [showComment, setShowComment] = useState(false);

  useEffect(() => {
    setShowComment(false);
  }, [questionNumber]);

  function onSelectionChange(id) {
    window.location.href = `#${id}`;
    setSelected(id);
  }

  const select = (
    <Select
      value={selected}
      options={questionList.map((q) => ({
        id: q.questionNumber,
        label: q.title,
      }))}
      onChange={onSelectionChange}
      className="w-40"
    ></Select>
  );

  return (
    <div className="w-screen md:h-screen flex flex-col">
      <Banner>
        <span className="pl-4 p-1 text-blue-700 hidden md:inline">
          题目列表：
        </span>
        {select}
        <button
          onClick={() => {
            setShowComment(true);
          }}
          className="shadow-md ml-4 bg-white p-1"
        >
          查看评论
        </button>

        <span
          className="ml-4 cursor-pointer hover:text-green-600"
          title={"重置"}
        >
          <FontAwesomeIcon icon={faRedo}></FontAwesomeIcon>
        </span>
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
            className="w-screen md:w-3/6 h-5/6 bg-gray-50 rounded-xl shadow-md p-2"
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
