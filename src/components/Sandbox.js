import { useState } from "react";
import { useEffect } from "react";
import useQuestion from "../hooks/useQuestion";
import { getQuestionCache, setQuestionCache } from "../utils";
import BrowserArea from "./BrowserArea";
import DocumentArea from "./DocumentArea";
import EditorArea from "./EditorArea";

export default function Sandbox({ questionNumber = 1 }) {
  const [editorState, setEditorState] = useState({
    html: "",
    css: "",
    javascript: "",
  });

  const questionObject = useQuestion(questionNumber);

  useEffect(() => {
    const questionCache = getQuestionCache(questionNumber);
    if (questionCache) {
      // 存在结题数据本地缓存
      setEditorState({
        html: questionCache.html,
        css: questionCache.css,
        javascript: questionCache.javascript,
      });
    } else if (questionObject?.questionNumber === questionNumber) {
      // 没缓存，就显示接口里的原题数据
      setEditorState({
        html: questionObject.html,
        css: questionObject.css,
        javascript: questionObject.javascript,
      });
    }
  }, [questionNumber, questionObject]);

  /**
   * 将当前编辑框内容存入localStorage
   */
  function saveDraft(state) {
    setQuestionCache(questionNumber, state);
  }

  return (
    <div className="flex justify-items-stretch h-full">
      <div className="flex-1 bg-indigo-200">
        <DocumentArea markdown={questionObject?.md}></DocumentArea>
      </div>
      <div className="flex-1 bg-purple-100">
        <EditorArea
          html={editorState.html}
          onHtmlChange={(value) => {
            setEditorState((old) => {
              const newState = Object.assign({}, old, { html: value });
              saveDraft(newState);
              return newState;
            });
          }}
          css={editorState.css}
          onCssChange={(value) => {
            setEditorState((old) => {
              const newState = Object.assign({}, old, { css: value });
              saveDraft(newState);
              return newState;
            });
          }}
          javascript={editorState.javascript}
          onJavascriptChange={(value) => {
            setEditorState((old) => {
              const newState = Object.assign({}, old, { javascript: value });
              saveDraft(newState);
              return newState;
            });
          }}
        ></EditorArea>
      </div>
      <div className="flex-1 bg-pink-100">
        <BrowserArea
          html={editorState.html}
          javascript={editorState.javascript}
          css={editorState.css}
        ></BrowserArea>
      </div>
    </div>
  );
}
