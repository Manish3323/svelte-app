import { render } from "@testing-library/svelte";
import App from "../src/App.svelte";

test("shows proper heading when rendered", () => {
  const { getByText } = render(App, { name: "World" });
  expect(getByText("Hello World!")).toBeInTheDocument();
});
