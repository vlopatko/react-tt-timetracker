import { PropsWithChildren } from 'react'
import { store } from './store'
import { Provider } from 'react-redux'

export const ReduxProvider = ({ children }: PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>
}
