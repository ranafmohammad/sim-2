import axios from 'axios';



const GET_HOUSES = 'GET_HOUSES';
const CREATE_HOUSE = 'CREATE_HOUSE';


export function getHouses(){
  return{
    type: GET_HOUSES,
    payload: axios.get('api/houses')
  }
}
 export function createHouse(){
   return{
     type: CREATE_HOUSE,
     payload: axios.post('/api/houses')
   }
 }



 const initialState ={
   houses: [],
   isLoading: false,
   error:''
 }
 export default function houseReducer (){
   
 }