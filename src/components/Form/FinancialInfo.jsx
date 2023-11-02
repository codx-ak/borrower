import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { PageFunctions } from "../../page/MultiStepForm";
import { FormData } from "../context/FormState";

const FinancialInfo = () => {
  const [PageAdd] = useContext(PageFunctions);
  const FormModel = useContext(FormData);

  function handleQ1(data) {
    FormModel.FinancialInfoDt.Q1 = data.target.value;
  }
  function handleQ2(data) {
    FormModel.FinancialInfoDt.Q2 = data.target.value;
  }
  return (
    <FormControl className="form-content">
      <Box>
        <Typography variant="h6">
          Are you in business for more than two years ?
        </Typography>
        <RadioGroup onChange={handleQ1} row>
          <FormControlLabel
            value="yes"
            control={
              <Radio
                sx={{
                  "&.Mui-checked": {
                    color: "#26ad8e",
                  },
                }}
              />
            }
            label="Yes"
          />
          <FormControlLabel
            value="no"
            control={
              <Radio
                sx={{
                  "&.Mui-checked": {
                    color: "#26ad8e",
                  },
                }}
              />
            }
            label="No"
          />
        </RadioGroup>

        <Typography variant="h6">
          Do you have financial statement for the past 2 years?
        </Typography>
        <RadioGroup onChange={handleQ2} row>
          <FormControlLabel
            value="yes"
            control={
              <Radio
                sx={{
                  "&.Mui-checked": {
                    color: "#26ad8e",
                  },
                }}
              />
            }
            label="Yes"
          />
          <FormControlLabel
            value="no"
            control={
              <Radio
                sx={{
                  "&.Mui-checked": {
                    color: "#26ad8e",
                  },
                }}
              />
            }
            label="No"
          />
        </RadioGroup>
      </Box>
      <Box sx={{ alignSelf: "flex-end" }}>
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

export default FinancialInfo;
