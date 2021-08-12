import { faAngleDown, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

/**
 * options: [
 * {
 *      id,
 *      label
 * }
 * value => id
 * onChange => (id) => void
 * ]
 */
export default function Select({
  options = [],
  value,
  onChange,
  placeholder = "请选择...",
  className = "",
}) {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const onOpenDropDown = () => {
    setDropDownOpen((open) => !open);
  };

  const onSelect = (id) => {
    console.log(`onselect ${id}`);
    setDropDownOpen(false);
    onChange(id);
  };

  const selectedLabel = options.find((x) => x.id === value)?.label;

  const dropDownRef = useRef();

  useEffect(() => {
    const onMouseDown = (event) => {
      console.log("onmousedown");
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        console.log(event.target);
        setDropDownOpen(false);
      }
    };
    console.log("use effect");
    window.addEventListener("click", onMouseDown);
    return () => {
      window.removeEventListener("click", onMouseDown);
    };
  }, []);

  const dropDown = dropDownOpen ? (
    <div className="absolute top-full w-full z-50 shadow-md">
      {options.map((option) => (
        <div
          className="p-2 border-t border-solid border-gray-100 bg-white hover:bg-gray-200 transition-all"
          key={option.id}
          onClick={() => onSelect(option.id)}
        >
          {option.label}
        </div>
      ))}
    </div>
  ) : null;

  return (
    <div
      className={`relative h-8 bg-white flex items-center ml-2 cursor-pointer hover:shadow-md ${className}`}
      ref={dropDownRef}
    >
      {/* selected  */}
      <div className="pl-2 pr-4 w-full" onClick={onOpenDropDown}>
        <div
          className="overflow-ellipsis overflow-hidden whitespace-nowrap"
          style={{ width: "calc(100%)" }}
        >
          {selectedLabel ? (
            <span>{selectedLabel}</span>
          ) : (
            <span className="text-gray-400">{placeholder}</span>
          )}
        </div>
        <div className="absolute right-1 top-0 bottom-0 flex items-center">
          <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
        </div>
      </div>
      {dropDown}
    </div>
  );
}
