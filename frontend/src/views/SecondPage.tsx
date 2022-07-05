/**
 * Author: bladimirardiles
 * Component File Name: IndexPage.js
 * Component Name: IndexPage
 * Project: blueprints-node-project
 * Date: Thu 30/06/2022 - 12:21
 */

import React from 'react';
import modifierState from '../utils/helpers/modifierState';
import TestTypo from '../components/molecules/test-typo/TestTypo';

const SecondPage = () => {
  const componentName = 'p-common';
  const cssClasses = modifierState(componentName, [], []);

  return (
    <div className={cssClasses}>
      <h1>This is the SECOND page</h1>
      <TestTypo />
      <p>Testing paragraph</p>
      <TestTypo />
    </div>
  );
};

export default SecondPage;
