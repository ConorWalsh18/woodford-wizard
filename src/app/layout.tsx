import "@/styles/globals.css";
import { ReactNode } from "react";
import ThemeRegistry from "../theme/ThemeRegistry";
import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";

export const metadata = {
  title: "My App",
  description: "A Next.js app with Material UI",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </head>
      <body>
        <Navbar />

        <Container>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="flex-start"
            minHeight="calc(100vh - 64px)"
            paddingTop={2}
          >
            <ThemeRegistry>{children}</ThemeRegistry>
          </Box>
        </Container>
      </body>
    </html>
  );
}
