export const initialState = {
  modal: false,
  selectedDays: [],
  schedule: [],
  currentmodal: null,
  blockedApps: [],
  from: null,
  to: null,
  limitSlider: null,
  selector: true,
  dbData:null
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "SETMODAL":
      return {
        ...state,
        modal: action.modal,
      };
    case "SETDAYS":
      return {
        ...state,
        selectedDays: action.selectedDays,
      };
    case "SETSCHEDULES": {
      return {
        ...state,
        schedule: action.schedule,
      };
    }
    case "SETCURRENTMODAL": {
      return {
        ...state,
        currentmodal: action.currentmodal,
      };
    }
    case "SETBLOCKEDAPPS": {
      return {
        ...state,
        blockedApps: action.blockedApps,
      };
    }
    case "SETFROM": {
      return {
        ...state,
        from: action.from,
      };
    }
    case "SETTO": {
      return {
        ...state,
        to: action.to,
      };
    }
    case "SETLIMITSLIDER": {
      return {
        ...state,
        limitSlider: action.limitSlider,
      };
    }
    case "SETSELECTOR": {
      return {
        ...state,
        selector: action.selector,
      };
    }
    case"SETDATA":{
      return{
        ...state,
        dbData:action.dbData
      }
    }
    default:
      return state;
  }
};
export default reducer;
