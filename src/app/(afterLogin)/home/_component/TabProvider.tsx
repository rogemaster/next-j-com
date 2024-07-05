"use client"

import React, {createContext, useState} from "react";

export const TabContext = createContext({
  tab: 'rec',
  setTab: (value: 'rec' | 'fol') => {},
});

type Props = {children: React.ReactNode};

export default function TabProvider({children}: Props) {
  const [tab, setTab] = useState<string>('rec');

  return (
    <TabContext.Provider value={{tab, setTab}}>
      {children}
    </TabContext.Provider>
  )
}