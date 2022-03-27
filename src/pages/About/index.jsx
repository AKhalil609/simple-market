import React from 'react';
import {
  AboutContainer,
  DescContainer,
  Paragragh,
  Title,
  ContactContainer,
  ContactTitle,
  ContactSection,
  TitleContainer,
  MapPin
} from '../../styles/About.styled';

const config = {
  mainTitle: 'About us',
  describtionPt1:
    "A system for recording hold data using BlockChain and Smart Contracts, where the data of each price of gold is recorded from the beginning of its exit from the factory producing it and then to the merchant by recording the merchant's data and that this piece was sold to him and its ownership transferred through Smart Contracts amd then after. The same steps are taken in any sale between two parties and all of this is recorded on the database that was built with the BlockChain feature in order to characterized by a high precentage of security.",
  describtionPt2:
    'This sytem will ensure that non-original pieces of gold are not traded as real gold, because it will provide a QR code that contains all the data for the original pieces and this is difficult to fake in one way or another.',
  address: '#8, 3rd floor, first cross, 2nd main',
  email: 'gold137@gmail.com',
  phone: '01111000111',
  follow: 'Follow us',
  contant: 'Contact us',
};

const About = () => {
  return (
    <AboutContainer>
      <TitleContainer>
        <Title>{config.mainTitle}</Title>
      </TitleContainer>
      <DescContainer>
        <Paragragh>{config.describtionPt1}</Paragragh>
        <Paragragh>{config.describtionPt2}</Paragragh>
      </DescContainer>
      <ContactContainer>
        <ContactTitle>{config.contant}</ContactTitle>
        <ContactSection><MapPin />{config.address}</ContactSection>
        <ContactSection>{config.email}<br />{config.phone}</ContactSection>
        <ContactSection>{config.follow}</ContactSection>
      </ContactContainer>
    </AboutContainer>
  );
};

export default About;
