import Home from './components/home/Home';
import Header from './components/header/Header';
import React from 'react';

function App() {
  return (<React.Fragment>
    <Header> 
      <Header.LinkBox href="/">
        <Header.NavLink>HOME</Header.NavLink>
      </Header.LinkBox>
      <Header.LinkBox href="/">
        <Header.NavLink>PORTFOLIO</Header.NavLink>
      </Header.LinkBox>
      <Header.LinkBox href="/">
        <Header.NavLink>CV</Header.NavLink>
      </Header.LinkBox>
    </Header>

    <Home>
    <Home.HomeContainer>
      <Home.Section>
        <Home.Title fontColor="#71E3D7">Hi! I'm Jorge Berbel and I'm a Web Developer...</Home.Title>
        <Home.Image src="images/me.svg"/>
      </Home.Section>
    </Home.HomeContainer>

    <Home.HomeContainer>
      <Home.Section>
        <Home.Image src="images/graduation.svg"/>
        <Home.Title fontColor="#E371E1">...graduated in Information Systems Engineering Degree.</Home.Title>
      </Home.Section>
    </Home.HomeContainer>

    <Home.HomeContainer>
      <Home.Section>
        <Home.Title fontColor="#CCFF70">Also, I´m a wannabe guitarist and...</Home.Title>
        <Home.Image src="images/electric-guitar.svg"/>
      </Home.Section>
    </Home.HomeContainer>

    <Home.HomeContainer>
      <Home.Section>
        <Home.Image src="images/barbell.svg"/>
        <Home.Title fontColor="#FF8C4B">...sometimes I work out.</Home.Title>
      </Home.Section>
    </Home.HomeContainer>

    <Home.HomeContainer>
      <Home.Section>
        <Home.Title fontColor="#C9B3A9">The other times I´m eating chocolate.</Home.Title>
        <Home.Image src="images/bakery.svg"/>
      </Home.Section>
    </Home.HomeContainer>
    </Home>
    </React.Fragment>
  );
}

export default App;
