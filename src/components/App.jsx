import { Component } from "react";
import{Section} from "./section/section";
import { FeedBackOptions } from "./feedbackoptions/feedbackoptions";
import { Statistics } from "./statistics/statistics";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
  }

  onLeaveFeedback = (type) => {
    this.setState(prevState => {
      return {
      [type]: prevState[type] + 1,
      }
    })
  };

 
 
  countTotalFeedback = ()=>{
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback === 0 ? 0 : (good / totalFeedback) * 100;
  };

  render(){
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}>
    <Section title="Please leave feedback">
      <FeedBackOptions onLeaveFeedback={this.onLeaveFeedback}/>
    </Section>
    <Section title="Statistics">
    <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={totalFeedback} positivePercentage={positiveFeedbackPercentage}/>
    </Section>
      </div>
    )
  }
}
