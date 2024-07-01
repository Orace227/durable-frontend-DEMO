import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { motion, useAnimation } from "framer-motion"; // Import motion components
import { useInView } from "react-intersection-observer"; // Import intersection observer hook

export default function SecurityCard({ title, desc, heading,imgUrl }) {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Card sx={{ borderRadius: "16px", backgroundColor: "#1f2937" }}>
      <CardHeader title={title} sx={{ color: "#9182f8" }} />
      <CardContent>
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
          {heading}
        </Typography>
        <Typography
          mt={2}
          variant="h5"
          sx={{
            fontFamily: "inter, sans-serif",
          }}
        >
          {desc}
        </Typography>

        <Grid container spacing={2} mt={2} ref={ref}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <motion.img
                  src={imgUrl}
                  className="w-full h-full"
                  alt="Image 1"
                  initial="hidden"
                  animate={controls}
                  variants={{
                    visible: { y: 0, opacity: 1 },
                    hidden: { y: 100, opacity: 0 },
                  }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
