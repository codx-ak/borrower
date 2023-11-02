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
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { PageFunctions } from "../../page/MultiStepForm";
import { FormData } from "../context/FormState";

const BusinessActivities = () => {
  const [PageAdd, PageMin] = useContext(PageFunctions);
  const FormModel = useContext(FormData);

  function handleQ10(data) {
    FormModel.BusinessActivitieDt.Q10 = data.target.value;
  }
  function handleQ11(data) {
    FormModel.BusinessActivitieDt.Q11 = data.target.value;
  }
  return (
    <FormControl className="form-content">
      <Box>
        <Typography sx={{padding:'0 !important'}} variant="h6">
          What best describes your business activity?
        </Typography>
        <RadioGroup onChange={handleQ10}>
          <Table sx={{ mb: 1 }}>
            <TableRow hover>
              <TableCell>
                <FormControlLabel
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
          </Table>
        </RadioGroup>
        <TextField
        onChange={handleQ11}
        type="number"
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

export default BusinessActivities;
