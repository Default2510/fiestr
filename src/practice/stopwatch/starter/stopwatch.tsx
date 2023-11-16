import { useEffect, useRef, useState } from 'react';

enum RunState {
  Stopped,
  Running
}

export const Stopwatch = () => {
  const [runState, setRunState] = useState(RunState.Stopped);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const timeoutId = useRef(0);

  const toggleStartStop = () => {
    if (runState === RunState.Running) {
      setRunState(RunState.Stopped);
    } else {
      setRunState(RunState.Running);
    }
  };

  const reset = () => {
    setRunState(RunState.Stopped);
    setTimeElapsed(0);
  }

  useEffect(() => {
    let cancelled = false;
    if (runState === RunState.Running) {
      timeoutId.current = window.setTimeout(() => {
        if (cancelled) {
          return;
        }
        setTimeElapsed(t => t + 0.01);
      }, 10);
    }
    () => {
      cancelled = true;
      clearTimeout(timeoutId.current);
    };
  }, [runState, timeElapsed]);

  return (
    <div className="prose practice">
      <button onClick={() => toggleStartStop()}>
        {runState !== RunState.Running ? 'Start' : 'Stop'}
      </button>
      <button
        onClick={() => reset()}
        disabled={timeElapsed === 0}
      >
        Reset
      </button>
      <h1>{timeElapsed.toFixed(3)}</h1>
    </div>
  );
};
