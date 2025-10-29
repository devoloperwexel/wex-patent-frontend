"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import {
  NotificationsOutlined as BellIcon,
  LogoutOutlined as LogoutIcon,
  PersonOutlined as UserIcon,
  HomeOutlined as HomeIcon,
  ListOutlined as ListIcon,
  ChatOutlined as ChatIcon,
} from "@mui/icons-material";
import Link from "next/link";
import Avatar from "@mui/material/Avatar";
import { languages } from "i18n/languages";
import { useLanguage } from "hooks/useLanguage";
import MenuItem from "@mui/material/MenuItem";
import { Popover, Typography } from "@mui/material";

const drawerWidth = "w-64 sm:w-72";

type DashboardLayoutProps = {
  children: ReactNode;
};

export const UserLayout = ({ children }: DashboardLayoutProps) => {
  const { language, toggleLanguage } = useLanguage();
  const { dashboard, physioProfile, appointments, profile, logout } =
    languages[language.toLowerCase() as keyof typeof languages].sideBar;
  const menuItems = [
    {
      label: dashboard,
      href: "/dashboard",
      icon: <HomeIcon className="w-4 h-4" />,
    },
    {
      label: physioProfile,
      href: "/physios",
      icon: <ChatIcon className="w-4 h-4" />,
    },
    {
      label: appointments,
      href: "/appointments",
      icon: <ListIcon className="w-4 h-4" />,
    },
    {
      label: profile,
      href: "/profile",
      icon: <UserIcon className="w-4 h-4" />,
    },
  ];
  const [open, setOpen] = useState(true);
  const pathname = usePathname();
  const { data: sessionsData } = useSession();
  const user = sessionsData?.user;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openPopup = Boolean(anchorEl);

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
  if (path.includes("/medical-screening")) {
    return children;
  }

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    toggleLanguage(event.target.value);
  };

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

      {/* Sidebar */}
      <div
        className={`flex flex-col fixed top-0 left-0 h-full z-30 bg-white border-r transition-all duration-300 z-50 ${
          open ? drawerWidth : "w-[60px] md:w-20"
        }`}
      >
        <div className="flex items-center justify-center px-[10px] pt-8 pb-2 sm:px-[16px]">
          <Image src="/images/logo.png" alt="logo" width={120} height={80} />
        </div>

        {/* Menu items */}
        <ul className="flex flex-col space-y-4 py-4 justify-center">
          {menuItems.map((item) => {
            // Check if the current path matches the item's href
            const isActive = pathname === item.href;

            return (
              <li key={item.label}>
                <Link href={item.href}>
                  <button
                    className={`rounded-sm font-medium flex items-start justify-center md:justify-start transform ${
                      isActive
                        ? "rotate-x-[180] border-l-4 border-primary-color "
                        : "hover:rotate-x-[180] hover:border-l-4 hover:border-primary-color "
                    } transition-transform duration-300 w-full `}
                  >
                    <p
                      onClick={handleOnClick}
                      className={`flex items-center space-x-3 mx-9 py-[10px] sm:py-[9px] px-3 md:px-10 ${
                        isActive
                          ? "font-bold text-[15px] text-primary-color bg-primary-color/10"
                          : "hover:font-bold hover:text-[15px] text-gray-700 hover:text-primary-color"
                      } sm:hover:bg-primary-color/10 hover:bg-transparent rounded-md w-full `}
                    >
                      {item.icon}
                      {open && <span>{item.label}</span>}
                    </p>
                  </button>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Logout */}
        <button
          onClick={handleSignout}
          className="mt-[80%] flex items-start justify-center rounded-sm transform hover:rotate-x-[180] hover:border-l-4 hover:border-gray-400 transition-transform duration-300 w-full"
        >
          <a className="flex items-center font-medium space-x-3 mx-10  py-[10px] sm:py-[9px] px-3 md:px-10 hover:font-bold hover:text-[15px] text-gray-700 hover:bg-gray-400/10 hover:text-gray-700 rounded-md w-full">
            <LogoutIcon className="w-5 h-5" />
            {open && <span className="ml-2">{logout}</span>}
          </a>
        </button>
      </div>

      {/* Main Content */}
      <main
        className={`${
          open ? "ml-[300px]" : "ml-[50px] sm:ml-[70px]"
        }  overflow-x-hidden pt-[300px]  py-[35px] sm:py-[50px] min:h-screen bg-primary-color/5 h-full`}
      >
        {children}
      </main>
    </div>
  );
};
