const state = {
  validator: {},
  enums: {},
};

const setState = (key, value) => {
  state[key] = value;
};

const getState = (key) => {
  return state[key];
};

export { setState, getState };
