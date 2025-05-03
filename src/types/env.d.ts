declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_DB_HOST: string;
    REACT_APP_DB_USER: string;
    REACT_APP_DB_PASSWORD: string;
    REACT_APP_DB_DATABASE: string;
  }
}