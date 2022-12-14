import { DECREMENT, INCREMENT, RESET } from '../types/counterTypes';

const initialState = {
  counter: 0,
};


//? reducer fonksiyonu içindeki "state" değişkeni bütün stateler anlamına geldiği için state.counter diyerek statelerin  içerisindeki counter statesine ulaşıp manüpüle etmiş olduk...

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { counter: state.counter + 1 };
    case DECREMENT:
      return { counter: state.counter - 1 };
    case RESET:
      return { counter: 0 };
    default:
      return state;
  }
};
export default counterReducer;
