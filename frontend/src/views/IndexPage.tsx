/**
 * Author: bladimirardiles
 * Component File Name: IndexPage.js
 * Component Name: IndexPage
 * Project: blueprints-node-project
 * Date: Thu 30/06/2022 - 12:21
 */

import React from 'react';
import modifierState from '../utils/helpers/modifierState';
import TestTypo from '../components/example/test-typo/TestTypo';
import ColorsTable from '../components/example/colors-table/ColorsTable';
import './css/common.scss';
import IconsTable from '../components/example/icons-table/IconsTable';
import ButtonsCollection from '../components/example/buttons-collection/ButtonsCollection';
import InputGroup from '../components/molecules/input-group/InputGroup';
import { EInputGroupStates, EInputTypes } from '../utils/enums/Input.enum';

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
        <div className="col-12 col-lg-6">
          <div className="p-common__block">
            <InputGroup
              state={[EInputGroupStates.ERROR]}
              errorMessage="Cannot be empty"
              placeholder="Dummy Text"
              label="Dummy Text"
              type={EInputTypes.TEXT}
              value=""
              disabled={true}
              id="identifier"
            />
          </div>
          <div className="p-common__block">
            <InputGroup
              state={[EInputGroupStates.FILLED_IN]}
              errorMessage="Cannot be empty"
              placeholder="Dummy Text"
              label="Dummy Text"
              type={EInputTypes.TEXT}
              value=""
              disabled={false}
              id="identifier"
            />
          </div>
          <div className="p-common__block">
            <InputGroup
              state={[EInputGroupStates.FILLED_IN]}
              errorMessage="Cannot be empty"
              alertMessage="Cannot be empty alert"
              placeholder="Dummy Text"
              label="Dummy Text"
              type={EInputTypes.TEXT}
              value="With value set"
              disabled={false}
              id="identifier"
            />
          </div>
          <div className="p-common__block">
            <InputGroup
              state={[EInputGroupStates.FILLED_IN]}
              errorMessage="Cannot be empty"
              placeholder="Dummy Text"
              label="Dummy Text"
              type={EInputTypes.TEXT}
              value="With value set"
              disabled={true}
              id="identifier"
            />
          </div>
          <div className="p-common__block">
            <InputGroup
              state={[EInputGroupStates.ERROR]}
              errorMessage="The provided value is wrong"
              alertMessage="Cannot be empty alert"
              placeholder="Dummy Text"
              label="Dummy Text"
              type={EInputTypes.TEXT}
              value="value filled but error"
              disabled={true}
              id="identifier"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
