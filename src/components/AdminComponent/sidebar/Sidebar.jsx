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
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CategoryIcon from "@mui/icons-material/Category";
import { Link } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";

export default function Sidebar() {
    const [open, setOpen] = useState(false);
    const [activeDiv, setActiveDiv] = useState("");
    const handleOpen = () => {
        setOpen(!open);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleActive = (divId) => {
        switch (divId) {
            case "admin":
                setActiveDiv(divId);
                break;
            case "user-client":
                setActiveDiv(divId);
                break;
            case "user-admin":
                setActiveDiv(divId);
                break;
            case "products":
                setActiveDiv(divId);
                break;
            case "categories":
                setActiveDiv(divId);
                break;
            case "publishs":
                setActiveDiv(divId);
                break;
            case "supplieres":
                setActiveDiv(divId);
                break;
            case "voucher":
                setActiveDiv(divId);
                break;
            case "author":
                setActiveDiv(divId);
                break;

            default:
                setActiveDiv(divId === activeDiv ? "" : divId);
                break;
        }
    };

    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarWrapper}>
                <div className={styles.sidebarMenu}>
                    <p id="demo"></p>
                    <ul className={styles.sidebarList}>
                        <Link to="/admin" className={styles.link}>
                            <li
                                className={styles.sidebarListItem}
                                onClick={() => handleActive("admin")}
                                style={{
                                    backgroundColor:
                                        activeDiv === "admin" ? "#5a8d26" : "",
                                }}
                            >
                                <Home className={styles.sidebarIcon} />
                                Home
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className={styles.sidebarMenu}>
                    <ul className={styles.sidebarList}>
                        {/* <Link to="/admin/user" className={styles.link}> */}
                        <li
                            onClick={handleOpen}
                            className={`mb-1 ${styles.sidebarListItem}`}
                        >
                            <PermIdentity className={styles.sidebarIcon} />
                            Users
                        </li>
                        {/* </Link> */}
                        <div className={`pl-5 ${open ? "block" : "hidden"}`}>
                            <div
                                className={`mb-1 ${styles.sidebarListItem}`}
                                onClick={() => handleActive("user-admin")}
                                style={{
                                    backgroundColor:
                                        activeDiv === "user-admin"
                                            ? "#5a8d26"
                                            : "",
                                }}
                            >
                                <Link
                                    to="/admin/user/root"
                                    className={styles.link}
                                >
                                    <PermIdentity
                                        className={styles.sidebarIcon}
                                    />
                                    Users Admin
                                </Link>
                            </div>
                            <div
                                className={`mb-1 ${styles.sidebarListItem}`}
                                onClick={() => handleActive("user-client")}
                                style={{
                                    backgroundColor:
                                        activeDiv === "user-client"
                                            ? "#5a8d26"
                                            : "",
                                }}
                            >
                                <Link
                                    to="/admin/user/client"
                                    className={styles.link}
                                >
                                    <PermIdentity
                                        className={styles.sidebarIcon}
                                    />
                                    Users Client
                                </Link>
                            </div>
                        </div>
                        <Link
                            to="/admin/products"
                            className={styles.link}
                            onClick={handleClose}
                        >
                            <li
                                className={`mb-1 ${styles.sidebarListItem}`}
                                onClick={() => handleActive("products")}
                                style={{
                                    backgroundColor:
                                        activeDiv === "products"
                                            ? "#5a8d26"
                                            : "",
                                }}
                            >
                                <Storefront className={styles.sidebarIcon} />
                                Products
                            </li>
                        </Link>
                        <Link
                            to="/admin/categories"
                            className={styles.link}
                            onClick={handleClose}
                        >
                            <li
                                className={`mb-1 ${styles.sidebarListItem}`}
                                onClick={() => handleActive("categories")}
                                style={{
                                    backgroundColor:
                                        activeDiv === "categories"
                                            ? "#5a8d26"
                                            : "",
                                }}
                            >
                                <CategoryIcon className={styles.sidebarIcon} />
                                Categories
                            </li>
                        </Link>
                        <Link
                            to="/admin/publishs"
                            className={styles.link}
                            onClick={handleClose}
                        >
                            <li
                                className={`mb-1 ${styles.sidebarListItem}`}
                                onClick={() => handleActive("publishs")}
                                style={{
                                    backgroundColor:
                                        activeDiv === "publishs"
                                            ? "#5a8d26"
                                            : "",
                                }}
                            >
                                <BusinessCenterIcon
                                    className={styles.sidebarIcon}
                                />
                                Publishing
                            </li>
                        </Link>
                        <Link
                            to="/admin/supplieres"
                            className={styles.link}
                            onClick={handleClose}
                        >
                            <li
                                className={`mb-1 ${styles.sidebarListItem}`}
                                onClick={() => handleActive("supplieres")}
                                style={{
                                    backgroundColor:
                                        activeDiv === "supplieres"
                                            ? "#5a8d26"
                                            : "",
                                }}
                            >
                                <SupervisorAccountIcon
                                    className={styles.sidebarIcon}
                                />
                                Supplieres
                            </li>
                        </Link>
                        <Link
                            to="/admin/voucher"
                            className={styles.link}
                            onClick={handleClose}
                        >
                            <li
                                className={`mb-1 ${styles.sidebarListItem}`}
                                onClick={() => handleActive("voucher")}
                                style={{
                                    backgroundColor:
                                        activeDiv === "voucher"
                                            ? "#5a8d26"
                                            : "",
                                }}
                            >
                                <SupervisorAccountIcon
                                    className={styles.sidebarIcon}
                                />
                                Voucher
                            </li>
                        </Link>
                        <Link to="/admin/author" onClick={handleClose}>
                            <li
                                className={`mb-1 ${styles.sidebarListItem}`}
                                onClick={() => handleActive("author")}
                                style={{
                                    backgroundColor:
                                        activeDiv === "author" ? "#5a8d26" : "",
                                }}
                            >
                                <BarChart className={styles.sidebarIcon} />
                                Author
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className={styles.sidebarMenu}>
                    <ul className={styles.sidebarList}>
                        <li className={`mb-1 ${styles.sidebarListItem}`}>
                            <DynamicFeed className={styles.sidebarIcon} />
                            Feedback
                        </li>
                        <li className={`mb-1 ${styles.sidebarListItem}`}>
                            <ChatBubbleOutline className={styles.sidebarIcon} />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className={styles.sidebarMenu}>
                    <ul className={styles.sidebarList}>
                        <li className={`mb-1 ${styles.sidebarListItem}`}>
                            <WorkOutline className={styles.sidebarIcon} />
                            Page
                        </li>
                        <li className={`mb-1 ${styles.sidebarListItem}`}>
                            <Timeline className={styles.sidebarIcon} />
                            Analytics
                        </li>
                        <li className={`mb-1 ${styles.sidebarListItem}`}>
                            <Report className={styles.sidebarIcon} />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
