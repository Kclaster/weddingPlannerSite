// This will hold the snippets
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Footer from '../Footer';
import '../../styles/Body.css';
import Header from '../Header';
import ScrollingPics from '../ScrollingPics';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LoadingPage from '../mainpages/LoadingPage';
import alyssaFourteen from '../../pics/Alyssa and Ryne/fourteen.jpg';
import { setHeight } from '../../actions';
import four from '../../pics/Karley and Chris/four.jpg';
import one from '../../pics/Karley and Chris/one.jpg';

const StyledImage = styled.img`
  padding-top: 5%;
  width: 100%;
  :hover {
    transform: scale(1.05);
    transition: transform 200ms ease-in;
  }
`;

const ImageWrapper = styled.div`
  width: 30vw;
  padding: 0 2vw;
`;

const BodyWrapper = styled.div`
  margin: 0 0 5vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const HomeImageContainer = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  justify-content: space-around;
  margin: 4vw 0;
  z-index: 1;
  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledLink = styled(Link)`
  width: 25vw;
  @media (max-width: 650px) {
    width: 80vw;
  }
`;

const Body = props => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
  }, [props.height]);

  return (
    <>
      {isLoading ? (
        <div>
          <Header />
          <ScrollingPics />
          <BodyWrapper>
            <HomeImageContainer>
              <ImageWrapper>
                <h2>Service</h2>
                <StyledLink to="/Services">
                  <StyledImage
                    className="scale"
                    src={alyssaFourteen}
                    alt="celebration line"
                  />
                </StyledLink>
              </ImageWrapper>
              <ImageWrapper>
                <h2>Contact Me</h2>
                <StyledLink to="/Contact">
                  <StyledImage className="scale" src={one} alt="gazeebo" />
                </StyledLink>
              </ImageWrapper>
              <ImageWrapper>
                <h2>Stories</h2>
                <StyledLink to="/Weddings">
                  <StyledImage
                    className="scale"
                    src={four}
                    alt="couple holding eachother"
                  />
                </StyledLink>
              </ImageWrapper>
            </HomeImageContainer>
            <Footer />
          </BodyWrapper>
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    height: state.setHeight.height
  };
};

export default connect(
  mapStateToProps,
  { setHeight }
)(Body);
