import styled from 'styled-components';
import img from '../assets/rm281batch2-adj-011.jpg';

export const HeaderContainer = styled.div`
    width: 100%;
    height: 65px;
    display: flex;
    align-items: center;
`;

export const SearchInput = styled.input`
    height: 48px;
    border: 2px solid #e0e0e0;
    box-sizing: border-box;
    border-radius: 24px;
    padding: 16px 17px;
    margin-left: 20px;
    flex-grow: 1;
    max-width: 380px;
`;

export const Logo = styled.img`
    width: 50px;
`;

Logo.defaultProps = {
    src: img,
  };