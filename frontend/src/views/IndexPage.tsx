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
import ColorsTable from '../components/molecules/colors-table/ColorsTable';
import './css/common.scss';
import IconsTable from '../components/molecules/icons-table/IconsTable';
import ButtonsCollection from '../components/molecules/buttons-collection/ButtonsCollection';

const IndexPage = () => {
  const componentName = 'p-common';
  const cssClasses = modifierState(componentName, [], []);

  return (
    <div className={cssClasses}>
      <div className="row">
        <div className="col-12 col-lg-6">
          <TestTypo title="First Page" />
        </div>
        <div className="col-12 col-lg-6">
          <ColorsTable />
        </div>
        <div className="col-12 col-lg-6">
          <IconsTable />
        </div>
        <div className="col-12 col-lg-6">
          <ButtonsCollection />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
