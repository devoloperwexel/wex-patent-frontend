"use client";

import Link from "next/link";
import { useState, MouseEvent } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Menu,
  MenuItem,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import ContainedButton from "../ui/ContainedButton";
import { useRouter } from "next/navigation";
import { useLanguage } from "hooks/useLanguage";
import { lngs } from "i18n/language1";

const Header = () => {
  const router = useRouter();
  const [anchorElService, setAnchorElService] = useState<null | HTMLElement>(
    null
  );
  const { language, toggleLanguage } = useLanguage();

  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    toggleLanguage(event.target.value);
  };

  const handleOpenServiceMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElService(event.currentTarget);
  };

  const handleCloseServiceMenu = () => {
    router.push("/dashboard");
    setAnchorElService(null);
  };

  const handleLogin = () => {
    router.push("/signin");
  };

  const handleSignup = () => {
    router.push("/signup");
  };

  const {
    home,
    service,
    bookAppointment,
    about,
    pricing,
    blog,
    contact,
    signUp,
    login,
  } = lngs[language.toLowerCase() as keyof typeof lngs].home;

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#ffffff", paddingY: 2, paddingX: 4 }}
    >
      <Toolbar>
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", mr: 5 }}>
          <Link href="/">
            <Image
              alt="logo"
              src="/images/logo.png"
              width={90}
              height={52}
              priority
            />
          </Link>
        </Box>

        {/* Menu Items */}
        <Box sx={{ display: "flex", flexGrow: 1, alignItems: "center" }}>
          <Link href="/" style={{ marginRight: 36, fontSize: 17 }}>
            {home}
          </Link>

          <Link
            href={"#"}
            onClick={handleOpenServiceMenu}
            style={{ marginRight: 36, fontSize: 17 }}
          >
            {service}
          </Link>
          <Menu
            anchorEl={anchorElService}
            open={Boolean(anchorElService)}
            onClose={handleCloseServiceMenu}
          >
            <MenuItem onClick={handleCloseServiceMenu}>
              {bookAppointment}
            </MenuItem>
          </Menu>

          <Link href="/about" style={{ marginRight: 36, fontSize: 17 }}>
            {about}
          </Link>
          <Link href="/pricing" style={{ marginRight: 36, fontSize: 17 }}>
            {pricing}
          </Link>
          <Link href="/blog" style={{ marginRight: 36, fontSize: 17 }}>
            {blog}
          </Link>
          <Link href="/contact">{contact}</Link>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton color="inherit" sx={{ mr: 2 }}>
            <SearchIcon sx={{ color: "#3D565F" }} />
          </IconButton>

          <FormControl sx={{ mr: 2 }}>
            <Select
              value={language}
              onChange={handleLanguageChange}
              sx={{
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
              MenuProps={{
                PaperProps: { sx: { bgcolor: "background.paper" } },
              }}
            >
              <MenuItem value="EN">EN</MenuItem>
              <MenuItem value="DE">DE</MenuItem>
            </Select>
          </FormControl>

          <ContainedButton
            sx={{ mr: 2, width: 120, height: 48 }}
            onClick={handleSignup}
          >
            {signUp}
          </ContainedButton>
          <Button
            variant="outlined"
            color="error"
            sx={{ width: 120, height: 48, textTransform: "none" }}
            onClick={handleLogin}
          >
            {login}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
