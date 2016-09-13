/**
 * Created by Keno on 8/24/2016.
 */
export default (state = 0, action )=> {
    switch (action.type){
        case "TEST_ACTION":
            return state + 1;
        default:
            return state;
    }
}