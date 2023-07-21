import React from 'react';
import './App.css';
import Counter from "./components/counter";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "./store";
import {counterSlice} from "./store/slices";
import {IPost} from "./models/post";
import {useGetPostsQuery} from "./services/post";
import {Button} from "react-bootstrap";

const App = () => {
    const { data = [] } = useGetPostsQuery();
    const counterValues = useSelector((state: AppState) => state.counter.values)
    const dispatch = useDispatch()
    const { actions } = counterSlice;

    const handleIncrement = (index: number) => {
        dispatch(actions.increment({index}));
    }

    const handleDecrement = (index: number) => {
        dispatch(actions.decrement({index}));
    }

  return (
    <div className="App">
      <header className="App-header">
      </header>
        <div className="p-3">
            <Button variant="warning" className="me-3" size="lg">First</Button>
            <Button variant="danger" className="me-3" size="sm">Second</Button>
            <Button variant="info">Third</Button>
        </div>
        {counterValues.map((cnt: number, index: number) => {
            return (
                <Counter
                    key={index}
                    index={index}
                    number={cnt}
                    onIncrease={handleIncrement}
                    onDecrease={handleDecrement}
                />
            );
        })}
        <ul>
            {data.map((post: IPost) => {
                return (
                    <li className="white">{post.title}</li>
                );
            })
            }
        </ul>
    </div>
  );
}

export default App;
