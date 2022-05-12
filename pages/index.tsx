import React from 'react';
import { WelcomeSpan, WrapperContent, TextBlock, Title, Text, SubTitle } from './welcome/welcome.styled';
import type { NextPage } from 'next';
import { Footer } from '@/components/Footer';

const WelcomePage: NextPage = () => {
  return (
    <WelcomeSpan>
      <WrapperContent>
        <TextBlock>
          <Title>TaskRunner</Title>
          <SubTitle>
            Kanban board <br /> management
          </SubTitle>
          <Text>
            Our team of 3 REACT2022Q1 students is pleased to present a joint project. This app is a
            project management tool that helps you visualize tasks, limit work in progress and
            maximize efficiency.
          </Text>
        </TextBlock>
      </WrapperContent>
    </WelcomeSpan>
  );
};

export default WelcomePage;
