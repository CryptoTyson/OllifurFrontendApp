declare module 'react-material-ui-form-validator' {
  import * as React from 'react';
  import {
    ValidatorComponentProps,
    ValidatorFormProps,
  } from 'react-validator-core';
  import { TextFieldProps } from '@mui/material/TextField';

  export class ValidatorForm extends React.Component<
    ValidatorFormProps & { component?: React.ElementType },
    any
  > {}

  export class TextValidator extends React.Component<
    ValidatorComponentProps & TextFieldProps,
    any
  > {}

  // Add other components you use from the library here if needed
}
