import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { BlogContext } from "../contexts/BlogContext";
import { Box } from "@mui/system";
import { useNavigate, useParams } from "react-router-dom";
import { Button, ButtonGroup, Container } from "@mui/material";
import { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { deleteData } from "../helpers/functions";
import { AuthContext } from "../contexts/AuthContext";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

export default function BlogCard() {
  const { cardInfo } = useContext(BlogContext);
  const { currentUser } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(cardInfo);
  return cardInfo
    .filter((info) => info.id == id)
    .map((filteredInfo, index) => {
      return (
        <Container maxWidth="xl">
          <Typography
            variant="h5"
            style={{ width: "30rem", margin: "auto", padding: "1rem" }}
          >
            <h2 className="line-through-dashboard bg-success">
              <span>&lt;DETAILS/&gt;</span>
            </h2>
          </Typography>
          <Card
            sx={{
              overflow: "hidden",
            }}
            key={index}
          >
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <CardMedia
                component="img"
                height="500"
                image={filteredInfo.imgURL}
                alt=""
                sx={{
                  backgroundPosition: "center",
                  objectFit: "cover",
                  backgroundSize: "cover",
                }}
              />
              <CardContent>
                <Typography variant="h6" color="text.primary">
                  {filteredInfo.title}
                </Typography>
                <Typography
                  // sx={{ height: 80 }}
                  variant="body2"
                  color="text.secondary"
                >
                  {filteredInfo.content}
                </Typography>
              </CardContent>
            </Box>
            <Typography
              sx={{ textAlign: "center" }}
              variant="h6"
              color="text.secondary"
            >
              {filteredInfo.email}
            </Typography>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ChatBubbleOutlineIcon />
              </IconButton>
            </CardActions>
          </Card>
          {filteredInfo.email === currentUser.email && (
            <ButtonGroup
              disableElevation
              variant="contained"
              size="large"
              sx={{
                display: "flex",
                justifyContent: "space-around",
                mt: 3,
              }}
            >
              <Button
                color="primary"
                endIcon={<EditIcon />}
                onClick={() =>
                  navigate(`/update-blog/${id}`, { state: filteredInfo })
                }
              >
                UPDATE
              </Button>
              <Button
                color="error"
                endIcon={<DeleteIcon />}
                onClick={() => deleteData(filteredInfo, navigate)}
              >
                DELETE
              </Button>
            </ButtonGroup>
          )}
        </Container>
      );
    });
}
