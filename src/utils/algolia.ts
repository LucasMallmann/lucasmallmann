import qs from 'qs';

export function createURL(state: unknown): string {
  return `?${qs.stringify(state)}`;
}

export const pathToSearchState = (path: string): qs.ParsedQs => {
  return path.includes('?')
    ? qs.parse(path.substring(path.indexOf('?') + 1))
    : {};
};

export const searchStateToURL = (
  location: Location,
  searchState: unknown
): string => {
  return searchState ? `${location.pathname}?${qs.stringify(searchState)}` : '';
};
