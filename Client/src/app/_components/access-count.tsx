import React, { useEffect, useState } from "react";
import CountUp from "@/components/ui/CountUp";
export default function AccessCount() {
  const [number, setNumber] = useState<number | null>(null);

  // Fetch data from API
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://abacus.jasoncameron.dev/hit/mln111/teamdominatorss"
        );
        const data = await response.json();
        setNumber(data.value); // Set the number from the API response
      } catch (error) {
        console.error("Error fetching the data", error);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <CountUp
        from={0}
        to={number ?? 0}
        separator=","
        direction="up"
        duration={1}
        className="count-up-text"
        onStart={undefined}
        onEnd={undefined}
      />
    </>
  );
}
