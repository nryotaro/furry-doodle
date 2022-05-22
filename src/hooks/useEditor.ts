import { useState } from "react";

function useEditor(): [string | null, (company: string | null) => void] {
    const [company, setCompany]
        = useState<string | null>(null);
    return [company, setCompany];
}

export default useEditor;