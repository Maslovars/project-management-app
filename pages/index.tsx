import React from 'react';
import { WelcomeMain, WrapperContent, TextBlock, Title, Text, SubTitle } from './index.styled';
import type { NextPage } from 'next';

const WelcomePage: NextPage = () => {
  return (
    <WelcomeMain>
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
    </WelcomeMain>
  );
};

export default WelcomePage;
