const quizes = [
  require('./data/1.0_Collision_Avoidance'),
  require('./data/2.0_Visual_Signals')
];

const initialState = {
  quizes,
  currentQuestion: 0,
  currentAnswer: undefined,
  submittedAnswers: []
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'SELECT_ANSWER':
      // Set the current answer to what the user selected
      return { ...state, currentAnswer: action.payload };
    
    case 'SUBMIT_ANSWER':
      // Append current answer onto submitted answers array
      return { ...state, submittedAnswers: [...state.submittedAnswers, state.currentAnswer], currentAnswer: undefined };
    
    case 'NEXT_QUESTION':
      return { ...state, currentQuestion: Math.min(state.currentQuestion + 1, state.quizes[action.payload].questions.length - 1)};
  
    case 'PREV_QUESTION':
      return { ...state, currentQuestion: Math.max(state.currentQuestion - 1, 0)};
      
    case 'RESET_QUIZ':
      return initialState;
    
    default:
      return state;
  }
}

export default reducer;