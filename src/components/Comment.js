import { useEffect } from "react";
import { useRef } from "react";
import Gitalk from "gitalk";

export default function Comment() {
  const config = {
    clientID: "5cd53a83725fc77fea88",
    clientSecret: "fb93d69b954f7c5b287781f36f59154879ec4033",
    repo: "jeescode.github.io",
    owner: "jeescode",
    admin: ["jeescode", "mmjang"],
    id: window.location.href,
    distractionFreeMode: false,
  };

  const ref = useRef();

  useEffect(() => {
    const gitalk = new Gitalk(config);
    gitalk.render("gitalk-container");
  }, []);

  return <div id="gitalk-container" ref={ref}></div>;
}
