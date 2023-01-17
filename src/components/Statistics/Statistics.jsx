import PropTypes from 'prop-types';
import React from 'react';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return(
<div>
<h3>Statistics</h3>
<ul>
  <li>Good: {good}</li>
  <li>Neutral: {neutral}</li>
  <li>Bad: {bad}</li>
  <li>Total: {total}</li>
  <li>Positive feedback: {' '}
        {positivePercentage ? Math.round(positivePercentage) : 0} %{' '}</li>
</ul>
</div>)
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};