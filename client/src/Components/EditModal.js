import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal, { ModalManager } from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useStateProviderValue } from "../StateProvider";
import { Button, ButtonGroup, Divider, Typography } from "@material-ui/core";
import ModalSlider from "./ModalSlider";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[10],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function EditModal() {
  const classes = useStyles();
  const [{ modal, currentmodal, selector }, dispatch] = useStateProviderValue();
  //   const [selector, setSelector] = useState(true);

  const handleSelector = (e) => {
    console.log(e.currentTarget.id);
    if (e.currentTarget.id == "WE") {
      dispatch({
        type: "SETSELECTOR",
        selector: false,
      });
    //   setSelector(false);
    } else if (e.currentTarget.id == "WD") {
      dispatch({
        type: "SETSELECTOR",
        selector: true,
      });
    }
  };

  const handleClose = () => {
    dispatch({
      type: "SETMODAL",
      modal: false,
    });
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={modal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modal}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Set Limit</h2>
            <Divider />
            <br />
            <ButtonGroup
              variant="contained"
              color="secondary"
              aria-label="contained primary button group"
            >
              <Button id="WD" onClick={handleSelector}>
                Weekdays
              </Button>
              <Button id="WE" onClick={handleSelector}>
                Weekends
              </Button>
            </ButtonGroup>
            <br />
            <br />
            <Typography id="discrete-slider-custom" gutterBottom>
              {currentmodal}
              {selector ? " [ Mon-Fri ]" : " [ Sat-Sun ]"}
            </Typography>
            <ModalSlider />
            <br />
            <Button variant="contained" color="primary">
              Save
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
