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
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { PageFunctions } from "../../page/MultiStepForm";
import { useForm } from "react-hook-form";
import { useFormContext } from "../context/FormContext";

const FinanceType = () => {
  const { register, handleSubmit } = useForm();
  const { updateFormData } = useFormContext();
  const [PageAdd, PageMin] = useContext(PageFunctions);

  const onSubmit = (data) => {
    updateFormData(data);
    PageAdd()
  };
  return (
    <form action="" method="post" className="form-content" onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <Typography variant="h6">What kind of finance you need?</Typography>
        <RadioGroup>
          <Table>
            <TableBody>
            <TableRow hover>
              <TableCell>
                <FormControlLabel
                {...register("Q3")}
                  value="inventory"
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
                  label="Inventory"
                />
              </TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>
                <FormControlLabel
                {...register("Q3")}
                  value="pos"
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
                  label="POS"
                />
              </TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>
                <FormControlLabel
                {...register("Q3")}
                  value="term"
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
                  label="Term"
                />
              </TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>
                <FormControlLabel
                {...register("Q3")}
                  value="invoice"
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
                  label="Invoice"
                />
              </TableCell>
            </TableRow>
            </TableBody>
          </Table>
        </RadioGroup>
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

export default FinanceType;
