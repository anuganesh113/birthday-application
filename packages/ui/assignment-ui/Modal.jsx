/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Modal.css';

function Modal({people}) {
  const [showAll, setShowAll] = useState(false);
  const [showModal, setShowModal] = useState(true);

  const handleViewAllClick = () => {
    // e.stopPropagation(); // Stop the event from bubbling up
    setShowAll(!showAll);
  };

  return (
    <main onClick={() => setShowModal(!showModal)}>
      {showModal ? 
      (
        <section className='container' onClick={(e) => e.stopPropagation()}>
        <h3>{people.length} birthdays today</h3>
        <div className={`users-list ${showAll ? 'show-all' : ''}`}>
          {people.map((person) => {
            const { login, name, dob, picture } = person;
            const age = new Date().getFullYear() - new Date(dob.date).getFullYear();

            return (
              <article key={login.uuid} className='person' sty>
                <img src={picture.large} alt={name.first} />
                <div>
                  <h4>{`${name.first} ${name.last}`}</h4>
                  <p>{`${age} years`}</p>
                </div>
              </article>
            );
          })}
        </div>
        <button className='main-btn' onClick={handleViewAllClick}>{showAll ? 'Hide them' : 'View all'}</button>
      </section>
      ) : (
        <button onClick={() => setShowModal(!showModal)}>Show Birthdays Modal</button>
      )}
   
    </main>
  );
}

export default Modal;

