import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectAnswer } from '../actions';

class Question extends Component {
  componentDidUpdate() {
    let radioButtons = document.getElementsByClassName('radio_button');
    
    for (var i = 0; i < radioButtons.length; i++) {
      radioButtons[i].checked = false;
    }
  }
  
  render() {
    let submitted = false;
    if (this.props.currentSubmittedAnswer !== undefined) {
      // An answer has been submitted, let's disable all inputs and
      // and mark the question.
      submitted = true;
    }
    
    return (
      <div>
        <div style={{ margin: '15px', minHeight: '40px', display: 'flex' }}>
          <span className="question_counter">( {this.props.currentQuestionIndex+1} / {this.props.totalQuestions} )</span>
          <span dangerouslySetInnerHTML={{__html: this.props.question.question }}></span>
        </div>
        <div style={{  minHeight: '160px' }}>
          {this.props.question.answers.map((ans, i) => {
            return (
              <div key={i} className="answer">
                <div className="number_container">
                  <div className="number">{i+1}</div>
                </div>
                <input
                  className={
                    submitted && i === this.props.currentSubmittedAnswer && i === this.props.correctAnswer
                      ? 'radio_button mark_correct'
                      : submitted && i === this.props.currentSubmittedAnswer
                        ? 'radio_button mark_incorrect'
                        : submitted && i === this.props.correctAnswer
                          ? 'radio_button mark_green'
                          : 'radio_button'
                  }
                  disabled={submitted}
                  type="radio"
                  id={i}
                  name="answer"
                  value={i}
                  onClick={this.props.selectAnswer.bind(this, i)} />
                <label htmlFor={i} dangerouslySetInnerHTML={{__html: ans }}></label>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    totalQuestions: state.quizes[ownProps.quizIndex].questions.length,
    currentQuestionIndex: state.currentQuestion,
    currentSubmittedAnswer: state.submittedAnswers[state.currentQuestion],
    correctAnswer: state.quizes[ownProps.quizIndex].correctAnswers[state.currentQuestion]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectAnswer: ans => dispatch(selectAnswer(ans))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
// export default connect(null, mapDispatchToProps)(Question);