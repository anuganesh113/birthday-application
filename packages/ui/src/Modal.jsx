/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Modal.css';

function Modal({people}) {
  const [showAll, setShowAll] = useState(false);

  const handleViewAllClick = () => {
    setShowAll(!showAll);
  };

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <div className={`users-list ${showAll ? 'show-all' : ''}`}>
          {people.map((person) => {
            const { login, name, dob, picture } = person;
            const age = new Date().getFullYear() - new Date(dob.date).getFullYear();

            return (
              <article key={login.uuid} className='person'>
                <img src={picture.large} alt={name.first} />
                <div>
                  <h4>{`${name.first} ${name.last}`}</h4>
                  <p>{`${age} years`}</p>
                </div>
              </article>
            );
          })}
        </div>
        <button onClick={handleViewAllClick}>{showAll ? 'Hide Them' : 'View All'}</button>
      </section>
    </main>
  );
}

export default Modal;

