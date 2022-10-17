import {useContext} from "react";
import {DatastoreContext} from "./DatastoreProvider";

function useDatastore() {
  return useContext(DatastoreContext);
}

export default useDatastore;
