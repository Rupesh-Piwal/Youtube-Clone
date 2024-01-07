import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import TheatersIcon from "@mui/icons-material/Theaters";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";

const Sidebar = () => {
  return (
    <div className="bg-green-200 border border-gray-600 w-44 ">
      <div className="mainList pl-3">
        <div className="home flex py-2 gap-6 items-center ">
          <HomeIcon style={{ fontSize: 30 }} />
          <p>Home</p>
        </div>
        <div className="shorts flex py-2 gap-6 items-center ">
          <TheatersIcon style={{ fontSize: 30 }} />
          <p>Shorts</p>
        </div>
        <div className="subsciptions flex py-2 gap-6 items-center">
          <SubscriptionsIcon style={{ fontSize: 30 }} />
          <p>Subscriptions</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
