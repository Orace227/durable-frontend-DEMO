import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import BannerContent from "./BannerContent";
import Image from "next/image";

const Banner = () => {
  return (
    <Box mt={10} mb={5}>
      <Container
        maxWidth="lg"
        sx={{
          overflow: "hidden",
          backgroundImage:
            'url("https://cdn.prod.website-files.com/632df91dd7c99c0ac992c47b/646f57c3e2678f5765457fb3_Lightingbolt-bg-dark%20(1).png")', // Change this to your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "60vh", // Adjust the height as needed
        }}
      >
        <BannerContent />
      </Container>
    </Box>
  );
};

export default Banner;
