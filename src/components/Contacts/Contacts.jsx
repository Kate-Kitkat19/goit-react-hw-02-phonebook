import { PropTypes } from 'prop-types';
import { nanoid } from 'nanoid';

export const Contacts = ({ contacts }) => {
  console.log(contacts);
  return (
    <section>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(({ name, number }) => (
          <li key={nanoid()}>
            {name}
            {number}
          </li>
        ))}
      </ul>
    </section>
  );
};

Contacts.propTypes = {
  arr: PropTypes.array,
};
