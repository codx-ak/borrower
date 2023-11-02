import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import { PageFunctions } from "../../page/MultiStepForm";
import { useForm } from "react-hook-form";
import { useFormContext } from "../context/FormContext";

const FinanceDetails = () => {
  const { register, handleSubmit } = useForm();
  const { updateFormData } = useFormContext();
  const [PageAdd, PageMin] = useContext(PageFunctions);

  const onSubmit = (data) => {
    updateFormData(data);
    PageAdd();
  };

  return (
    <form
      action=""
      method="post"
      className="form-content"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box>
        <Typography variant="h6">How much finance do you need?</Typography>
        <Box>
          <TextField
            {...register("Q4")}
            sx={{ marginBottom: 3 }}
            type="number"
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
            {...register("Q5")}
            type="number"
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
            {...register("q6")}
            type="text"
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

export default FinanceDetails;
