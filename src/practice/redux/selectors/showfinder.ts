import { createSelector } from "reselect";
import { State } from "../../../showfinder-store";
import { Actor } from "../models/actor";

const showStateSelector = (s: State) => s.show;
const actorsStateSelector = (s: State) => s.actors;

export const showQuerySelector = createSelector(showStateSelector, (showState) => showState.query);
const showAgainstQuerySelector = createSelector(showStateSelector, (showState) => showState.againstQuery);
export const showEntitiesSelector = createSelector(showStateSelector, (showState) => showState.entities);
export const showLoadingSelector = createSelector(showStateSelector, (showState) => showState.showLoading);
const actorsEntitiesSelector = createSelector(actorsStateSelector, (actorsState) => actorsState.entities);
const showCastIdSelector = createSelector(showStateSelector, (showState) => showState.actors)

export const showCastSelector = createSelector(showCastIdSelector, actorsEntitiesSelector, (showActorIds, actorEntities) => {
  return Object.keys(showActorIds).reduce<{ [id: number]: Actor[] }>((showActors, showId) => {
      const actorIds = showActorIds[+showId];
      const actors = actorIds.map((id: number) => actorEntities[id]);
      return { ...showActors, [showId]: actors }
   }, {})
});

const showIdSelector = createSelector(showQuerySelector, showAgainstQuerySelector, (q, aq) => aq[q] || []);

export const showListSelector = createSelector(showIdSelector, showEntitiesSelector,
   (id, e) => id.map((id: number) => e[id]));