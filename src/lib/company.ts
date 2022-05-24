
export interface Company {
    id: number,
    name: string,
    scores: { [industryId: number]: number },
}