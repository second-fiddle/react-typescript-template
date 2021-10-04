/* eslint-disable react/destructuring-assignment,
                  @typescript-eslint/no-unsafe-assignment,
                  @typescript-eslint/no-unsafe-member-access,
                  @typescript-eslint/restrict-template-expressions
*/
import { InputFieldProps } from 'components/molecules/elements/ElementProps';
import PasswordField from 'components/molecules/elements/PasswordField';
import { VFC } from 'react';
import { Controller, DeepMap, FieldError, FieldValues } from 'react-hook-form';
import { FormInputProps } from 'semantic-ui-react';

type RhfPasswordFieldProps = InputFieldProps & FormInputProps;

const RhfPasswordField: VFC<RhfPasswordFieldProps> = (props) => (
  <Controller
    name={props.name}
    control={props.control}
    defaultValue=""
    render={({ field, formState: { errors } }) => (
      <PasswordField
        label={props.label}
        id={props.id}
        placeholder={props.placeholder}
        isRequired={props.required}
        showIcon={props.showIcon}
        {...field}
        errorMessage={
          errors[props.name] &&
          `${(errors[props.name] as DeepMap<FieldValues, FieldError>)?.message}`
        }
      />
    )}
  />
);

export default RhfPasswordField;
