import { Component } from "react";
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  static defaultProps = {
    total: 0,
    positivePercentage: ''
  };

  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  counterFeedback = (option) => {
this.setState((prevState) => {
  return {
    [option]: prevState[option] + 1,
  }
});
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();

    return (good * 100) / totalFeedback;
  }

  render() {
    return (
    <>
    <Section title="Please leave feedback">
   <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.counterFeedback}/>
   </Section>
   <Section title="Statistics">
  <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}/>
              </Section>
    </>)
   
  }
}