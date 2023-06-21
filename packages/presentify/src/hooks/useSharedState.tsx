import { useEffect, useState } from 'react';

type UseSharedReturnType<T> = [
  T,
  (newState: T | ((prevState: T) => T)) => void,
];
export function useSharedState<T = any>(
  initialState: T,
): UseSharedReturnType<T> {
  const [state, setState] = useState<T>(initialState);
  const broadcastChannelEnabled = window.BroadcastChannel !== undefined;
  const broadcastChannel = broadcastChannelEnabled
    ? new BroadcastChannel('presentifyChannel')
    : undefined;

  const setSharedState = (newState: T | ((prevState: T) => T)): void => {
    setState((prevState: T): T => {
      const updatedState =
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        typeof newState === 'function' ? newState(prevState) : newState;

      broadcastChannelEnabled &&
        (broadcastChannel as BroadcastChannel).postMessage(
          JSON.stringify(updatedState),
        );

      return updatedState;
    });
  };

  const handleMessage = (event: MessageEvent) => {
    const newState: T = JSON.parse(event.data);
    setState(newState);
  };

  useEffect(() => {
    broadcastChannelEnabled &&
      (broadcastChannel as BroadcastChannel).addEventListener(
        'message',
        handleMessage,
      );

    return () => {
      broadcastChannelEnabled &&
        (broadcastChannel as BroadcastChannel).removeEventListener(
          'message',
          handleMessage,
        );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [state, setSharedState];
}
