import { State } from "../../../showfinder-store";

export const showListSelector = (s: State) => {
   const showsIds = s.show.againstQuery[s.show.query] || [];
   const showList = showsIds.map((id: number) => s.show.entities[id] );
   return showList;
}
export const searchQuerySelector = (s: State) => s.show.query;