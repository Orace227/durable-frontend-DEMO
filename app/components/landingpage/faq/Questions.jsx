import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { IconChevronDown } from "@tabler/icons-react";

const Questions = () => {
  const faqs = [
    {
      question: "What does a Durable website cost?",
      answer:
        "A Starter subscription to Durable starts at $12 per month. A Business subscription starts at $20 per month. Every Durable subscription includes your website, a custom domain, AI Assistant, Invoicing, an AI-powered CRM, and more.",
    },
    {
      question: "Can I use an existing domain with Durable?",
      answer:
        "Yes. You’ll need to adjust a few details with your domain provider, and it takes about five minutes.",
    },
    {
      question: "Can I create an e-commerce website with Durable?",
      answer:
        "While Durable is not designed specifically to support e-commerce businesses, we have had clients launch successful e-commerce businesses on our platform.",
    },
    {
      question: "Are Durable AI generated websites safe?",
      answer:
        "Yes. All Durable domains are hosted on a content delivery network called Cloudflare. We chose Cloudflare because they offer fast and secure SSL generation, firewalls, and excellent protection from all web attacks including DDos.",
    },

    {
      question: "Does a custom domain cost extra?",
      answer:
        "Nope! Custom domains are free with every Durable subscription and take seconds to create.",
    },
    {
      question: "Can I transfer a website to someone else?",
      answer:
        "Yes. You can add additional users to any Durable website. Then, you can change all account and billing settings to transfer your entire website.",
    },
    {
      question: "Can I edit my website's HTML?",
      answer:
        "Durable is a “no code” solution to building websites. Because of that, we don't offer extensive options for HTML customization. But if you have a specific need or request, get in touch with us.",
    },
    {
      question: "Can I keep my custom domain if I want to leave Durable?",
      answer:
        "Yes! When cancelling your account, simply get in touch with us and we'll arrange to have your custom domain transferred to you. Note that it takes a couple of weeks to transfer over.",
    },
  ];

  return (
    <Box>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} lg={8}>
          <Typography variant="h3" textAlign="center" mb={1}>
            Frequently asked questions
          </Typography>
          <Typography
            variant="h6"
            fontWeight={400}
            color="textSecondary"
            textAlign="center"
            mb={4}
          >
            Can't find the answer here? Contact support
          </Typography>
          {faqs.map((faq, index) => (
            <Accordion elevation={9} key={index}>
              <AccordionSummary
                expandIcon={<IconChevronDown />}
                aria-controls={`panel${index + 1}a-content`}
                id={`panel${index + 1}a-header`}
              >
                <Typography variant="h6" px={2} py={1}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <Divider />
              <AccordionDetails>
                <Typography
                  variant="subtitle1"
                  pt={1}
                  px={2}
                  color="textSecondary"
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Questions;
