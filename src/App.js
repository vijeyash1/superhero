import "./App.css";
import React, { useState } from "react";

import { Typography } from "@mui/material";
import { Input } from "@mui/material";
import { InputLabel, Button } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
function App() {
  const [name, setname] = useState("");
  const [age, setage] = useState(0);
  const [height, setheight] = useState(0);
  const [power, setpower] = useState("");
  const [display, setdisplay] = useState(false);
  console.log(`${name}`);

  return (
    <div>
      <div className="App">
        <Typography color="text.primary">Build a hero</Typography>
        <InputLabel
          color="secondary"
          style={{ marginBottom: "20px", marginTop: "20px" }}
          name="name"
        >
          Name
        </InputLabel>
        <Input
          type="text"
          color="primary"
          name="name"
          style={{ marginLeft: "30px" }}
          onChange={(e) => setname(e.target.value)}
        />

        <InputLabel
          color="secondary"
          name="age"
          style={{ marginBottom: "20px", marginTop: "20px" }}
        >
          Age
        </InputLabel>
        <Input
          type="number"
          color="secondary"
          name="age"
          style={{ marginLeft: "30px" }}
          onChange={(e) => setage(e.target.value)}
        />

        <InputLabel
          color="secondary"
          name="height"
          style={{ marginBottom: "20px", marginTop: "20px" }}
        >
          height
        </InputLabel>
        <Input
          type="number"
          color="primary"
          name="height"
          style={{ marginLeft: "30px" }}
          onChange={(e) => setheight(e.target.value)}
        />

        <InputLabel
          color="success"
          name="superpower"
          style={{ marginBottom: "20px", marginTop: "20px" }}
        >
          superPower
        </InputLabel>
        <Input
          type="text"
          color="primary"
          name="superpower"
          style={{ marginLeft: "30px" }}
          onChange={(e) => setpower(e.target.value)}
        />
      </div>
      <Button
        onClick={() => setdisplay((e) => !e)}
        variant="contained"
        color="secondary"
        style={{
          marginBottom: "20px",
          marginTop: "40px",
          marginLeft: "500px",
        }}
      >
        Display Character
      </Button>
      <div>
        {display && (
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem alignItems="flex-start">
              <ListItemText
                primary="Your Super Hero Name is :  "
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {name}
                    </Typography>{" "}
                  </React.Fragment>
                }
              />
            </ListItem>

            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemText
                primary="Your Super Hero Age is :  "
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {age}
                    </Typography>{" "}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemText
                primary="Your Super Hero Height is :  "
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {height}
                    </Typography>{" "}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemText
                primary="Your Super Hero SuperPower is :  "
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {power}
                    </Typography>{" "}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        )}
      </div>
    </div>
  );
}

export default App;
