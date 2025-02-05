export const getTime = () => {
  const date = new Date().toLocaleTimeString([], {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
  });

  const time = date.split(" ")[0];
  const AmPm = date.slice(-2);
  return { time: time, AmPm: AmPm };
};

export const getTimeZone = () => {
  type TimeZoneMap = {
    [key: string]: string;
  };
  const timezoneMap: TimeZoneMap = {
    "Asia/Rangoon": "YGN",
    "Asia/Bangkok": "BGK",
    "America/New_York": "NYC",
    "Europe/London": "LDN",
    "Asia/Tokyo": "TYO",
    "Asia/Singapore": "SGP",
    "America/Los_Angeles": "LAX",
    "Australia/Sydney": "SYD",
  };

  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const shortTimezone = timezoneMap[userTimezone] || userTimezone;
  return shortTimezone;
};

export const getDate = (): {
  day: string;
  month: string;
  monthNumeric: string;
  date: string;
  year: number;
} => {
  return {
    day: new Date().toLocaleDateString("en-US", { weekday: "short" }),
    month: new Date().toLocaleDateString("en-US", { month: "short" }),
    monthNumeric: new Date().toLocaleDateString("en-US", { month: "numeric" }),
    date: new Date().getDate().toString(),
    year: new Date().getFullYear(),
  };
};
export const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};
