import Editor from "@monaco-editor/react";
import { useEffect, useRef } from "react";

export default function EditorArea({ html, css, javascript, onChange }) {
  const htmlEditorRef = useRef(null);
  const cssEditorRef = useRef(null);
  const javascriptEditorRef = useRef(null);

  useEffect(() => {
    if (htmlEditorRef.current) {
      htmlEditorRef.current.setValue(html);
    }
    if (cssEditorRef.current) {
      cssEditorRef.current.setValue(css);
    }
    if (javascriptEditorRef.current) {
      javascriptEditorRef.current.setValue(javascript);
    }
  }, [html, css, javascript]);
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 relative">
        <Editor
          defaultLanguage="html"
          theme="vs-dark"
          defaultValue={html}
          options={{
            minimap: {
              enabled: false,
            },
          }}
          onChange={(html) => {
            onChange({ html });
          }}
          onMount={(editor) => (htmlEditorRef.current = editor)}
        ></Editor>
        <div className="absolute right-0 top-0 text-white p-1 rounded-xl bg-red-400">
          HTML
        </div>
      </div>
      <div className="flex-1 relative">
        <Editor
          defaultLanguage="css"
          theme="vs-dark"
          defaultValue={css}
          options={{
            minimap: {
              enabled: false,
            },
          }}
          onChange={(css) => {
            onChange({ css });
          }}
          onMount={(editor) => (cssEditorRef.current = editor)}
        ></Editor>
        <div className="absolute right-0 top-0 text-white p-1 rounded-xl bg-green-400">
          CSS
        </div>
      </div>
      <div className="flex-1 relative">
        <Editor
          defaultLanguage="javascript"
          theme="vs-dark"
          defaultValue={javascript}
          options={{
            minimap: {
              enabled: false,
            },
          }}
          onChange={(javascript) => onChange({ javascript })}
          onMount={(editor) => (javascriptEditorRef.current = editor)}
        ></Editor>
        <div className="absolute right-0 top-0 text-white p-1 rounded-xl bg-blue-400">
          JS
        </div>
      </div>
    </div>
  );
}
