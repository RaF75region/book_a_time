import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../redux-app';


export interface AnimationState {
  value: boolean
}

const initialState: AnimationState = {
  value: false,
}


export const animationSlice = createSlice({
    name: 'animation',
    initialState,
    reducers: {
      openPageTheAlbum: (state, action) => {
          if((action.payload as string).includes("/sheduler"))
            state.value = true;
          if((action.payload as string).includes("/info"))
            state.value = false;   
          console.log(state.value)       
      }
    },
  })
  
  export const { openPageTheAlbum } = animationSlice.actions
  export const selectValue = (state: RootState) => state.animation.value
  export default animationSlice.reducer
  
  
  