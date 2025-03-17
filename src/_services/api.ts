import { GdpDataType } from "@/_types/pib";
import axios from "axios";
import { getExchangeRate } from "./currency";

const yearTable: { [year: string]: GdpDataType } = {};

export async function fetchGdpData(): Promise<GdpDataType[]> {
  try {
    const response = await axios.get(process.env.NEXT_PUBLIC_PIB_API_URL!);

    const seriePibTotal = response.data[0]?.resultados?.[0]?.series?.[0]?.serie;
    const seriePerCapita =
      response.data[1]?.resultados?.[0]?.series?.[0]?.serie;

    const exchangeRate = await getExchangeRate();

    const seriePibTotalToUsd = await convertToUsd(seriePibTotal, exchangeRate);

    const seriePerCapitaToUsd = await convertToUsd(
      seriePerCapita,
      exchangeRate
    );

    processPibData(seriePibTotalToUsd, "pibTotal");
    processPibData(seriePerCapitaToUsd, "pibPerCapita");

    const pibData: GdpDataType[] = Object.values(yearTable);

    return pibData;
  } catch (error) {
    console.error("Erro ao buscar dados da API", error);
    return [];
  }
}

async function convertToUsd(
  series: {
    [year: string]: string;
  },
  exchangeRate: number
): Promise<{ [year: string]: string }> {
  return Object.fromEntries(
    Object.entries(series).map(([year, value]) => [
      year,
      String(Number(value) * exchangeRate),
    ])
  );
}

function processPibData(
  series: { [year: string]: string },
  pibType: "pibTotal" | "pibPerCapita"
): void {
  Object.entries(series).forEach(([year, value]) => {
    if (!yearTable[year]) {
      yearTable[year] = { year, totalGdp: "-", gdpPerCapita: "-" };
    }

    if (pibType === "pibTotal") {
      yearTable[year].totalGdp = (Number(value) / 1000).toFixed(2);
    } else {
      yearTable[year].gdpPerCapita = Number(value).toFixed(2);
    }
  });
}
