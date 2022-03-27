import React from 'react';
import {
  SettingsContainer,
  ArrowLogo,
  MoreOptions,
  Title,
  LeftSideWalletContainer,
  Subtitle,
  WalletContainer,
  WalletText,
  WalletOption,
  Logo,
} from '../../styles/Settings.styled';
import MetaMaskLogo from '../../assets/Icons/metamask.svg';
import BitskiLogo from '../../assets/Icons/Bitski-icon.svg';
import KaikasLogo from '../../assets/Icons/klaytn-klay-logo.svg';
import arrowLogo from '../../assets/Icons/arrow-down.svg';
import DapperLogo from '../../assets/1029px-Dapper_labs.png';



const config = {
  mainTitle: 'You need an Ethereum wallet to use OpenSea.',
  subTitle: 'Choose one of our available wallets or create a new one.',
  moreOptions: 'Show More Options'
};

const wallets = [
  {
    logo: MetaMaskLogo,
    name: 'MetaMask',
  },
  {
    logo: KaikasLogo,
    name: 'Kaikas',
  },
  {
    logo: DapperLogo,
    name: 'Dapper',
  },
  {
    logo: BitskiLogo,
    name: 'Bitski',
  },
];

const Settings = () => {
  return (
    <SettingsContainer>
      <Title>{config.mainTitle}</Title>
      <Subtitle>{config.subTitle}</Subtitle>
      <WalletContainer>
        {wallets.map((wallet) => (
          <WalletOption>
            <LeftSideWalletContainer>
              <Logo src={wallet.logo} />
              <WalletText>{wallet.name}</WalletText>
            </LeftSideWalletContainer>
            <ArrowLogo src={arrowLogo} />
          </WalletOption>
        ))}
        <MoreOptions>{config.moreOptions}</MoreOptions>
      </WalletContainer>
    </SettingsContainer>
  );
};

export default Settings;
