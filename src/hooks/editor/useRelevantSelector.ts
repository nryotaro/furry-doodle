import { useState } from "react";

function useRelevantSelector(): [boolean, (b: boolean) => void] {
   
    const [relevant, setRerevant] = useState<boolean>(true);

    return [relevant, setRerevant];

}

export default useRelevantSelector;