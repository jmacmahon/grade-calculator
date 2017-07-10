import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';

import { Body, Right, Icon, Button, List, ListItem, Text } from 'native-base';

const MLRow = ({ id, code, name, credits, mark }) => (
  <ListItem>
    <Body>
      <Text>{code} {name}</Text>
      <Text note>{credits} credits / {mark}%</Text>
    </Body>
    <Right>
      <Button
        onPress={() => Actions.moduleEdit({ id })}
        transparent
      >
        <Icon name="edit" />
      </Button>
    </Right>
  </ListItem>
);

function MLList({ modules }) {
  if (_.isEmpty(modules)) {
    return (<List>
      <ListItem>
        <Text note>No modules added yet</Text>
      </ListItem>
    </List>);
  }

  return (<List>
    {_.map(modules, module => <MLRow key={module.id} {...module} />)}
  </List>);
}

MLList.propTypes = {
  modules: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string,
      code: PropTypes.string,
      name: PropTypes.string,
      credits: PropTypes.number,
      mark: PropTypes.number,
    }),
  ).isRequired,
};
MLRow.propTypes = {
  id: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  credits: PropTypes.number.isRequired,
  mark: PropTypes.number.isRequired,
};

export default MLList;
