import { useCallback, useState } from "react";
import { useEffect } from "react";
import useQuestion from "../hooks/useQuestion";
import { debounce, getQuestionCache, setQuestionCache } from "../utils";
import BrowserArea from "./BrowserArea";
import DocumentArea from "./DocumentArea";
import EditorArea from "./EditorArea";

export default function Sandbox({ questionNumber = 1 }) {
  // 初始值是null，后面可以用来检测编辑器里的内容是否已经初始化过了
  const [initialEditorState, setInitialEditorState] = useState({
    html: null,
    css: null,
    javascript: null,
  });

  // iframe浏览器的状态
  const [browserState, setBrowserState] = useState({
    html: "",
    css: "",
    javascript: "",
  });

  const questionObject = useQuestion(questionNumber);

  useEffect(() => {
    const questionCache = getQuestionCache(questionNumber);
    if (questionCache) {
      // 存在结题数据本地缓存
      const state = {
        html: questionCache.html,
        css: questionCache.css,
        javascript: questionCache.javascript,
      };
      setInitialEditorState(state);
      setBrowserState(state);
    } else if (questionObject?.questionNumber === questionNumber) {
      // 没缓存，就显示接口里的原题数据
      const state = {
        html: questionObject.html,
        css: questionObject.css,
        javascript: questionObject.javascript,
      };
      setInitialEditorState(state);
      setBrowserState(state);
    }
  }, [questionNumber, questionObject]);

  /**
   * 将当前编辑框内容存入localStorage
   */
  function saveDraft(state) {
    setQuestionCache(questionNumber, state);
  }

  function onChange(stateDiff) {
    const newState = Object.assign({}, browserState, stateDiff);
    saveDraft(newState);
    setBrowserState(newState);
  }

  const deboundedOnChange = debounce(onChange, 500);

  return (
    <div className="flex justify-items-stretch flex-1 flex-col md:flex-row">
      <div className="md:flex-1 bg-indigo-200 min-w">
        <DocumentArea markdown={questionObject?.md}></DocumentArea>
      </div>
      <div className="md:flex-1 bg-purple-100 h-screen">
        {initialEditorState.html !== null ? (
          <EditorArea
            html={initialEditorState.html}
            css={initialEditorState.css}
            javascript={initialEditorState.javascript}
            onChange={deboundedOnChange}
          ></EditorArea>
        ) : null}
      </div>
      <div className="md:flex-1 bg-pink-100">
        <BrowserArea
          html={browserState.html}
          javascript={browserState.javascript}
          css={browserState.css}
        ></BrowserArea>
      </div>
    </div>
  );
}
