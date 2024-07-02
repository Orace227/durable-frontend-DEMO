"use client";
import React from "react";
import { useFormData } from "../store/useFormData";
import { Box, Typography, Avatar, Button } from "@mui/material";
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
        minHeight="100vh" // Ensure the content takes up the full height of the viewport
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          maxWidth="600px" // Adjust the width as needed
          p={4} // Add padding to the content
          bgcolor="background.success" // Set background color to match the theme
          borderRadius={4} // Optional: add border radius for a more card-like appearance
          boxShadow={3} // Optional: add a boxShadow for depth
        >
          {formData && Object.keys(formData).length > 0 ? (
            <>
              <Avatar
                alt="Logo"
                src={formData.logo ? URL.createObjectURL(formData.logo) : ""}
                sx={{ width: 100, height: 100, marginBottom: 2 }}
              />
              <Typography variant="h5" gutterBottom>
                {formData.businessName}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Website Type: {formData.websiteType}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {formData.businessDescription}
              </Typography>
              <Button variant="body1" gutterBottom>
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
