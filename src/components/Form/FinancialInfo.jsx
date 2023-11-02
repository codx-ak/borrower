import {
  Box,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { PageFunctions } from "../../page/MultiStepForm";
import { useContext } from "react";
import { useFormContext } from "../context/FormContext";

 const FinanceForm = () => {
  const { register, handleSubmit } = useForm();
  const { updateFormData } = useFormContext();
  const [PageAdd] = useContext(PageFunctions);

  const onSubmit = (data) => {
    updateFormData(data);
    PageAdd()
  };

  return (
    <form action="" method="post" className="form-content" onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <Typography variant="h6">
          Are you in business for more than two years ?
        </Typography>
        <RadioGroup row>
          <FormControlLabel
          {...register("Qestion-1")}
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
          {...register("Qestion-1")}
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
        <RadioGroup row>
          <FormControlLabel
          {...register("Qestion-2")}
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
          {...register("Qestion-2")}
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
          type="sumbit"
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

export default FinanceForm