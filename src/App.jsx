import React, { Component } from 'react';
import { Statistics, FeedbackOptions, Section } from './components/index';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClick = event => {
    const { name } = event.target;
    this.setState({ [name]: this.state[name] + 1 });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = totalCount => {
    if (!totalCount) {
      return 0;
    }
    return Math.floor((this.state.good / totalCount) * 100);
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage(total);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleClick}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percentage}
          ></Statistics>
        </Section>
      </>
    );
  }
}
