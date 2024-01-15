import { useNavigate } from "react-router-dom";
import Card from "./Card";

interface InventoryItemLoadingProps {
  modelName: string;
  modelType: string;
}
const InventoryItemLoading = ({
  modelName,
  modelType,
}: InventoryItemLoadingProps) => {
  const navigate = useNavigate();
  return (
    <Card
      className="h-16 basis-1/6 cursor-pointer p-4 transition-colors hover:border-blue-300"
      onClick={() => navigate(`/analysis/${modelName}`)}
    >
      <div className="flex space-x-4">
        <div className="grid w-full grid-cols-2 gap-4">
          <div className="text-left">{modelName}</div>
          <div className="text-right">{modelType}</div>
        </div>
      </div>
    </Card>
  );
};

export default InventoryItemLoading;
