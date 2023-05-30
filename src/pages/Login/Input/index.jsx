import { InputBox, InputText, InputLabel, ErrorMessage } from './styles.js';

export const Input = ({ label, register, error, ...props }) => {
  return (
    <InputBox>
      <InputText { ...props } {...register(props.name)}  />
      <InputLabel text={props.text}>{ label }</InputLabel>
      { error && <ErrorMessage>{ error }</ErrorMessage> }
    </InputBox>
  );
};