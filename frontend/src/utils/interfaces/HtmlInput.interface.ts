import { EAutoCompleteInput, EFileAccept, EInputTypes } from '../enums/Input.enum';

export interface IHtmlInputInterface {
  disabled: boolean;
  id: string;
  modifier: Array<string>;
  notifyValueChange: (newValue: string | IAddedFile) => void;
  placeholder: string;
  state: Array<string>;
  type?: EInputTypes;
  value: any;
  autocompleteType?: EAutoCompleteInput;
  accept?: EFileAccept;
}

export interface IAddedFile {
  file: File;
  fileData: IFileInformation;
  result: string; //base64 image, string for text file
}

export interface IFileInformation {
  name: string;
  type?: string;
  size?: string;
}
