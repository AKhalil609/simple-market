import React from 'react';
import {
  ExploreContainer,
  ExploreTitle,
  ExploreNav,
  CollectionsContainer,
} from '../../styles/Explore.styled';
import  CollectionCard  from './CollectionCard'
import { NavLink } from 'react-router-dom';

const config = {
  mainTitle: 'Explore collection',
  RingName: 'Trust Ring'
};

const links = [
  { name: 'Trading', path: '/explore' },
  { name: 'Most Popular', path: '/explore' },
  { name: 'Diamond', path: '/explore' },
  { name: 'Gemstones', path: '/explore' },
  { name: 'Gold', path: '/explore' },
  { name: 'Silver', path: '/explore' },
];

const Explore = () => {
  return (
    <ExploreContainer>
      <ExploreTitle>{config.mainTitle}</ExploreTitle>
      <ExploreNav>
        {links.map((link, index) => (
          <NavLink key={index} to={link.path} exact>
            {link.name}
          </NavLink>
        ))}
      </ExploreNav>
      <CollectionsContainer>
         <CollectionCard />
         <CollectionCard />
         <CollectionCard />
         <CollectionCard />
         <CollectionCard />
         <CollectionCard />
         <CollectionCard />
         <CollectionCard />
         <CollectionCard />
         <CollectionCard />
      </CollectionsContainer>
    </ExploreContainer>
  );
};

export default Explore;
