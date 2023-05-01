import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import {AppDispatch, RootState} from "../store/store.ts";

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
