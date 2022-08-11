import { useDispatch } from 'react-redux'

import { AppDispatch } from '../redux/helpers';

export const useAppDispatch = () => useDispatch<AppDispatch>();