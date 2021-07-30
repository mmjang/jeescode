import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { debounce } from "../utils";

/**
 * onChange事件是debounce过的
 */
export default function MyTextArea({
  forcedContent = "",
  onChange,
  ...otherProps
}) {
  const [value, setValue] = useState(forcedContent);

  useEffect(() => {
    setValue(forcedContent);
  }, [forcedContent]);

  const debouncedEventFiring = useCallback(
    debounce((value) => {
      if (onChange) {
        onChange(value);
      }
    }, 1000),
    []
  );

  function _change(event) {
    const val = event.target.value;
    debouncedEventFiring(val);
    setValue(val);
  }

  return (
    <textarea
      className="h-full w-full p-1"
      onChange={_change}
      value={value}
      {...otherProps}
    ></textarea>
  );
}
