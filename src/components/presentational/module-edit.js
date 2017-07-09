import React, { Component } from 'react';
import {
  Container, Header, Title, Body, Right, Button, Icon, Content, Form, Item,
  Input, Label,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';

export default class ModuleEdit extends Component {
  constructor() {
    super();
    this.state = {
      code: '',
      name: '',
      credits: null,
      mark: null,
    };
    this.saveAndReturn = this.saveAndReturn.bind(this);
  }

  saveAndReturn() {
    this.props.saveModule({
      code: this.state.code,
      name: this.state.name,
      credits: this.state.credits,
      mark: this.state.mark,
    });
    return Actions.pop();
  }

  render() {
    return (<Container>
      <Header>
        <Body>
          <Title>Add Module</Title>
        </Body>
        <Right>
          <Button transparent onPress={this.saveAndReturn}>
            <Icon name="save" />
          </Button>
        </Right>
      </Header>
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>Code</Label>
            <Input
              autoCorrect={false}
              onChangeText={(code) => {
                this.setState({ code });
              }}
            />
          </Item>
          <Item floatingLabel>
            <Label>Name</Label>
            <Input onChangeText={(name) => { this.setState({ name }); }} />
          </Item>
          <Item floatingLabel>
            <Label>Credits</Label>
            <Input
              keyboardType="numeric"
              onChangeText={(credits) => { this.setState({ credits }); }}
            />
          </Item>
          <Item floatingLabel>
            <Label>Mark</Label>
            <Input
              keyboardType="numeric"
              onChangeText={(mark) => { this.setState({ mark }); }}
            />
          </Item>
        </Form>
      </Content>
    </Container>);
  }
}

ModuleEdit.propTypes = {
  saveModule: PropTypes.func.isRequired,
};
