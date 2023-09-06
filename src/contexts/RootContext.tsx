import React, { Context, useState, createContext } from "react";

interface RootContextState {
  state: {
    section: "hot" | "top" | "user";
    sort: "top" | "viral" | "time" | "rising";
    window: "day" | "week" | "month" | "year" | "all" | undefined;
    page: number;
    showViral: boolean;
  };
  action: {
    setSection: React.Dispatch<React.SetStateAction<"hot" | "top" | "user">>;
    setSort: React.Dispatch<
      React.SetStateAction<"top" | "viral" | "time" | "rising">
    >;
    setWindow: React.Dispatch<
      React.SetStateAction<
        "day" | "week" | "month" | "year" | "all" | undefined
      >
    >;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    setShowViral: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

const RootContext = createContext<RootContextState>(
  {} as any
) as Context<RootContextState>;

interface RootProviderProps {
  children: React.ReactNode;
}

const RootProvider = ({ children }: RootProviderProps) => {
  const [section, setSection] = useState<"hot" | "top" | "user">("user");
  const [sort, setSort] = useState<"top" | "viral" | "time" | "rising">("top");
  const [window, setWindow] = useState<
    "day" | "week" | "month" | "year" | "all" | undefined
  >("month");
  const [page, setPage] = useState<number>(0);
  const [showViral, setShowViral] = useState<boolean>(false);

  const value = {
    state: { section, sort, window, page, showViral },
    action: { setSection, setSort, setWindow, setPage, setShowViral },
  };
  return <RootContext.Provider value={value}>{children}</RootContext.Provider>;
};

export { RootContext, RootProvider };
