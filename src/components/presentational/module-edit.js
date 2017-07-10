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
      credits: '',
      mark: '',
    };
    this.saveAndReturn = this.saveAndReturn.bind(this);
  }

  componentWillMount() {
    if (this.props.id !== '') {
      this.setState(this.props.modules[this.props.id]);
      this.setState(state => ({
        credits: state.credits.toString(),
        mark: state.mark.toString(),
      }));
    }
  }

  saveAndReturn() {
    this.props.saveModule({
      id: this.props.id,
      module: {
        code: this.state.code,
        name: this.state.name,
        credits: this.state.credits - 0,
        mark: this.state.mark - 0,
      },
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
              value={this.state.code}
            />
          </Item>
          <Item floatingLabel>
            <Label>Name</Label>
            <Input
              onChangeText={(name) => { this.setState({ name }); }}
              value={this.state.name}
            />
          </Item>
          <Item floatingLabel>
            <Label>Credits</Label>
            <Input
              keyboardType="numeric"
              onChangeText={(credits) => { this.setState({ credits }); }}
              value={this.state.credits}
            />
          </Item>
          <Item floatingLabel>
            <Label>Mark</Label>
            <Input
              keyboardType="numeric"
              onChangeText={(mark) => { this.setState({ mark }); }}
              value={this.state.mark}
            />
          </Item>
        </Form>
      </Content>
    </Container>);
  }
}

ModuleEdit.propTypes = {
  saveModule: PropTypes.func.isRequired,
  modules: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string,
      code: PropTypes.string,
      name: PropTypes.string,
      credits: PropTypes.number,
      mark: PropTypes.number,
    }),
  ).isRequired,
  id: PropTypes.string,
};

ModuleEdit.defaultProps = {
  id: '',
};
