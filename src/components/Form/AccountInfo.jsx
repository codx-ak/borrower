import {
  Box,
  Button,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { FormData } from "../context/FormState";
import { PageFunctions } from "../../page/MultiStepForm";

const AccountInfo = () => {

  const FormModel = useContext(FormData);
  const [,PageMin] = useContext(PageFunctions);
  function handleQ13(data) {
    FormModel.AccountInfoDt.Q13 = data.target.value;
  }
  function handleQ14(data) {
    FormModel.AccountInfoDt.Q14 = data.target.value;
  }
  function handleQ15(data) {
    FormModel.AccountInfoDt.Q15 = data.target.value;
  }
  function handleQ16(data) {
    FormModel.AccountInfoDt.Q16 = data.target.value;
  }
  function handleSubmit(e){
    e.preventDefault()
    alert("form Submited!")
    console.log(FormModel);
  }
  return (
    <FormControl className="form-content">
      <Box>
      <Typography sx={{ mb: 2 }} variant="h6">
        What s your account details?
      </Typography>
      <Box>
      <TextField
      onChange={handleQ13}
        sx={{ mb: 2 }}
        type="email"
        label="Email"
        InputLabelProps={{
          shrink: true,
        }}
        variant="standard"
        color="success"
        focused={true}
        required
      />
      </Box>
      <Box>
      <TextField
      onChange={handleQ14}
        sx={{ mb: 2 }}
        type="number"
        label="Mobile"
        InputLabelProps={{
          shrink: true,
        }}
        variant="standard"
        color="success"
        required
      />
      </Box>
      <Box>
      <TextField
      type="password"
      onChange={handleQ15}
        sx={{ mb: 2 }}
        label="Password"
        InputLabelProps={{
          shrink: true,
        }}
        variant="standard"
        color="success"
        required
      />
      </Box>
      <Box>
      <TextField
      type="password"
      onChange={handleQ16}
        sx={{ mb: 2 }}
        label="Confirm Password"
        InputLabelProps={{
          shrink: true,
        }}
        variant="standard"
        color="success"
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
          type="submit"
          onClick={handleSubmit}
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

export default AccountInfo;
