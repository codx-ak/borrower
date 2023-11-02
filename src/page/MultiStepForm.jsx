import { Box, Card, Typography } from "@mui/material";
import React, { createContext, useState } from "react";
import "./formpage.css";
import MainForm from "../components/Form/MainForm";
export const PageFunctions = createContext();
const MultiStepForm = () => {
  const [page, setPage] = useState(1);

  function PageAdd() {
    setPage((value) => value + 1);
  }
  function PageMin() {
    setPage((value) => value - 1);
  }
  return (
    <main className="form-page">
      <Card className="form-container" variant="outlined">
        <Box className="left-steps">
          <Typography color="gray" variant="h6">
            Borrower registration
          </Typography>
          <Box>
            <Typography
              aria-current={page === 1}
              className={page > 1 ? "completed" : ""}
              component="p"
            >
              Financial Info
            </Typography>
            <Typography
              aria-current={page === 2}
              className={page > 2 ? "completed" : ""}
              component="p"
            >
              Finance Type
            </Typography>
            <Typography
              aria-current={page === 3}
              className={page > 3 ? "completed" : ""}
              component="p"
            >
              Finance Details
            </Typography>
            <Typography
              aria-current={page === 4}
              className={page > 4 ? "completed" : ""}
              component="p"
            >
              Income Info
            </Typography>
            <Typography
              aria-current={page === 5}
              className={page > 5 ? "completed" : ""}
              component="p"
            >
              Business Activities
            </Typography>
            <Typography
              aria-current={page === 6}
              className={page > 6 ? "completed" : ""}
              component="p"
            >
              commercial info
            </Typography>
            <Typography
              aria-current={page === 7}
              className={page > 7 ? "completed" : ""}
              component="p"
            >
              Account info
            </Typography>
          </Box>
        </Box>
        <Box className="right-form">
          <PageFunctions.Provider value={[PageAdd, PageMin]}>
            <MainForm value={page} />
          </PageFunctions.Provider>
        </Box>
      </Card>
    </main>
  );
};

export default MultiStepForm;
