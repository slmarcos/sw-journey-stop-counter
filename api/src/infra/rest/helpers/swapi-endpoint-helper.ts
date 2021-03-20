export const SwapiEndpointHelper = {
  API_URL: 'https://swapi.dev/api',

  loadStarshipsEndpoint (): string {
    return `${this.API_URL}/starships/`
  }
}
