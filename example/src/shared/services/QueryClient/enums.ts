export enum QueryClientCache {
  NoCache = 0,
  Infinity = Infinity,
  /**
   * @description 5 минут
   * */
  Few = 300000,
  /**
   * @description 30 минут
   * */
  Long = 1800000,
  /**
   * @description 2 часа
   * */
  MaxLong = 7200000,
}
