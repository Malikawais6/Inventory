import { fireEvent, render } from "@testing-library/react";
import Modal from "../components/Modal/Modal";
import Table from "../components/Table/Table";
import Products from "../container/Products";

describe("Parent render test", () => {
  test("Check parent component exsit", (done) => {
    const { container } = render(<Products />);
    expect(container.children.length).not.toBe(0);
    done();
  });
});

describe("Modal component test", () => {
  test("Check modal component exists", () => {
    const { getByText } = render(<Modal />);
    expect(getByText("Add items here")).toBeTruthy();
  });
});

describe("Price input field test", () => {
  test("Input test with Non integer value in price field", () => {
    const { getByTestId } = render(<Modal />);
    const input = getByTestId("input-number");
    fireEvent.change(input, { target: { value: "ABC" } });
    expect(input.value).toBe("");
  });
  test("Input test with integer value in price field", () => {
    const { getByTestId } = render(<Modal />);
    const input = getByTestId("input-number");
    fireEvent.change(input, { target: { value: 23 } });
    expect(input.value).toBe("23");
  });
});
