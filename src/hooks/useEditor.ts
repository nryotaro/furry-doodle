import { useState } from "react";
import { Company } from "../lib/company";

function useEditor(): [Company | null, (company: Company | null) => void] {
    const [company, setCompany]
        = useState<Company | null>(null);
    return [company, setCompany];
}

export default useEditor;