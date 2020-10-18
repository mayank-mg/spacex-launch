import React, { useReducer, useEffect } from 'react';
import Footer from './components/Footer/footer'
 import {fetchData} from './action';
 import Card from './components/Card/card';
import { useHistory, useLocation } from "react-router-dom";
import {appReducer,defaultState} from './reducer';
import {apiConstant} from './Util/apiConstant';
import Filter from './components/Filter/filter';
import './App.css';

function App() {

const location=useLocation();
 const history=useHistory();
 const params= new URLSearchParams(location.search);


const handlefilter=(key,val)=>{
  if(params.has(key))
    params.set(key,val);
    else
    params.append(key,val) 
    history.push(location.pathname + "?" + params.toString());

}

const initialState = () => {
  const state = {};
  for (let [key, value] of params.entries()) {
    state[key] = value;
  }
  return state;
}

 const [state, dispatch] = useReducer(appReducer, defaultState);

 useEffect(() => {
  let query = 'limit=100';
  if (params.toString()) 
    query += '&' + params.toString();
    fetchData(query,dispatch);
  }, [location.search])

  return (
    <div className="app">
      <h1>SpaceX Launch Program</h1>
      <div className="container">
        <Filter className="FilterList" initial={initialState()} clickfilter={(key,val)=>handlefilter(key,val)}/>
        {state.isfetching && <div className="loaderContainer">
          <div className="loader"></div>  
        </div>}

        {state.isfetched &&  state.data.length>0?<div className="cardList">
          {state.data.map((item,i)=> { return <Card key={i} data={item}></Card>})}
          </div>: <h2 className="empty">No content Available</h2>}
      </div>
      <Footer className="flexcontainer"> </Footer>
    </div>
  );
}

export default App;

