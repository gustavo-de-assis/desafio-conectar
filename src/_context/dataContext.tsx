"use client";

import { fetchGdpData } from "@/_services/api";
import { GdpDataType } from "@/_types/pib";
import { createContext, useEffect, useMemo, useState } from "react";

type DataContextType = {
  gdpData: GdpDataType[];
  loading: boolean;
  error: string | null;
  fetchData: () => Promise<void>;
};

export const DataContext = createContext({} as DataContextType);

export function DataProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [gdpData, setGdpData] = useState<GdpDataType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchData(): Promise<void> {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchGdpData();
      setGdpData(data);

      console.log("pibData:\n", data);
    } catch (error) {
      setError("Falha na busca de dados da api");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const value = useMemo(
    () => ({
      gdpData,
      loading,
      error,
      fetchData,
    }),
    [gdpData, loading, error]
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
