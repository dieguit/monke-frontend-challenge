import { useQuery } from "@tanstack/react-query";
import InventoryItemsLoading from "../../components/InventoryItemsLoading";
import InventoryItem from "../../components/InventoryItem";
import { getModels } from "../../data/getModels";

const Inventory = () => {
  // In a real-world app this getModels reference would be a function that calls the API and handles the error,
  // ideally also mapping the object to some DTO.
  const {
    data: models,
    isLoading,
    isError,
  } = useQuery({ queryKey: ["models"], queryFn: getModels });

  return (
    <div className="w-full px-4 text-center md:text-left">
      <div className="prose mb-4">
        <h1 className="prose-headings:h1">Inventory</h1>
      </div>

      {isError && <p>Something went wrong...</p>}

      {isLoading ? (
        <InventoryItemsLoading />
      ) : (
        <div
          className="flex w-full flex-col flex-wrap gap-4 md:flex-row"
          data-testid="div-models-list"
        >
          {models?.map((model) => (
            <InventoryItem
              key={model.jobId}
              modelName={model.modelName}
              modelType={model.modelType}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Inventory;
