"use client";

import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import WizardQuestion from "../../components/WizardQuestion/WizardQuestion";
import WizardChoice from "@/components/WizardChoice/WizardChoice";

export default function WizardPage() {
  const [accordions, setAccordions] = useState([
    {
      id: "panel1",
      title: "Accordion 1",
      content: [
        {
          image: "file.svg",
          title: "Choice 1",
          description: "This is choice 1",
          onClick: () => onNextClick(),
        },
        {
          image: "file.svg",
          title: "Choice 2",
          description: "This is choice 2",
          onClick: () => onNextClick(),
        },
        {
          image: "file.svg",
          title: "Choice 3",
          description: "This is choice 3",
          onClick: () => onNextClick(),
        },
      ],
    },
  ]);

  const onNextClick = () => {
    setTimeout(() => {
      console.log("Mock API call completed");

      const id = `panel${accordions.length + 1}`;

      setAccordions((prevAccordions) => [
        ...prevAccordions,
        {
          id: id,
          title: `Accordion ${prevAccordions.length + 1}`,
          content: [
            {
              image: "file.svg",
              title: "New Choice",
              description: "This is from the next click",
              onClick: onNextClick,
            },
          ],
        },
      ]);
    }, 2000); // Mock API call delay
  };

  console.log(accordions);

  return (
    <Box>
      <Stack flexDirection={"row"} gap={3}>
        <Box>
          {accordions.map((accordion) => (
            <WizardQuestion key={accordion.id} accordion={accordion} />
          ))}
        </Box>

        <Box>
          <Typography variant="h4">Sidebar</Typography>
        </Box>
      </Stack>
    </Box>
  );
}
