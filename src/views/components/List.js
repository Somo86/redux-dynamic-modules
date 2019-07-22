import React from 'react';
import {connect} from 'react-redux';

const List = ({list = []}) => {
    return list.map(el => {
        return (
            <>
                <p>name: {el.name}</p>
                <p>location: {el.position.map(loc => {
                    return (
                        <span>{loc}</span>
                    )
                })}</p>
            </>
        );
    })
}

function mapStateToProps(state) {
    return {
        list: state.list
    }
}

export default connect(
    mapStateToProps,
    null
)(List);