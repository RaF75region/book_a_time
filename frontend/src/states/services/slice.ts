import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../redux-app';
import { MessageService } from '../../models/service_pb';
import { addService } from '../../services/servicesService';
import { Service } from '../../types/types';
import { GetListService, RemoveService } from '../../api/service.api';
import { AddService } from '../../api/service.api';

export interface IService {
    isService: string,
    isOpen: boolean
    isAddService: boolean,
    isErrorAdd: boolean,
    isLoadList: boolean,
    isRemoved: boolean,
    dataService: Service,
    listServices: Service[]
}

const initialState: IService = {
    isService: "",
    isOpen: false,
    isAddService: false,
    isErrorAdd: false,
    isLoadList: true,
    isRemoved: true,
    dataService: {
        title: "",
        timeProgress: 0,
        price: 0,
        description: "",
        id: "",
        userId: 0
    },
    listServices: []
}

export const addServiceForUser = createAsyncThunk(
    'service/addService',
    async (obj: Service) => {
        delete obj.id;
        const result = await AddService(obj);
        return result;
    }
)

export const removeServiceAsync = createAsyncThunk(
    'service/removeServiceAsync',
    async (service: Service) => {
        const result = await RemoveService(service);
        return result;
    }
)

export const getServices = createAsyncThunk(
    'service/getServices',
    async (userId: number) => {
        const result = await GetListService(userId);
        return result;
    }
)

export const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        setIdService: (state, action: PayloadAction<string>) => {
            state.isService = action.payload;
        },
        handlerOpened: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload;
        },
        changeTitle: (state, action: PayloadAction<string>) => {
            state.dataService.title = action.payload;
        },
        changeDescription: (state, action: PayloadAction<string>) => {
            state.dataService.description = action.payload;
        },
        changePrice: (state, action: PayloadAction<number>) => {
            state.dataService.price = action.payload;
        },
        changeTimeProgress: (state, action: PayloadAction<number>) => {
            state.dataService.timeProgress = action.payload;
        },
        removeService: (state, action: PayloadAction<string>) => {
            state.listServices = [...state.listServices.filter(i => i.id !== action.payload)]
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addServiceForUser.pending, (state) => {
            state.isAddService = true;
        })
        builder.addCase(addServiceForUser.fulfilled, (state, action) => {
            state.isAddService = false;
            if(action.payload.data)
                state.listServices = [...state.listServices,  action.payload.data]
        })
        builder.addCase(getServices.pending, (state) => {
            state.isLoadList = true;
        })
        builder.addCase(getServices.fulfilled, (state, action) => {
            state.isLoadList = false;
            state.listServices = action.payload.data ?? [];
        })
        builder.addCase(removeServiceAsync.pending, (state) => {
            state.isRemoved = true;
        })
        builder.addCase(removeServiceAsync.fulfilled, (state) => {
            state.isRemoved = false;
        })
    }
})

export const
    {
        setIdService,
        handlerOpened,
        changeTitle,
        changeDescription,
        changePrice,
        changeTimeProgress,
        removeService
    } = serviceSlice.actions;

export const selectValues = (state: RootState) => state.service;
export const dataService = (state: RootState) => state.service.dataService;
export const listServices = (state: RootState) => state.service.listServices;
export default serviceSlice.reducer;