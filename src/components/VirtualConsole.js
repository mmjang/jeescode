import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
import { useState } from "react/cjs/react.development";
import useIframeMessage from "../hooks/useIframeMessage";

export default function VirtualConsole() {
  const [isOpen, setIsOpen] = useState(false);
  const messageList = useIframeMessage();
  const scrollRef = useRef();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messageList]);

  return (
    <div className="w-full bg-green-100 flex flex-col">
      <div className="w-full h-8 bg-gray-400 shadow-sm flex justify-center items-center relative">
        <div className="text-green-50">Console ({messageList.length})</div>
        <div
          className="absolute right-2 hover: cursor-pointer text-green-50"
          onClick={() => {
            setIsOpen((o) => !o);
          }}
        >
          <FontAwesomeIcon
            icon={isOpen ? faAngleDown : faAngleUp}
          ></FontAwesomeIcon>
        </div>
      </div>
      <div
        className="w-full h-40 p-1 overflow-scroll"
        hidden={!isOpen}
        ref={scrollRef}
      >
        {messageList.map((m) => (
          <p className="font-sans text-green-900 border-b border-gray-50 border-solid">
            {m.data.content}
          </p>
        ))}
      </div>
    </div>
  );
}
