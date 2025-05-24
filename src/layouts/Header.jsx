import Button from "../components/Button";

const Header = () => {
  return (
    <header className="w-full py-4 px-12 flex justify-between items-center">
      <a href="#">
        <h2 className="font-medium font-WDXL text-3xl">Coursy!</h2>
      </a>
      <nav>
        <ul className="hidden md:flex items-center gap-12">
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
