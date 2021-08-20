import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import generateColor from '../../helpers/generateColor';

function Statistics(props) {
  const { title, stats } = props;
  const isTitle = title;
  return (
    <section className={s.statistics}>
      {isTitle !== '' && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={s.item}
            style={{ backgroundColor: generateColor(stat.id) }}
          >
            <span className={s.label}>{stat.label}</span>
            <span className={s.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
