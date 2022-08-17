import NavBar, { NavBarMobile } from "./components/NavBar";
import Main from "./components/Main";
function App() {
  return (
    <>
      <NavBar />
      <div className="w-full h-full md:h-[880px] md:py-5 fixed ">
        <div className="flex-col items-center justify-center w-full h-full mx-auto  overflow-auto md:overflow-hidden md:flex md:bg-white bg-liberet-secondary-gray w- md:w-1/2">
          <Main />
        </div>
      </div>
      <NavBarMobile />
    </>
  );
}

export default App;
