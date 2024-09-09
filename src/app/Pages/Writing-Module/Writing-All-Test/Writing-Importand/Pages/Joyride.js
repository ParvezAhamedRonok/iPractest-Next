import React from "react";
import ReactJoyride, { EVENTS, STATUS } from "react-joyride";

const steps = [
  {
    content: <h2>Let's begin our journey!</h2>,
    placement: 'center',
    target: 'body',
  },
  {
    content: 'Write your answer here & check carefully',
    placement: 'bottom',
    styles: {
      options: {
        width: 300,
      },
    },
    target: '.demo_projects1',
    title: 'Writing introduction',
  },
  {
    content: 'Upload your Question image here for geeting better Scores',
    placement: 'bottom',
    styles: {
      options: {
        width: 300,
      },
    },
    target: '.demo_projects2',
    title: 'Writing introduction',
  },
  {
    content: 'After write your answer & uploading question image simply click on this button for getting the writing result. ',
    placement: 'bottom',
    styles: {
      options: {
        width: 300,
      },
    },
    target: '.demo_projects3',
    title: 'Writing introduction',
  },
  {
    content: 'Uploading section....',
    placement: 'bottom',
    styles: {
      options: {
        width: 300,
      },
    },
    target: '.demo_projects4',
    title: 'Writing introduction',
  },
  {
    content: 'Select your Answer images here & convert images into text & then modify your text if there has needed any corrections & make sure your uoloaded your image questions also then click the writing evaluation button that"s it.',
    placement: 'bottom',
    styles: {
      options: {
        width: 300,
      },
    },
    target: '.demo_projects5',
    title: 'Writing introduction',
  },
  {
    content: 'convert images into text & then modify your text if there has needed any corrections & make sure your uoloaded your image questions also then click the writing evaluation button that"s it.',
    placement: 'bottom',
    styles: {
      options: {
        width: 300,
      },
    },
    target: '.demo_projects6',
    title: 'Writing introduction',
  }
]











export const Joyride = (props) => {
  const { setRun, run, stepIndexState, setStepIndexState } = props;

  const handleJoyrideCallback = (data) => {
    const { status, type } = data;
    console.log({ type, status, action: data.action, data });
    const finishedStatuses = [STATUS.FINISHED, STATUS.SKIPPED];
    if (finishedStatuses.includes(status)) {
      setRun(false);
    } else if (type === EVENTS.STEP_AFTER || type === EVENTS.TARGET_NOT_FOUND) {
      setStepIndexState((prev) => prev + 1);
    }
  };

  return (
    <ReactJoyride
      run={run}
      steps={steps}
      stepIndex={stepIndexState}
      debug
      continuous
      showSkipButton
      showProgress
      callback={handleJoyrideCallback}
      styles={{
        options: {
          zIndex: 10000
        }
      }}
    />
  );
};
