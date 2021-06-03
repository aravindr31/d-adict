import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Button, Typography } from "@material-ui/core";
import "../Stylesheets/LimitedApp.css";
import { useStateProviderValue } from "../StateProvider";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function LimitedAppList({ name, weekdays, weekends }) {
  const [{ modal,currentmodal }, dispatch] = useStateProviderValue();
  const classes = useStyles();

  const handleModal = () => {
    dispatch({
      type: "SETMODAL", 
      modal: true,
    });
    dispatch({
      type: "SETCURRENTMODAL",
      currentmodal: name,
    });
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography className={classes.heading}>{name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="accordationdetails">
          <h4>
            Weekdays <span>{weekdays}</span>
          </h4>
          <h4>
            Weekends <span>{weekends}</span>
          </h4>
        </div>
        <br />
        <Button variant="contained" color="secondary" onClick={handleModal}>
          Edit
        </Button>
        <br />
      </AccordionDetails>
    </Accordion>
  );
}
