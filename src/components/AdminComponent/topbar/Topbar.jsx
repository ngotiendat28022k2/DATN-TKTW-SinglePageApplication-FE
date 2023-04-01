import React from "react";
import styles from "./topbar.module.css";
// import { NotificationsNone, Language, Settings,  } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import Language from "@mui/icons-material/Language";
import Settings from "@mui/icons-material/Settings";
import { Avatar } from "@mui/material";

export default function Topbar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.topbarWrapper}>
        <div className={styles.topLeft}>
          <span className={styles.logo}>ShopBanSach</span>
        </div>
        <div className={styles.topRight}>
          <div className={styles.topbarIconContainer}>
            <Badge color="secondary" badgeContent={1}>
              <MailIcon />
            </Badge>
          </div>
          <div className={styles.topbarIconContainer}>
            <Badge color="secondary" badgeContent={1}>
              <Language />
            </Badge>
          </div>
          <div className={styles.topbarIconContainer}>
            <Avatar sx={{ width: 24, height: 24 }}>
              <Settings color="black" />
            </Avatar>
          </div>
          <Avatar
            className={styles.logo}
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          />
        </div>
      </div>
    </div>
  );
}
