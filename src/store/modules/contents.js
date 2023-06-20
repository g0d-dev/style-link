export const SET_CONTENTS = "contents/SET_CONTENTS";

export const setContents = (data) => ({
  type: SET_CONTENTS,
  payload: data,
});

const initialState = [];

export default function contents(state = initialState, action) {
  switch (action.type) {
    case SET_CONTENTS:
      return action.payload;
    default:
      return state;
  }
}
