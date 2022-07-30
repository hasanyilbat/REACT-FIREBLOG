import * as React from "react";
import Box from "@mui/material/Box";
import { Button, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import blok from "../assets/blok.png";
import { useState } from "react";
import { writeCardData } from "../helpers/functions";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Register() {
  const [title, setTitle] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [content, setContent] = useState("");

  const { currentUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    console.log(title, imageURL, content, currentUser.email);
    e.preventDefault();
    writeCardData(title, imageURL, content, currentUser.email);
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        // height: "600px",
        backgroundColor: "light",
        margin: " auto",
        borderRadius: "1rem",

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
            <span>NEW BLOG</span>
          </h3>
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            id="outlined-error"
            autoFocus
            required
            fullWidth
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            // helperText={title === "" ? "Title is required." : ""}
            sx={{ mb: "1rem" }}
            label="Title"
          />
          <TextField
            id="outlined-error-helper-text"
            // helperText={imageURL === "" ? "Password is required." : ""}
            required
            fullWidth
            onChange={(e) => setImageURL(e.target.value)}
            value={imageURL}
            label="Image URL"
          />
          <TextField
            id="outlined-multiline-static"
            label="Content*"
            multiline
            rows={10}
            fullWidth
            sx={{ mt: 2 }}
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
          <Button
            variant="contained"
            fullWidth
            sx={{ margin: "1rem 0" }}
            type="submit"
          >
            SUBMIT
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
