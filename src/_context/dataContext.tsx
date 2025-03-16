"use client";

import { fetchPerCapita, fetchPibTotal } from "@/_services/api";
import { PibType } from "@/_types/pib";
import { createContext, useEffect, useMemo, useState } from "react";

type DataContextType = {
  pibTotal: PibType[];
  pibPerCapita: PibType[];
  loading: boolean;
  error: string | null;
  fetchData: () => Promise<void>;
};

export const DataContext = createContext({} as DataContextType);

export function DataProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [pibTotal, setPibTotal] = useState<any[]>([]);
  const [pibPerCapita, setPibPerCapita] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchData(): Promise<void> {
    setLoading(true);
    setError(null);

    try {
      const total = await fetchPibTotal();
      setPibTotal(total);

      const perCapita = await fetchPerCapita();
      setPibPerCapita(perCapita);

      console.log("pibTotal:\n", total, "\n\npibPerCapita:\n", perCapita);
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
      pibTotal,
      pibPerCapita,
      loading,
      error,
      fetchData,
    }),
    [pibTotal, pibPerCapita, loading, error]
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
