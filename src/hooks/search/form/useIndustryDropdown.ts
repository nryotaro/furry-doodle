import { useEffect, useState } from 'react';
import { getIndustries } from '../../../api/industries';
import { Industry } from '../../../lib/industry';


function useIndustryDropdown(): [Industry[], (industry: Industry) => string] {

    const [industries, setIndustries] = useState<Industry[]>([]);
    useEffect(() => {
        const controller = new AbortController();
        (async () => {
            try {
                const industries: Industry[] = await fetchIndustries(controller);
                setIndustries(industries);
            } catch(error) {
                if (!(error instanceof DOMException)) {
                    throw error;
                }
            }
        })();
        return () => controller.abort();
    }, []);

    return [industries, createIndustryKey];
}

async function fetchIndustries(controller: AbortController): Promise<Industry[]> {
    const rawIndustries = (await getIndustries(10000, controller.signal)).industries;
    const industries: Industry[] = rawIndustries.map(industry => {
        return {
            industryId: industry.industryId,
            industryName: industry.industryName,
            subCategoryId: industry.subCategoryId,
            subCategoryName: industry.subCategoryName,
            sectorId: industry.sectorId,
            sectorName: industry.sectorName,
        }
    });
    return industries;
}

export function createIndustryKey(industry: Industry): string {
    return `${industry.industryId} ${industry.industryName}`;
}

export default useIndustryDropdown;

