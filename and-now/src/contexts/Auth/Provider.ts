import React from "react";

export type Provider = {
  isLogged: boolean;
  setIsLogged: React.Dispatch<boolean>;
}