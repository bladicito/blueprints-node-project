/**
 * Author: bladimirardiles
 * Component File Name: TestTypo.tsx
 * Component Name: TestTypo
 * Project: blueprints-node-project
 * Date: Tue 28/06/2022 - 15:45
 */

import React from 'react';
import modifierState from '../../../utils/helpers/modifierState';

const TestTypo = () => {
  const componentName = 'm-test-typo';
  const cssClasses = modifierState(componentName, [], []);

  return (
    <div className={cssClasses}>
      <p className="m-test-typo__title">Welcome to the frontend where the fox jumped the bla bla </p>
      <p className="m-test-typo__body">Welcome to the frontend where the fox jumped the bla bla</p>
      <p className="m-test-typo__label">Welcome to the frontend where the fox jumped the bla bla</p>
      <p className="m-test-typo__value">Welcome to the frontend where the fox jumped the bla bla</p>
    </div>
  );
};

export default TestTypo;
