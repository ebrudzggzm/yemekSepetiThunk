import { Link } from "react-router-dom";
import { RiShoppingCartFill } from "react-icons/ri";
import Container from "./Container";

const Header = () => {
  return (
    <header className="shadow ">
      <Container
        designs={"flex justify-between items-center "}
      >
        <Link
          to="/"
          className="font-bold font-mono text-3xl cursor-pointer text-blue-700 hover:scale-110 transition hover:text-red-500"
        >
          OrderNow
        </Link>
        <div className="flex gap-5 text-xl font-semibold text-blue-500 items-center">
          <button className="hover:text-red-500 transition">Sign In</button>
          <button className="hover:text-red-500 transition">Log In</button>
      <Link to={'/cart'}>    <RiShoppingCartFill className="text-3xl hover:text-red-500" /></Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
