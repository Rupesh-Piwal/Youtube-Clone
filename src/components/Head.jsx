import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUser } from "react-icons/fa";
import { GoSearch } from "react-icons/go";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg ">
      <div className="flex col-span-1 ">
        <RxHamburgerMenu size={30} />
        <img
          style={{ width: "110px", height: "30px", marginLeft: "8px" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRONuWvQHJt5ooi822FbtizsibO3m7cNHMHNg&usqp=CAU"
          alt="youtube"
        />
      </div>
      <div className="col-span-10 flex mx-auto ">
        <div className="search-container border border-gray-300  pl-4 px-2 py-1 flex items-center rounded-l-full ">
          <input
            style={{ width: "515px" }}
            className="p-1 outline-none"
            type="text"
            placeholder="Search"
          />
        </div>
        <button className="bg-gray-100 pl-4 pr-4 border border-gray-300 rounded-r-full ">
          <GoSearch size={28} />
        </button>
      </div>
      <div className="col-span-1">
        <FaUser size={40} />
      </div>
    </div>
  );
};

export default Head;
