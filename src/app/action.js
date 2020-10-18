import apirequest from './Util/api';
import createAction from './Util/actionCreator';

export const appAction=createAction("appAction",[
    "Fetch_Data_Request",
    "Fetch_Data_Sucess",
    "Fetch_Data_Error"

]);

const getAdditionParam=(params)=>{
return{
    url: `/launches?${params}`,
    method:'GET'
}

}

export const fetchDataSuccess=(data)=>{
    return {
        type:appAction.Fetch_Data_Sucess,
        payload:data
        }   
    }
    export const fetchDataError=(err)=>{
        return {
            type:appAction.Fetch_Data_Error,
            payload:err
            }     
        }


export const fetchDataRequest=()=>{
return {
    type:appAction.Fetch_Data_Request,
    }

}

export  const fetchData=(param,dispatch)=>{
    dispatch(fetchDataRequest);

    apirequest.request(getAdditionParam(param)).then((res)=>{
            dispatch(fetchDataSuccess(res.data));
    }).catch((err)=>{
      
        dispatch(fetchDataError(err));
    })

}