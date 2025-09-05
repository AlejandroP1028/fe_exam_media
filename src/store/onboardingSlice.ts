import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OnboardingState {
  stepsFinished: boolean[];
}

const initialState: OnboardingState = {
  stepsFinished: [false, false, false, false, false],
};

const onboardingSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    completeStep(state, action: PayloadAction<number>) {
      state.stepsFinished[action.payload - 1] = true;
    },

    // ✅ Reset a step (optional, in case user edits answers)
    resetStep(state, action: PayloadAction<number>) {
      state.stepsFinished[action.payload - 1] = false;
    },
  },
});

export const { completeStep, resetStep } = onboardingSlice.actions;
export default onboardingSlice.reducer;
