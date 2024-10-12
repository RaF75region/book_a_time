import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../redux-app';
import { User, UserType } from '../../types/types';
import { GetSpecialists } from '../../api/user.api';

export interface ILoading
{
    isLoadData: boolean
}

export interface IProps
{
    specialists:User[],
    loading: ILoading
}

export const getSpecialists = createAsyncThunk(
    'service/getServices',
    async (type: UserType) => {
        return await GetSpecialists(type);
    }
)

const initialState: IProps = {
    specialists: [],
    loading: {
        isLoadData: true
    }
}


export const specialistsSlice = createSlice({
    name: 'specialists',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getSpecialists.pending, (state) => {
            state.loading.isLoadData = true;
        })
        builder.addCase(getSpecialists.fulfilled, (state, action) => {
            state.loading.isLoadData = false;
            state.specialists = action.payload.data;
        })
    }
})

export const valuesSpecialists = (state: RootState) => state.specialists
export default specialistsSlice.reducer