import marvelService from "../../services/marvelService";
import actionTypes from "../../store/actionTypes";

// GET CHARACTERS
export const getCharactersPending = () => ({
  type: actionTypes.GET_CHARACTERS_PENDING,
});

export const getCharactersSuccess = characters => ({
  type: actionTypes.GET_CHARACTERS_SUCCESS,
  characters
});

export const getCharactersFailure = error => ({
  type: actionTypes.GET_CHARACTERS_FAILURE,
  error
});

export const getCharacters = (limit, offset) => dispatch => {
  dispatch(getCharactersPending());
  
  return marvelService.getCharacters(limit, offset).then(
      results => {
          dispatch(getCharactersSuccess(results));
      },
      error => {
          dispatch(getCharactersFailure(error));
      }
  );
};
