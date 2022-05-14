import { RootState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementAsync} from "../store/slice/counterSlice";

export default function Counter() : JSX.Element {

    const countState = useSelector( (state : RootState) => state.counterReducer.value );
    const dispatch = useDispatch();

    return(
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{countState}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <button
                    aria-label="Increment Async value"
                    onClick={() => dispatch(incrementAsync(2))}
                >
                    Increment Async
                </button>
            </div>
        </div>
    );
};