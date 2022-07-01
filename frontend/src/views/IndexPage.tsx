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

const IndexPage = () => {
  const componentName = 'p-common';
  const cssClasses = modifierState(componentName, [], []);

  return (
    <div className={cssClasses}>
      <TestTypo title="First Page" />
    </div>
  );
};

export default IndexPage;
