import * as React from "react";
import PropTypes from "prop-types";
// @mui
import { styled, useTheme } from "@mui/material/styles";
import {
    AppBar,
    Box,
    IconButton,
    Stack,
    Toolbar,
    Typography,
} from "@mui/material";
// import MenuIcon from "@mui/icons-material";
// utils
import { bgBlur } from "../../../utils/cssStyles";
// components
import Iconify from "../../../components/AdminComponent/iconify";
//
import AccountPopover from "./AccountPopover";
import LanguagePopover from "./LanguagePopover";
import NotificationsPopover from "./NotificationsPopover";
import MenuIcon from "@mui/icons-material/Menu";

// ----------------------------------------------------------------------

const HEADER_MOBILE = 64;

const StyledRoot = styled(AppBar)(({ theme }) => ({
    backgroundColor: "#8baf67",
    position: "static",
    boxShadow: "none",
    [theme.breakpoints.up("lg")]: {
        width: `100%`,
    },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    minHeight: HEADER_MOBILE,
    position: "relative",
    [theme.breakpoints.up("lg")]: {
        minHeight: 55,
        padding: theme.spacing(0, 5),
    },
}));

// ----------------------------------------------------------------------

Header.propTypes = {
    onOpenNav: PropTypes.func,
};

export default function Header() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    return (
        <div>
            <Box sx={{ flexGrow: 1 }} />

            <Stack
                direction="row"
                alignItems="center"
                spacing={{
                    xs: 0.5,
                    sm: 1,
                }}
            >
                <LanguagePopover />
                {/* <NotificationsPopover /> */}
                <AccountPopover />
            </Stack>
        </div>

        //   </StyledToolbar>
        // </StyledRoot>
    );
}
