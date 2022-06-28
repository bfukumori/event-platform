import { Logo } from "./Logo";

interface HeaderProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export function Header({ isOpen, toggleSidebar }: HeaderProps) {
  return (
    <header className="w-full py-5 flex px-6 justify-between lg:justify-center items-center bg-gray-700 border-b border-gray-600">
      <Logo />
      <button
        type="button"
        className="flex items-center gap-[7px] lg:hidden"
        onClick={toggleSidebar}
      >
        <span className="text-sm text-gray-100">Aulas</span>
        {isOpen ? (
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8L23.5563 23.5563"
              stroke="#81D8F7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 24L23.5563 8.44365"
              stroke="#81D8F7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 16H27"
              stroke="#81D8F7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 8H27"
              stroke="#81D8F7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 24H27"
              stroke="#81D8F7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </header>
  );
}
