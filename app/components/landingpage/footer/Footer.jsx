import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Logo from "../../logo/Logo";

const Footer = () => {
  const links = [
    {
      category: "Product",
      items: [
        { text: "AI Assistant", href: "/" },
        { text: "CRM", href: "/" },
        { text: "Invoicing", href: "/" },
        { text: "Pricing", href: "/" },
        { text: "Website builder", href: "/" },
      ],
    },
    {
      category: "Support",
      items: [
        { text: "Blog", href: "/" },
        { text: "Perks", href: "/" },
        { text: "State guides", href: "/" },
        { text: "Industries", href: "/" },
        { text: "Starter guides", href: "/" },
        { text: "Website templates", href: "/" },
        { text: "AI tools", href: "/" },
      ],
    },
    {
      category: "Company",
      items: [
        { text: "About", href: "/" },
        { text: "Affiliate program", href: "/" },
        { text: "Careers", href: "/" },
        { text: "Newsletter", href: "/" },
        { text: "Privacy policy", href: "/" },
        { text: "Support", href: "/" },
        { text: "Terms of service", href: "/" },
      ],
    },
  ];

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} justifyContent="center" mt={4}>
        {/* Left side: Logo */}
        <Grid item xs={12} sm={5} lg={4} textAlign="center">
          <Logo />
        </Grid>

        {/* Right side: Quick Links */}
        <Grid item xs={12} sm={7} lg={8}>
          <Grid container spacing={3} justifyContent="flex-end">
            {links.map((linkGroup) => (
              <Grid
                item
                xs={12}
                sm={4}
                textAlign="left"
                key={linkGroup.category}
              >
                <Typography variant="h6" gutterBottom>
                  {linkGroup.category}
                </Typography>
                {linkGroup.items.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    color="textSecondary"
                    sx={{ display: "block", mb: 1 }}
                  >
                    {item.text}
                  </Link>
                ))}
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Bottom Center: Rights Reserved */}
        <Grid item xs={12} textAlign="center">
          <Typography fontSize="16" color="textSecondary" mt={1} mb={4}>
            ©2024 All rights reserved by Neweb.ai, Inc.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
