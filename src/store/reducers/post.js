import {ADD_POST, LOAD_POSTS, REMOVE_POST, TOGGLE_BOOKED} from "../types";

const initialState = {
    allPosts: [],
    bookedPosts: []
};

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_POSTS:
            return {...state, allPosts: action.payload, bookedPosts: action.payload.filter(post => post.isBooked)};

        case REMOVE_POST:
            console.log("reducer");
            return {
                ...state, 
                allPosts: state.allPosts.filter(post => post.id !== action.payload), 
                bookedPosts: state.bookedPosts.filter(post => post.id !== action.payload)
            };

        case TOGGLE_BOOKED:
            const allPosts = state.allPosts.map(post => {
                if (post.id === action.payload) {
                    post.isBooked = !post.isBooked;
                }
                return post;
            });
            return {...state, allPosts, bookedPosts: allPosts.filter(post => post.isBooked)};

        case ADD_POST:
            return {
                ...state,
                allPosts: [{...action.payload}, ...state.allPosts]
            }
            
            
        default:
            return state
    }
};

