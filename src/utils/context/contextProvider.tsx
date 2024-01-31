import React, {createContext, useEffect, useState} from 'react';

interface AppContextPropsType {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export const AppContext = createContext<AppContextPropsType>({
  isLoading: true,
  setIsLoading: () => {},
});

const ContextProvider = (props: {children: any}) => {
  const {children} = props;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {}, []);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
