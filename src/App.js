import logo from "./logo.svg";
import "./App.css";
import "gitalk/dist/gitalk.css";
import Sandbox from "./components/Sandbox";
import Banner from "./components/Banner";
import useQuestionList from "./hooks/useQuestionList";
import { useState } from "react";
import useQuestionNumber from "./hooks/useQuestionNumber";

function App() {
  const questionList = useQuestionList();
  const questionNumber = useQuestionNumber();
  const [selected, setSelected] = useState(1);

  function onSelectionChange(event) {
    window.location.href = `#${event.target.value}`;
    debugger;
    setSelected(event.target.value);
  }

  return (
    <div className="w-screen h-screen flex flex-col">
      <Banner>
        <span className="pl-4 p-1 text-blue-700">题目列表：</span>
        <select value={selected} onChange={onSelectionChange}>
          {questionList.map((q) => (
            <option value={q.questionNumber}>
              {`${q.questionNumber}. ${q.title}`}
            </option>
          ))}
        </select>
      </Banner>
      <Sandbox questionNumber={questionNumber}></Sandbox>
    </div>
  );
}

export default App;
