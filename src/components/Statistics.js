import PropTypes from 'prop-types';

function Statistics(props) {
  const { title, stats } = props;
  const isTitle = title;
  return (
    <section>
      {isTitle && <h2>{title}</h2>}
      <ul>
        {stats.map(stat => (
          <li key={stat.id}>
            <span>{stat.label}</span>
            <span>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

export default Statistics;
