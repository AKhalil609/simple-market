import React from 'react'
import {
  CollectionContainer,
  TopCollection,
  ImageContainer,
  CollectionTitle,
  Ring,
  BottomCollection
} from '../../styles/Explore.styled';

const config = {
    mainTitle: 'Explore collection',
    RingName: 'Trust Ring'
  };
  

const CollectionCard = () => {
  return (
    <CollectionContainer>
    <TopCollection>
      <ImageContainer><Ring /></ImageContainer>
      <CollectionTitle>{config.RingName}</CollectionTitle>
    </TopCollection>
    <BottomCollection></BottomCollection>
  </CollectionContainer>
  )
}

export default CollectionCard