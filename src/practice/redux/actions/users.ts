export const USER_ADDED = "user added";


let userId : number = 0;

export const userAdd = (name: string) => {
    return {type:USER_ADDED, payload: {id: ++userId, name}}
}