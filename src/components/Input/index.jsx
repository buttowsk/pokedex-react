import { InputBox, InputText, InputLabel, ErrorMessage } from './styles.js'

export const Input = ({ label, error, ...props }) => {
    return (
        <InputBox>
            <InputText {...props} />
            <InputLabel>{label}</InputLabel>
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </InputBox>
    )
}