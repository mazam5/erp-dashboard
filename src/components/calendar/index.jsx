import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { orders } from "../../data";
import { tokens } from "../../theme";
import Header from "../global/Header";

function MyCalendar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mx="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Calendar" subtitle="Manage your calendar here" />
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Box
          flex="1 1 20%"
          bgcolor={colors.primary[400]}
          p="15px"
          borderRadius={"4px"}
        >
          <Typography variant="h6">Delivery Schedule</Typography>
          <List>
            {orders.map((event, index) => (
              <ListItem
                key={index}
                sx={{
                  "&:hover": {
                    bgcolor: colors.greenAccent[800],
                  },
                  backgroundColor: colors.greenAccent[700],
                  borderRadius: "2px",
                  margin: "10px 0",
                }}
              >
                <ListItemText
                  primary={
                    <Typography variant="h5" fontWeight={"bold"}>
                      {event.items.map((item) => item.name).join(", ")} -{" "}
                      {event.customer}
                    </Typography>
                  }
                  secondary={
                    <Typography>
                      {formatDate(event.deliveryDate, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
            }}
            events={orders.map((event) => {
              return {
                title: event.customer,
                start: event.deliveryDate,
              };
            })}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default MyCalendar;
