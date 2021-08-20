import React, { useState } from "react";
import "./App.css";

// MATERIAL UI
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

function App() {
  const [count, setCount] = useState<number | any>(0);

  return (
    <Container style={{ textAlign: "center" }} maxWidth="md">
      <Typography variant="h4">Your Counter Is : {count}</Typography>
      <Button
        style={{ margin: 7 }}
        variant="outlined"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </Button>
      <Button
        style={{ margin: 7 }}
        variant="outlined"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </Button>
    </Container>
  );
}

export default App;
