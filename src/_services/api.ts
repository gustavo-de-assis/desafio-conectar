import { GdpDataType } from "@/_types/pib";
import axios from "axios";

const yearTable: { [year: string]: GdpDataType } = {};

export async function fetchGdpData(): Promise<GdpDataType[]> {
  try {
    const response = await axios.get(process.env.NEXT_PUBLIC_PIB_API_URL!);

    const seriePibTotal = response.data[0]?.resultados?.[0]?.series?.[0]?.serie;
    const seriePerCapita =
      response.data[1]?.resultados?.[0]?.series?.[0]?.serie;

    processPibData(seriePibTotal, "pibTotal");
    processPibData(seriePerCapita, "pibPerCapita");

    const pibData: GdpDataType[] = Object.values(yearTable);

    return pibData;
  } catch (error) {
    console.error("Erro ao buscar dados da API", error);
    return [];
  }
}

function processPibData(
  series: { [year: string]: string },
  pibType: "pibTotal" | "pibPerCapita"
): void {
  Object.entries(series).forEach(([year, value]) => {
    if (!yearTable[year]) {
      yearTable[year] = { year, totalGdp: undefined, gdpPerCapita: undefined };
    }

    if (pibType === "pibTotal") {
      yearTable[year].totalGdp = value;
    } else {
      yearTable[year].gdpPerCapita = value;
    }
  });
}
