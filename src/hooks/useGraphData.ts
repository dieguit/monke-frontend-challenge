import { useMemo } from "react";
import { AnalysisData } from "../data/getAnalysis";

function removeEmptyOrZero(obj: AnalysisData["value"]) {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, v]) => v != null && v !== 0),
  );
}

export const useGraphData = (data?: AnalysisData[]) => {
  const graphData = useMemo(() => {
    if (!data) return null;
    return data?.map(
      // Flatten the values removing the features that have 0 as value
      (item) => ({ origin: item.origin, ...removeEmptyOrZero(item.value) }),
      [],
    );
  }, [data]);

  return graphData;
};
