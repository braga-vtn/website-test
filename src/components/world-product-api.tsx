"use client";
import WorldMap from "./ui/world-map";
import { useTheme } from "next-themes";

export function WorldProductApi() {
  const { theme } = useTheme();

  return (
    <div className=" pb-40 pt-24 bg-transparent w-full z-40">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          Rest API
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          Utilize os recursos computacionais da Vistune para desenvolver produtos ou serviços por meio da nossa API.
        </p>
      </div>
      <WorldMap
        theme={theme ? theme : "dark"}
        dots={[
          {
            start: { lat: -30.5489, lng: -46.6388 }, // Brazil (Brasília)
            end: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
          },
          {
            start: { lat: -30.5489, lng: -46.6388 }, // Brazil (Brasília)
            end: { lat: 51.5074, lng: -0.1278 }, // London
          },
          {
            start: { lat: -30.5489, lng: -46.6388 }, // Brazil (Brasília)
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: -30.5489, lng: -46.6388 }, // Brazil (Brasília)
            end: { lat: -5.5074, lng: 27.1278 }, // London
          },
          {
            start: { lat: -30.5489, lng: -46.6388 }, // Brazil (Brasília)
            end: { lat: 68.5074, lng: 120.1278 }, // London
          },
        ]}
      />
    </div>
  );
}
