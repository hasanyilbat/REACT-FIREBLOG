import * as React from "react";
import { styled } from "@mui/material/styles";
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

export default function BlogCard() {
  const { cardInfo } = React.useContext(BlogContext);

  console.log(cardInfo);
  return cardInfo.map((card) => {
    return (
      <Box>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" height="194" image={card.imgURL} alt="" />
          <CardContent>
            <Typography variant="h6" color="text.primary">
              {card.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {card.content}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Box>
    );
  });
}
