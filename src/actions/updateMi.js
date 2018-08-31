export const UPDATE_MI = 'UPDATE_MI'
 
export default function updateMi(data) {
     return(
        {
            type: UPDATE_MI,
            payload: {
                name: data
            }
        }
     )
 }
