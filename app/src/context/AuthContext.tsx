import React, { useState, createContext, ReactNode } from 'react';

interface AuthContextProps {
  isAuthenticated: boolean;
  twoFACode: string | null;
  login: (username: string, password: string) => string | null;
  verifyCode: (code: string) => boolean;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [twoFACode, setTwoFACode] = useState<string | null>(null);

  const login = (username: string, password: string) => {
    // Very basic credential check, for demo purposes
    if (username === 'user' && password === 'password') {
      const generated = Math.floor(100000 + Math.random() * 900000).toString();
      setTwoFACode(generated);
      return generated;
    }
    return null;
  };

  const verifyCode = (code: string) => {
    if (code === twoFACode) {
      setIsAuthenticated(true);
      setTwoFACode(null);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setTwoFACode(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, twoFACode, login, verifyCode, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
