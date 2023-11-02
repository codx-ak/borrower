import {
  Box,
  Button,
  Dialog,
  DialogContent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { PageFunctions } from "../../page/MultiStepForm";
import { useForm } from "react-hook-form";
import { useFormContext } from "../context/FormContext";
import { TiTick } from "react-icons/ti";
const AccountInfo = () => {
  const { register, handleSubmit } = useForm();
  const { updateFormData } = useFormContext();
  const [, PageMin] = useContext(PageFunctions);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (data) => {
    updateFormData(data);
    handleClickOpen();
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
            {...register("Qestion-13")}
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
            {...register("Qestion-14")}
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
            {...register("Qestion-15")}
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
            {...register("Qestion-16")}
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
          Sumbit
        </Button>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 5,
            padding: "50px 100px",
          }}
        >
          <TiTick className="success-svg" />
          Form Submited Successfully!
        </DialogContent>
      </Dialog>
    </form>
  );
};

export default AccountInfo;
