// @flow

import React from 'react';
import { getBlankPlayer } from 'shared/reducers/game';
import { getSampleUser } from '../../../../utils/test-helpers';
import WaitingForOther from '..';

const user = getSampleUser();
const curPlayer = {
  ...getBlankPlayer('1337', user),
  ping: 1234
};

export default (
  <WaitingForOther
    disabled={false}
    curPlayer={curPlayer}
    onPing={() => console.log(`Ping!`)}
  />
);