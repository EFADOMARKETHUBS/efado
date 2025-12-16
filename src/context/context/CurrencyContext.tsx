"use client";

import { createContext, useContext, useState, ReactNode, useMemo } from "react";
import { currencies } from "@/lib/currencies";

export type Currency = (typeof currencies)[number];

// Define a base currency (NGN) and approximate conversion rates relative to USD.
// In a real application, these rates would be fetched from a reliable API.
const conversionRates: Record<string, number> = {
  USD: 1,
  NGN: 1450,
  GBP: 0.8,
  EUR: 0.92,
  GHS: 14.5,
  KES: 130,
  ZAR: 18.2,
  // ... other currencies
};

// Base currency of the platform for calculation purposes
const BASE_CURRENCY = 'NGN';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  /**
   * Converts a price from the base currency (NGN) to the selected currency.
   * This is for user-listed products and general pricing.
   * @param priceInBaseCurrency The price in NGN.
   * @returns The converted price in the currently selected currency.
   */
  getPrice: (priceInBaseCurrency: number) => number;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined
);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>(() => {
    return currencies.find(c => c.code === 'NGN') || currencies[0];
  });

  const getPrice = useMemo(() => {
    return (priceInBaseCurrency: number): number => {
        const baseRate = conversionRates[BASE_CURRENCY] || 1; // Rate of NGN to USD
        const targetRate = conversionRates[currency.code] || baseRate; // Rate of selected currency to USD
        
        // Convert the NGN price to its USD equivalent first
        const priceInUsd = priceInBaseCurrency / baseRate;
        
        // Then convert from USD to the target currency
        return priceInUsd * targetRate;
    };
  }, [currency.code]);


  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, getPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}
