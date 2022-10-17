import axios from 'axios';
import {SERVER_URL} from "../config";
import useDatastore from "../datastore/useDatastore";
import {useCallback} from "react";

const axiosInstance = axios.create({
  baseURL: SERVER_URL
});

function useAxios() {
  const {datastore, setDatastore} = useDatastore();
  const accessToken = datastore?.token;

  const requestInterceptor = useCallback((config)=>{
    if (!config.headers) {
      config.headers = {};
    }
    config.headers.Authorization = `Bearer ${accessToken}`;
  }, [accessToken])

  console.log(datastore, setDatastore);

  return axiosInstance;
}

export default useAxios;
