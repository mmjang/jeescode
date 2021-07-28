import { useState } from "react";
import BrowserArea from "./BrowserArea";
import DocumentArea from "./DocumentArea";
import EditorArea from "./EditorArea";

export default function Sandbox({}) {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [javascript, setJavascript] = useState("");
  return (
    <div className="flex justify-items-stretch h-full">
      <div className="flex-1 bg-indigo-200">
        <DocumentArea></DocumentArea>
      </div>
      <div className="flex-1 bg-purple-100">
        <EditorArea
          html={html}
          onHtmlChange={(value) => setHtml(value)}
          css={css}
          onCssChange={(value) => setCss(value)}
          javascript={javascript}
          onJavascriptChange={(value) => setJavascript(value)}
        ></EditorArea>
      </div>
      <div className="flex-1 bg-pink-100">
        <BrowserArea
          html={html}
          javascript={javascript}
          css={css}
        ></BrowserArea>
      </div>
    </div>
  );
}
