import styled from 'styled-components';

export const FormWrapper = styled.form`
  width: 320px;
  margin-top: 20px;
  /* border: 1px solid SteelBlue; */
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 5px 100px 10px 10px;
  background-color: powderblue;
`;

export const Label = styled.label`
  padding: 5px 5px;
  color: Navy;
`;

export const Input = styled.input`
  border: none;
  padding: 5px 5px;
  &:focus {
    outline: 2px solid SteelBlue;
  }
  color: Navy;
`;

export const SubmitBtn = styled.button`
  /* margin-left: auto; */
  margin-right: auto;
  margin-top: 10px;
  border: none;
  padding: 5px 20px;
  border-radius: 2px;
  color: white;
  background-color: SteelBlue;
  &:active {
    background-color: DeepSkyBlue;
  }
`;
