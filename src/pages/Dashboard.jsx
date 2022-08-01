import { Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import CircleLoader from "react-spinners/CircleLoader";
import BlogCard from "../components/BlogCard";

const Dashboard = () => {
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);

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
        {/* {loading ? (
          <CircleLoader color={"#0BD1FA"} loading={loading} size={150} />
        ) : (
          <BlogCard />
        )} */}
        <BlogCard />
      </Container>
    </>
  );
};

export default Dashboard;
