import {configureStore} from "@reduxjs/toolkit"
import { TodoSlice } from "./feature/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux/es/types";


export const store = configureStore({
  reducer: {
    todo: TodoSlice.reducer
  }
})

export const useAppDispatch: ()=>typeof store.dispatch=useDispatch;

export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;
