import { GET_DATA, TASK_COMPLETED, TASK_DELETED, TASK_FAILED, TASK_STARTED, TASK_UPDATED } from "./actionType";


const init = {
  isLoading:true,
  data:[],
  isError:false,
}

export const reducer = (state = init, { type, payload }) => {
    switch (type) {
      case TASK_STARTED :
        return {...state,isLoading:true}
      case GET_DATA:
        return { ...state,isLoading:false, data: payload};
      case TASK_COMPLETED :
        return {...state,isComplete: true,isLoading:false};
      case TASK_UPDATED :
        return {...state,isLoading:false,data: payload};
      case TASK_DELETED :
        return {...state,isLoading:false};
      case TASK_FAILED :
        return {...state,isError:true,isLoading:false}  
      default:
        return state;
    }
  };