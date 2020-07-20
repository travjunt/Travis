import React from 'react';
import Link from 'gatsby-link';
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';
import staticdata from '../../staticdata.json'
import styled from 'styled-components'
import Cell from '../components/Cell'

const SectionCaption = styled.p`
  font-weight: 600px;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`
const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`


const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Hi,</h1>
        <h1>I'm Travis,</h1>
        <h1>iOS developer.</h1>
      </div>
    </div>
    <div className="Cards">
      <div className="CardGroup">
        <Card 
          title="Pitch Perfect"
          text="12 sections"
          image={require('../images/white.png')} 
          />
        <Card 
          title="MemeMe"
          text="12 sections"
          image={require('../images/white.png')} 
          />
        <Card 
          title="On The Map"
          text="12 sections"
          image={require('../images/white.png')} 
          />
      </div>
    </div>
    <Section 
      image={require('../images/bydesign.jpg')}
      logo={require('../images/tm-logo.png')}
      />
  
  </div>
)

export default IndexPage
