
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../redux-app';

export interface IDay{
    isWorkDay: boolean,
}

const initialState: IDay = {
    isWorkDay: false
}


export const workScheduleSlice = createSlice({
    name: 'typeAccount',
    initialState,
    reducers: {
        handleSwitch: (state,action:PayloadAction<boolean>) => {
            // state.isSwitch = action.payload;
        }
    },
})

export const { handleSwitch } = workScheduleSlice.actions
// export const selectValues = (state: RootState) => state.typeAccount
export default workScheduleSlice.reducer