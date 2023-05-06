import React from "react";
import CoachesItem from "./CoachesItem";

const CoachesList = ({persons}) => (
        <>
        {persons && persons.map((person, index) =>
        <CoachesItem number={index + 1} person={person} key ={person.id}/>
        )}
        </>
    )

export default CoachesList;