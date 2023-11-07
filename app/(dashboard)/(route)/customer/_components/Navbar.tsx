import React from "react";
import { InputBase, Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { profile } from "@/public/customerImages/index";
import { logo } from "@/public/customerImages/index";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const Navbar = () => {
  return (
    <div className="sticky top-0 left-[280px] z-50 h-[80px] bg-white p-[1rem] border-b-2 md:flex items-center justify-between   w-full m-auto hidden ">
      <aside className="basis-[60%] flex items-center gap-20">
        <div>
          <img src={logo.src} alt="" className="p-[2rem] md:block hidden" />
        </div>
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#F3F3F3",
            boxShadow: "none",
            width: "60%",
          }}
        >
          <IconButton type="submit">
            <SearchIcon />
          </IconButton>
          <InputBase
            placeholder="Search merchants deals and customers..."
            inputProps={{ "aria-label": "search" }}
            sx={{ ml: 1, flex: 1, border: "none", boxShadow: "none" }}
          />
        </Paper>
      </aside>
      <aside className="flex gap-3 basis-[20%] m-[1rem] items-center">
        <span>
          <NotificationsNoneOutlinedIcon />
        </span>
        <div className="avatar online">
          <div className="w-[60px] rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="md:block hidden">
          <h2>Henrich mkitaryan</h2>
          <p>romeobourne211@gmail.com </p>
        </div>
      </aside>
    </div>
  );
};

export default Navbar;
