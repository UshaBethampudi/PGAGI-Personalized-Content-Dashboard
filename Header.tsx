import DarkToggle from "./DarkToggle";

const Header = () => (
  <header className="w-full p-4 flex justify-end items-center bg-white dark:bg-gray-800">
    <DarkToggle />
  </header>
);

export default Header;
