import { useDispatch } from 'react-redux'

import { AppDispatch } from '../redux/helpers/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();