import React, {useState} from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <React.Fragment>
    <main>
      <div className="h-20 bg-green-900 flex items-center px-10 justify-between">
        {/* logo section */}
        <div>
          <p className="text-5xl text-white uppercase font-bold">CardPyramid</p>
        </div>

        {/* large screen */}
        <div></div>

        {/* small screen */}
        <div>
        <div className="text-4xl text-white">
              {toggle === false ? (
                <FaBars onClick={handleToggle} />
              ) : (
                <FaTimes onClick={handleToggle} />
              )}
            </div>
        </div>
      </div>
    </main>
  </React.Fragment>
  )
}

export default Navbar