import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Link from "next/link";
import React from "react";

const AppLinks = () => {
  const appsLink = [
    {
      href: "/",
      title: "AI Website Builder",
      subtext: "Build a business website in seconds",
      avatar: "/images/svgs/icon-dd-chat.svg",
    },
    {
      href: "/",
      title: "CRM",
      subtext: "Keep track of all your customers in one place",
      avatar: "/images/svgs/icon-dd-cart.svg",
    },
    {
      href: "/",
      title: "Invoicing",
      subtext: "Send online invoices and get paid faster",
      avatar: "/images/svgs/icon-dd-invoice.svg",
    },
    {
      href: "/",
      title: "AI Assistant",
      subtext: "Ask questions and complete admin tasks with AI",
      avatar: "/images/svgs/icon-dd-date.svg",
    },
    {
      href: "/",
      title: "AI Blog Builder",
      subtext: "Create a blog with dozens of posts using AI",
      avatar: "/images/svgs/icon-dd-mobile.svg",
    },
    {
      href: "/",
      title: "AI Brand Builder",
      subtext: "Build your brand identity in seconds",
      avatar: "/images/svgs/icon-dd-lifebuoy.svg",
    },
  ];

  return (
    <Grid container spacing={3} mb={4}>
      {appsLink.map((links, index) => (
        <Grid item lg={6} key={index}>
          <Link href={links.href} className="hover-text-primary">
            <Stack direction="row" spacing={2}>
              <Box
                minWidth="45px"
                height="45px"
                bgcolor="grey.100"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Avatar
                  src={links.avatar}
                  alt={links.avatar}
                  sx={{
                    width: 24,
                    height: 24,
                    borderRadius: 0,
                  }}
                />
              </Box>
              <Box>
                <Typography
                  variant="subtitle2"
                  fontWeight={600}
                  color="textPrimary"
                  noWrap
                  className="text-hover"
                  sx={{
                    width: "240px",
                  }}
                >
                  {links.title}
                </Typography>
                <Typography
                  color="textSecondary"
                  variant="subtitle2"
                  fontSize="12px"
                  sx={{
                    width: "240px",
                  }}
                  noWrap
                >
                  {links.subtext}
                </Typography>
              </Box>
            </Stack>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default AppLinks;
