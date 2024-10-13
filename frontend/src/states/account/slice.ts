import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../../redux-app';
import { getUser, changeDataUser as changedData } from '../../services/userService';
import { User, UserReturnModel, UserType } from '../../types/types';
import { changeUserTypeForId, Update } from '../../api/user.api';

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

export const updateUser = createAsyncThunk(
    'account/updateUser',
    async ({ user }: { user?: User }) => {
        if (!user) {
            throw new Error('User is undefined');
        }
        await Update(user);
    }
)

export interface IAccount {
    obj: UserReturnModel,
    loading: boolean,
    updating: boolean,
    isSpecialist: boolean,
    tags: string[],
    isUpdateUser: boolean
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
            title: null,
            about: null,
            description: null,
            tags: null,
            urlPhoto: null,
            rating: undefined
        },
        message: ""
    },
    isUpdateUser: false,
    tags: [],
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
        },
        changeAbout: (state, action: PayloadAction<string>) => {
            if (state.obj.data) {
                state.obj.data.about = action.payload;
                state.isUpdateUser = true;
            }
        },
        changeTitle: (state, action: PayloadAction<string>) => {
            if (state.obj.data) {
                state.obj.data.title = action.payload;
                state.isUpdateUser = true;
            }
        },
        changeDescription: (state, action: PayloadAction<string>) => {
            if (state.obj.data) {
                state.obj.data.description = action.payload;
                state.isUpdateUser = true;
            }
        },
        addNewTag: (state, action: PayloadAction<string>) => {
            if (state.obj.data && action.payload != "") {
                state.tags = [...state.tags, action.payload]
                state.obj.data.tags = state.tags.join(',');
                state.isUpdateUser = true;
            }
        },
        removeTag: (state, action: PayloadAction<string>) => {
            if (state.obj.data) {
                state.tags = state.tags.filter(tag => tag !== action.payload);
                state.obj.data.tags = state.tags.join(',');
                state.isUpdateUser = true;
            }
        },
        changeIsUpdateUser: (state, action: PayloadAction<boolean>) =>
            {
                state.isUpdateUser = action.payload;
            }
    },
    extraReducers: (builder) => {
        builder.addCase(getUserById.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getUserById.fulfilled, (state, action) => {
            state.loading = false;
            state.obj = action.payload;
            state.tags = action.payload?.data?.tags?.split(',') ?? [];
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

export const { handleSwitch, changeTitle, changeDescription, addNewTag, changeAbout, removeTag, changeIsUpdateUser } = accountSlice.actions
export const userInfo = (state: RootState) => state.account
export default accountSlice.reducer