import styles from "./sidebar.module.css";
import {
  Home,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  Badge,
} from "@mui/icons-material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CategoryIcon from "@mui/icons-material/Category";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarWrapper}>
        <div className={styles.sidebarMenu}>
          <p id="demo"></p>
          <ul className={styles.sidebarList}>
            <Link to="/admin" className={styles.link}>
              <li className={styles.sidebarListItem}>
                <Home className={styles.sidebarIcon} />
                Home
              </li>
            </Link>
            <li className={styles.sidebarListItem}>
              <Timeline className={styles.sidebarIcon} />
              Analytics
            </li>
            <li className={styles.sidebarListItem}>
              <TrendingUp className={styles.sidebarIcon} />
              Sales
            </li>
          </ul>
        </div>
        <div className={styles.sidebarMenu}>
          <ul className={styles.sidebarList}>
            <Link to="/admin/users" className={styles.link}>
              <li className={styles.sidebarListItem}>
                <PermIdentity className={styles.sidebarIcon} />
                Users
              </li>
            </Link>
            <Link to="/admin/products" className={styles.link}>
              <li className={styles.sidebarListItem}>
                <Storefront className={styles.sidebarIcon} />
                Products
              </li>
            </Link>
            <Link to="/admin/categories" className={styles.link}>
              <li className={styles.sidebarListItem}>
                <CategoryIcon className={styles.sidebarIcon} />
                Categories
              </li>
            </Link>
            <Link to="/admin/employees" className={styles.link}>
              <li className={styles.sidebarListItem}>
                <Badge className={styles.sidebarIcon} />
                Employees
              </li>
            </Link>
            <Link to="/admin/publishs" className={styles.link}>
              <li className={styles.sidebarListItem}>
                <BusinessCenterIcon className={styles.sidebarIcon} />
                Publishing
              </li>
            </Link>
            <li className={styles.sidebarListItem}>
              <BarChart className={styles.sidebarIcon} />
              Reports
            </li>
          </ul>
        </div>
        <div className={styles.sidebarMenu}>
          <ul className={styles.sidebarList}>
            <li className={styles.sidebarListItem}>
              <MailOutline className={styles.sidebarIcon} />
              Mail
            </li>
            <li className={styles.sidebarListItem}>
              <DynamicFeed className={styles.sidebarIcon} />
              Feedback
            </li>
            <li className={styles.sidebarListItem}>
              <ChatBubbleOutline className={styles.sidebarIcon} />
              Messages
            </li>
          </ul>
        </div>
        <div className={styles.sidebarMenu}>
          <ul className={styles.sidebarList}>
            <li className={styles.sidebarListItem}>
              <WorkOutline className={styles.sidebarIcon} />
              Manage
            </li>
            <li className={styles.sidebarListItem}>
              <Timeline className={styles.sidebarIcon} />
              Analytics
            </li>
            <li className={styles.sidebarListItem}>
              <Report className={styles.sidebarIcon} />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
