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
import GroupInput from '../components/molecules/group-input/GroupInput';
import { EInputGroupStates, EInputTypes } from '../utils/enums/Input.enum';
import { ECheckboxGroupModifiers, ECheckboxModifiers } from '../utils/enums/Checkbox.enum';
import { v4 as uuidv4 } from 'uuid';
import { ERadioGroupModifiers, ERadioModifiers } from '../utils/enums/Radio.enum';
import Select from '../components/atoms/select/Select';
import GroupCheckbox from '../components/molecules/group-checkbox/GroupCheckbox';
import GroupRadio from '../components/molecules/group-radio/GroupRadio';

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
            <GroupInput
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
            <GroupInput
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
            <GroupInput
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
            <GroupInput
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
            <GroupInput
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
        <div className="col-12 col-md-6">
          <h2 style={{ marginTop: 30, marginBottom: 30 }}>Checkboxes</h2>
          <div className="p-common__block">
            <GroupCheckbox
              modifier={[ECheckboxGroupModifiers.HORIZONTAL]}
              options={[
                {
                  modifier: [ECheckboxModifiers.GRAY],
                  id: uuidv4(),
                  value: 'value',
                  name: uuidv4(),
                  checked: false,
                  label: 'Option one',
                },
                {
                  modifier: [ECheckboxModifiers.GRAY],
                  id: uuidv4(),
                  value: 'value',
                  name: uuidv4(),
                  checked: false,
                  label: 'Option 2',
                },
                {
                  modifier: [ECheckboxModifiers.GRAY],
                  id: uuidv4(),
                  value: 'value',
                  name: uuidv4(),
                  checked: false,
                  label: 'Option 3',
                },
                {
                  modifier: [ECheckboxModifiers.GRAY],
                  id: uuidv4(),
                  value: 'value',
                  name: uuidv4(),
                  checked: true,
                  label: 'Option 4',
                },
              ]}
              notifyValueChange={(newData) => {
                console.log(newData);
              }}
            />
          </div>
          <div className="p-common__block">
            <GroupCheckbox
              modifier={[ECheckboxGroupModifiers.HORIZONTAL]}
              options={[
                {
                  modifier: [ECheckboxModifiers.RED],
                  id: uuidv4(),
                  value: 'value',
                  name: uuidv4(),
                  checked: false,
                  label: 'Option one',
                },
                {
                  modifier: [ECheckboxModifiers.RED],
                  id: uuidv4(),
                  value: 'value',
                  name: uuidv4(),
                  checked: false,
                  label: 'Option 2',
                },
                {
                  modifier: [ECheckboxModifiers.RED],
                  id: uuidv4(),
                  value: 'value',
                  name: uuidv4(),
                  checked: false,
                  label: 'Option 3',
                },
                {
                  modifier: [ECheckboxModifiers.RED],
                  id: uuidv4(),
                  value: 'value',
                  name: uuidv4(),
                  checked: true,
                  label: 'Option 4',
                },
              ]}
              notifyValueChange={(newData) => {
                console.log(newData);
              }}
            />
          </div>
          <div className="p-common__block">
            <GroupCheckbox
              modifier={[ECheckboxGroupModifiers.HORIZONTAL]}
              options={[
                {
                  modifier: [ECheckboxModifiers.RED],
                  id: uuidv4(),
                  value: 'value',
                  name: uuidv4(),
                  checked: false,
                  label: 'Option one',
                },
                {
                  modifier: [ECheckboxModifiers.GRAY],
                  id: uuidv4(),
                  value: 'value',
                  name: uuidv4(),
                  checked: false,
                  label: 'Option 2',
                },
                {
                  modifier: [ECheckboxModifiers.BLUE],
                  id: uuidv4(),
                  value: 'value',
                  name: uuidv4(),
                  checked: false,
                  label: 'Option 3',
                },
                {
                  modifier: [ECheckboxModifiers.ORANGE],
                  id: uuidv4(),
                  value: 'value',
                  name: uuidv4(),
                  checked: true,
                  label: 'Option 4',
                },
                {
                  modifier: [ECheckboxModifiers.GREEN],
                  id: uuidv4(),
                  value: 'value',
                  name: uuidv4(),
                  checked: true,
                  label: 'Option 4',
                },
                {
                  modifier: [ECheckboxModifiers.YELLOW],
                  id: uuidv4(),
                  value: 'value',
                  name: uuidv4(),
                  checked: true,
                  label: 'Option 4',
                },
              ]}
              notifyValueChange={(newData) => {
                console.log(newData);
              }}
            />
          </div>
          <div className="p-common__block">
            <GroupCheckbox
              modifier={[ECheckboxGroupModifiers.HORIZONTAL]}
              options={[
                {
                  modifier: [ECheckboxModifiers.RED],
                  id: uuidv4(),
                  value: 'value',
                  name: uuidv4(),
                  checked: true,
                  label: 'Option one',
                },
                {
                  modifier: [ECheckboxModifiers.GRAY],
                  id: uuidv4(),
                  value: 'value',
                  name: uuidv4(),
                  checked: true,
                  label: 'Option 2',
                },
                {
                  modifier: [ECheckboxModifiers.BLUE],
                  id: uuidv4(),
                  value: 'value',
                  name: uuidv4(),
                  checked: true,
                  label: 'Option 3',
                },
                {
                  modifier: [ECheckboxModifiers.ORANGE],
                  id: uuidv4(),
                  value: 'value',
                  name: uuidv4(),
                  checked: true,
                  label: 'Option 4',
                },
                {
                  modifier: [ECheckboxModifiers.GREEN],
                  id: uuidv4(),
                  value: 'value',
                  name: uuidv4(),
                  checked: true,
                  label: 'Option 4',
                },
                {
                  modifier: [ECheckboxModifiers.YELLOW],
                  id: uuidv4(),
                  value: 'value',
                  name: uuidv4(),
                  checked: true,
                  label: 'Option 4',
                },
              ]}
              notifyValueChange={(newData) => {
                console.log(newData);
              }}
            />
          </div>
          <h2 style={{ marginTop: 30, marginBottom: 30 }}>Radios</h2>
          <div className="p-common__block">
            <GroupRadio
              modifier={[ERadioGroupModifiers.HORIZONTAL]}
              options={[
                {
                  modifier: [ERadioModifiers.RED],
                  id: uuidv4(),
                  value: 'value',
                  name: uuidv4(),
                  checked: false,
                  label: 'Option one',
                  disabled: true,
                },
                {
                  modifier: [ERadioModifiers.GRAY],
                  id: uuidv4(),
                  value: 'value',
                  name: uuidv4(),
                  checked: true,
                  label: 'Option 2',
                },
                {
                  modifier: [ERadioModifiers.BLUE],
                  id: uuidv4(),
                  value: 'value',
                  name: uuidv4(),
                  checked: false,
                  label: 'Option 3',
                },
                {
                  modifier: [ERadioModifiers.ORANGE],
                  id: uuidv4(),
                  value: 'value',
                  name: uuidv4(),
                  checked: false,
                  label: 'Option 4',
                },
                {
                  modifier: [ERadioModifiers.GREEN],
                  id: uuidv4(),
                  value: 'value',
                  name: uuidv4(),
                  checked: false,
                  label: 'Option 4',
                },
                {
                  modifier: [ERadioModifiers.YELLOW],
                  id: uuidv4(),
                  value: 'value',
                  name: uuidv4(),
                  checked: false,
                  label: 'Option 4',
                },
              ]}
              onRadioSelection={(newData) => {
                if (newData) {
                  console.log(newData);
                }
              }}
            />
          </div>
          <div className="p-common__block">
            <GroupRadio
              options={[
                {
                  modifier: [ERadioModifiers.RED],
                  id: uuidv4(),
                  value: 'value',
                  name: uuidv4(),
                  checked: false,
                  label: 'Option 1',
                },
                {
                  modifier: [ERadioModifiers.GRAY],
                  id: uuidv4(),
                  value: 'value',
                  name: uuidv4(),
                  checked: true,
                  label: 'Option 2',
                },
                {
                  modifier: [ERadioModifiers.BLUE],
                  id: uuidv4(),
                  value: 'value',
                  name: uuidv4(),
                  checked: false,
                  label: 'Option 3',
                },
                {
                  modifier: [ERadioModifiers.ORANGE],
                  id: uuidv4(),
                  value: 'value',
                  name: uuidv4(),
                  checked: false,
                  label: 'Option 4',
                },
                {
                  modifier: [ERadioModifiers.GREEN],
                  id: uuidv4(),
                  value: 'value',
                  name: uuidv4(),
                  checked: false,
                  label: 'Option 4',
                },
                {
                  modifier: [ERadioModifiers.YELLOW],
                  id: uuidv4(),
                  value: 'value',
                  name: uuidv4(),
                  checked: false,
                  label: 'Option 4',
                },
              ]}
              onRadioSelection={(newData) => {
                if (newData) {
                  console.log(newData);
                }
              }}
            />
          </div>
          <div className="col-12 col-md-6">
            <Select
              id="select-id"
              name="select-id"
              options={[
                { label: 'Select an option', value: 'test1', disabled: true },
                { label: 'Editor title', value: 'test2' },
                { label: "Creation's date", value: 'test3' },
                { label: 'Language', value: 'test4' },
                { label: 'Status', value: 'test5' },
                { label: 'Format', value: 'test6' },
                { label: 'Running time', value: 'test7' },
                { label: 'Preview Status', value: 'test8' },
              ]}
              value="test2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
