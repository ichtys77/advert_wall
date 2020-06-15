import Axios from 'axios';
import { API_URL } from '../config';
/* selectors */
export const getAll = ({posts}) => posts.data;
export const getPostsByAuthor = ({posts}) => posts.data.filter(posts => posts.author === 'mazurkiewicz_l@outlook.com');

/* action name creator */
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_END = createActionName('FETCH_END');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const ADD_POST = createActionName('ADD_POST');
const EDIT_POST = createActionName('EDIT_POST');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchEnd = payload => ({ payload, type: FETCH_END });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const addPost = payload => ({payload, type: ADD_POST});
export const editPost = payload => ({payload, type: EDIT_POST});

/* thunk creators */
export const fetchPublished = () => {
  return async dispatch => {
    dispatch(fetchStarted());

    Axios
      .get(`${API_URL}/posts`)
      .then(res => {
        dispatch(fetchSuccess(res.data));
        dispatch(fetchEnd());
        console.log('get response');
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export const addRequest = (post) => {
  return async dispatch => {
    dispatch(fetchStarted());

    Axios
      .post(`${API_URL}/posts`, post)
      .then(res => {
        dispatch(addPost(res.data));
        //dispatch(fetchSuccess(res.data));
        console.log('post succes');
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_END: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: null,
          success: true,
        } ,
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }

    case ADD_POST: {
      return {
        ...statePart,
        data: [...statePart.data, { ...action.payload }],
        loading: {
          active: false,
          error: false,
        },
      };
    }

    case EDIT_POST: {
      return {
        ...statePart,
        data: statePart.data.map(post =>
          post.id === action.payload.id
            ?
            {...action.payload}
            :
            post
        ),
        loading: {
          active: false,
          error: false,
        },
      };
    }

    default:
      return statePart;
  }
};
