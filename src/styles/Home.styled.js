import styled from 'styled-components';

export const HomeContainer = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const MainTitle = styled.h1`
    color: #fff;
    max-width: 607px;
    font-size: 50px;
    text-align: center;
    margin-bottom: 0px;
`;

export const SubTitle = styled.h3`
    text-align: center;
    color: #fff;
    opacity: 38%;
    font-size: 23px;
`

export const Button = styled.button`

`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
    padding: 10px 20px;
    cursor: pointer;
    margin-right: 22px;

    transition: all 0.3s ease-in;
    font-size: 0.9rem;
    border-radius: 50px;
    font-size: 22px;
    font-weight: 600;
    text-decoration: none;
    color: #fff;
    text-align: center;
    background: rgb(95 100 95 / 10%);
    border: 1px solid;
    

    &:hover {
      color: black;
      background: #fff;
    }
  }
`;