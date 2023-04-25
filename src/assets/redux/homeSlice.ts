import { createSlice } from '@reduxjs/toolkit';


const homeSlice = createSlice({
  name: 'home',
  initialState: {
    tiles: [
      {id: 1, name: 'Раси', classname: 'Home__Table__tile', link: '/races'},
      {id: 2, name: 'Класи', classname: 'Home__Table__tile', link: '/classes'},
      {id: 3, name: 'Властивості', classname: 'Home__Table__tile', link: '/features'},
      {id: 4, name: 'Передісторії', classname: 'Home__Table__tile', link: '/histories'},
      {id: 5, name: 'Зброя', classname: 'Home__Table__tile', link: '/weapon'},
      {id: 6, name: 'Обладунки', classname: 'Home__Table__tile', link: '/armor'},
      {id: 7, name: 'Спорядження', classname: 'Home__Table__tile', link: '/equipment'},
      {id: 8, name: 'Магічні предмети', classname: 'Home__Table__tile', link: '/artifacts'},
      {id: 9, name: 'Бестіарій', classname: 'Home__Table__tile', link: '/bestiary'},
      {id: 10, name: 'Заклинання', classname: 'Home__Table__tile', link: '/spells'},
      {id: 11, name: 'Інструменти', classname: 'Home__Table__tile', link: '/tools'},
      {id: 12, name: 'Новини', classname: 'Home__Table__tile', link: '/news'},
    ],
  },
  reducers: {},
});
export default homeSlice.reducer;