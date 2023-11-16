import {
  Forecast,
  GeopluginResponse,
  GridLocation,
  GridLocationResponse,
  Position,
  WeatherModel,
} from './types';
import { toEmoji } from './to-emoji';

const toGridLocation = (response: GridLocationResponse): GridLocation => ({
  office: response.properties.gridId,
  x: response.properties.gridX,
  y: response.properties.gridY,
});

const toPosition = (info: GeopluginResponse): Position => ({
  latitude: Number.parseFloat(info.geoplugin_latitude),
  longitude: Number.parseFloat(info.geoplugin_longitude),
});

export const fetchPosition = (
  doFetch: typeof fetch = fetch,
): Promise<Position> =>
  doFetch('http://www.geoplugin.net/json.gp')
    .then(r => r.json())
    .then(toPosition)
    .catch(() => { return { latitude: 41.2315, longitude: -96.0519 };});

export const toGridLocationUrl = (position: Position) =>
  `https://api.weather.gov/points/${position.latitude},${position.longitude}`;

export const fetchGridLocation = (
  position: Position,
  doFetch: typeof fetch = fetch,
): Promise<GridLocation> =>
  doFetch(toGridLocationUrl(position))
    .then(r => r.json())
    .then(toGridLocation);

export const toForecastUrl = (location: GridLocation) =>
  `https://api.weather.gov/gridpoints/${location.office}/${location.x},${location.y}/forecast`;

export const fetchForecast = (
  location: GridLocation,
  doFetch: typeof fetch = fetch,
): Promise<Forecast> => doFetch(toForecastUrl(location)).then(r => r.json());

export class WeatherService {
  private readonly doFetch: typeof fetch = window.fetch;

  constructor(fakeFetch?: typeof fetch) {
    if (fakeFetch) {
      this.doFetch = fakeFetch;
    }
  }

  readonly getPosition = (): Promise<Position> => fetchPosition(this.doFetch);

  readonly getGridLocation = async (): Promise<GridLocation> => {
    const position = await this.getPosition();
    return fetchGridLocation(position, this.doFetch);
  };

  readonly getWeather = async (): Promise<WeatherModel> => {
    const location = await this.getGridLocation();
    const forecast = await fetchForecast(location, this.doFetch);
    const currentWeather = forecast.properties.periods[0];
    return { ...currentWeather, icon: toEmoji(currentWeather.shortForecast) };
  };
}
