import PropTypes from 'prop-types';
import defaultProfile from '../../img/defaultProfile.jpg';
import s from './FriendListItem.module.css';
function Friend(props) {
  const { avatar = defaultProfile, name, isOnline } = props;
  const isActive = isOnline;
  console.log(isActive);
  return (
    <li className={s.item}>
      <span
        className={s.status}
        style={
          isActive ? { backgroundColor: 'green' } : { backgroundColor: 'red' }
        }
      ></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

Friend.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default Friend;
