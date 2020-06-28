// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { ModalBody } from 'baseui/modal';

interface IModalBodyProps {
  children: React.ReactNode;
}

export const PartiesModalBody = React.memo(({ children }: IModalBodyProps) => (
  <ModalBody>
    {children}
  </ModalBody>
));