import { useEffect, useState } from "react";
import { WeatherService } from "../_shared/weather-service";
import { Position } from "../_shared/types";

export const Location = () => {
  const [position, setPosition] = useState<Position | null>(null);
  useEffect(() => {
    let cancelled = false;
    async function getPosition() {
      const service = new WeatherService();
      const position = await service.getPosition();
      if (cancelled) {
        return;
      }
      setPosition(position);
    }

    getPosition();
    () => (cancelled = true);
  }, []);

  return (
    <p>Latitude: {position?.latitude}<br />
      Longitude: {position?.longitude}</p>
  );
}

export const WeatherInfo = () => (
  <div>
    <h1>WeatherInfo <i>[Starter]</i></h1>
    <Location />
    {/* <Position />
    <Weather /> */}
  </div>
);
