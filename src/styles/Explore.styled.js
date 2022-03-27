import styled from 'styled-components';
import RingImage from '../assets/10-651_2.jpg';

export const ExploreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
  overflow: auto;
`;

export const ExploreTitle = styled.h1`
  color: #fff;
`;

export const ExploreNav = styled.div`
  width: 100%;
  border-top: 2px solid #fff;
  border-bottom: 2px solid #fff;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  a {
    padding: 10px 20px;
    cursor: pointer;
    margin-right: 10px;

    transition: all 0.3s ease-in;
    font-size: 0.9rem;
    border-radius: 50px;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    color: #fff;
    text-align: center;
    &:hover {
      background: #fff;
      color: black;
    }
  }
`;

export const CollectionsContainer = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  flex-wrap: wrap;
    overflow: auto;
    justify-content: space-around;
`;

export const CollectionContainer = styled.div`
  display: flex;
  padding: 10px;
  width: 360px;
  height: 260px;
  flex-direction: column;

`;

export const CollectionTitle = styled.h2`
  color: #fff;
`;

export const ImageContainer = styled.div``;

export const TopCollection = styled.div`
    display: flex;
    z-index: 1;
`;

export const CollecitonCard = styled.div`
  color: #fff;
`;
export const Ring = styled.img`
  width: 85px;
  margin-right: 8px;
  border-radius: 40px;
  box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
`;

export const BottomCollection = styled.div`
    display: flex;
    background: rgb(226 188 127/50%);
    width: 100%;
    height: 100%;
    flex-direction: column;
    margin-top: -28px;
`;

Ring.defaultProps = {
  src: RingImage,
};
