//@flow

import {type Store, isStore} from 'effector'
import invariant from 'invariant'
import {useReducer, useEffect} from 'react'

export function useStore<State>(store: Store<State>): State {
  invariant(
    isStore(store),
    'useStore: The argument must be Store, but you passed %s.',
    store,
  )
  const [, dispatch] = useReducer((_, payload) => payload)
  useEffect(() => store.watch(dispatch), [store])
  return store.getState()
}