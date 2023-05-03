import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import local from "../../utiliti/local/local";
import { Button } from "@mui/material";
const AccessDenied = () => {
  const user = local.get("user");
  return (
    <div className={styles.body}>
      <div className={styles.app}>
        <div>403</div>
        <div class={styles.txt}>
          Forbidden<span class="blink">_</span> <br />
          {user ? (
            <Button
              variant="contained"
              color="error"
              sx={{ marginTop: "20px" }}
            >
              <Link to="/home">Home</Link>
            </Button>
          ) : (
            <Button
              variant="contained"
              color="error"
              sx={{ marginTop: "20px" }}
            >
              <Link to="/login">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccessDenied;
