"use client";

import UserState from '@/context'

const CommonLayout = ({ children }) => {
    return <UserState>{children}</UserState>
}

export default CommonLayout
