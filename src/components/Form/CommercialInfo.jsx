import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import { PageFunctions } from "../../page/MultiStepForm";
import { useForm } from "react-hook-form";
import { useFormContext } from "../context/FormContext";

const CommercialInfo = () => {
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
        <Typography mb={2} variant="h6">
          What s your commercial registration number?
        </Typography>

        <TextField
          {...register("Q10")}
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

export default CommercialInfo;
