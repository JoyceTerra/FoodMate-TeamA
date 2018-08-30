export const UPDATE_LUNCH = 'UPDATE_LUNCH'
export const UPDATE_DINNER = 'UPDATE_DINNER'
export const UPDATE_AGE = 'UPDATE_AGE'
 
export function updateLunch(users) {
     return(
        {
            type: UPDATE_LUNCH,
            payload: users
        }
     )
 }

 export function updateDinner(users) {
    return(
       {
           type: UPDATE_DINNER,
           payload: users
       }
    )
}

export function updateAge(users, minage, maxage) {
    return(
       {
           type: UPDATE_AGE,
           payload: {
                users,
                minage,
                maxage,
           }
       }
    )
}