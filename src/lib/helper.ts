import { StateCreator } from 'zustand';

export function combineSlices<PrimarySlice, SecondarySlice>(
  primary: StateCreator<PrimarySlice>,
  secondary: StateCreator<SecondarySlice>
): StateCreator<PrimarySlice & SecondarySlice> {
  return (set, get, api) => ({
    ...primary(set, get, api),
    ...secondary(set, get, api),
  });
}
