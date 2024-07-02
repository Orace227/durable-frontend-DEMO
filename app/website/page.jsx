"use client";
import React from "react";
import { useFormData } from "../store/useFormData";
import { Box, Typography, Avatar, Button, Grid } from "@mui/material";
import Link from "next/link";
import LpHeader from "../components/landingpage/header/Header";
import Footer from "../components/landingpage/footer/Footer";

function Website() {
  const { formData } = useFormData();

  return (
    <>
      <LpHeader />

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="60vh" // Ensure the content takes up the full height of the viewport
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="justify"
          color="black"
          maxWidth="600px" // Adjust the width as needed
          p={4} // Add padding to the content
          bgcolor="#13DEB9" // Set background color to match the theme
          borderRadius={4} // Optional: add border radius for a more card-like appearance
          boxShadow={3} // Optional: add a boxShadow for depth
        >
          {formData && Object.keys(formData).length > 0 ? (
            <>
              <Grid container>
                <Grid item xs={6} display={"flex"} justifyContent={"center"}>
                  <Avatar
                    alt="Logo"
                    src={
                      formData.logo ? URL?.createObjectURL(formData.logo) : ""
                    }
                    sx={{ width: 100, height: 100, marginBottom: 2 }}
                  />
                  <Grid
                    item
                    xs={6}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    marginLeft={"20px"}
                  >
                    <Typography variant="h2" gutterBottom>
                      {formData.businessName}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      {formData.websiteType}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Typography variant="body1" gutterBottom>
                {formData.businessDescription}
              </Typography>
              <Button
                sx={{
                  marginTop: "20px",
                  backgroundColor: "#3f51b5",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  boxShadow: "0 3px 5px 2px rgba(63, 81, 181, .3)",
                  "&:hover": {
                    backgroundColor: "#303f9f",
                    boxShadow: "0 3px 5px 2px rgba(48, 63, 159, .3)",
                  },
                  "&:disabled": {
                    backgroundColor: "#9ea7cf",
                    color: "#cfd4ea",
                    boxShadow: "none",
                  },
                }}
              >
                View Website
              </Button>
            </>
          ) : (
            <Box>
              <Typography variant="body1" gutterBottom>
                No data available
              </Typography>
              <Link href="/StepperForm">
                <Typography variant="body1" color="primary">
                  Fill up the form
                </Typography>
              </Link>
            </Box>
          )}
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default Website;
