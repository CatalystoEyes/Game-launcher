import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { useDispatch } from 'react-redux'
import { actions } from '../store/favourites/favourite.slice'
import * as userActions from "../store/user/userActions"

const rootActions = {
    ...actions,
    ...userActions
}

export const useActions = () => {
    const dispath = useDispatch()
    return useMemo(() => bindActionCreators(rootActions, dispath), [dispath])
}
