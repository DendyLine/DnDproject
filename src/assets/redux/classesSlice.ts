import { createSlice } from '@reduxjs/toolkit';


const classesSlice = createSlice({
  name: 'classes',
  initialState: {
    tiles: [
      {id: 'bard', name: 'Бард', link: '/classes/bard'},
      {id: 'barbarian', name: 'Варвар', link: '/classes/barbarian'},
      {id: 'warrior', name: 'Воїн', link: '/classes/warrior'},
      {id: 'wizard', name: 'Чарівник', link: '/classes/wizard'},
      {id: 'druid', name: 'Друїд', link: '/classes/druid'},
      {id: 'cleric', name: 'Жрець', link: '/classes/cleric'},
      {id: 'artificer', name: 'Винахідник', link: '/classes/artificer'},
      {id: 'warlock', name: 'Чаклун', link: '/classes/warlock'},
      {id: 'monk', name: 'Монах', link: '/classes/monk'},
      {id: 'paladin', name: 'Паладин', link: '/classes/paladin'},
      {id: 'rogue', name: 'Пройдисвіт', link: '/classes/rogue'},
      {id: 'ranger', name: 'Слідопит', link: '/classes/ranger'},
      {id: 'sorcerer', name: 'Маг', link: '/classes/sorcerer'},
    ],
  },
  reducers: {},
});
export default classesSlice.reducer;