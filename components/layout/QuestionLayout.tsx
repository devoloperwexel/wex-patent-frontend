"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { NotificationsOutlined as BellIcon } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import { useLanguage } from "hooks/useLanguage";
import Popover from "@mui/material/Popover";
import { MenuItem, Typography } from "@mui/material";
import { languages } from "i18n";

const drawerWidth = "w-64 sm:w-72";

type QuestionBarLayoutProps = {
  children: ReactNode;
};

export const QuestionBarLayout = ({ children }: QuestionBarLayoutProps) => {
  const { language, toggleLanguage } = useLanguage();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(true);
  const { data: sessionsData } = useSession();
  const user = sessionsData?.user;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const path = usePathname();
  if (path.includes("/video-call")) {
    return children;
  }
  // if (path.includes("/medical-screening")) {
  //   return children;
  // }

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    toggleLanguage(event.target.value);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openPopup = Boolean(anchorEl);
  const { logout } =
    languages[language.toLowerCase() as keyof typeof languages].sideBar;
  const handleSignout = () => signOut({ callbackUrl: "/signin" });
  const handleOnClick = () => {};

  return (
    <div className=" z-50 h-screen">
      {/* AppBar */}
      <div
        className={`fixed top-0 justify-between w-full z-50  ${
          open ? "w-full lg:w-[calc(100%)] md:w-[calc(100%)]" : "w-full"
        } transition-all duration-300 bg-white`}
      >
        <div className="flex items-center justify-between py-4 px-4 sm:px-6 md:px-10  z-50">
          {/* Title */}
          <div className="flex items-center space-x-4 md:space-x-6 ml-[70px] md:ml-[300px] z-50">
            <h1 className="text-[18px] sm:text-xl md:text-2xl font-bold">
              {`Hi, ${user?.name}`}
            </h1>
          </div>
          <div className="flex items-center space-x-3 md:space-x-6">
            {/* Language Selector */}
            <select
              value={language}
              onChange={handleLanguageChange}
              className="hidden md:flex border border-gray-300 rounded p-1 sm:p-2 text-sm"
            >
              <option value="EN">EN</option>
              <option value="DE">DE</option>
            </select>

            {/* Profile Avatar */}
            <div>
              {/* Avatar Button */}
              <button onClick={handleClick}>
                <Avatar
                  sx={{
                    bgcolor: "#9e9b9b",
                    width: 38,
                    height: 38,
                    fontSize: 12,
                    fontWeight: "bold",
                    zIndex: 0,
                  }}
                  src={user?.profilePictureUrl}
                >
                  {user?.name?.[0]?.toUpperCase()}
                </Avatar>
              </button>

              {/* Popover Menu */}
              <Popover
                open={openPopup}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem onClick={() => signOut({ callbackUrl: "/signin" })}>
                  <Typography>{logout}</Typography>
                </MenuItem>
              </Popover>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main
        className={`  overflow-x-hidden  py-[35px] sm:py-[55px] min:h-full bg-primary-color/5 h-full`}
      >
        {children}
      </main>
    </div>
  );
};
