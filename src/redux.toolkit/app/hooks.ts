import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import type { RootState, AppDispatch } from '../index';

export const useAppDispatch: () => AppDispatch = useDispatch; // método usado para evitar a nescessidade de ficar tipando o dispact em todo momento;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; // método usado para evitar a nescessidade de ficar tipando o useSelector em todo momento;
