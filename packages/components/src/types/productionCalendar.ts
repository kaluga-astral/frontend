export namespace ProductionCalendar {
  export type Day = {
    isHoliday: boolean;
    typeName?: string;
    description?: string;
  };

  export type Storage = Map<string, Day>;
}
