import {
  Box,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { PageFunctions } from "../../page/MultiStepForm";
import { useForm } from "react-hook-form";
import { useFormContext } from "../context/FormContext";

const BusinessActivities = () => {
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
        <Typography sx={{ padding: "0 !important" }} variant="h6">
          What best describes your business activity?
        </Typography>
        <RadioGroup>
          <Table sx={{ mb: 1 }}>
            <TableBody>
              <TableRow hover>
                <TableCell>
                  <FormControlLabel
                    {...register("Qestion-10")}
                    value="Trading"
                    labelPlacement="start"
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: "#26ad8e",
                          },
                        }}
                      />
                    }
                    label="Trading"
                  />
                </TableCell>
              </TableRow>
              <TableRow hover>
                <TableCell>
                  <FormControlLabel
                    {...register("Qestion-10")}
                    value="Manufacturing"
                    labelPlacement="start"
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: "#26ad8e",
                          },
                        }}
                      />
                    }
                    label="Manufacturing"
                  />
                </TableCell>
              </TableRow>
              <TableRow hover>
                <TableCell>
                  <FormControlLabel
                    {...register("Qestion-10")}
                    value="Wholesale"
                    labelPlacement="start"
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: "#26ad8e",
                          },
                        }}
                      />
                    }
                    label="Wholesale"
                  />
                </TableCell>
              </TableRow>
              <TableRow hover>
                <TableCell>
                  <FormControlLabel
                    {...register("Qestion-10")}
                    value="Retail"
                    labelPlacement="start"
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: "#26ad8e",
                          },
                        }}
                      />
                    }
                    label="Retail"
                  />
                </TableCell>
              </TableRow>
              <TableRow hover>
                <TableCell>
                  <FormControlLabel
                    {...register("Qestion-10")}
                    value="Restaurants"
                    labelPlacement="start"
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: "#26ad8e",
                          },
                        }}
                      />
                    }
                    label="Restaurants"
                  />
                </TableCell>
              </TableRow>
              <TableRow hover>
                <TableCell>
                  <FormControlLabel
                    {...register("Qestion-10")}
                    value="Contracting"
                    labelPlacement="start"
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: "#26ad8e",
                          },
                        }}
                      />
                    }
                    label="Contracting"
                  />
                </TableCell>
              </TableRow>
              <TableRow hover>
                <TableCell>
                  <FormControlLabel
                  {...register("Qestion-10")}
                    value="Others"
                    labelPlacement="start"
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: "#26ad8e",
                          },
                        }}
                      />
                    }
                    label="Others"
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </RadioGroup>
        <TextField
          {...register("Qestion-11")}
          type="text"
          label="Please specify"
          InputLabelProps={{
            shrink: true,
          }}
          color="success"
          variant="standard"
          required
        />
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

export default BusinessActivities;
