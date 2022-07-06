export enum EAutoCompleteInput {
  EMAIL = 'email',
  CURRENT_PASSWORD = 'current-password',
  NEW_PASSWORD = 'new-password',
  NAME = 'given-name',
  LAST_NAME = 'family-name',
}

export enum EFileAccept {
  IMAGE = 'image/*',
  TEXT_FILE = '.txt, .csv',
}

export enum EInputTypes {
  TEXT = 'text',
  FILE = 'file',
}

export enum EInputGroupStates {
  FILLED_IN = 'filled-in',
  ERROR = 'error',
}
