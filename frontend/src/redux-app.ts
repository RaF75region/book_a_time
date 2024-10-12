import { configureStore } from '@reduxjs/toolkit'
import animationRiducer from './states/animationSlice'
import stepperRiducer from './states/stepper/slice';
import serviceRiducer from './states/services/slice';
import orderRiducer from './states/order/slice';
import accountRiducer from './states/account/slice'
import specialistsReducer from './states/specialists/slice';

export const reduxApp = configureStore({
  reducer: {
    animation: animationRiducer,
    stepper: stepperRiducer,
    service: serviceRiducer,
    order: orderRiducer,
    account: accountRiducer,
    specialists: specialistsReducer
  }
})

export type RootState = ReturnType<typeof reduxApp.getState>

export type AppDispatch = typeof reduxApp.dispatch