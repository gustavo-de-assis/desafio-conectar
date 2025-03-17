import axios from "axios";

export async function getExchangeRate(): Promise<number> {
  try {
    const response = await axios.get(process.env.NEXT_PUBLIC_EXCHANGERATE_API!);
    const exchangeRate = response?.data?.conversion_rates?.USD;

    if (typeof exchangeRate !== "number") {
      throw new Error("Invalid exchange rate");
    }

    return exchangeRate;
  } catch (error) {
    console.log("Falha ao obter valor de câmbio! Utilizando valor aproximado");

    return 0.17;
  }
}
