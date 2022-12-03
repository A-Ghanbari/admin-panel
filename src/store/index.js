import { configureStore } from '@reduxjs/toolkit'
import reducer from 'store/reducers'

const store = configureStore({ reducer })
export const getState = store.getState
export const dispatch = store.dispatch

export default store