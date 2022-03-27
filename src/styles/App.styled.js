import styled from 'styled-components';
import img from '../assets/golden-monstera-leaves-background-design-resource.jpg';

export const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${img});
    background-size: cover;
    display: flex;
    flex-direction: column;
`;

export const PageContainer = styled.div`
    flex-grow: 1;
`;