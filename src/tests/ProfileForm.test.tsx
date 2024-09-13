import { render, screen, fireEvent } from "@testing-library/react";
import ProfileForm from "../components/ProfileForm";
import { Provider } from "react-redux";
import { store } from "../redux/store";

test("renders ProfileForm", () => {
  render(
    <Provider store={store}>
      <ProfileForm />
    </Provider>
  );

  expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
});

test("validates email format", () => {
  render(
    <Provider store={store}>
      <ProfileForm />
    </Provider>
  );

  const emailInput = screen.getByLabelText(/Email/i);
  fireEvent.change(emailInput, { target: { value: "invalidemail" } });
  fireEvent.submit(screen.getByRole("button", { name: /Save Profile/i }));

  expect(screen.getByText(/Invalid email format/i)).toBeInTheDocument();
});
