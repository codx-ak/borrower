import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import { PageFunctions } from "../../page/MultiStepForm";
import { useForm } from "react-hook-form";
import { useFormContext } from "../context/FormContext";

const AccountInfo = () => {
  const { register, handleSubmit } = useForm();
  const { updateFormData } = useFormContext();
  const [, PageMin] = useContext(PageFunctions);

  const onSubmit = (data) => {
    updateFormData(data);
    alert("Form Sumitted!");
  };
  return (
    <form
      action=""
      method="post"
      className="form-content"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box>
        <Typography sx={{ mb: 2 }} variant="h6">
          What s your account details?
        </Typography>
        <Box>
          <TextField
            {...register("Q11")}
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
            {...register("Q12")}
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
            {...register("Q13")}
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
            {...register("Q14")}
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
    </form>
  );
};

export default AccountInfo;
