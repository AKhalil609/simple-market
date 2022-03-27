import styled from 'styled-components';

export const SettingsContainer = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    margin-bottom: 0px;
`;

export const Subtitle = styled.h2`

`;

export const WalletContainer = styled.div`
    background: rgb(75 80 80 / 66%);
    width: 450px;
    border-radius: 15px;
    padding: 10px 0px;

`;

export const WalletOption = styled.div`
    padding: 0px 15px;
    display: flex;
    align-items: center;
    margin-top: 8px;
    padding-bottom: 12px;
    border-bottom: 1px solid;
    justify-content: space-between;
    :hover {
        cursor: pointer;
    }
`;

export const WalletText = styled.span`
    font-size: 22px;
    font-weight: 400;
`;

export const Logo = styled.img`
    width: 35px;
    margin-right: 20px;
`;

export const ArrowLogo = styled.img`
    width: 17px;
`;

export const LeftSideWalletContainer = styled.div`
    display: flex;
`

export const MoreOptions = styled.div`
    text-align: center;
    padding-top: 10px;
    font-size: 20px;
    font-weight: 500;
    color: #f9f9f994;
    :hover {
        cursor: pointer;
    }
`