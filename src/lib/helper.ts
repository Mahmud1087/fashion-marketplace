import { StateCreator } from 'zustand';

export function combineSlices<PrimarySlice, SecondarySlice, SliceThree>(
  primary: StateCreator<PrimarySlice>,
  secondary: StateCreator<SecondarySlice>,
  sliceThree: StateCreator<SliceThree>
): StateCreator<PrimarySlice & SecondarySlice & SliceThree> {
  return (set, get, api) => ({
    ...primary(set, get, api),
    ...secondary(set, get, api),
    ...sliceThree(set, get, api),
  });
}
