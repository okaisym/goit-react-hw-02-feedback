import {FeedbackIndicators, FeedbackText, Percent} from './Statistics.styled'

export const Statistics = ({
    good,
    neutral,
    bad,
    totalAmount,
    positivePercentage,
  }) => (
    <FeedbackIndicators>
      <FeedbackText>Good: <Percent>{good}</Percent></FeedbackText>
      <FeedbackText>Neutral: <Percent> {neutral}</Percent></FeedbackText>
      <FeedbackText>Bad: <Percent>{bad}</Percent></FeedbackText>
      <FeedbackText>Total: <Percent>{totalAmount}</Percent></FeedbackText>
      <FeedbackText>Positive feedback: <Percent>{positivePercentage}%</Percent></FeedbackText>
    </FeedbackIndicators>
  );