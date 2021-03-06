import {
  FETCH_MEMBERS_START,
  FETCH_MEMBERS_ERROR,
  FETCH_MEMBERS_SUCCESS,
  ADD_MEMBER_START,
  ADD_MEMBER_ERROR,
  ADD_MEMBER_SUCCESS,
  REMOVE_MEMBER_START,
  REMOVE_MEMBER_ERROR,
  REMOVE_MEMBER_SUCCESS,
  ADD_WORKSPACES,
  ADD_WORKSPACE_START,
  ADD_WORKSPACE_SUCCESS,
  ADD_WORKSPACE_FAIL
} from "./constants";

import { REQUEST_USER_START } from "../user/constants";

const initialState = {
  workspaces: {},
  isFetching: false,
  isFetchingWorkspaces: true,
  message: null
};

const workspaceReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_USER_START:
      return {
        ...state,
        isFetchingWorkspaces: true
      };
    case ADD_WORKSPACES:
      return {
        ...state,
        isFetchingWorkspaces: false,
        workspaces: action.payload
      };
    case FETCH_MEMBERS_START:
      return { ...state, isFetching: true };
    case FETCH_MEMBERS_ERROR:
      return { ...state, isFetching: false };
    case FETCH_MEMBERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        workspaces: state.workspaces.map(w => {
          if (w._id === action.payload.workspaceId) {
            w.members = action.payload.members;
          }
          return w;
        })
      };
    case ADD_MEMBER_START:
      return { ...state, isFetching: true };
    case ADD_MEMBER_ERROR:
      return { ...state, isFetching: false };
    case ADD_MEMBER_SUCCESS:
      return {
        ...state,
        workspaces: state.workspaces.map(w => {
          if (w._id === action.payload.workspace._id) {
            w.members = action.payload.workspace.members;
          }

          return w;
        })
      };
    case REMOVE_MEMBER_START:
      return { ...state, isFetching: true };
    case REMOVE_MEMBER_ERROR:
      return { ...state, isFetching: false };
    case REMOVE_MEMBER_SUCCESS:
      return {
        ...state,
        workspaces: state.workspaces.map(w => {
          if (w._id === action.payload.workspace._id) {
            w.members = action.payload.workspace.members;
          }

          return w;
        })
      };
    case ADD_WORKSPACE_START:
      return { ...state, isFetching: true };
    case ADD_WORKSPACE_SUCCESS:
      return {
        ...state,
        workspaces: [...state.workspaces, action.payload.workspace],
        isFetching: false
      };
    case ADD_WORKSPACE_FAIL:
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  }
};

export default workspaceReducer;
