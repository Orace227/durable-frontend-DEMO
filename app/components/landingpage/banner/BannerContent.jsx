import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/material/styles";

// third party
import { motion } from "framer-motion";

const StyledButton = styled(Button)(() => ({
  padding: "13px 48px",
  fontSize: "16px",
}));

const BannerContent = () => {
  const lgDown = useMediaQuery((theme) => theme.breakpoints.down("lg"));

  return (
    <Box
      mt={lgDown ? 8 : 4}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <motion.div
        initial={{ opacity: 0, translateY: 550 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 30,
        }}
      >
        <Typography
          variant="h2"
          fontWeight={900}
          sx={{
            fontSize: {
              xs: "32px",
              md: "70px",
            },
            lineHeight: {
              xs: "40px",
              md: "80px",
            },
            fontFamily: "Cahuenga, sans-serif",
            letterSpacing: "-0.72px",
            color: "white",
          }}
        >
          Build a website
          <br />
          in 30 seconds using
          <br />
          artificial intelligence
        </Typography>
      </motion.div>
      <Box pt={4} pb={3}>
        <motion.div
          initial={{ opacity: 0, translateY: 550 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 30,
            delay: 0.2,
          }}
        >
          <Typography variant="h5" fontWeight={100}>
            Get your business online today with the #1 AI website builder.
          </Typography>
        </motion.div>
      </Box>
      <motion.div
        initial={{ opacity: 0, translateY: 550 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 30,
          delay: 0.4,
        }}
      >
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mt={3}>
          <StyledButton variant="contained" color="primary">
            Get Started
          </StyledButton>
        </Stack>
      </motion.div>
    </Box>
  );
};

export default BannerContent;
