import {
  Box,
  Button,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { PageFunctions } from "../../page/MultiStepForm";
import { FormData } from "../context/FormState";

const CommercialInfo = () => {
  const [PageAdd, PageMin] = useContext(PageFunctions);
  const FormModel = useContext(FormData);

  function handleQ12(data) {
    FormModel.CommercialInfoDt.Q12 = data.target.value;
  }
  return (
    <FormControl className="form-content">
      <Box>
      <Typography mb={2} variant="h6">
        What s your commercial registration number?
      </Typography>

      <TextField
      onChange={handleQ12}
      type="number"
        label="CR number"
        InputLabelProps={{
          shrink: true,
        }}
        focused={true}
        color="success"
        variant="standard"
        required
      />
      <Typography mt={2} fontSize={20} variant="h6">
        نيدلاب يعامجلا ليومتلل ةيمقر ةكرش
      </Typography>
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

export default CommercialInfo;
