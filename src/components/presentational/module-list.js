import React from 'react';
import PropTypes from 'prop-types';

import { Body, Right, Icon, Button, List, ListItem, Text } from 'native-base';

const MLRow = ({ code, name, credits, mark }) => (
  <ListItem>
    <Body>
      <Text>{code} {name}</Text>
      <Text note>{credits} credits / {mark}%</Text>
    </Body>
    <Right>
      <Button transparent>
        <Icon name="edit" />
      </Button>
    </Right>
  </ListItem>
);

function MLList({ modules }) {
  if (modules.length === 0) {
    return (<List>
      <ListItem>
        <Text note>No modules added yet</Text>
      </ListItem>
    </List>);
  }

  return (<List>
    {modules.map(module => <MLRow key={module.code} {...module} />)}
  </List>);
}

MLList.propTypes = {
  modules: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string,
      credits: PropTypes.number,
      mark: PropTypes.number,
    }),
  ).isRequired,
};
MLRow.propTypes = {
  code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  credits: PropTypes.number.isRequired,
  mark: PropTypes.number.isRequired,
};

export default MLList;
