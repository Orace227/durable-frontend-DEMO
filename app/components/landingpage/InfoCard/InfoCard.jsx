import React from "react";
import Card from "../Card";
import { Container, Grid } from "@mui/material";

function InfoCard() {
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card
              title="Analytics + Domain"
              desc="Your Neweb website comes with hosting, analytics, and a custom
          domain name."
              heading="Everything you need to get online"
              imgUrl={false}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              title="Images + Icons"
              desc="Automatically add professional images and icons to make your site stand out."
              heading="Access millions of professional photos"
              imgUrl={true}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default InfoCard;
