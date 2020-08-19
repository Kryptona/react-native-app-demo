import {LOAD_POSTS, TOGGLE_BOOKED} from "../types";

const initialState = {
    allPosts: [],
    bookedPosts: []
};

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_POSTS:
            return {...state, allPosts: action.payload, bookedPosts: action.payload.filter(post => post.isBooked)};
            
        case TOGGLE_BOOKED:
            const allPosts = state.allPosts.map(post => {
                if (post.id === action.payload) {
                    post.isBooked = !post.isBooked;
                }
                return post;
            });
            return {...state, allPosts, bookedPosts: allPosts.filter(post => post.isBooked)};
            
        default:
            return state
    }
};

