import { AppDispatch } from "@/app/providers/store/config/state-schema";
import { useDispatch } from "react-redux";

/**
 * a hook that can be reused to resolve types from store
 */
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
