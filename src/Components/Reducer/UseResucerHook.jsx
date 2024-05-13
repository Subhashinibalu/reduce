import React, { useReducer } from 'react';
import ReducerAction from './ReducerAction';

const UseResucerHook = () => {
    const [state,dispatch] = useReducer(ReducerAction,0)
    return (
        <>
        <div className='container justify-content-center mt-5'>
        <h1 className='text-center'>{state}</h1>

        <div className="row  d-flex justify-content-center ">
        <button className='btn btn-success col-3 ms-3 ' onClick={()=>{dispatch({type:'ADD'})}}>ADD</button>
<button  className='btn btn-danger col-3 ms-3 ' onClick={()=>{dispatch({type:'SUB'})}}>SUB</button>
        </div>
        <div className="row  d-flex justify-content-center mt-5">
        <button className='btn btn-success col-3 ms-3 ' onClick={()=>{dispatch({type:'ADD10',payload:10})}}>ADD 10</button>
<button  className='btn btn-danger col-3 ms-3 ' onClick={()=>{dispatch({type:'SUB10',payload:10})}}>SUBTRACT 10</button>
        </div>
        <div className="row  d-flex justify-content-center mt-5 ">
        <button className='btn btn-primary col-3 ' onClick={()=>{dispatch({type:'RESET'})}}>RESET</button>

        </div>

        </div>
                
        </>
    );
};

export default UseResucerHook;