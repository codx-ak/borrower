import { Box, Button, FormControlLabel, Radio, RadioGroup, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import React, { useContext, useState,} from "react";
import { PageFunctions } from "../../page/MultiStepForm";
import { useForm } from "react-hook-form";
import { useFormContext } from "../context/FormContext";

const IncomeInfo = () => {
  const { register, handleSubmit } = useForm();
  const { updateFormData } = useFormContext();
  const [PageAdd, PageMin] = useContext(PageFunctions);
  const [FinBtn,setFin]=useState('Profit')
  const [priceBtn,setPrice]=useState('SAR 0 - 50k')
  const onSubmit = (data) => {
    updateFormData(data);
    PageAdd()
  };
  return (
    <form action="" method="post" className="form-content" onSubmit={handleSubmit(onSubmit)}>
      <Box className='income'>
        <Typography variant="h6">
          What was the turnover from your last filed accounts?
        </Typography>
        <TextField
        {...register('Qestion-7')}
        type="number"
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
          <TextField sx={{opacity:0}} {...register('Qestion-8')} type="hidden" value={FinBtn}/>
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
          <TextField sx={{opacity:0}} {...register('Qestion-9')} type="hidden" value={priceBtn}/>
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

export default IncomeInfo;
