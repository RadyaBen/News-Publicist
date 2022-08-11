import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../redux/helpers';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;