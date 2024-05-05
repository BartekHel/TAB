import { createGlobalState } from "react-hooks-global-state";

const {setUserInfo, useUserInfo} = createGlobalState({
    logged: false,
    userId: 0
})

export {useUserInfo, setUserInfo}