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
        <textarea
          className="h-full w-full p-1"
          placeholder="html"
          value={html}
          onChange={(e) => onHtmlChange(e.target.value)}
        ></textarea>
      </div>
      <div className="flex-1 p-2">
        <textarea
          className="h-full w-full p-1"
          placeholder="css"
          value={css}
          onChange={(e) => onCssChange(e.target.value)}
        ></textarea>
      </div>
      <div className="flex-1 p-2">
        <textarea
          className="h-full w-full p-1"
          placeholder="javascript"
          value={javascript}
          onChange={(e) => onJavascriptChange(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
}
