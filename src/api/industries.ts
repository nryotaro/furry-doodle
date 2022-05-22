import { getJson } from './common';

export interface Industries {
    industries: [{
        industryId: number,
        industryName: string,
        subCategoryId: number,
        subCategoryName: string,
        sectorId: number,
        sectorName: string,
    }]
}

export async function getIndustries(
    timeoutMillseconds: number = 6000,
    signal: AbortSignal | null): Promise<Industries> {
    return getJson(`http://${window.location.host}/data/industries.json`, {}, timeoutMillseconds, signal);
}