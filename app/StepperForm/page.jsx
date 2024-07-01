"use client";
import { Container } from "@mui/material";
import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CreateWithAiModal from "./CreateWithAiModal";
import { useFormData } from "../store/useFormData";
import { useRouter } from "next/navigation";
import LpHeader from "../components/LandingPage/header/Header";
import Footer from "../components/LandingPage/footer/Footer";
function StepperForm() {
  const steps = ["websiteType", "Business Name", "Location", "Upload Logo"]; // Updated steps array
  const options = [
    { value: "Business", label: "Business" },
    { value: "Portfolio", label: "Portfolio" },
    { value: "Other", label: "Other" },
  ];
  const { updateCustomer } = useFormData();
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [formValues, setFormValues] = useState({
    websiteType: "",
    location: "",
    businessName: "",
    logo: null, // State to hold the uploaded logo
  });
  const [previewImage, setPreviewImage] = useState(null); // State to preview image

  const fileInputRef = useRef(null); // Reference for file input element

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setFormValues({
      websiteType: "",
      location: "",
      businessName: "",
      logo: null,
    });
    setPreviewImage(null);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleLogoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormValues((prevValues) => ({
        ...prevValues,
        logo: file,
      }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setFormValues((prevValues) => ({
        ...prevValues,
        logo: file,
      }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  const renderFormContent = (step) => {
    switch (step) {
      case 0:
        return (
          <TextField
            select
            sx={{ color: "black" }}
            label="What type of business are you building?"
            value={formValues.websiteType}
            name="websiteType"
            onChange={handleChange}
            fullWidth
            InputProps={{
              sx: {
                "& .MuiSelect-select": {
                  color: "black",
                  paddingRight: "24px", // Adjust to make space for the icon
                },
              },
            }}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        );
      case 1:
        return (
          <TextField
            label="What is the name of your business?"
            value={formValues.businessName}
            name="businessName"
            onChange={handleChange}
            InputProps={{
              sx: {
                color: "black",
              },
            }}
            fullWidth
          />
        );
      case 2:
        return (
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <TextField
              label="Where is your business located?"
              value={formValues.location}
              name="location"
              onChange={handleChange}
              InputProps={{
                sx: {
                  color: "black",
                },
              }}
              fullWidth
            />
            <Button
              variant="contained"
              onClick={handleCurrentLocation}
              color="primary"
              sx={{
                marginLeft: "5px",
              }}
            >
              <LocationOnIcon
                sx={{
                  fontSize: 43,
                  color: "white",
                  width: "20px",
                  height: "36px",
                }}
              />
            </Button>
          </Box>
        );
      case 3:
        return (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, color: "#4936D5" }}>
              Upload Your Logo
            </Typography>
            <Button
              variant="h6"
              sx={{ mb: 2, color: "#4936D5" }}
              onClick={() => {
                setShowModal(true);
              }}
            >
              Create with AI
            </Button>
            {showModal && (
              <CreateWithAiModal
                showModal={showModal}
                setShowModal={setShowModal}
              />
            )}
            <Box
              sx={{
                width: "100%",
                maxWidth: 400,
                border: "2px dashed #ccc",
                borderRadius: 4,
                padding: 2,
                textAlign: "center",
                cursor: "pointer",
                backgroundColor: "#2c2c2c",
                marginBottom: 2,
              }}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={openFileDialog}
            >
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleLogoChange}
                style={{ display: "none" }}
              />
              {previewImage ? (
                <img
                  src={previewImage}
                  alt="Logo Preview"
                  style={{ maxWidth: "100%", maxHeight: 200, borderRadius: 4 }}
                />
              ) : (
                <Box sx={{ textAlign: "center" }}>
                  <CloudUploadIcon sx={{ fontSize: 48, color: "white" }} />
                  <Typography variant="subtitle1" sx={{ color: "white" }}>
                    Drag & Drop or Click to Upload
                  </Typography>
                </Box>
              )}
            </Box>
            {formValues.logo && (
              <Typography sx={{ color: "white" }}>
                File Selected: {formValues.logo.name}
              </Typography>
            )}
          </Box>
        );
      default:
        return null;
    }
  };

  const handleGenerateWebsite = () => {
    console.log("Form Values:", formValues);
    updateCustomer(formValues);
    router.push("/website");
  };

  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBnwJ8WGKD2IIchAhHJM7Vx21Dw_cOPLHU`
          )
            .then((response) => response.json())
            .then((data) => {
              if (data.results && data.results.length > 0) {
                console.log("data.results", data.results);
                const addressComponents = data.results[0].address_components;
                let formattedAddress = "";
                for (let component of addressComponents) {
                  if (component.types.includes("street_number")) {
                    formattedAddress += component.long_name + ", ";
                  } else if (component.types.includes("route")) {
                    formattedAddress += component.long_name + ", ";
                  } else if (
                    component.types.includes("administrative_area_level_3")
                  ) {
                    setFormValues((prevValues) => ({
                      ...prevValues,
                      location: formattedAddress + component.long_name,
                    }));
                    break;
                  }
                }
              }
            })
            .catch((error) => {
              console.error("Error fetching location:", error);
            });
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };
  return (
    <>
      <LpHeader />

      <div className=" overflow-hidden ">
        <Container maxWidth="lg" style={{ overflow: "hidden" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "100vh",
              padding: 3,
            }}
          >
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {
                  sx: { color: "white" },
                };

                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            <Box
              sx={{
                width: "100%",
                maxWidth: 400,
                backgroundColor: "#2c2c2c",
                borderRadius: 2,
                padding: 4,
                boxShadow: 3,
                marginTop: 2,
                bgcolor: "white",
              }}
            >
              <Typography sx={{ mb: 2, color: "black" }}>
                Step {activeStep + 1}
              </Typography>
              {renderFormContent(activeStep)}
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                {activeStep === steps.length - 1 ? (
                  <>
                    <Button
                      color="inherit"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1, color: "#4936D5" }}
                    >
                      Back
                    </Button>
                    <Box sx={{ flex: "1 1 auto" }} />
                    <Button
                      onClick={handleGenerateWebsite}
                      sx={{
                        backgroundColor: "#3f51b5",
                        color: "white",
                        "&:hover": { backgroundColor: "#303f9f" },
                      }}
                      disabled={
                        (activeStep === 0 && !formValues.websiteType) ||
                        (activeStep === 2 && !formValues.location) ||
                        (activeStep === 1 && !formValues.businessName) ||
                        (activeStep === 3 && !formValues.logo)
                      }
                    >
                      Generate Website
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      color="inherit"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1, color: "#4936D5" }}
                    >
                      Back
                    </Button>
                    <Box sx={{ flex: "1 1 auto" }} />
                    <Button
                      onClick={handleNext}
                      sx={{
                        backgroundColor: "#3f51b5",
                        color: "white",
                        "&:hover": { backgroundColor: "#303f9f" },
                      }}
                      disabled={
                        (activeStep === 0 && !formValues.websiteType) ||
                        (activeStep === 2 && !formValues.location) ||
                        (activeStep === 1 && !formValues.businessName) ||
                        (activeStep === 3 && !formValues.logo)
                      }
                    >
                      Next
                    </Button>
                  </>
                )}
              </Box>
            </Box>
            {activeStep === steps.length && (
              <Typography sx={{ mt: 2, mb: 1, color: "white" }}>
                All steps completed - you're finished
              </Typography>
            )}
            {activeStep === steps.length && (
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset} sx={{ color: "white" }}>
                  Reset
                </Button>
              </Box>
            )}
          </Box>
          {/* <Boxes /> */}
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default StepperForm;
