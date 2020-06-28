// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { H1 } from 'baseui/typography';

// ANCHOR Styles
import { HEADING } from './styles';

export const ElectionPartyHeading = React.memo(() => (
  <H1 overrides={HEADING}>
    Registered Parties
  </H1>
));