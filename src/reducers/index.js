const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_NEWS':
      return { ...state,  };
    case 'NEWS_RECEIVED':
      return { ...state, news: action.json[Math.floor(Math.random()*10)],}
    default:
      return state;
  }
};

export default reducer;
