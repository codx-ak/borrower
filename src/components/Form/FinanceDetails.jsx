import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import { PageFunctions } from "../../page/MultiStepForm";
import { FormData } from "../context/FormState";

const FinanceDetails = () => {
  const [PageAdd, PageMin] = useContext(PageFunctions);
  const FormModel = useContext(FormData);

  function handleQ4(data) {
    FormModel.FinanceDetailDt.Q4 = data.target.value;
  }
  function handleQ5(data) {
    FormModel.FinanceDetailDt.Q5 = data.target.value;
  }
  function handleQ6(data) {
    FormModel.FinanceDetailDt.Q6 = data.target.value;
  }
  return (
    <FormControl className="form-content">
      <Box>
        <Typography variant="h6">How much finance do you need?</Typography>
        <Box>
        <TextField
          sx={{ marginBottom: 3 }}
          type="number"
          onChange={handleQ4}
          label="Finance period (In months)"
          InputLabelProps={{
            shrink: true,
          }}
          color="success"
          variant="standard"
          required
        />
        </Box>
        <Box>

        <TextField
        type="number"
        onChange={handleQ5}
          label="Finance amount "
          sx={{ marginBottom: 3 }}
          InputLabelProps={{
            shrink: true,
          }}
          color="success"
          variant="standard"
          required
        />
        </Box>
        <Box>
        <TextField
        type="text"
        onChange={handleQ6}
          label="Finance reason"
          sx={{ marginBottom: 3 }}
          InputLabelProps={{
            shrink: true,
          }}
          color="success"
          variant="standard"
          required
        />
        </Box>
      </Box>
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

export default FinanceDetails;
