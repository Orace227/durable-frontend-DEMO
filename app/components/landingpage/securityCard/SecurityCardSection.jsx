import React from "react";
import Card from "../Card";
import { Container, Grid } from "@mui/material";
import SecurityCard from "../SecurityCard";

function SecurityCardSection() {
  return (
    <>
      <Container maxWidth="lg" className="mt-10">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <SecurityCard
              title="SEO"
              heading="Get more traffic with built-in SEO"
              desc="Automatically generate SEO-friendly pages and optimize your site for search engines."
              imgUrl="/images/landingpage/Cards/Card3/1.png"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <SecurityCard
              title="Security"
              heading="Built to scale with world class security"
              desc=" Every site is secured with powerful DDOS protection, SSL, firewall, and a global CDN."
              imgUrl="/images/landingpage/Cards/Card4/1.png"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default SecurityCardSection;
