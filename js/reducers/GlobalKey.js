


import R from 'ramda';

const initialState = {
    input: []
}

export const globalkeyreducer = (state=initialState, action) => {
    switch (action.type) {
        case 'GLOBAL_KEY_PRESSED':
            const currentKey = action.payload.key;
            if(state.input.length>0 && currentKey[action.payload.key.length - 1 ] ===" " ){
                return R.merge(state, { input: []});
            }
            else {
                let arr = R.concat(state.input, [action.payload.key])
                return R.merge(state, { input:arr});
            }

            return action.payload;
        default:
            return state;
    }
}
export  default globalkeyreducer;