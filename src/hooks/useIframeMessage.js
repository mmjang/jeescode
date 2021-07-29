import { useEffect } from "react";
import { useState } from "react";

export default function useIframeMessage() {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    window.sendMessage = (args) => {
      setMessageList((messageList) => messageList.concat([args]));
    };
    return () => {
      window.sendMessage = undefined;
    };
  }, []);

  return messageList;
}
