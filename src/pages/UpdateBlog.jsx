import * as React from "react";
import Box from "@mui/material/Box";
import { Button, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import blok from "../assets/blok.png";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useParams } from "react-router-dom";
import { UpdateCardData } from "../helpers/functions";
export default function BlogForm() {
  const { id } = useParams();
  const [editTitle, setEditTitle] = useState("");
  const [editImageURL, setEditImageURL] = useState("");
  const [editContent, setEditContent] = useState("");
  const { currentUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    console.log(editTitle, editImageURL, editContent, currentUser.email, id);
    e.preventDefault();

    UpdateCardData(editTitle, editImageURL, editContent, currentUser.email, id);
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
            <span>UPDATE BLOG</span>
          </h3>
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            id="outlined-error"
            autoFocus
            required
            fullWidth
            onChange={(e) => setEditTitle(e.target.value)}
            value={editTitle}
            // helperText={title === "" ? "Title is required." : ""}
            sx={{ mb: "1rem" }}
            label="Title"
          />
          <TextField
            id="outlined-error-helper-text"
            // helperText={imageURL === "" ? "Password is required." : ""}
            required
            fullWidth
            onChange={(e) => setEditImageURL(e.target.value)}
            value={editImageURL}
            label="Image URL"
          />
          <TextField
            id="outlined-multiline-static"
            label="Content*"
            multiline
            rows={10}
            fullWidth
            sx={{ mt: 2 }}
            onChange={(e) => setEditContent(e.target.value)}
            value={editContent}
          />
          <Button
            variant="contained"
            fullWidth
            sx={{ margin: "1rem 0" }}
            type="submit"
          >
            UPDATE
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
