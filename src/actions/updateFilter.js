export const UPDATE_LUNCH = 'UPDATE_LUNCH'
export const UPDATE_DINNER = 'UPDATE_DINNER'
export const UPDATE_AGE = 'UPDATE_AGE'
export const UPDATE_25 = 'UPDATE_25'
export const UPDATE_40 = 'UPDATE_40'
export const UPDATE_65 = 'UPDATE_65'
export const UPDATE_OLDER = 'UPDATE_OLDER'
export const UPDATE_35 = 'UPDATE_35'
export const UPDATE_50 = 'UPDATE_50'
export const UPDATE_75 = 'UPDATE_75'
export const UPDATE_HIGH = 'UPDATE_HIGH'
 
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

export function update25(users) {
    return(
       {
           type: UPDATE_25,
           payload: users
       }
    )
}

export function update40(users) {
    return(
       {
           type: UPDATE_40,
           payload: users
       }
    )
}

export function update65(users) {
    return(
       {
           type: UPDATE_65,
           payload: users
       }
    )
}

export function updateOlder(users) {
    return(
       {
           type: UPDATE_OLDER,
           payload: users
       }
    )
}

export function update35(users) {
    return(
       {
           type: UPDATE_35,
           payload: users
       }
    )
}

export function update50(users) {
    return(
       {
           type: UPDATE_50,
           payload: users
       }
    )
}

export function update75(users) {
    return(
       {
           type: UPDATE_75,
           payload: users
       }
    )
}

export function updateHigh(users) {
    return(
       {
           type: UPDATE_HIGH,
           payload: users
       }
    )
}