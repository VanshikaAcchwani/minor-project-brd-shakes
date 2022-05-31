import { Step, StepLabel, Stepper } from '@mui/material';
import React from 'react';
import classes from '../utils/classes';


export default function CheckoutWizard({ activeStep = 0 }) {
  return (
    <Stepper activeStep={activeStep} alternativeLabel>
      {['Login', 'Payment Method', 'Place Order'].map(
        (step) => (
          <Step key={step}>
            <StepLabel sx={classes.loginlink}>{step}</StepLabel>
          </Step>
        )
      )}
    </Stepper>
  );
}
