import React from 'react';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            editing the expense with the the id of {props.match.params.id}
        </div>
    )
};

export default EditExpensePage;