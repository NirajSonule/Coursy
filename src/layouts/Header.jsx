import Button from "../components/Button";

const Header = () => {
  return (
    <header className="w-full p-4 flex justify-between items-center">
      <a href="#">
        <h2 className="font-medium text-2xl">Coursy!</h2>
      </a>
      <nav>
        <ul className="flex items-center gap-12">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Courses</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
      <Button>Sign in</Button>
    </header>
  );
};

export default Header;
