import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";
import { assignments } from "./Database";

const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentsReducer,
  },
});
export default store;