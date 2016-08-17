export function selectAnswer(answer) {
  return {
    type: 'SELECT_ANSWER',
    payload: answer
  };
}

export function submitAnswer() {
  return {
    type: 'SUBMIT_ANSWER'
  };
}

export function nextQuestion(quizIndex) {
  return {
    type: 'NEXT_QUESTION',
    payload: quizIndex
  };
}

export function prevQuestion() {
  return {
    type: 'PREV_QUESTION'
  };
}

export function resetQuiz() {
  return {
    type: 'RESET_QUIZ'
  };
}