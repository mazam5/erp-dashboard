import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";
function StatBox({ title, subtitle, icon, progress, increase }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box width={"100%"} m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100], mt: "10px" }}
          >
            {title}
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: colors.greenAccent[500], mt: "10px" }}
          >
            {subtitle}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} size="40" />
          <Typography
            variant="h5"
            fontStyle="italic"
            sx={{ color: colors.greenAccent[600], mt: "10px" }}
          >
            {increase}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default StatBox;
