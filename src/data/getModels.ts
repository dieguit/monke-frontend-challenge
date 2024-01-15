import { getModels as getModelsFromApi } from "../api/getModels";

// Provide an expected return from API. This is useful to catch issues in external dependendies
export interface Model {
  model_version: number;
  ts_start: number;
  ts_end: number;
  num_categorical: number;
  job_id: string;
  model_type: string;
  num_continuous: number;
  model_name: string;
  sk: string;
  ts_updated: number;
  pk?: string;
}

interface ModelsResponse {
  data: Model[];
  loading: boolean;
}

type ModelType = "Regression" | "Classification";

export async function getModels(): Promise<
  | {
      jobId: Model["job_id"];
      modelName: Model["model_name"];
      modelType: ModelType;
    }[]
  | undefined // Could return an error if something failed
> {
  try {
    // Simulates fetching real data from api call
    const response: ModelsResponse = await getModelsFromApi();
    // Map return data to useful information we'll use in the UI
    return response.data.map((model) => ({
      jobId: model.job_id,
      modelName: model.model_name,
      modelType: model.model_type as ModelType,
    }));
  } catch (e) {
    // Do nothing for now
  }
}
