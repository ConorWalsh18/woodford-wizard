import {
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WizardChoice from "@/components/WizardChoice/WizardChoice";
import { useState } from "react";

interface AccordionProps {
  id: string;
  title: string;
  content: any;
}

export default function WizardQuestion({
  questions,
}: {
  questions: AccordionProps[];
}) {
  const [accordionQuestions, setAccordionQuestions] = useState(questions);

  const handleChoiceClick = () => {
    setTimeout(() => {
      const id = `panel${accordionQuestions.length + 1}`;

      setAccordionQuestions((prevQuestions) => [
        ...prevQuestions,
        {
          id: id,
          title: `Question ${prevQuestions.length + 1}`,
          content: [
            {
              image: "file.svg",
              title: `New Choice ${id}`,
              description: `This is choice ${id}`,
            },
          ],
        },
      ]);
    }, 1000);
  };

  return (
    <>
      {accordionQuestions.map((accordion) => (
        <Accordion key={accordion.id} sx={{ width: "550px" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${accordion.id}-content`}
            id={`${accordion.id}-header`}
          >
            <Typography component="span">{accordion.title}</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Stack flexDirection={"row"} gap={3}>
              <WizardChoice
                choices={accordion.content}
                onChoiceClick={handleChoiceClick}
              />
            </Stack>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
