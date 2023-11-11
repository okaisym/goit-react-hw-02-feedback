import {Btn} from './FeedbackOptions.styled'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
        <div>
          {options.map(option => (
            <Btn key={option} onClick={() => onLeaveFeedback(option)}>
              {option}
            </Btn>
          ))}
        </div>
      );
