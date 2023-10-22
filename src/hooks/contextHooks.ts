import { AppDispatch, RootState } from "contexts/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
