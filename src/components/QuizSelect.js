import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class QuizSelect extends Component {
  render() {
    return (
      <div>
        <p>
          The PSTAR (<i>Student Pilot Permit or Private Pilot Licence for Foreign and Military Applicants, Aviation
          Regulation Examination</i>), as the name implies, is an exam all students must pass to obtain their student pilot
          permit. The PSTAR consists of 50 questions selected from this guide, and a mark of 90% is required to pass.
        </p>
        
        <p>
          References:
          <br/>
          <a href="https://www.tc.gc.ca/eng/civilaviation/publications/tp11919-general-81.htm" target="_blank">
            <i className="fa fa-external-link" aria-hidden="true"></i> Student Pilot Permit or Private Pilot Licence for Foreign and Military Applicants, Aviation Regulations
          </a>
          <br/>
          <a href="https://www.tc.gc.ca/eng/civilaviation/publications/tp14371-menu-3092.htm" target="_blank">
            <i className="fa fa-external-link" aria-hidden="true"></i> Transport Canada Aeronautical Information Manual (TC AIM)
          </a>
          <br/>
          <a href="https://www.tc.gc.ca/eng/civilaviation/publications/page-6559.html" target="_blank">
            <i className="fa fa-external-link" aria-hidden="true"></i> CARs and Standards Quick Reference Sheet
          </a>
        </p>
        
        <p>Select a quiz below:</p>
        {
          this.props.quizes.map((quiz, i) => {
            return <Link className="quizLink" key={i} to={`${i}`}>{quiz.title}</Link>;
          })
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quizes: state.quizes
  };
};

export default connect(mapStateToProps, null)(QuizSelect);