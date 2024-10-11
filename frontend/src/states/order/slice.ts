import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../redux-app';

export interface IService{
    isService: string,
}

const initialState: IService = {
    isService: ""
}


export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setIdService: (state,action:PayloadAction<string>) => {
            state.isService = action.payload;
        }
    },
})

export const { setIdService } = orderSlice.actions
export const selectValues = (state: RootState) => state.order
export default orderSlice.reducer