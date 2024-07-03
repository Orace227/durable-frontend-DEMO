import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Button, Container, Grid } from "@mui/material";
import { motion, useAnimation } from "framer-motion"; // Import motion components
import { useInView } from "react-intersection-observer"; // Import intersection observer hook
import { styled } from "@mui/material/styles";

function OutroCard() {
  const StyledButton = styled(Button)(() => ({
    padding: "13px 48px",
    fontSize: "20px",
    marginTop: "30px",
    backgroundColor: "white",
    color: "black",
  }));

  const controls = useAnimation();
  const { ref, inView } = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <Container maxWidth="lg" className="mt-10">
        <Card sx={{ borderRadius: "16px", backgroundColor: "#4c35de" }}>
          {/* <CardHeader
            title="Try Neweb free today"
            sx={{ color: "#9182f8" }}
          /> */}
          <CardContent>
            <Grid container spacing={2} mt={2} ref={ref}>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: {
                      xs: "32px",
                      md: "50px",
                    },
                    lineHeight: {
                      xs: "40px",
                      md: "56px",
                    },
                    fontFamily: "inter, sans-serif",
                    letterSpacing: "normal",
                    color: "white",
                  }}
                >
                  Try Neweb free today
                </Typography>
                <Typography
                  mt={2}
                  variant="h5"
                  sx={{
                    fontFamily: "inter, sans-serif",
                  }}
                >
                  Build a website and try our AI tools, no credit card required
                </Typography>
                <StyledButton variant="contained" color="primary">
                  Generate your website
                </StyledButton>

                <Typography
                  mt={2}
                  variant="h5"
                  sx={{
                    fontFamily: "inter, sans-serif",
                  }}
                >
                  No credit card required.
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <motion.img
                    src="/images/landingpage/Cards/OutroCard/1.png"
                    className="w-full h-full"
                    alt="Image 1"
                    initial="hidden"
                    animate={controls}
                    variants={{
                      visible: { y: 0, opacity: 1 },
                      hidden: { y: 100, opacity: 0 },
                    }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                  <motion.img
                    src="/images/landingpage/Cards/OutroCard/2.png"
                    className="w-full h-full"
                    alt="Image 2"
                    initial="hidden"
                    animate={controls}
                    variants={{
                      visible: { y: 0, opacity: 1 },
                      hidden: { y: 100, opacity: 0 },
                    }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    style={{
                      position: "absolute",
                      top: -70,
                      left: -5,
                      zIndex: 1,
                    }}
                  />
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

export default OutroCard;
