import { createGlobalState } from "react-hooks-global-state";

const {setUserInfo, useUserInfo} = createGlobalState({
    logged: false,
    userName: '',
    userSurname: '',
    userEmail: '',
    userRole: ''
})

export {useUserInfo, setUserInfo}