import { createGlobalState } from "react-hooks-global-state";

const {setUserInfo, useUserInfo} = createGlobalState({
    logged: false,
    userId: 1
})

export {useUserInfo, setUserInfo}