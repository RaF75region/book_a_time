import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../redux-app';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

export interface IStep{
    number: number,
    countSteps:number

}

const initialState: IStep = {
    number: 0,
    countSteps:3
}


export const stepperSlice = createSlice({
    name: 'sepper',
    initialState,
    reducers: {
        setNumber: (state,action:PayloadAction<number>) => {
            state.number = action.payload;
        },
        decrement: (state) => {
            state.number -= 1;
        },
    },
})

export const { setNumber,decrement } = stepperSlice.actions
export const selectValues = (state: RootState) => state.stepper
export default stepperSlice.reducer