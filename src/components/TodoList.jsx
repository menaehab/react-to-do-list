import { useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Tooltip,
  Stack
} from "@mui/material";

import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddTodo from "./AddTodo";

export default function TodoList() {
  const [alignment, setAlignment] = useState("all");

  const handleChange = (e, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      {/* filter Toggle Button Group */}
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        className="mb-4"
        size="small"
      >
        <ToggleButton value="all">All</ToggleButton>
        <ToggleButton value="completed">Completed</ToggleButton>
        <ToggleButton value="uncompleted">Uncompleted</ToggleButton>
      </ToggleButtonGroup>

      {/* add todo */}
      <AddTodo />

      {/* todo List */}
      <List dense sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}>
        {[0, 1, 2, 3].map((value) => {
          const labelId = `checkbox-list-secondary-label-${value}`;
          return (
            <ListItem
              key={value}
              secondaryAction={
                <Stack direction="row" spacing={1}>
                  <Tooltip title="Done">
                    <IconButton edge="end" aria-label="done" size="small">
                      <DoneIcon color="success" />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Edit">
                    <IconButton edge="end" aria-label="edit" size="small">
                      <EditIcon color="primary" />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Delete">
                    <IconButton edge="end" aria-label="delete" size="small">
                      <DeleteIcon color="error" />
                    </IconButton>
                  </Tooltip>
                </Stack>
              }
              disablePadding
            >
              <ListItemButton>
                <ListItemText className="p-2" id={labelId} primary={`Line item ${value + 1}`} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>


    </>
  );
}
