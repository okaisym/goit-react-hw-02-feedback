import React, { Component } from "react";
import { Statistics } from './Feedback/Statistics';
import { Section } from './Feedback/Section';
import { FeedbackOptions } from "./Feedback/FeedbackOptions";
import {FeedbackContainter, FeedbackIndicators} from './App.styled';
import {Notification} from './Notification'

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
};

updateFeedback = option => {
  this.setState(prevState => ({
    [option]: prevState[option] + 1,
  }));
};

onClickGood = () => {
  this.setState(prevState => {
    return {
      good: prevState.good + 1,
    };
  });
};

onClickNeutral = () => {
  this.setState(prevState => {
    return {
      neutral: prevState.neutral + 1,
    };
  });
};

onClickBad = () => {
  this.setState(prevState => {
    return {
      bad: prevState.bad + 1,
    };
  });
};

countTotalFeedback = () => {
  const {good, neutral, bad} = this.state;
  return bad + good + neutral;
};

countPositiveFeedbackPercentage = () => {
const total = this.countTotalFeedback();
  if (total === 0) {
    return 0; 
  }
  const percentage = (this.state.good / total) * 100;
  return percentage.toFixed(1)
};

render() {
  const { good, neutral, bad } = this.state;
  const options = Object.keys(this.state);

  return (
    <FeedbackContainter>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.updateFeedback}
        />
      </Section>
      <FeedbackIndicators>
        <Statistics title='Statistics'
        good={good}
        neutral={neutral}
        bad={bad}
        totalAmount={this.countTotalFeedback()}
        positivePercentage={this.countPositiveFeedbackPercentage()}
        />
         <Notification message="There is no feedback" />
      </FeedbackIndicators>
    </FeedbackContainter>
  );
}
}

