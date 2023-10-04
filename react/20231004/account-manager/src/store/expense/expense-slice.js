import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
    name: 'expenseSlice',
    initialState: {
        //사용자의 지출 목록을 관리합니다.
        expenseList: [{ name: 'coffee', price: 5000 }, { name: 'icecream', price: 1500 }]
    }
});

// slice에서 생성한 reducer를 외부로 내보냅니다.
export default expenseSlice.reducer