import PropTypes from 'prop-types';
import defaultProfile from '../img/defaultProfile.jpg';

function Friend(props) {
  const { avatar = defaultProfile, name, isOnline } = props;

  return (
    <li>
      <span>{isOnline}</span>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </li>
  );
}

Friend.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default Friend;
