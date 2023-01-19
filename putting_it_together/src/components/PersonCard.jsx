import React, {useState} from 'react';

const PersonCard = (props) => {
    //        getter       Setter
    const [ currentYears, setYears ] = useState(29);
    return (
        <div>
            <h2>Name: {props.firstName} {props.lastName} </h2>
            <h3>Age: {currentYears} </h3>
            <h3>Hair color: {props.hairColor}</h3>

            <button onClick={ () => setYears(currentYears +1) }>Birthday Button for {props.firstName} {props.lastName}</button>

        </div>
    )
}

export default PersonCard;