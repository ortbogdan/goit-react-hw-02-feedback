import React from 'react';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return Object.keys(options).map(opt => (
    <button type="button" name={opt} key={opt} onClick={onLeaveFeedback}>
      {opt}
    </button>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
