import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import Stack from "@mui/material/Stack";
import { IconChevronDown } from "@tabler/icons-react";
import Logo from "../../logo/Logo";

import AppLinks from "./AppLinks";
import Link from "next/link";

const MobileSidebar = () => {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);

  return (
    <>
      <Box px={3}>
        <Logo />
      </Box>
      <Box p={3}>
        <Stack direction="column" spacing={2}>
          <Button
            color="inherit"
            onClick={() => setToggle2(!toggle2)}
            endIcon={<IconChevronDown width={20} />}
            sx={{
              justifyContent: "space-between",
            }}
          >
            Products
          </Button>
          {toggle2 && (
            <Collapse in={toggle2}>
              <Box overflow="hidden" ml={1}>
                <AppLinks />
              </Box>
            </Collapse>
          )}

          <Button
            color="inherit"
            onClick={() => setToggle(!toggle)}
            endIcon={<IconChevronDown width={20} />}
            sx={{
              justifyContent: "space-between",
            }}
          >
            Resources
          </Button>
          {toggle && (
            <Collapse in={toggle}>
              <Box overflow="hidden" ml={1}>
                <AppLinks />
              </Box>
            </Collapse>
          )}
          <Button
            color="inherit"
            onClick={() => setToggle3(!toggle3)}
            endIcon={<IconChevronDown width={20} />}
            sx={{
              justifyContent: "space-between",
            }}
          >
            Tools
          </Button>
          {toggle3 && (
            <Collapse in={toggle3}>
              <Box overflow="hidden" ml={1}>
                <AppLinks />
              </Box>
            </Collapse>
          )}

          <Button
            color="primary"
            variant="outlined"
            sx={{ borderWidth: "2px", borderStyle: "solid" }}
          >
            Sign In
          </Button>
          <Link href="/StepperForm">
            <Button
              color="success"
              sx={{ color: "black", fontStyle: "bold" }}
              variant="contained"
            >
              Build your site
            </Button>
          </Link>
        </Stack>
      </Box>
    </>
  );
};

export default MobileSidebar;
