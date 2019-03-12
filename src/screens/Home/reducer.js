import actionTypes from "../../store/actionTypes";
import * as charactersAction from "./action";

const initialState = {
    getCharactersPending: false,
    getCharactersSuccess: false,
    characters: null,
    getCharactersError: "",
};

export default function charactersReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_CHARACTERS_PENDING:
            return {
                ...state,
                getCharactersPending: true,
                getCharactersSuccess: false,
                characters: null,
                getCharactersError: ""
            };
        case actionTypes.GET_CHARACTERS_SUCCESS:
            return {
                ...state,
                getCharactersPending: false,
                getCharactersSuccess: false,
                characters: action.characters,
                getCharactersError: ""
            };
        case actionTypes.GET_CHARACTERS_FAILURE:
            return {
                ...state,
                getCharactersPending: false,
                getCharactersSuccess: false,
                characters: null,
                getCharactersError: action.getCharactersError
            };
        default:
            return state;
    }
}

export const mapStateToProps = (state, ownProps) => {
    return {
        characters: state.charactersReducer.characters,
        getCharactersPending: state.charactersReducer.getCharactersPending
    };
};

export const mapDispatchToProps = dispatch => ({
    getCharacters: (limit, offset) => {
        dispatch(charactersAction.getCharacters(limit, offset));
    },
});