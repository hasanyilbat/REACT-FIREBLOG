import * as React from "react";
import Box from "@mui/material/Box";
import { Button, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import blok from "../assets/blok.png";
import google from "../assets/google.png";
import { useState } from "react";
import { signIn } from "../helpers/firebase";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    signIn(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        // height: "600px",
        backgroundColor: "light",
        margin: "60px auto",
        borderRadius: "1rem",
        boxShadow: "5px 8px 5px 5px #090000d6",
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
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            error={!email}
            id="outlined-error"
            label="Email"
            autoFocus
            type="email"
            required
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            helperText={email === "" ? "Email is required." : ""}
            sx={{ mb: "1rem" }}
          />
          <TextField
            error={!password}
            id="outlined-error-helper-text"
            label="Password"
            type="password"
            helperText={password === "" ? "Password is required." : ""}
            required
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Button
            variant="contained"
            fullWidth
            sx={{ margin: "1rem 0" }}
            type="submit"
          >
            LOGIN
          </Button>
          <Button variant="contained" fullWidth color="inherit">
            WITH
            <img
              src={google}
              alt=""
              style={{ height: "1.4rem", marginLeft: "1rem" }}
            />
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
