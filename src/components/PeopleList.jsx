import React from 'react'

function PeopleList(props) {
    const arr = props.data
    const listItems = arr.map((val, id) =>
        <li key={id}>{val}</li>
    )
    return (
        <ul>{listItems}</ul>
    )
}

export default PeopleList