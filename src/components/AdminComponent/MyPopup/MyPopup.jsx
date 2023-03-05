import React from "react";
import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import Controls from "../controls/Controls";
import CloseIcon from "@mui/icons-material/Close";

const MyPopup = (props) => {
  const { title, children, openPopup, setOpenPopup } = props;
  return (
    <div>
      <Dialog open={openPopup} maxWidth="lg">
        <DialogTitle>
          <div style={{ display: "flex" }}>
            <Typography variant="h6" component={"div"} style={{ flexGrow: 1 }}>
              {title}
            </Typography>
            <Controls.ActionButton
              color="secondary"
              onClick={() => {
                setOpenPopup(false);
              }}
            >
              <CloseIcon />
            </Controls.ActionButton>
          </div>
        </DialogTitle>

        <DialogContent dividers>{children}</DialogContent>
      </Dialog>
    </div>
  );
};

export default MyPopup;
