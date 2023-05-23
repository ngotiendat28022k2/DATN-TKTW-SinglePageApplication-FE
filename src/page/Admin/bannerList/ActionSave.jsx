import { Check, Save } from "@mui/icons-material";
import { Box, Button, CircularProgress, Fab } from "@mui/material";
import { green } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import helper from "../../../utiliti/helper/helper";
import { UpdateBanner } from "../../../slice/bannerSlice";

const ActionSave = ({ params, rowId, setRowId }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleSave = () => {
    try {
      setLoading(true);
      // console.log("params", params)
      const { name, avatar } = params.row;
      const data = {
        _id: params.id,
        name,
        avatar
      };
      console.log("data", data)
      setTimeout(async () => {
        const { payload } = await dispatch(UpdateBanner(data));
        if (payload?.successCode) {
          helper.toast("success", "Update successful");
          setSuccess(true);
          setRowId(null);
          setTimeout(() => {
            setSuccess(false);
          }, 3000);
        }
        if (payload?.errorCode) {
          helper.toast("error", "Ppdate failed");
        }
        setLoading(false);
      }, 300);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (rowId === params.id && success) setSuccess(false);
  }, [rowId]);

  return (
    <Box
      sx={{
        m: 1,
        position: "relative",
      }}
    >
      {success ? (
        <Fab
          color="primary"
          sx={{
            width: "40px",
            height: "40px",
            bgcolor: green[500],
            "&:hover": { bgcolor: green[700] },
          }}
        >
          <Check />
        </Fab>
      ) : (
        <Fab
          color="primary"
          sx={{
            width: "40px",
            height: "40px",
          }}
          disabled={params.id !== rowId || loading}
          onClick={handleSave}
        >
          <Save />
        </Fab>
      )}
      {loading && (
        <CircularProgress
          size={52}
          sx={{
            color: green[500],
            position: "absolute",
            top: -6,
            left: -6,
            zIndex: 1,
          }}
        />
      )}
    </Box>
  );
};

export default ActionSave;
