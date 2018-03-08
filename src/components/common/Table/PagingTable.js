import React from 'react';
import PropTypes from 'prop-types';

const styleContainer = {
        position: 'relative',
        width: '100%',
        height: '100%'
    },
    styleTable = {
        width: '100%',
        height: '100%'
    },
    stylePaginator = {
        position: 'absolute',
        top: '100%',
        left: 0,
        // vertical center
        width: '100%',
        height: 25,
        display: 'flex',
        alignItems: 'center'
    };

const PagingTable = (props) => (
    <div style={styleContainer}>
        <div style={styleTable}>
            {props.children}
        </div>
        <div style={stylePaginator}>
            {props.paginator}
        </div>
    </div>
);

PagingTable.propTypes = {
    children: PropTypes.node.isRequired,
    paginator: PropTypes.node.isRequired
};

export default PagingTable;
