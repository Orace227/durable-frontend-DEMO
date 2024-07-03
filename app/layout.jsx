"use client";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeSettings } from "./utils/theme/Theme";
import { store } from "./store/store";
import { Provider } from "react-redux";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
// import "tailwindcss/tailwind.css";
import "./styles/globals.css";

import "react-quill/dist/quill.snow.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FormDataProvider } from "./store/useFormData";

export const MyApp = ({ children }) => {
  const theme = ThemeSettings();

  return (
    <>
      <HelmetProvider>
        <div>
          <Helmet>
            <title>Home By Durable</title>
          </Helmet>
        </div>
      </HelmetProvider>
      <ThemeProvider theme={theme}>
        <FormDataProvider>
          <CssBaseline />
          {children}
        </FormDataProvider>
      </ThemeProvider>
    </>
  );
};

export default function RootLayout({ children }) {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => setLoading(true), 300);
  }, []);
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider store={store}>
          {loading ? (
            // eslint-disable-next-line react/no-children-prop
            <MyApp children={children} />
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100vh",
              }}
            >
              <CircularProgress />
            </Box>
          )}
        </Provider>
      </body>
    </html>
  );
}
