import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [],
  statusTab: false,

  // items: localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [],
  // statusTab: localStorage.getItem("statusTab") === "true",
};

//carttab akan mengambil data dari local storage yang ada di kode ini ketika user merefresh halaman
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { productId, quantity } = action.payload;
      const indexProductId = state.items.findIndex((item) => item.productId === productId);
      if (indexProductId >= 0) {
        state.items[indexProductId].quantity += quantity;
      } else {
        state.items.push({ productId, quantity });
      }
      // simpan ke localstorage
      localStorage.setItem("carts", JSON.stringify(state.items));
    },
    changeQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const indexProductId = state.items.findIndex((item) => item.productId === productId);
      if (quantity > 0) {
        state.items[indexProductId].quantity = quantity;
      } else {
        state.items = state.items.filter((item) => item.productId !== productId);
      }
      // update local storage
      localStorage.setItem("carts", JSON.stringify(state.items));
    },
    toggleStatusTab: (state) => {
      state.statusTab = !state.statusTab;
      // debuggin untuk mengecek apakah tab keranjang terbuka
      localStorage.setItem("statusTab", state.statusTab);
      console.log("Status Tab Changed:", state.statusTab);
    },
  },
});

export const { addToCart, changeQuantity, toggleStatusTab } = cartSlice.actions;
export default cartSlice.reducer;
