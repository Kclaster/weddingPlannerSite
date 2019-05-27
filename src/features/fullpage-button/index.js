import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './style.css';

const HeaderWrapper = styled.div`
  opacity: 0;
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 100%;
  :hover {
    color: white;
    opacity: 0.8;
    transition: opacity 0.1s ease-in;
  }
  @media (max-width: 450px) {
    color: white;
    opacity: 0.6;
    transition: opacity 0.1s ease-in;
  }
`;

const Wrapper = styled.div`
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 6vh 0;
  border-top: 3px solid #535d63;
  border-bottom: 3px solid #535d63;
`;

const FullpageButton = props => {
  return (
    <Link to={props.href}>
      <Wrapper className={`${props.borderRight}`}>
        <HeaderWrapper>
          <h2 className="onHoverTitle">{props.Title}</h2>
        </HeaderWrapper>
        <img
          className="service-pic"
          src={props.pic}
          alt="wedding celebration"
        />
      </Wrapper>
    </Link>
  );
};

export default FullpageButton;
