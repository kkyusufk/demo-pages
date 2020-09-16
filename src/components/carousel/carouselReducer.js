const initialState = {
  translateX: 0,
  activeElement: 0,
  imageIndex: 0,
};

const carouselReducer = (state, action) => {
  switch (action.type) {
    case "NEXT":
      return {
        translateX: state.translateX - 100,
        activeElement: state.activeElement + 1,
        imageIndex: state.imageIndex + 1,
      };
    case "PREVIOUS":
      return {
        translateX: state.translateX + 100,
        activeElement: state.activeElement - 1,
        imageIndex: state.imageIndex - 1,
      };
    case "RESET":
      return {
        ...initialState,
      };
  }
};

export { initialState, carouselReducer };
