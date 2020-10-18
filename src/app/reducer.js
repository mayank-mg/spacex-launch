import {appAction} from './action';

export const defaultState={
    data:{},
    isfetching:true,
    isfetched:false,
    error:null
};

export const appReducer=(state=defaultState,action)=>
{
    switch(action.type)
    {
        case appAction.Fetch_Data_Request:
            return{
            ...state,
            isfetching:true,
            isfetched:false,

        }
        case appAction.Fetch_Data_Sucess:
            return{
            ...state,
            isfetching:false,
            isfetched:true,
            data:action.payload,

        }
        
        case appAction.Fetch_Data_Error:
            return {
                ...state,
                isFetching: false,
                isFetched: false,
                error: action.payload.error,
            }
            default :
            return state;
   
        }

    
}