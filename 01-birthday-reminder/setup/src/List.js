import React from 'react';

const List = ({ miGente }) => {
  return (
    <>
      {miGente.map(
        (person) => {
          
        const { id, name, age, image, birthDate } = person;
        return <article key={id} className="person">
          <img src={image} alt={name} />
          <div>
            <h4>{name}</h4>
            <p>{age} years</p>
        <h4>birthdate: {birthDate}</h4>
          </div>
        </article>
      })}
    </>
  );
};

export default List;
