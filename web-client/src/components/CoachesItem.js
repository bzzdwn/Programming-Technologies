import React from "react";

const CoachesItem = (props) => (
        <tr key={props.number}>
        <th scope="row" width="10%">{props.person.id}</th>
        <td>{props.person.name}</td>
        <td>{props.person.position}</td>
        <td>{props.person.specialization}</td>
        <td>{props.person.phone}</td>
        </tr>
)

export default CoachesItem;