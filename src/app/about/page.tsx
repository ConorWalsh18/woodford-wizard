"use client";

import { Typography, Button } from "@mui/material";
import Link from "next/link";

export default function AboutPage() {
  const test = () => {
    console.log("here");
  };

  return (
    <>
      <Typography variant="h4">About Page</Typography>

      <Button color="inherit" onClick={() => test()}>
        About
      </Button>
    </>
  );
}
