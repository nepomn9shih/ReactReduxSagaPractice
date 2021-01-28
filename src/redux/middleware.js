import { showAlert } from "./appReducer"
import { postSlice } from "./postReducer"

const spam = ['купи', 'продам', 'куплю', 'продай']

export const spamWordsMiddleware = ({ dispatch }) => {
 return (next) => {
     return (action) => {
         if (action.type === postSlice.actions.createPost.type) {
            const found = spam.filter(word => action.payload.title.toLowerCase().includes(word))
            if (found.length) {
                return dispatch(showAlert("Вы спамер!"))
            }
         }
         return next(action)
     }
 }
}