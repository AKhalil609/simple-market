import React from 'react';
import {
  HomeContainer,
  ButtonsContainer,
  MainTitle,
  SubTitle,
} from '../../styles/Home.styled';
import { NavLink } from 'react-router-dom';

const config = {
  mainTitle: 'Discover, Collect, Sell & buy Precious Metals NFTs',
  subTitle:
    "This website is the world's <br> First & Largest Precious Metals NFTs Marketplace",
};

const links = {
  create: { name: 'Create', path: '/create' },
  explore: { name: 'Explore', path: '/explore' },
};

const Home = () => {
  return (
    <HomeContainer>
      <MainTitle>{config.mainTitle}</MainTitle>
      <SubTitle
        dangerouslySetInnerHTML={{
          __html: config.subTitle,
        }}></SubTitle>
      <ButtonsContainer>
        <NavLink to={links.explore.path} exact>
          {links.explore.name}
        </NavLink>
        <NavLink to={links.create.path} exact>
          {links.create.name}
        </NavLink>
      </ButtonsContainer>
    </HomeContainer>
  );
};

export default Home;
