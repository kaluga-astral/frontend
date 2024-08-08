export enum QueryClientCache {
  NoCache = 0,
  Infinity = Infinity,
  /**
   * 5 минут
   * */
  Few = 300000,
  /**
   * 30 минут
   * */
  Long = 1800000,
  /**
   * 2 часа
   * */
  MaxLong = 7200000,
}
