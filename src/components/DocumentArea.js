import ReactMarkdown from "react-markdown";

export default function DocumentArea({ markdown }) {
  return (
    <div className="p-8">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}
