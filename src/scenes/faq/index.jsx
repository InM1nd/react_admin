import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { Accordion, AccordionSummary, AccordionDetails} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { tokens } from "../../theme";


const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page"/>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, veniam! Quod assumenda suscipit similique totam. 
            Dolorum accusantium, odio distinctio soluta dolore, veritatis, laboriosam odit ut officiis illum neque asperiores unde!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, veniam! Quod assumenda suscipit similique totam. 
            Dolorum accusantium, odio distinctio soluta dolore, veritatis, laboriosam odit ut officiis illum neque asperiores unde!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, veniam! Quod assumenda suscipit similique totam. 
            Dolorum accusantium, odio distinctio soluta dolore, veritatis, laboriosam odit ut officiis illum neque asperiores unde!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, veniam! Quod assumenda suscipit similique totam. 
            Dolorum accusantium, odio distinctio soluta dolore, veritatis, laboriosam odit ut officiis illum neque asperiores unde!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default FAQ