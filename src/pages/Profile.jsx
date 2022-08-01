import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { AuthContext } from "../contexts/AuthContext";

export default function Profile() {
  const { currentUser } = React.useContext(AuthContext);

  return (
    <Card sx={{ maxWidth: 450, margin: "auto", marginTop: "10rem" }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
        ></Typography>
        <Typography variant="p" component="div">
          <img src="" alt="profile" />
        </Typography>
        <Typography
          sx={{ mb: 1.5, mt: 2, fontSize: "0.8rem" }}
          color="text.secondary"
        >
          Display Name
        </Typography>
        <Typography variant="h5" sx={{ mb: 1.5 }} color="text.primary">
          Not Found!
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Email
        </Typography>
        <Typography variant="body2">{currentUser.email}</Typography>
      </CardContent>
    </Card>
  );
}
