import React from 'react';
import PropTypes from 'prop-types';

import MainContentView from 'components/MainContentView';
import CommonText from 'components/common/CommonText';
import PureButton from 'components/Button/PureButton';
import PagingTable from 'components/common/Table/PagingTable';

import { TabSheet, TabSheetContainer, TabViewContent } from 'components/common/TabView';

import {
  SortingState, SelectionState, FilteringState, PagingState, GroupingState,
  IntegratedFiltering, IntegratedGrouping, IntegratedPaging, IntegratedSorting, IntegratedSelection,
} from '@devexpress/dx-react-grid';

import {
  Grid, Table, TableHeaderRow
} from '@devexpress/dx-react-grid-material-ui';

import VMStatusView from 'components/StatusView/VMStatusView';

class StatusView extends React.Component {

  static propTypes = {
  }

  static defaultProps = {
  }

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return(
      <MainContentView>
        <TabSheetContainer>
          <TabSheet text='VM' content={VMStatusView}/>
          <TabSheet text='DAMain Service' content={TabViewContent}/>
        </TabSheetContainer>
      </MainContentView>
    );
  }
}

export default StatusView;
