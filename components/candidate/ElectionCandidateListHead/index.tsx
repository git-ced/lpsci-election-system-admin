/* eslint-disable no-mixed-operators */
// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { ListItem, ListItemLabel } from 'baseui/list';
import { Paragraph2 } from 'baseui/typography';
import { Block } from 'baseui/block';

// ANCHOR Styles
import {
  CONTAINER, NAME_LABEL, POSITION_LABEL, LIST_ITEM, HEADING,
} from './styles';

export const ElectionCandidateListHead = React.memo(() => (
  <Block overrides={LIST_ITEM}>
    <ListItem
      artwork={() => (
        <Paragraph2 overrides={HEADING}>
          Party
        </Paragraph2>
      )}
      endEnhancer={() => (
        <Paragraph2 overrides={HEADING}>
          Actions
        </Paragraph2>
      )}
    >
      <ListItemLabel>
        <Block overrides={CONTAINER}>
          <Paragraph2 overrides={NAME_LABEL}>Candidate Name</Paragraph2>
          <Paragraph2 overrides={POSITION_LABEL}>Position</Paragraph2>
        </Block>
      </ListItemLabel>
    </ListItem>
  </Block>
));