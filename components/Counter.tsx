import type { RootState } from "../store/configureStore";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/counter/counterSlice";

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          className="scale-125 opacity-50 hover:scale-150 hover:opacity-75"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
