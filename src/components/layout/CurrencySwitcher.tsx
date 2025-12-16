"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { currencies } from "@/lib/currencies";
import { useCurrency } from "@/context/CurrencyContext";
import type { Currency } from "@/context/CurrencyContext";

export default function CurrencySwitcher() {
  const [open, setOpen] = React.useState(false);
  const { currency, setCurrency } = useCurrency();

  const handleSelect = (selectedCurrencyCode: string) => {
    const newCurrency = currencies.find(
      (c) => c.code === selectedCurrencyCode
    );
    if (newCurrency) {
      setCurrency(newCurrency);
    }
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[120px] justify-between"
        >
          {currency.code}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search currency..." />
          <CommandList>
            <CommandEmpty>No currency found.</CommandEmpty>
            <CommandGroup>
              {currencies.map((c) => (
                <CommandItem
                  key={c.code}
                  value={c.code}
                  onSelect={handleSelect}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      currency.code === c.code ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {c.code} - {c.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
