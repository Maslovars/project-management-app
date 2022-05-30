import React from 'react';
import { useTranslation } from 'next-i18next';
import { WelcomeMain, WrapperContent, TextBlock, Title, Text, SubTitle } from './index.styled';
import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['welcome'])),
      // Will be passed to the page component as props
    },
  };
}

const WelcomePage: NextPage = (props) => {
  const { t } = useTranslation('welcome');

  return (
    <WelcomeMain>
      <WrapperContent>
        <TextBlock>
          <Title>TaskRunner</Title>
          <SubTitle>{t('welcome_subtitle')}</SubTitle>
          <Text>{t('welcome_text')}</Text>
        </TextBlock>
      </WrapperContent>
    </WelcomeMain>
  );
};

export default WelcomePage;
