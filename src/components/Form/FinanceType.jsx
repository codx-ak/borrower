import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Table,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { PageFunctions } from "../../page/MultiStepForm";
import { FormData } from "../context/FormState";

const FinanceType = () => {
  const [PageAdd, PageMin] = useContext(PageFunctions);
  const FormModel = useContext(FormData);

  function handleQ3(data) {
    FormModel.FinanceTypeDt.Q3 = data.target.value;
  }
  return (
    <FormControl className="form-content">
      <Box>
        <Typography variant="h6">What kind of finance you need?</Typography>
        <RadioGroup onChange={handleQ3}>
          <Table>
            <TableRow hover>
              <TableCell>
                <FormControlLabel
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

export default FinanceType;
