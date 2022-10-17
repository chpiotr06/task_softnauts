import {createContext, useCallback, useMemo, useState} from "react";

export const DatastoreContext = createContext(undefined);

function DatastoreProvider({children}) {
  const [accessToken, setAccessToken] = useState(null);
  const [rememberToken, setRememberToken] = useState(null);
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);

  const addMessage = useCallback((level, message) => {
    setMessages([...messages, { level, message }]);
  }, [messages]);

  const removeMessage = useCallback((level, message)=>{
    setMessages([...messages.filter((item)=>(item.level !== level || item.message !== message))])
  }, [messages]);

  const datastore = useMemo(()=>{
    return {
      accessToken, setAccessToken,
      rememberToken, setRememberToken,
      user, setUser,
      messages, setMessages, addMessage, removeMessage
    }
  }, [accessToken, addMessage, messages, rememberToken, removeMessage, user]);

  return (
    <DatastoreContext.Provider value={datastore}>
      {children}
    </DatastoreContext.Provider>
  )
}

export default DatastoreProvider;
