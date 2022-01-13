import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsBox } from './Statistics.styled';

export const Statistics = props => {
  const { good, neutral, bad, total, positivePercentage } = props;
  return (
    <StatisticsBox>
      <p>
        Good:<span>{good}</span>
      </p>
      <p>
        Neutral:<span>{neutral}</span>
      </p>
      <p>
        Bad:<span>{bad}</span>
      </p>
      <p>
        Total:<span>{total}</span>
      </p>
      <p>
        Positive feedback:<span>{positivePercentage}%</span>
      </p>
    </StatisticsBox>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
