export const USER_DATA = 'USER_DATA'
 
export default function updateMi(data) {
     return(
        {
            type: USER_DATA,
            payload: {
             name: data
            }
        }
     )
 }
