export const SwapiEndpointHelper = {
  API_URL: 'https://swapi.dev/api',

  loadStarshipsEndpoint (page: number): string {
    return `${this.API_URL}/starships/?page=${page}`
  }
}
