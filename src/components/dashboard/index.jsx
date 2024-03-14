import { Box } from "@mui/material";
import React from "react";
import Header from "../global/Header";

function Dashboard() {
  return (
    <Box mx="20px">
      <Box>
        <Header title="Dashboard" subtitle="Welcome to the dashboard" />
      </Box>
    </Box>
  );
}

export default Dashboard;
