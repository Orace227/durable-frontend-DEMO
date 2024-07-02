"use client";
import { Container, FormControl, InputLabel } from "@mui/material";
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
import LpHeader from "../components/landingpage/header/Header";
import Footer from "../components/landingpage/footer/Footer";
import CustomSelect from "../components/stepperForm/CustomSelect";
import { MultiStepLoader } from "./MultiStepLoader";

function StepperForm() {
  const steps = [
    "websiteType",
    "Business Name",
    "Upload Logo",
    "Business Description",
  ]; // Updated steps array
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
    businessDescription: "",
    businessName: "",
    logo: null, // State to hold the uploaded logo
  });
  const [previewImage, setPreviewImage] = useState(null); // State to preview image
  const [showStepLoader, setShowStepLoader] = useState(false); // State to preview image

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
      businessDescription: "",
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, color: "#4936D5" }}>
              Type of your business
            </Typography>
            <FormControl fullWidth>
              <InputLabel style={{ color: "#000000" }}>
                What type of business are you building?
              </InputLabel>
              <CustomSelect
                value={formValues.websiteType}
                name="websiteType"
                onChange={handleChange}
                label="What type of business are you building?"
              >
                {options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </CustomSelect>
            </FormControl>
          </Box>
        );
      case 1:
        return (
          <>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" sx={{ mb: 2, color: "#4936D5" }}>
                Name of your business
              </Typography>
              <TextField
                label="What is the name of your Business?"
                value={formValues.businessName}
                name="businessName"
                onChange={handleChange}
                InputProps={{
                  sx: {
                    color: "black",
                    "& .MuiInputBase-input": {
                      backgroundColor: "transparent", // Ensure transparent background
                      WebkitBoxShadow: "none", // Remove any webkit box shadow
                      WebkitTextFillColor: "initial", // Use initial text fill color
                    },
                  },
                }}
                fullWidth
              />
            </Box>
          </>
        );
      case 2:
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
                // backgroundColor: "#13DEB9",

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
                  <CloudUploadIcon sx={{ fontSize: 48, color: "#4936D5" }} />
                  <Typography variant="subtitle1" sx={{ color: "#4936D5" }}>
                    Drag & Drop or Click to Upload
                  </Typography>
                </Box>
              )}
            </Box>
            {formValues.logo && (
              <Typography sx={{ color: "black" }}>
                File Selected: {formValues.logo.name}
              </Typography>
            )}
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
              Description of your business
            </Typography>
            <TextField
              label="Enter your Business description"
              value={formValues.businessDescription}
              name="businessDescription"
              onChange={handleChange}
              InputProps={{
                sx: {
                  color: "black",
                  padding: "0", // Set padding to 0 to remove it
                },
              }}
              multiline
              rows={4} // Adjust the number of rows as needed
              fullWidth
            />
          </Box>
        );

      default:
        return null;
    }
  };

  const handleGenerateWebsite = () => {
    console.log("Form Values:", formValues);
    updateCustomer(formValues);
    setShowStepLoader(true);
    setTimeout(() => {
      setShowStepLoader(false);
      router.push("/website");
    }, 6000);
  };
  const loadingStates = [
    { text: "Step 1: Loading data..." },
    { text: "Step 2: Processing information..." },
    { text: "Step 3: Rendering content..." },
  ];

  return (
    <>
      <LpHeader />
      {showStepLoader && (
        <MultiStepLoader
          loadingStates={loadingStates}
          loading={showStepLoader}
          duration={2000}
          loop={true}
        />
      )}
      <div className=" overflow-hidden ">
        <Container maxWidth="lg" style={{ overflow: "hidden" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginTop: "10px",
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
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "50vh",
              padding: 3,
            }}
          >
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
              <Typography
                variant="h3"
                display={"flex"}
                justifyContent={"center"}
                sx={{ mb: 2, color: "black" }}
              >
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
                        (activeStep === 1 && !formValues.businessName) ||
                        (activeStep === 2 && !formValues.logo) ||
                        (activeStep === 3 && !formValues.businessDescription)
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
                      disabled={
                        (activeStep === 0 && !formValues.websiteType) ||
                        (activeStep === 1 && !formValues.businessName) ||
                        (activeStep === 2 && !formValues.logo) ||
                        (activeStep === 3 && !formValues.businessDescription)
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
