import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { MemoryRouter } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

describe("BookingForm", () => {
  it("renders the form with initial values", () => {
    const mockAvailableTimes = ["17:00", "18:00", "19:00"];
    const mockDate = new Date();
    const mockOnDateChange = jest.fn();
    const mockBookTable = jest.fn();

    render(
      <MemoryRouter>
        <BookingForm
          availableTimes={mockAvailableTimes}
          date={mockDate}
          onDateChange={mockOnDateChange}
          bookTable={mockBookTable}
        />
      </MemoryRouter>
    );

    expect(screen.getByLabelText("Choose date")).toBeInTheDocument();
    expect(screen.getByLabelText("Choose time")).toBeInTheDocument();
    expect(screen.getByLabelText("Number of guests")).toBeInTheDocument();
    expect(screen.getByLabelText("Occasion")).toBeInTheDocument();
    expect(screen.getByText(/Make Your reservation/)).toBeInTheDocument();

    expect(screen.getByLabelText("Choose time").value).toBe("17:00");
  });

  it("calls bookTable with the correct values when the form is submitted", async () => {
    const mockAvailableTimes = ["17:00", "18:00", "19:00"];
    const mockDate = new Date();
    const mockOnDateChange = jest.fn();
    const mockBookTable = jest.fn(() => Promise.resolve(true)); // Simula éxito en la reserva

    render(
      <MemoryRouter>
        <BookingForm
          availableTimes={mockAvailableTimes}
          date={mockDate}
          onDateChange={mockOnDateChange}
          bookTable={mockBookTable}
        />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText("Choose time"), {
      target: { value: "18:00" },
    });

    fireEvent.submit(screen.getByText(/Make Your reservation/));

    expect(mockBookTable).toHaveBeenCalledWith({
      date: mockDate,
      time: "18:00",
      guests: 2,
      occasion: "",
    });
  });
});
