import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import React, { useContext,  useState } from "react";
import { PageFunctions } from "../../page/MultiStepForm";

const IncomeInfo = () => {
  const [FinBtn, setFin] = useState("Profit");
  const [priceBtn, setPrice] = useState("SAR 0 - 50k");

  const [PageAdd, PageMin] = useContext(PageFunctions);
  const FormModel = useContext(FormData);

  function handleQ7(data) {
    FormModel.IncomeInfoDt.Q7 = data.target.value;
  }

  return (
    <FormControl>
      <Box>
        <Typography variant="h6">
          What was the turnover from your last filed accounts?
        </Typography>
        <TextField
        onChange={handleQ7}
          label="Amount"
          InputLabelProps={{
            shrink: true,
          }}
          color="success"
          variant="standard"
          required
        />

        <Typography variant="h6">
          In the last financial year, did you make a profit or loss?
        </Typography>

        <Box>
          <Button
            type="button"
            onClick={() => setFin("Profit")}
            variant={FinBtn === "Profit" ? "contained" : "outlined"}
          >
            Profit
          </Button>
          <Button
            type="button"
            onClick={() => setFin("Loss")}
            variant={FinBtn === "Loss" ? "contained" : "outlined"}
          >
            Loss
          </Button>
        </Box>

        <Typography variant="h6">And by how much?</Typography>

        <Box>
          <Button
            type="button"
            onClick={() => setPrice("SAR 0 - 50k")}
            variant={priceBtn === "SAR 0 - 50k" ? "contained" : "outlined"}
          >
            SAR 0 - 50k
          </Button>
          <Button
            type="button"
            onClick={() => setPrice("SAR 50k - 100k")}
            variant={priceBtn === "SAR 50k - 100k" ? "contained" : "outlined"}
          >
            SAR 50k - 100k
          </Button>
          <Button
            type="button"
            onClick={() => setPrice("SAR 100k - 1m")}
            variant={priceBtn === "SAR 100k - 1m" ? "contained" : "outlined"}
          >
            SAR 100k - 1m
          </Button>
          <Button
            type="button"
            onClick={() => setPrice("SAR 1m+")}
            variant={priceBtn === "SAR 1m+" ? "contained" : "outlined"}
          >
            SAR 1m+
          </Button>
        </Box>
      </Box>
      <br />
      <Box className="Form-Btn">
        <Button
          type="button"
          onClick={PageMin}
          sx={{
            background: "#8b8b8b !important",
            fontWeight: "bold",
            borderRadius: 2,
          }}
          variant="contained"
        >
          Back
        </Button>

        <Button
          type="button"
          onClick={PageAdd}
          sx={{
            background: "#12b76a !important",
            fontWeight: "bold",
            borderRadius: 2,
          }}
          variant="contained"
        >
          Next
        </Button>
      </Box>
    </FormControl>
  );
};

export default IncomeInfo;
