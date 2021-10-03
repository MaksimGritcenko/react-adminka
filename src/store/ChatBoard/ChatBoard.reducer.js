import {
  SET_ACTIVE_TAB,
  UPDATE_QUESTIONS,
  UPDATE_IS_QUESTIONS_LOADING,
  DELETE_QUESTION,
  UPDATE_FORMULATION,
  UPDATE_IS_FORMULATION_LOADING,
} from './ChatBoard.action';

const updateQuestions = (state, action) => {
  const { questions: questionsToPush } = action;

  const questions = questionsToPush instanceof Array
    ? questionsToPush
    : [...state.questions, { data: { ...questionsToPush } }];

  return {
    ...state,
    questions,
  };
};

const deleteQuestion = (state, action) => {
  const { questionId } = action;
  const { questions: prevQuestions } = state;

  const questions = prevQuestions.filter(({ id }) => id !== questionId);

  return {
    ...state,
    questions,
  };
};

const getInitialState = () => ({
  chatBoard: [],
  activeTab: null,
  questions: [],
  formulation: '',
  isFormulationLoading: false,
  isQuestionsLoading: false,
});

export const ChatBoardReducer = (
  state = getInitialState(),
  action,
) => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      const { tabId } = action;

      return {
        ...state,
        activeTab: tabId,
      };

    case UPDATE_QUESTIONS:
      return updateQuestions(state, action);

    case DELETE_QUESTION:
      return deleteQuestion(state, action);

    case UPDATE_IS_QUESTIONS_LOADING:
      const { isQuestionsLoading } = action;

      return {
        ...state,
        isQuestionsLoading,
      };

    case UPDATE_IS_FORMULATION_LOADING:
      const { isFormulationLoading } = action;

      return {
        ...state,
        isFormulationLoading,
      };

    case UPDATE_FORMULATION:
      const { formulation } = action;

      return {
        ...state,
        formulation,
      };

    default:
      return state;
  }
};

export default ChatBoardReducer;
