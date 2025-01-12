import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";

export interface WizardChoiceObject {
  image: string;
  title: string;
  description: string;
}

interface WizardChoiceProps {
  choices: WizardChoiceObject[];
  questionNumber: number;
  onChoiceClick: (questionNumber: number) => void;
}

const WizardChoice: React.FC<WizardChoiceProps> = ({
  choices,
  questionNumber,
  onChoiceClick,
}) => {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  useEffect(() => {
    // Reset clicked index when a previous question is clicked
    setClickedIndex(null);
  }, [choices]);

  const handleClick = (index: number) => {
    setClickedIndex(index === clickedIndex ? null : index);

    onChoiceClick(questionNumber);
  };

  return (
    <>
      {choices.map((choice, index) => (
        <Tooltip key={index} title={choice.description} placement="right">
          <Card
            sx={{
              minWidth: 155,
              maxWidth: 345,
              position: "relative",
            }}
            onClick={() => handleClick(index)}
          >
            <CardMedia sx={{ height: 140 }} image={choice.image} />

            {clickedIndex === index && (
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src="checkmark.png" alt="Checkmark" />
              </Box>
            )}

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {choice.title}
              </Typography>
            </CardContent>
          </Card>
        </Tooltip>
      ))}
    </>
  );
};

export default WizardChoice;
