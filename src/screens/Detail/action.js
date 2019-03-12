import marvelService from "../../services/marvelService";
import actionTypes from "../../store/actionTypes";

// GET DETAIL CHARACTER
export const getDetailCharacterPending = () => ({
  type: actionTypes.GET_DETAIL_CHARACTER_PENDING,
});

export const getDetailCharacterSuccess = detailCharacter => ({
  type: actionTypes.GET_DETAIL_CHARACTER_SUCCESS,
  detailCharacter
});

export const getDetailCharacterFailure = error => ({
  type: actionTypes.GET_DETAIL_CHARACTER_FAILURE,
  error
});

export const getDetailCharacter = (id) => dispatch => {
  dispatch(getDetailCharacterPending());

  return marvelService.getDetailCharacter(id).then(
      results => {
          dispatch(getDetailCharacterSuccess(results));
      },
      error => {
          dispatch(getDetailCharacterFailure(error));
      }
  );
};

// GET CHARACTER COMICS

export const getCharacterComicsPending = () => ({
  type: actionTypes.GET_CHARACTERS_COMICS_PENDING,
});

export const getCharacterComicsSuccess = characterComics => ({
  type: actionTypes.GET_CHARACTERS_COMICS_SUCCESS,
  characterComics
});

export const getCharacterComicsFailure = error => ({
  type: actionTypes.GET_CHARACTERS_COMICS_FAILURE,
  error
});

export const getCharacterComics = (id) => dispatch => {
  dispatch(getCharacterComicsPending());
  
  return marvelService.getCharacterComics(id).then(
      results => {
          dispatch(getCharacterComicsSuccess(results));
      },
      error => {
          dispatch(getCharacterComicsFailure(error));
      }
  );
};