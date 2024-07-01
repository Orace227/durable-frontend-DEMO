import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TestimonialTitle from "./TestimonialTitle";
import AnimationFadeIn from "../animation/Animation";

//Carousel slider for product
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderData = [
  {
    title: "Alice Johnson",
    subtitle: "Modern Living Room Set",
    avatar: "/images/profile/user-1.jpg",
    subtext:
      "Rentify made it easy to furnish my apartment with their stylish and affordable living room set. The process was seamless and the furniture looks amazing!",
  },
  {
    title: "Michael Lee",
    subtitle: "Office Furniture Package",
    avatar: "/images/profile/user-2.jpg",
    subtext:
      "The quality and design of the office furniture from Rentify are top-notch. Highly recommend!",
  },
  {
    title: "Sara Martinez",
    subtitle: "Bedroom Suite",
    avatar: "/images/profile/user-3.jpg",
    subtext:
      "I love the bedroom suite I rented from Rentify. The furniture is modern and comfortable, and it has transformed my space into a cozy retreat.",
  },
  {
    title: "David Kim",
    subtitle: "Dining Room Set",
    avatar: "/images/profile/user-4.jpg",
    subtext:
      "The dining room set I rented from Rentify exceeded my expectations. The rental process was straightforward and hassle-free.",
  },
  {
    title: "Linda Brown",
    subtitle: "Outdoor Furniture",
    avatar: "/images/profile/user-5.jpg",
    subtext:
      "Rentify’s outdoor furniture has elevated my patio’s look. I’m very satisfied with my rental experience!",
  },
  {
    title: "James Smith",
    subtitle: "Home Office Setup",
    avatar: "/images/profile/user-6.jpg",
    subtext:
      "Renting my home office setup from Rentify was a great decision. The furniture is functional and aesthetically pleasing.",
  },
];

const Testimonial = () => {
  const [value, setValue] = React.useState(5);

  const settings = {
    className: "testimonial-slider",
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay speed in milliseconds (e.g., 3000 = 3 seconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box pt={14} pb={11}>
      <Container maxWidth="lg">
        <TestimonialTitle />
        <Box mt={5}>
          <AnimationFadeIn>
            <Slider {...settings}>
              {SliderData.map((slider, index) => (
                <Box p="15px" key={index}>
                  <CardContent>
                    <Stack direction="row">
                      <Avatar
                        src={slider.avatar}
                        alt="user"
                        sx={{ width: 40, height: 40 }}
                      />
                      <Box ml={2}>
                        <Typography variant="h6">{slider.title}</Typography>
                        <Typography color="textSecondary" variant="subtitle1">
                          {slider.subtitle}
                        </Typography>
                      </Box>
                      <Box ml="auto">
                        <Rating
                          size="small"
                          name="simple-controlled"
                          value={value}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                        />
                      </Box>
                    </Stack>
                    <Typography fontSize="15px" color="textSecondary" mt={3}>
                      {slider.subtext}
                    </Typography>
                  </CardContent>
                </Box>
              ))}
            </Slider>
          </AnimationFadeIn>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonial;
