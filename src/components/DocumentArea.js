import ReactMarkdown from "react-markdown";

export default function DocumentArea({ markdown }) {
  return (
    <div className="p-2 overflow-y-scroll">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}
