import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import InventoryItem from "./InventoryItem";

const mockUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUsedNavigate,
}));

describe("InventoryItems", () => {
  it("should render name and type correctly in card", () => {
    render(<InventoryItem modelName="model-name-1" modelType="model-type-1" />);

    expect(screen.getByText("model-name-1")).toBeInTheDocument();
    expect(
      screen.getByText("model-name-1").classList.contains("text-left"),
    ).toBe(true);

    expect(screen.getByText("model-type-1")).toBeInTheDocument();
    expect(
      screen.getByText("model-type-1").classList.contains("text-right"),
    ).toBe(true);
  });

  it("should call navigate when clicked", async () => {
    const user = userEvent.setup();
    render(<InventoryItem modelName="model-name-1" modelType="model-type-1" />);
    await user.click(screen.getByTestId("div-card"));

    expect(mockUsedNavigate).toHaveBeenCalledTimes(1);
    expect(mockUsedNavigate).toHaveBeenCalledWith("/analysis/model-name-1");
  });
});
