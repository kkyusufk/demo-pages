const reelReducer = (state, action) => {
  switch (action.type) {
    case "NEXT":
      return {
        ...state,
        previousSlide: state.currentSlide,
        currentSlide: state.nextSlide,
        nextSlide: state.nextSlide + 1,
      };
    case "RESET":
      return {
        ...state,
        nextSlide: 0,
      };
    default:
      throw new Error();
  }
};

export { reelReducer };
