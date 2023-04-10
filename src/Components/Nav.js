// import logo from "../Assests/logo.png";

const Nav = () => {
  return (
    <>
      <nav class="nav font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white  sm:items-baseline w-full">
        <div class="mb-1 sm:mb-0">
          <h1 className="text-4xl text-red-700 text-center flex items-center mx-3 font-bold">
            BREED<span>IT</span>
          </h1>
        </div>
        <div>
          <a
            href="/three"
            class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
          >
            <button class=" button-55 z-50 absolute rounded-3xl">
              CREATE ACCOUNT
            </button>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
