import React, { Component } from 'react';
import { Statistics } from './Feedback/Statistics';
import { Section } from './Feedback/Section';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { FeedbackContainter, FeedbackIndicators } from './App.styled';
import { Notification } from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return bad + good + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    const percentage = (this.state.good / total) * 100;
    return percentage.toFixed(1);
  };

  clearStatistic = () => {
    this.setState({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();

    return (
      <FeedbackContainter>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.updateFeedback} />
        </Section>
        <FeedbackIndicators>
          {total > 0 ? (
            <Statistics
              title="Statistics"
              good={good}
              neutral={neutral}
              bad={bad}
              totalAmount={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
              clearStatistic={this.clearStatistic}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </FeedbackIndicators>
      </FeedbackContainter>
    );
  }
}