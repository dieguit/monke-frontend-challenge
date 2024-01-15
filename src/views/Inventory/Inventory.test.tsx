import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Inventory from "./Inventory";

import * as ReactQuery from "@tanstack/react-query";

jest.mock("@tanstack/react-query", () => {
  return {
    __esModule: true,
    ...jest.requireActual("@tanstack/react-query"),
  };
});
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

const useQueryMock = jest.fn().mockReturnValue({
  data: [
    {
      jobId: "job-id-1",
      modelName: "model-name-1",
      modelType: "model-type-1",
    },
    {
      jobId: "job-id-2",
      modelName: "model-name-2",
      modelType: "model-type-2",
    },
  ],
  isLoading: false,
  isError: false,
});

jest.spyOn(ReactQuery, "useQuery").mockImplementation(useQueryMock);

describe("Inventory", () => {
  it("should render results correctly", () => {
    render(<Inventory />);

    expect(screen.getByTestId("div-models-list").children.length).toBe(2);

    expect(screen.getByText("model-name-1")).toBeInTheDocument();
    expect(screen.getByText("model-type-1")).toBeInTheDocument();

    expect(screen.getByText("model-name-2")).toBeInTheDocument();
    expect(screen.getByText("model-type-2")).toBeInTheDocument();
  });

  it("should render loading state correctly", () => {
    useQueryMock.mockReturnValueOnce({
      data: undefined,
      isLoading: true,
      isError: false,
    });

    render(<Inventory />);

    expect(
      screen.getByTestId("div-inventory-items-loading"),
    ).toBeInTheDocument();
  });

  it("should render error state correctly", () => {
    useQueryMock.mockReturnValueOnce({
      data: undefined,
      isLoading: false,
      isError: true,
    });

    render(<Inventory />);

    expect(screen.getByText("Something went wrong...")).toBeInTheDocument();
  });
});
