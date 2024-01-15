import Card from "./Card";

const InventoryItemsLoading = () => (
  <div
    className="w-full grid-cols-1 md:grid-cols-3 grid gap-4"
    data-testid="div-inventory-items-loading"
  >
    {[1, 2, 3].map((i) => (
      <Card key={i} className="h-16 basis-1/3 p-4 ">
        <div className="flex animate-pulse space-x-4">
          <div className="flex-1 space-y-2 py-2">
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div className="h-2 rounded bg-slate-700 pt-1"></div>
                <div className="h-2 rounded bg-slate-700"></div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    ))}
  </div>
);

export default InventoryItemsLoading;
