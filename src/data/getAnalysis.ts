import { getAnalysis as getAnalysisFromApi } from "../api/getAnalysis";

enum MeasurementValues {
  "SepalLengthCm" = "SepalLengthCm",
  "SepalWidthCm" = "SepalWidthCm",
  "PetalLengthCm" = "PetalLengthCm",
  "PetalWidthCm" = "PetalWidthCm",
}

interface AnalysisBase {
  name: string;
  origin: string;
}

interface FeaturesList extends AnalysisBase {
  insight_name: "feature_list";
  value: ["SepalLengthCm", "SepalWidthCm", "PetalLengthCm", "PetalWidthCm"];
}

export interface AnalysisData extends AnalysisBase {
  insight_name: "variable_ranking";
  value: { [key in MeasurementValues]: number };
}

export async function getAnalysis(modelName: string) {
  try {
    // Simulates fetching real data from api call
    const response = await getAnalysisFromApi(modelName);

    const data = response.data[0] as (AnalysisData | FeaturesList)[] | null;

    // // Handle response when model does not exist (api mock is returning [null])
    if (!data) {
      return null;
    }

    // Seems like there is one item with a "feature list" that should be trated differently
    // assume the first one is the feature list for simplicity, otherweise we could filter by insight_name
    const featureList = data.find(
      (i) => i.insight_name === "feature_list",
    ) as FeaturesList;
    if (!featureList) {
      return null;
    }

    return {
      featureList: featureList.value,
      data: data as AnalysisData[],
    };
  } catch (e) {
    // Do nothing for now. This would handle 404s or other errors
    return null;
  }
}
