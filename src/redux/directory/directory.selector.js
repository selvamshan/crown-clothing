import { createSelector } from 'reselect';

const selecetDirectory = state => state.directory;

export const selecetDirectorySections = createSelector(
    [selecetDirectory],
    directory => directory.sections
);