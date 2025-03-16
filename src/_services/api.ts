import { PibType } from "@/_types/pib";
import axios from "axios";

export async function fetchPibTotal(): Promise<PibType[]> {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_PIB_TOTAL_API_URL!
    );

    const serie = response.data[0]?.resultados?.[0]?.series?.[0]?.serie;

    return serie
      ? Object.entries(serie).map(([year, amount]) => ({
          year,
          amount: String(amount),
        }))
      : [];
  } catch (error) {
    console.error("Erro ao buscar dados do PIB Total", error);
    return [];
  }
}

export async function fetchPerCapita(): Promise<PibType[]> {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_PIB_PER_CAPITA_API_URL!
    );

    const serie = response.data[0]?.resultados?.[0]?.series?.[0]?.serie;

    return serie
      ? Object.entries(serie).map(([year, amount]) => ({
          year,
          amount: String(amount),
        }))
      : [];
  } catch (error) {
    console.error("Erro ao buscar dados do PIB per Capita", error);
    return [];
  }
}
