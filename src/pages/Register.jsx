import * as React from "react";
import Box from "@mui/material/Box";
import { Button, FormControl, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import blok from "../assets/blok.png";
import { blue } from "@mui/material/colors";

export default function Register() {
  const error = false;
  const fullWidth = true;

  return (
    <Container
      sx={{
        width: "480px",
        // height: "600px",
        backgroundColor: "light",
        margin: "60px auto",
        borderRadius: "1rem",
        boxShadow: "3px 8px 5px 5px #090000d6",
        padding: "2rem",
      }}
    >
      <Box>
        <Typography
          variant="p"
          component="div"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <a href="#">
            <img
              src={blok}
              alt=""
              style={{
                height: "8rem",
                padding: "2rem",
                borderRadius: "50%",
                // border: "2px solid red",
                background: "#046582",
              }}
            />
          </a>
        </Typography>
        <Typography
          variant="p"
          sx={{
            display: "flex",
            justifyContent: "center",
            color: "#1976d2",
            margin: "1rem 0rem",
          }}
        >
          <h3 className="line-through-register">
            <span>Register</span>
          </h3>
        </Typography>
        <form style={{ width: "360px", margin: "auto" }}>
          <TextField
            error={error}
            id="outlined-error"
            label="Error"
            autoFocus
            helperText="Email is required."
            required
            fullWidth
          />
          <TextField
            error={error}
            id="outlined-error-helper-text"
            label="Error"
            helperText="Password is required."
            required
            fullWidth
          />
          <Button variant="contained" fullWidth sx={{ margin: "1rem 0" }}>
            LOGIN
          </Button>
          <Button variant="contained" fullWidth color="error">
            WITH GOOGLE
          </Button>
        </form>
      </Box>
    </Container>
  );
}
