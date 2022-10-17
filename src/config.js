function requireEnvVariable(variableName) {
  if (!process.env[variableName]) {
    throw new Error('')
  }
  return process.env[variableName];
}

export const SERVER_URL = requireEnvVariable('REACT_APP_SERVER_URL');
