import React from 'react';

const EditExpensePage = (props) => {
    console.log(props)
    return (
        <div>
            EditExpense Page for id = {props.match.params.id}
        </div>
    );
}

export default EditExpensePage;