import {
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WizardChoice, { WizardChoiceObject } from "../WizardChoice/WizardChoice";

interface AccordionProps {
  id: string;
  title: string;
  content: any;
}

export default function WizardQuestion({
  accordion,
}: {
  accordion: AccordionProps;
}) {
  return (
    <Accordion key={accordion.id}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${accordion.id}-content`}
        id={`${accordion.id}-header`}
      >
        <Typography component="span">{accordion.title}</Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Stack flexDirection={"row"} gap={3}>
          <WizardChoice choices={accordion.content} />
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}
