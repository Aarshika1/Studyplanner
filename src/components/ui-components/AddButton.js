import React from 'react';
import styled from 'styled-components';

const AddBtn = styled.button`
  color: white;
  background-color: #000000;
  font-weight: bold;
  margin-right: 1em;
  &:hover {
    color: white;
  }
`;
export default function AddButton({ disabled, btnText, onClick }) {
  return (
    <AddBtn className='btn' disabled={disabled} onMouseDown={onClick}>
      {btnText}
    </AddBtn>
  );
}
