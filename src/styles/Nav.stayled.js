import styled from 'styled-components';
import img from '../assets/rm281batch2-adj-011.jpg';

export const MenuLink = styled.div`
  padding: 10px 20px;
  cursor: pointer;

  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  border-radius: 50px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  color: #fff;
  text-align: center;
  &:hover {
    background: #fff;
    color: black;
  }
`;

export const NavContainer = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const Logo = styled.img`
  width: 50px;
`;

Logo.defaultProps = {
  src: img,
};

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  a {
    padding: 10px 20px;
    cursor: pointer;
    margin-right: 10px;

    transition: all 0.3s ease-in;
    font-size: 0.9rem;
    border-radius: 50px;
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
    color: #fff;
    text-align: center;
    &:hover {
      background: #fff;
      color: black;
    }
  }

  .active {
    background: #fff;
    color: black;
  }
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    transition: max-height 0.3s ease-in;
    width: 100%;
    a {
      margin-top: 10px;
    }
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #fff;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const LeftSideContainer = styled.div`
    width: 50%;
    display: flex
`;