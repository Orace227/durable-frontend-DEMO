import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { IconChevronDown } from "@tabler/icons-react";
import AppLinks from "./AppLinks";
import { Divider, Grid, Paper } from "@mui/material";
import Link from "next/link";

const Navigations = () => {
  const StyledButton = styled(Button)(({ theme }) => ({
    fontSize: "16px",
    color: theme.palette.text.success,
  }));

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // pages

  const [open2, setOpen2] = useState(false);

  const handleOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const [open3, setOpen3] = useState(false);

  const handleOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  return (
    <>
      <StyledButton
        onMouseEnter={handleOpen2}
        onMouseLeave={handleClose2}
        color="inherit"
        variant="text"
        sx={{
          color: (theme) => theme.palette.text.success,
        }}
        endIcon={
          <IconChevronDown
            size="15"
            style={{ marginLeft: "-5px", marginTop: "2px" }}
          />
        }
      >
        Products
      </StyledButton>
      {open2 && (
        <Paper
          onMouseEnter={handleOpen2}
          onMouseLeave={handleClose2}
          sx={{
            position: "absolute",
            left: "1",
            right: "0",
            top: "55px",
            width: "700px",
            margin: "0 auto",
          }}
        >
          <Grid container>
            <Grid item sm={12}>
              <Box p={4}>
                <AppLinks />
              </Box>
            </Grid>
          </Grid>
        </Paper>
      )}
      <Box>
        <StyledButton
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
          color="inherit"
          variant="text"
          sx={{
            color: (theme) => theme.palette.text.success,
          }}
          endIcon={
            <IconChevronDown
              size="15"
              style={{ marginLeft: "-5px", marginTop: "2px" }}
            />
          }
        >
          Resources
        </StyledButton>
      </Box>
      {open && (
        <Paper
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
          sx={{
            position: "absolute",
            left: "1",
            right: "0",
            top: "55px",
            width: "700px",
            margin: "0 auto",
          }}
        >
          <Grid container>
            <Grid item sm={12}>
              <Box p={4}>
                <AppLinks />
              </Box>
            </Grid>
          </Grid>
        </Paper>
      )}
      <Box>
        <StyledButton
          onMouseEnter={handleOpen3}
          onMouseLeave={handleClose3}
          color="inherit"
          variant="text"
          sx={{
            color: (theme) => theme.palette.text.success,
          }}
          endIcon={
            <IconChevronDown
              size="15"
              style={{ marginLeft: "-5px", marginTop: "2px" }}
            />
          }
        >
          Tools
        </StyledButton>
      </Box>
      {open3 && (
        <Paper
          onMouseEnter={handleOpen3}
          onMouseLeave={handleClose3}
          sx={{
            position: "absolute",
            left: "1",
            right: "0",
            top: "55px",
            width: "700px",
            margin: "0 auto",
          }}
        >
          <Grid container>
            <Grid item sm={12}>
              <Box p={4}>
                <AppLinks />
              </Box>
            </Grid>
          </Grid>
        </Paper>
      )}
      <Button
        color="primary"
        variant="outlined"
        sx={{ borderWidth: "2px", borderStyle: "solid" }}
      >
        Sign In
      </Button>
      <Link href="/StepperForm">
      <Button
        color="success"
        variant="contained"
        sx={{ color: "black", fontStyle: "bold" }}
        
        >
        Build your site
      </Button>
        </Link>
    </>
  );
};

export default Navigations;
