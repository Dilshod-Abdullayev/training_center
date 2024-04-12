"use client"
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from '@/redux/store';
interface ProviderStoreProps {
    children: ReactNode;
}
const ProviderStore: React.FC<ProviderStoreProps> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};
export default ProviderStore;