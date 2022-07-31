import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import BlogCard from "../components/BlogCard";

const Dashboard = () => {
  return (
    <>
      <Typography
        variant="h5"
        style={{ width: "30rem", margin: "auto", padding: "1rem" }}
      >
        <h2 className="line-through-dashboard bg-success">
          <span>&lt;DASHBOARD/&gt;</span>
        </h2>
      </Typography>
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
    </>
  );
};

export default Dashboard;
