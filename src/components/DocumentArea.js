import ReactMarkdown from "react-markdown";
import GitalkComponent from "gitalk/dist/gitalk-component";

export default function DocumentArea({ markdown }) {
  return (
    <div className="p-2 overflow-y-scroll">
      <ReactMarkdown>{markdown}</ReactMarkdown>
      <GitalkComponent
        options={{
          clientID: "5cd53a83725fc77fea88",
          clientSecret: "fb93d69b954f7c5b287781f36f59154879ec4033",
          repo: "jeescode.github.io",
          owner: "jeescode",
          admin: ["jeescode", "mmjang"],
          id: window.location.href,
          distractionFreeMode: false,
        }}
      ></GitalkComponent>
    </div>
  );
}
