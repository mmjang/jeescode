import { useState } from "react";
import { useCallback } from "react";
import { debounce } from "../utils";

/**
 * onChange事件是debounce过的
 */
export default function MyTextArea({
  initialContent = "",
  onChange,
  ...otherProps
}) {
  const [value, setValue] = useState(initialContent);

  const debouncedEventFiring = useCallback(
    debounce((value) => {
      if (onChange) {
        console.log("debouncing", value);
        onChange(value);
      }
    }, 1000),
    []
  );

  function _change(event) {
    const val = event.target.value;
    console.log("onChange:", val);
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
