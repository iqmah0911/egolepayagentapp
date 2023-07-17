import React, { useState } from 'react';
import DataPrompt from './DataPrompt';
import DataConfirmation from './DataConfirmation';
import DataReceipt from './DataReceipt';

const DataLayout = ({ close }) => {
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
        return <DataPrompt close={close} onNext={handleNextStep} />; // Render the DataPrompt component when step is 1
      case 2:
        return (
          <DataConfirmation
            close={close}
            onNext={handleNextStep}
            onPrevious={handlePreviousStep}
          />
        ); // Render the DataConfirmation component when step is 2
      case 3:
        return (
          <DataReceipt
            close={close}
            onNext={close}
            onPrevious={handlePreviousStep}
          />
        ); // Render the DataReceipt component when step is 3
      default:
        return null; // Return null when the step is not within the expected range
    }
  };

  return <>{renderComponent()}</>; // Render the component based on the current step
};

export default DataLayout;
