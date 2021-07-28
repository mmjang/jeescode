import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";

export default function useIframeInject() {
  const [injectString, setInjectString] = useState("");
  useEffect(() => {
    fetch("/iframe_inject.js")
      .then((r) => r.text())
      .then((r) => {
        setInjectString(r);
      });
  }, []);
  return injectString;
}
