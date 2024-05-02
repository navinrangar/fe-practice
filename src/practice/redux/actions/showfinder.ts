import { Show } from "../models/showfinder";

export const SHOW_LIST_FETCH = "show list fetch";
export const SHOW_LIST_FETCHED = "show list fetched";

export const SHOW_DETAILS_FETCH = "show details fetch";
export const SHOW_DETAILS_FETCHED = "show details fetched";

export const showFetchList = (query?: string) => {
  return {
    type: SHOW_LIST_FETCH,
    payload: query,
  };
};

export const showFetchedList = (query: string, showList: Show[]) => {
  return {
    type: SHOW_LIST_FETCHED,
    payload: { query, showList },
  };
};

export const showDetailsFetch = (id: number) => {
  return {
    type: SHOW_DETAILS_FETCH,
    payload: id,
  };
};

export const showDetailsFetched = (id: number, showDetails: Show) => {
  return {
    type: SHOW_DETAILS_FETCHED,
    payload: { id, showDetails },
  };
};
