import PropTypes from 'prop-types';
import defaultProfile from '../img/defaultProfile.jpg';

function Profile(props) {
  const {
    avatar = defaultProfile,
    name = 'Гость',
    tag,
    location = 'Не известно',
    stats,
  } = props;

  return (
    <div>
      <div>
        <img src={avatar} alt="Аватар пользователя" />
        <p>{name}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.object,
};

export default Profile;
