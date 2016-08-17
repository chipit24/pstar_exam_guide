import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import { submitAnswer, nextQuestion, prevQuestion, resetQuiz } from '../actions';

class Quiz extends Component {
  componentWillMount() {
    this.props.resetQuiz();
  }
  
  submitAnswer = () => {
    if (this.props.currentAnswer !== undefined) {
      this.props.submitAnswer();
    } else {
      alert('Please select an answer first.');
    }
  };
  
  render() {
    let correct = 0;
    let wrong = 0;
    
    this.props.submittedAnswers.forEach((ans, i) => {
      this.props.correctAnswers[i] === ans
        ? correct++
        : wrong++;
    });
    
    let buttons = [
      <button className="quizButton prev"
              onClick={this.props.prevQuestion}
              key="prev"
              disabled={this.props.currentQuestionIndex === 0}>
        Previous Question
      </button>
    ];
    
    if (this.props.currentSubmittedAnswer === undefined) {
      buttons.push(<button className="quizButton submit"
                           onClick={this.props.submitAnswer}
                           key="next"
                           disabled={this.props.currentAnswer === undefined}>
        Submit Answer
      </button>);
    } else {
      if (this.props.currentQuestionIndex === this.props.correctAnswers.length - 1) {
        buttons.push(<button className="quizButton complete" key="next" onClick={this.props.resetQuiz}>Re-do Quiz</button>);
      } else {
        buttons.push(<button className="quizButton next" key="next" onClick={this.props.nextQuestion.bind(this, this.props.params.quizIndex)}>Next Question</button>);
      }
    }
    
    return (
      <div>
        <Question question={this.props.currentQuestion} quizIndex={this.props.params.quizIndex} />
        <div style={{margin: '15px auto', display: 'flex'}}>
          <div style={{flex: 1, alignSelf: 'center', minWidth: '75px'}}>
            <i className="fa fa-check" style={{color: 'green'}} aria-hidden="true"></i> {correct}
            <span style={{padding: '5px', fontWeight: 'bold'}}>|</span>
            <i className="fa fa-times" style={{color: 'green'}} aria-hidden="true"></i> {wrong}
          </div>
          {buttons}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    submittedAnswers: state.submittedAnswers,
    correctAnswers: state.quizes[ownProps.params.quizIndex].correctAnswers,
    currentQuestionIndex: state.currentQuestion,
    currentQuestion: state.quizes[ownProps.params.quizIndex].questions[state.currentQuestion],
    currentAnswer: state.currentAnswer,
    currentSubmittedAnswer: state.submittedAnswers[state.currentQuestion]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitAnswer: () => dispatch(submitAnswer()),
    nextQuestion: quizIndex => dispatch(nextQuestion(quizIndex)),
    prevQuestion: () => dispatch(prevQuestion()),
    resetQuiz: () => dispatch(resetQuiz())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);