import { useEffect, useState } from 'react';
import { Company } from '../../lib/company';
import { Query } from '../../lib/query';


function useSearch() {
    const [queryState, setQueryState] = useState<Query | null>(null);
    const [companies, setCompanies] = useState<Company[]>([]);

    useEffect(() => {
        setCompanies([
            {id: 204, name: 'Eventbrite', scores: {1: 0.23}},
            {id: 222, name: 'Box', scores: {1: 0.01}},
            {id: 239, name: 'Redfin', scores: {1: -0.23}},
            {id: 291, name: 'Genius', scores: {1: -0.26}},
            {id: 371, name: 'The Walt Disney Company', scores: {1: -0.30}},
            {id: 372, name: 'Brightcove', scores: {1: -0.32}},
        ]);
    },
        [queryState])

    return [companies];
}

export default useSearch;