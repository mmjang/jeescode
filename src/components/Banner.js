import Logo from "./Logo";

export default function Banner({ children }) {
  return (
    <div className="flex h-10 w-screen items-center shadow-md bg-gray-100">
      <Logo></Logo>
      <div className="flex-1">{children}</div>
    </div>
  );
}
