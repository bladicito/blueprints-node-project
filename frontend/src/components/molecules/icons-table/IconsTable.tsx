/**
 * Author: bladimirardiles
 * Component File Name: IconsTable.js
 * Component Name: IconsTable
 * Project: blueprints-node-project
 * Date: Mon 04/07/2022 - 15:49
 */

import React from 'react';
import modifierState from '../../../utils/helpers/modifierState';
import { EIcon } from '../../../utils/enums/Icons.enum';
import Icon, { EIConModifiers } from '../../atoms/icon/Icon';
import './css/icons-table.scss';

const IconsTable = () => {
  const componentName = 'm-icons-table';
  const cssClasses = modifierState(componentName, [], []);

  const data = Object.entries(EIcon).map(([label, value], index) => {
    return (
      <div className="m-icons-table__icon" key={index}>
        <Icon type={value} modifier={[EIConModifiers.FIT_PARENT]} />
      </div>
    );
  });

  return (
    <div className={cssClasses}>
      <div className="m-icons-table__title">
        <h2>Icons</h2>
      </div>
      <div className="m-icons-table__content">{data}</div>
    </div>
  );
};

export default IconsTable;
