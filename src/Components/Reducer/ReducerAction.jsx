export default function ReducerAction(state,action){
    switch (action.type) {
        case 'ADD':{
            return state+1;
        }
            
            
            case 'SUB':{
                return state-1;
            }
            case 'ADD10':{
                return state+action.payload;
            }
                
                
                case 'SUB10':{
                    return state-action.payload;
                }
                case 'RESET':{
                    return state=0;
                }
            
            
    
        default:
            break;
    }
}