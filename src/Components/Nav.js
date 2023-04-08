// import logo from "../Assests/logo.png";

const Nav = () => {
  return (
    <>
      <nav className="nav text-white flex justify-between rounded-3xl">
        <h1 className="text-4xl text-red-700 text-center flex items-center mx-3 font-bold">
          BREED<span>IT</span>
        </h1>
        {/* <img src={logo} className="logo h-10 rounded-2xl pt3 " alt="" /> */}
        <ul className="px-14 ру-4 flex space-x-11 justify-end ">
          <li>
            <button class=" creatbutton">CREATE ACCOUNT</button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
