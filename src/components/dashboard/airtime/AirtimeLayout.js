import React, { useState } from 'react';
import Prompt from './Prompt';
import Confirmation from './Confirmation';
import Receipt from './Receipt';

const AirtimeLayout = ({ close }) => {
  const [step, setStep] = useState(1); // State variable to keep track of the current step

  const handleNextStep = () => {
    setStep(step + 1); // Function to increment the current step when the next button is clicked
  };

  const handlePreviousStep = () => {
    setStep(step - 1); // Function to decrement the current step when the previous button is clicked
  };

  const renderComponent = () => {
    switch (step) {
      case 1:
        return <Prompt close={close} onNext={handleNextStep} />; // Render the Prompt component when step is 1
      case 2:
        return (
          <Confirmation
            close={close}
            onNext={handleNextStep}
            onPrevious={handlePreviousStep}
          />
        ); // Render the Confirmation component when step is 2
      case 3:
        return (
          <Receipt
            close={close}
            onNext={close}
            onPrevious={handlePreviousStep}
          />
        ); // Render the Receipt component when step is 3
      default:
        return null; // Return null when the step is not within the expected range
    }
  };

  return <>{renderComponent()}</>; // Render the component based on the current step
};

export default AirtimeLayout;
