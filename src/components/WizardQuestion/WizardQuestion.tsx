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
  questionNumber: number;
  title: string;
  content: any;
}

export default function WizardQuestion({
  defaultQuestions,
}: {
  defaultQuestions: AccordionProps[];
}) {
  const [questions, setQuestions] = useState(defaultQuestions);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);

  const handleChoiceClick = (questionNumberClicked: number) => {
    if (currentQuestionNumber > questionNumberClicked) {
      const newIndex = questionNumberClicked + 1;

      let filteredQuestions = questions.filter(
        (q) => q.questionNumber <= questionNumberClicked
      );

      filteredQuestions.push({
        id: `question${newIndex}`,
        questionNumber: newIndex,
        title: `Question ${filteredQuestions.length + 1}`,
        content: [
          {
            image: "file.svg",
            title: `Another New Choice ${newIndex}`,
            description: `This is choice ${newIndex}`,
          },
        ],
      });

      setQuestions(filteredQuestions);
      setCurrentQuestionNumber(newIndex);
    } else {
      addNewQuestion();
    }
  };

  const addNewQuestion = () => {
    const newIndex = questions.length + 1;

    setQuestions((prevQuestions) => [
      ...prevQuestions,
      {
        id: `question${newIndex}`,
        questionNumber: newIndex,
        title: `Question ${prevQuestions.length + 1}`,
        content: [
          {
            image: "file.svg",
            title: `New Choice ${newIndex}`,
            description: `This is choice ${newIndex}`,
          },
        ],
      },
    ]);

    setCurrentQuestionNumber(newIndex);
  };

  return (
    <>
      {questions.map((question) => (
        <Accordion
          key={question.id}
          sx={{ width: "550px", backgroundColor: "#f3f3f387" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${question.id}-content`}
            id={`${question.id}-header`}
          >
            <Typography component="span">{question.title}</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Stack flexDirection={"row"} flexWrap={"wrap"} sx={{ gap: "26px" }}>
              <WizardChoice
                choices={question.content}
                questionNumber={question.questionNumber}
                onChoiceClick={handleChoiceClick}
              />
            </Stack>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
