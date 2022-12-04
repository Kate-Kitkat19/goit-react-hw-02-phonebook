import { PropTypes } from 'prop-types';

export const ContactCard = ({ name, number, id, onDelete }) => {
  return (
    <>
      <span>{name}</span>
      <span>{number}</span>
      <button type="button" onClick={() => onDelete(id)}>
        Delete contact
      </button>
    </>
  );
};

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
