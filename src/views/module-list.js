import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Header,
  Body,
  Right,
  Title,
  Icon,
  Content,
  Button,
  List,
  ListItem,
  Text,
} from 'native-base';

const MLHeader = props => (
  <Header>
    <Body>
      <Title>Module List</Title>
    </Body>
    <Right>
      <Button transparent onPress={() => (props.addHook())}>
        <Icon name="plus" />
      </Button>
    </Right>
  </Header>
);

function MLList(props) {
  if (props.modules.length === 0) {
    return (<List>
      <ListItem>
        <Text note>No modules added yet</Text>
      </ListItem>
    </List>);
  }

  return (<List
    dataArray={props.modules}
    renderRow={
      module_ => (
        <ListItem>
          <Body>
            <Text>{module_.code} {module_.title}</Text>
            <Text note>{module_.credits} credits / {module_.mark}%</Text>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="edit" />
            </Button>
          </Right>
        </ListItem>
      )
    }
  />);
}

const ModuleList = props => (
  <Container>
    <MLHeader addHook={props.addHook} />
    <Content>
      <MLList modules={props.modules} />
    </Content>
  </Container>
);

const modulesPropType = PropTypes.arrayOf(
  PropTypes.shape({
    code: PropTypes.string,
    credits: PropTypes.number,
    mark: PropTypes.number,
  }),
);

const addHookPropType = PropTypes.func;

ModuleList.propTypes = {
  modules: modulesPropType.isRequired,
  addHook: addHookPropType.isRequired,
};
MLList.propTypes = {
  modules: modulesPropType.isRequired,
};
MLHeader.propTypes = {
  addHook: addHookPropType.isRequired,
};

export default ModuleList;
