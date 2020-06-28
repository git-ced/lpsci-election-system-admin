// ANCHOR React
import * as React from 'react';

// ANCHOR Models
import { SignInFormInput } from '@lpsci/scoped-models/sign-in/SignInFormInput';
import { VoteModal } from '@lpsci/scoped-models/vote-modal/VoteModal';
import { ForgotSearch } from '@lpsci/scoped-models/forgot-search/ForgotSearch';
import { ResetModal } from '@lpsci/scoped-models/reset-modal/ResetModal';
import { PartiesModal } from '@lpsci/scoped-models/parties-modal/PartiesModal';
import { CandidatesModal } from '@lpsci/scoped-models/candidates-modal/CandidatesModal';
import { FetchedData } from '@lpsci/scoped-models/fetched-data/FetchedData';
import { SectionsModal } from '@lpsci/scoped-models/sections-modal/SectionsModal';

export const makeProviders = () => [
  /*
  ANCHOR: Provider for the SignInFormInput
  NOTE: Used for handling sign in form input
  */
  <SignInFormInput.Provider key="SignInFormInput" />,
  /*
  ANCHOR: Provider for the VoteModal
  NOTE: Used for toggling modal for voter's vote
  */
  <VoteModal.Provider key="VoteModal" />,
  /*
  ANCHOR: Provider for the ForgotSearch
  NOTE: Used for search users in the forgot page
  */
  <ForgotSearch.Provider key="ForgotSearch" />,
  /*
  ANCHOR: Provider for the ResetModal
  NOTE: Used for toggling modal for resetting passwords
  */
  <ResetModal.Provider key="ResetModal" />,
  /*
 ANCHOR: Provider for the PartiesModal
 NOTE: Used for toggling modal for managing parties
 */
  <PartiesModal.Provider key="PartiesModal" />,
  /*
 ANCHOR: Provider for the CandidatesModal
 NOTE: Used for toggling modal for managing candidates
 */
  <CandidatesModal.Provider key="CandidatesModal" />,
  /*
 ANCHOR: Provider for the FetchedData
 NOTE: Used for storing fetched data
 */
  <FetchedData.Provider key="FetchedData" />,
  /*
  ANCHOR: Provider for the SectionsModal
  NOTE: Used for toggling modal for managing sections
  */
  <SectionsModal.Provider key="SectionsModal" />,
];