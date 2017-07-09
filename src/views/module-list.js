import React from 'react';
import { Actions } from 'react-native-router-flux';

import { Container, Header, Body, Right, Title, Icon, Content,
  Button } from 'native-base';

import MLList from '../components/container/module-list';

const MLHeader = () => (
  <Header>
    <Body>
      <Title>Module List</Title>
    </Body>
    <Right>
      <Button transparent onPress={Actions.moduleEdit}>
        <Icon name="plus" />
      </Button>
    </Right>
  </Header>
);

const ModuleList = () => (
  <Container>
    <MLHeader />
    <Content>
      <MLList />
    </Content>
  </Container>
);

export default ModuleList;
