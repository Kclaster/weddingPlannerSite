// This will hold the snippets
import React from 'react';
import { connect } from 'react-redux';
import Footer from '../Footer';
import '../../styles/Body.css';
import Header from '../Header';
import ScrollingPics from '../ScrollingPics';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import alyssaFourteen from '../../pics/Alyssa and Ryne/fourteen.jpg';
import { setHeight } from '../../actions';
import four from '../../pics/Karley and Chris/four.jpg';
import one from '../../pics/Karley and Chris/one.jpg';

const StyledImage = styled.img`
  width: 100%;
`;

const ImageWrapper = styled.div`
  width: 30vw;
  padding: 0 2vw;
`;

class Body extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ScrollingPics />
        <div className="body-container">
          <div className="homeImageContainer">
            <ImageWrapper className="scalingImage-container">
              <h2>Service</h2>
              <Link className="scalingImage" to="/Services">
                <StyledImage
                  className="scale"
                  src={alyssaFourteen}
                  alt="celebration line"
                />
              </Link>
            </ImageWrapper>
            <ImageWrapper className="scalingImage-container">
              <h2>Contact Me</h2>
              <Link className="scalingImage" to="/Contact">
                <StyledImage className="scale" src={one} alt="gazeebo" />
              </Link>
            </ImageWrapper>
            <ImageWrapper className="scalingImage-container">
              <h2>Stories</h2>
              <Link className="scalingImage" to="/Weddings">
                <StyledImage
                  className="scale"
                  src={four}
                  alt="couple holding eachother"
                />
              </Link>
            </ImageWrapper>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    height: state.setHeight.height
  };
};

export default connect(
  mapStateToProps,
  { setHeight }
)(Body);
