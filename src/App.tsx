import React, { useState } from "react";
import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const Calculator1: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const handleButtonClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      // eslint-disable-next-line no-eval
      const evalResult = eval(input);
      setResult(evalResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <Container className="flex justify-center items-center h-screen">
      <Paper className="p-6 w-full max-w-md">
        <Typography variant="h4" className="mb-4 text-center">
          Calculator
        </Typography>
        <TextField
          variant="outlined"
          fullWidth
          value={input}
          className="mb-4"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          variant="outlined"
          fullWidth
          value={result}
          className="mb-4"
          InputProps={{
            readOnly: true,
          }}
        />
        <Grid container spacing={2}>
          {[
            "7",
            "8",
            "9",
            "/",
            "4",
            "5",
            "6",
            "*",
            "1",
            "2",
            "3",
            "-",
            "0",
            ".",
            "=",
            "+",
          ].map((value) => (
            <Grid item xs={3} key={value}>
              <Button
                variant="contained"
                fullWidth
                className="h-16"
                onClick={() =>
                  value === "=" ? handleCalculate() : handleButtonClick(value)
                }
              >
                {value}
              </Button>
            </Grid>
          ))}
          <Grid item xs={6}>
            <Button
              variant="contained"
              fullWidth
              className="h-16"
              onClick={handleClear}
            >
              Clear
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Calculator1;
