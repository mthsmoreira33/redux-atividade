import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ITransfer {
  id: number;
  value: number;
  type: "Entrada" | "Saída";
  description: string;
}

interface ITransferState {
  list: ITransfer[];
}

const initialState: ITransferState = {
  list: [
    {
      id: 1,
      value: 100,
      type: "Entrada",
      description: "Vale Alimentação",
    },
    {
      id: 2,
      value: 20,
      type: "Saída",
      description: "Compra",
    },
  ],
};

const transfersSlice = createSlice({
  name: "transfers",
  initialState,
  reducers: {
    addTransfer: (state, action: PayloadAction<ITransfer>) => {
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    },
    deleteTransfer: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTransfer, deleteTransfer } = transfersSlice.actions
export default transfersSlice.reducer
