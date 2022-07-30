import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { BlogContext } from "../contexts/BlogContext";
import { Box } from "@mui/system";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Button, ButtonGroup, Container } from "@mui/material";
import { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { deleteData } from "../helpers/functions";

export default function BlogCard() {
  const { cardInfo } = useContext(BlogContext);
  const { id } = useParams();
  const navigate = useNavigate();
  return cardInfo
    .filter((info) => info.id == id)
    .map((filteredInfo, index) => {
      return (
        <Container maxWidth="xl">
          <Card
            sx={{
              overflow: "hidden",
            }}
            key={index}
          >
            <Box
              sx={{
                textAlign: "center",
                "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              <CardMedia
                component="img"
                height="500"
                image={filteredInfo.imageURL}
                alt=""
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
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
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
              onClick={() => navigate(`/update-blog/${id}`)}
            >
              UPDATE
            </Button>
            <Button
              color="error"
              endIcon={<DeleteIcon />}
              onClick={() => deleteData(filteredInfo)}
            >
              DELETE
            </Button>
          </ButtonGroup>
        </Container>
      );
    });
}
