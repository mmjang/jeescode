import MyTextArea from "./MyTextArea";

export default function EditorArea({
  html,
  css,
  javascript,
  onHtmlChange,
  onCssChange,
  onJavascriptChange,
}) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 p-2">
        <MyTextArea
          forcedContent={html}
          className="h-full w-full p-1"
          placeholder="html"
          onChange={onHtmlChange}
        ></MyTextArea>
      </div>
      <div className="flex-1 p-2">
        <MyTextArea
          forcedContent={css}
          className="h-full w-full p-1"
          placeholder="css"
          onChange={onCssChange}
        ></MyTextArea>
      </div>
      <div className="flex-1 p-2">
        <MyTextArea
          forcedContent={javascript}
          className="h-full w-full p-1"
          placeholder="javascript"
          onChange={onJavascriptChange}
        ></MyTextArea>
      </div>
    </div>
  );
}
