/**
 * Author: bladimirardiles
 * Component File Name: ColorsTable.js
 * Component Name: ColorsTable
 * Project: blueprints-node-project
 * Date: Mon 04/07/2022 - 12:21
 */

import React from 'react';
import modifierState from '../../../utils/helpers/modifierState';
import './css/colors-table.scss';

interface IProps {}

const ColorsTable = ({}: IProps) => {
  const componentName = 'm-colors-table';
  const cssClasses = modifierState(componentName, [], []);

  return (
    <div className={cssClasses}>
      <div className="row m-colors-table__row">
        <div className="col-12">
          <h2 className="m-colors-table__col-title">Greens</h2>
        </div>
        <div className="col-2">
          <div className="m-colors-table__wrapper">
            <div className="m-colors-table__color m-colors-table__color--green-1" />
            <h3 className="m-colors-table__color-name">green-yoda</h3>
          </div>
        </div>
        <div className="col-2">
          <div className="m-colors-table__wrapper">
            <div className="m-colors-table__color m-colors-table__color--green-2" />
            <h3 className="m-colors-table__color-name">green-baby-yoda</h3>
          </div>
        </div>
        <div className="col-2">
          <div className="m-colors-table__wrapper">
            <div className="m-colors-table__color m-colors-table__color--green-3" />
            <h3 className="m-colors-table__color-name">green-jarjarbinks</h3>
          </div>
        </div>
        <div className="col-2">
          <div className="m-colors-table__wrapper">
            <div className="m-colors-table__color m-colors-table__color--green-4" />
            <h3 className="m-colors-table__color-name">green-jabba</h3>
          </div>
        </div>
        <div className="col-2">
          <div className="m-colors-table__wrapper">
            <div className="m-colors-table__color m-colors-table__color--green-5" />
            <h3 className="m-colors-table__color-name">green-luke-saber</h3>
          </div>
        </div>
      </div>
      <div className="row m-colors-table__row">
        <div className="col-12">
          <h2 className="m-colors-table__col-title">Whites/grays</h2>
        </div>
        <div className="col-2">
          <div className="m-colors-table__wrapper">
            <div className="m-colors-table__color m-colors-table__color--white-1" />
            <h3 className="m-colors-table__color-name">stormtrooper-white</h3>
          </div>
        </div>
        <div className="col-2">
          <div className="m-colors-table__wrapper">
            <div className="m-colors-table__color m-colors-table__color--white-2" />
            <h3 className="m-colors-table__color-name">white-russian-white</h3>
          </div>
        </div>
        <div className="col-2">
          <div className="m-colors-table__wrapper">
            <div className="m-colors-table__color m-colors-table__color--gray-1" />
            <h3 className="m-colors-table__color-name">gray-rat</h3>
          </div>
        </div>
        <div className="col-2">
          <div className="m-colors-table__wrapper">
            <div className="m-colors-table__color m-colors-table__color--gray-2" />
            <h3 className="m-colors-table__color-name">gray-matter</h3>
          </div>
        </div>
        <div className="col-2">
          <div className="m-colors-table__wrapper">
            <div className="m-colors-table__color m-colors-table__color--gray-3" />
            <h3 className="m-colors-table__color-name">gray-anatomy</h3>
          </div>
        </div>
      </div>
      <div className="row m-colors-table__row">
        <div className="col-12">
          <h2 className="m-colors-table__col-title">Reds</h2>
        </div>
        <div className="col-2">
          <div className="m-colors-table__wrapper">
            <div className="m-colors-table__color m-colors-table__color--red-1" />
            <h3 className="m-colors-table__color-name">red-vader-saber</h3>
          </div>
        </div>
        <div className="col-2">
          <div className="m-colors-table__wrapper">
            <div className="m-colors-table__color m-colors-table__color--red-2" />
            <h3 className="m-colors-table__color-name">red-darth-maul</h3>
          </div>
        </div>
      </div>
      <div className="row m-colors-table__row">
        <div className="col-12">
          <h2 className="m-colors-table__col-title">Blues</h2>
        </div>
        <div className="col-2">
          <div className="m-colors-table__wrapper">
            <div className="m-colors-table__color m-colors-table__color--blue-1" />
            <h3 className="m-colors-table__color-name">blue-anakin-saber</h3>
          </div>
        </div>
        <div className="col-2">
          <div className="m-colors-table__wrapper">
            <div className="m-colors-table__color m-colors-table__color--blue-2" />
            <h3 className="m-colors-table__color-name">blue-r2d2-lines</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorsTable;
