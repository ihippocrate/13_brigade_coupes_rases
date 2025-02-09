import { clearCuttingsApi } from "@/features/clear-cutting/store/api";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: { [clearCuttingsApi.reducerPath]: clearCuttingsApi.reducer },
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(clearCuttingsApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
