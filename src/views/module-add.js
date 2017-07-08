import React from 'react';

import {
  Container, Header, Title, Body, Right, Button, Icon, Content, Form, Item,
  Input, Label,
} from 'native-base';

export default () => (
  <Container>
    <Header>
      <Body>
        <Title>Add Module</Title>
      </Body>
      <Right>
        <Button transparent>
          <Icon name="save" />
        </Button>
      </Right>
    </Header>
    <Content>
      <Form>
        <Item floatingLabel>
          <Label>Code</Label>
          <Input autoCorrect={false} />
        </Item>
        <Item floatingLabel>
          <Label>Name</Label>
          <Input />
        </Item>
        <Item floatingLabel>
          <Label>Credits</Label>
          <Input keyboardType="numeric" />
        </Item>
        <Item floatingLabel>
          <Label>Mark</Label>
          <Input keyboardType="numeric" />
        </Item>
      </Form>
    </Content>
  </Container>
);
