import React from 'react';
import { CiLight } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from './store';
import { toggleTheme } from '@/redux/action/ThemeAction';

export default function Mode() {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.value);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div onClick={handleToggleTheme}>
      {theme ? <CiLight className='text-3xl' /> : <FaRegMoon className='text-3xl' />}
    </div>
  );
}
