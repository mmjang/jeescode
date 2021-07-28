import { useEffect } from "react";
import { useState } from "react";

export default function useIframeMessage() {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    window.sendMessage = ({ type, data }) => {
      debugger;
      setMessageList(messageList.concat([{ type, data }]));
    };
    return () => {
      window.sendMessage = undefined;
    };
  }, []);

  return messageList;
}
