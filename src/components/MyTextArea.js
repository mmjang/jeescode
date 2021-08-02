import Editor, { useMonaco } from "@monaco-editor/react";
import { useState } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { debounce } from "../utils";

/**
 * onChange事件是debounce过的
 */
export default function MyTextArea({
  forcedContent = "",
  language,
  onChange,
  ...otherProps
}) {
  const editorRef = useRef();
  const [value, setValue] = useState(forcedContent);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.setValue(forcedContent);
    }
  }, [forcedContent, editorRef]);

  const debouncedEventFiring = useCallback(
    debounce((value) => {
      if (onChange) {
        onChange(value);
      }
    }, 1000),
    []
  );

  const _change = useCallback((val) => {
    debouncedEventFiring(val);
    setValue(val);
  }, []);

  const onMount = useCallback((editor) => {
    editorRef.current = editor;
  }, []);

  return null;
}
