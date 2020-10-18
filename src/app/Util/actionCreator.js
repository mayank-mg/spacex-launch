import {React} from 'react';


const createAction=(actionName,actionList)=>{

    let actionCreator=actionList.reduce((acc,item)=>{
        acc[item]= actionName+"/"+item;
        return acc;

    },{})

    return actionCreator;


}

export default createAction