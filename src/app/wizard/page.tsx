"use client";

import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import WizardQuestion from "@/components/WizardQuestion/WizardQuestion";

export default function WizardPage() {
  const [defaultQuestions, setDefaultQuestions] = useState([
    {
      id: "question1",
      questionNumber: 1,
      title: "Question 1",
      content: [
        {
          image: "file.svg",
          title: "Choice 1",
          description: "This is choice 1",
        },
        {
          image: "file.svg",
          title: "Choice 2",
          description: "This is choice 2",
        },
        {
          image: "file.svg",
          title: "Choice 3",
          description: "This is choice 3",
        },
        {
          image: "file.svg",
          title: "Choice 4",
          description: "This is choice 4",
        },
        {
          image: "file.svg",
          title: "Choice 5",
          description: "This is choice 5",
        },
      ],
    },
  ]);

  return (
    <Box>
      <Stack flexDirection={"row"} gap={3} flexWrap={"wrap"}>
        <Box>
          <WizardQuestion defaultQuestions={defaultQuestions} />
        </Box>

        <Box sx={{ minWidth: "300px" }}>
          <Box
            position={"fixed"}
            sx={{
              minWidth: "300px",
              borderRadius: "12px",
              backgroundColor: "#c9c9c9",
              padding: "16px",
            }}
          >
            <Box
              sx={{
                minHeight: "400px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h4">Sidebar</Typography>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
