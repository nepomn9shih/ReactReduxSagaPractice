import { CREATE_POST } from "./actionTypes"
import { showAlert } from "./appReducer"

const spam = ['купи', 'продам', 'куплю', 'продай']

export const spamWordsMiddleware = ({ dispatch }) => {
 return (next) => {
     return (action) => {
         if (action.type === CREATE_POST) {
            const found = spam.filter(word => action.payload.title.toLowerCase().includes(word))
            if (found.length) {
                return dispatch(showAlert("Вы спамер!"))
            }
         }
         return next(action)
     }
 }
}