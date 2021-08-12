import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "./Logo";

export default function Banner({ children }) {
  return (
    <div className="flex h-10 w-screen items-center shadow-md bg-gray-100">
      <div className="hidden md:block">
        <Logo></Logo>
      </div>
      <div className="flex-1 flex">{children}</div>
      <div className="pl-2 pr-2 hidden md:block">
        <span className="text-red-700 pr-2">
          <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
        </span>
        <span>
          <a href="https://github.com/lulu2jinchi">@lulu2jinchi</a>
        </span>
      </div>
    </div>
  );
}
