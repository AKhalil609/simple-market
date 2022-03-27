import styled from 'styled-components';
import MapPinIcon from '../assets/Line-style-icons-map-pin.svg';

export const AboutContainer = styled.div`
    padding: 0px 70px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const Title = styled.h1`
    color: #fff;
`;

export const MapPin = styled.img`
  width: 11px;
  margin-right: 8px;
`;

MapPin.defaultProps = {
  src: MapPinIcon,
};

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const DescContainer = styled.div`
    padding: 15px 10px;
    background: rgb(95 100 95 / 10%);
    color: #fff;
    width: 100%;

`;

export const Paragragh = styled.p`
    font-size: 20px;
    font-weight: 300;
    text-align: center;
`;

export const ContactContainer = styled.div`
    display: flex;
    color: #fff;
    align-items: flex-start;
    margin-top: 120px;
    font-size: 12px;
`;

export const ContactTitle = styled.div`
    display: flex;
    font-size: 16px;
    font-weight: 600;
`;

export const ContactSection = styled.div`
    margin-left: 20px;
    padding-left: 20px;
    border-left: 2px solid #fff;
    display: flex;
`;