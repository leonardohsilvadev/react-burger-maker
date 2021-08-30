import styled from 'styled-components'

export const Form = styled.form`
  max-width: 25rem;
  margin: 0 auto;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.25rem;
`

export const InputLabel = styled.label`
  font-weight: bold;
  margin-bottom: 0.875rem;
  color: #222;
  padding: 0.313rem 0.625rem;
  border-left: 0.25rem solid #FCBA03;
`

export const Input = styled.input`
  padding: 1rem;
  width: 18.75rem;
`

export const Select = styled.select`
  padding: 1rem;
  width: 18.75rem;
`

export const Option = styled.option``

export const OptionalsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const OptionalsTitle = styled.label`
  width: 100%;
`

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 50%;
  margin-bottom: 1.25rem;
  cursor: pointer;
`

export const CheckboxInput = styled.input`
  width: auto;
`

export const CheckboxTitle = styled.span`
  width: auto;
  margin-left: 0.375rem;
  font-weight: bold;
`

export const Submit = styled.input`
  background-color: #222;
  color: #FCBA03;
  font-weight: bold;
  border: 0.125rem solid #222;
  padding: 0.625rem;
  font-size: 1rem;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: transparent;
    color: #222; 
  }
`