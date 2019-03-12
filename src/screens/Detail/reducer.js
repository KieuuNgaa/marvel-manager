import actionTypes from "../../store/actionTypes";
import * as action from "./action";

const initialState = {
    getDetailCharacterPending: false,
    getDetailCharacterSuccess: false,
    detailCharacter: null,
    getDetailCharacterError: "",

    getCharacterComicsPending: false,
    getCharacterComicsSuccess: false,
    characterComics: null,
    getCharacterComicsError: "",
};

export default function detailCharacterReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_DETAIL_CHARACTER_PENDING:
            return {
                ...state,
                getDetailCharacterPending: true,
                getDetailCharacterSuccess: false,
                detailCharacter: null,
                getDetailCharacterError: ""
            };
        case actionTypes.GET_DETAIL_CHARACTER_SUCCESS:
            return {
                ...state,
                getDetailCharacterPending: false,
                getDetailCharacterSuccess: false,
                detailCharacter: action.detailCharacter,
                getDetailCharacterError: ""
            };
        case actionTypes.GET_DETAIL_CHARACTER_FAILURE:
            return {
                ...state,
                getDetailCharacterPending: false,
                getDetailCharacterSuccess: false,
                detailCharacter: null,
                getDetailCharacterError: action.getDetailCharacterError
            };

        case actionTypes.GET_CHARACTERS_COMICS_PENDING:
            return {
                ...state,
                getCharacterComicsPending: true,
                getCharacterComicsSuccess: false,
                characterComics: null,
                getCharacterComicsError: ""
            };
        case actionTypes.GET_CHARACTERS_COMICS_SUCCESS:
            return {
                ...state,
                getCharacterComicsPending: false,
                getCharacterComicsSuccess: false,
                characterComics: action.characterComics,
                getCharacterComicsError: ""
            };
        case actionTypes.GET_CHARACTERS_COMICS_FAILURE:
            return {
                ...state,
                getCharacterComicsPending: false,
                getCharacterComicsSuccess: false,
                characterComics: null,
                getCharacterComicsError: action.getCharacterComicsError
            };
        default:
            return state;
    }
}

export const mapStateToProps = (state, ownProps) => {
    return {
      detailCharacter: state.detailCharacterReducer.detailCharacter,
      getDetailCharacterPending: state.detailCharacterReducer.getDetailCharacterPending,
      getCharacterComicsPending: state.detailCharacterReducer.getCharacterComicsPending,
      characterComics: state.detailCharacterReducer.characterComics
    };
};

export const mapDispatchToProps = dispatch => ({
  getDetailCharacter: (id) => {
    dispatch(action.getDetailCharacter(id));
},

    getCharacterComics: (id) => {
        dispatch(action.getCharacterComics(id));
    },
});