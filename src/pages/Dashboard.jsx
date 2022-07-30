import { Box, Container, Grid } from "@mui/material";
import React from "react";
import BlogCard from "../components/BlogCard";

const Dashboard = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <BlogCard />
    </Container>
  );
};

export default Dashboard;
