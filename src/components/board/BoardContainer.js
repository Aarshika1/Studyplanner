import React, { useState } from 'react';
import Board from '../board/Board';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { filterCards } from '../../redux/actions/searchActions';

const style = {
  navContainer: {
    display: 'grid',
    justifyContent: 'space-around',
    background: 'rgba(0,0,0,.15)',
  },
};

const ClearSearh = styled.i`
  right: 5px;
  position: absolute;
  top: 10px;
  color: #000000;
  cursor: pointer;
  font-size: 1.2em;
`;

const SearchContainer = styled.div`
  position: relative;
`;

const MainContainer = styled.div`
  overflow: scroll;
  height: 80vh;

  h1 {
    color: white;
  }
`;

function BoardContainer() {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();

  const handleKeyUp = (ev) => {
    search();
  };
  const handleInputChange = (ev) => {
    setSearchText(ev.target.value);
  };
  const search = () => {
    dispatch(filterCards(searchText));
  };
  const clearSearh = () => {
    setSearchText('');
    dispatch(filterCards(''));
  };

  return (
    <>
      <Navbar style={style.navContainer}>
        <Nav className='mr-auto'>
          <SearchContainer>
            <input
              type='text'
              value={searchText}
              onKeyUp={handleKeyUp}
              onChange={handleInputChange}
              placeholder='Search'
              className='mr-sm-2 form-control'
            />
            {searchText.length > 0 ? (
              <ClearSearh className='fas fa-times' onClick={clearSearh} />
            ) : (
              <> </>
            )}
          </SearchContainer>
        </Nav>
      </Navbar>

      <MainContainer className='container-fluid mt-4'>
        <h1>Planner</h1>

        <Board />
      </MainContainer>
    </>
  );
}

export default BoardContainer;
