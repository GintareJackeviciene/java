import counter1 from './counter1';
import counter2 from './counter2';

export default function counterReducer(state, action) {

    if (action.type >= 2000 && action.type <= 2999) {
        return counter1(state, action);
    } else if (action.type >= 4000 && action.type <= 4999) {
        return counter2(state, action);
    } else {
        return state;
    }
}