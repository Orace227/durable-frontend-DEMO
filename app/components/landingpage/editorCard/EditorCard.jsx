import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Button, Container, Grid } from "@mui/material";
import { motion, useAnimation } from "framer-motion"; // Import motion components
import { useInView } from "react-intersection-observer"; // Import intersection observer hook
import { styled } from "@mui/material/styles";
import { BentoGrid, BentoGridItem } from "../BentoGrid";

export default function EditorCard() {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const StyledButton = styled(Button)(() => ({
    padding: "13px 48px",
    fontSize: "20px",
    marginTop: "30px",
  }));

  const items = [
    {
      img: "/images/landingpage/Cards/EditorCard/3.png",
      className: "md:col-span-2 bg-transparent",
      imgClassName: "w-full",
    },
    {
      img: "/images/landingpage/Cards/EditorCard/4.png",
      className: "md:col-span-1 ",
      imgClassName: "w-full",
    },
    {
      img: "/images/landingpage/Cards/EditorCard/2.png",
      className: "md:col-span-1 ",
      imgClassName: "w-full",
    },
    {
      img: "/images/landingpage/Cards/EditorCard/1.png",
      className: "md:col-span-2 ",
      imgClassName: "w-full",
    },
  ];

  return (
    <Container maxWidth="lg" className="mt-10">
      <Card
        className="flex flex-col justify-center items-center"
        sx={{
          backgroundImage: `url('/images/landingpage/Cards/EditorCard/bg.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: 4, // Adjust padding as needed
          borderRadius: "16px", // Add border radius if desired
          textAlign: "center", // Center align the text
          borderRadius: "16px",
          backgroundColor: "#1f2937",
        }}
      >
        <CardHeader title="Editor" sx={{ color: "#9182f8" }} />
        <CardContent>
          <Box>
            <Typography
              variant="h1"
              className="text-center "
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
              The AI-powered <br />
              website editor
            </Typography>
            <Typography
              mt={2}
              className="text-center"
              variant="h5"
              sx={{
                fontFamily: "inter, sans-serif",
              }}
            >
              Customize your site with testimonials, scheduling, multiple pages{" "}
              <br />
              and built-in components. No code required.
            </Typography>
            <StyledButton variant="contained" color="primary">
              Build your website
            </StyledButton>
          </Box>

          <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] mt-10">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                img={item.img}
                className={item.className}
                imgClassName={item.imgClassName}
              />
            ))}
          </BentoGrid>
          {/* <Grid container spacing={2} mt={2} ref={ref}>
            <motion.img
              src="/images/landingpage/Cards/EditorCard/1.png"
              className="w-[250px] "
              alt="Image 1"
              initial="hidden"
              animate={controls}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 100, opacity: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.6 }}
            />
            <motion.img
              src="/images/landingpage/Cards/EditorCard/2.png"
              className="w-[250px] "
              alt="Image 1"
              initial="hidden"
              animate={controls}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 100, opacity: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.6 }}
            />
            <motion.img
              src="/images/landingpage/Cards/EditorCard/3.png"
              className="w-[250px] "
              alt="Image 1"
              initial="hidden"
              animate={controls}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 100, opacity: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.6 }}
            />
            <motion.img
              src="/images/landingpage/Cards/EditorCard/4.png"
              className="w-[250px] "
              alt="Image 1"
              initial="hidden"
              animate={controls}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 100, opacity: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.6 }}
            />
          </Grid> */}
        </CardContent>
      </Card>
    </Container>
  );
}
