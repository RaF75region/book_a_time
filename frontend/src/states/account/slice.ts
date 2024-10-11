import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../../redux-app';
import { getUser, changeDataUser as changedData } from '../../services/userService';
import { UserReturnModel, UserType } from '../../types/types';
import { changeUserTypeForId } from '../../api/user.api';

export const getUserById = createAsyncThunk(
    'account/getUserById',
    async (id: number) => {
        const result = await getUser(id);
        return result;
    }
)

export const changeUserType = createAsyncThunk(
    'account/changeUserData',
    async ({ userId, userType }: { userId: number; userType: UserType }) => {
        if (!userId) {
            throw new Error('User is undefined');
        }
        await changeUserTypeForId(userId, userType);
        return userType;
    }
)

export interface IAccount {
    obj: UserReturnModel,
    loading: boolean,
    updating: boolean,
    isSpecialist: boolean
}

const initialState: IAccount = {
    obj: {
        error: false,
        data: {
            id: undefined,
            name: null,
            fullName: null,
            email: null,
            type: undefined,
            urlPhoto: null,
            rating: undefined
        },
        message: ""
    },
    updating: false,
    loading: false,
    isSpecialist: false
}


export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        handleSwitch: (state, action: PayloadAction<boolean>) => {
            state.isSpecialist = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUserById.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getUserById.fulfilled, (state, action) => {
            state.loading = false;
            state.obj = action.payload;
            state.isSpecialist = action.payload?.data?.type === 1 ? true : false;
        })
        builder.addCase(changeUserType.pending, (state) => {
            state.updating = true;
        })
        builder.addCase(changeUserType.fulfilled, (state) => {
            state.updating = false;
        })
    }
})

export const { handleSwitch } = accountSlice.actions
export const userInfo = (state: RootState) => state.account
export default accountSlice.reducer