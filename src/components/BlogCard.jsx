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
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
export default function BlogCard() {
  const { cardInfo } = useContext(BlogContext);
  const navigate = useNavigate();

  return cardInfo.map((card, index) => {
    const { id } = card;
    return (
      <Card
        sx={{ width: 320, height: 430, m: 3, overflow: "hidden" }}
        onClick={() => navigate(`details/${id}`)}
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
          <CardMedia component="img" height="194" image={card.imgURL} alt="" />
          <CardContent>
            <Typography variant="h6" color="text.primary">
              {card.title}
            </Typography>
            <Typography
              sx={{ height: 80 }}
              variant="body2"
              color="text.secondary"
            >
              {card.content}
            </Typography>
          </CardContent>
        </Box>
        <Typography
          sx={{ textAlign: "center" }}
          variant="h6"
          color="text.secondary"
        >
          {card.email}
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
    );
  });
}
