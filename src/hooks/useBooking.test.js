import { act, renderHook, waitFor } from "@testing-library/react";
import { fetchAllAPI, fetchAPI, submitAPI } from "../API/API";
import useBooking from "./useBooking";

jest.mock("../API/API", () => ({
  fetchAPI: jest.fn(),
  submitAPI: jest.fn(() => Promise.resolve([])),
  fetchAllAPI: jest.fn(() => Promise.resolve([])),
}));

describe("useBooking", () => {
  it("should initialize time based on fetchAPI result when the hook loads", async () => {
    const availableTimes = ["17:00", "19:00", "21:30"];

    fetchAPI.mockResolvedValue(availableTimes);
    fetchAllAPI.mockResolvedValue([]);

    const { result } = renderHook(useBooking);

    await waitFor(() => {
      const returnedAvailableTimes = result.current.availableTimes;
      expect(returnedAvailableTimes).toMatchObject(availableTimes);
    });

    expect(fetchAPI).toHaveBeenCalledTimes(1);
  });
  
  it("should update times by removing a selected time", async () => {
    const availableTimes = ["17:00", "19:00", "21:30"];
    const selectedTime = "17:00";
    
    fetchAPI.mockResolvedValue(availableTimes);
    fetchAllAPI.mockResolvedValue([]);
    submitAPI.mockResolvedValue({ success: true });
    
    const { result } = renderHook(useBooking);
    
    await waitFor(() => {
      expect(result.current.availableTimes).toEqual(availableTimes);
    });
    
    await act(async () => {
      await result.current.updateTimes({ time: selectedTime });
    });
    
    await waitFor(() => {
      expect(result.current.availableTimes).toEqual(["19:00", "21:30"]);
    });
    
    expect(submitAPI).toHaveBeenCalledWith({ time: selectedTime });
  });
});
