
import React from 'react';


const Contact = ({ name, number, children }) => {
  return (
    <li>
      {name} : {number}
      {children}
    </li>
  );
};

export default Contact;

