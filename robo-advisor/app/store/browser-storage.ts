const KEY = "redux";
export function loadState() {
  try {
    const serializedState = localStorage.getItem(KEY);
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
}

export async function saveState(state: any) {
  try {
    console.log("Saving state to localStorage:", state);
    // const serializedState = JSON.stringify({...state, investmentReducer: {...state.investmentReducer, savedInStore: true}}); // Ensure savedInStore is set to true
    const serializedState = JSON.stringify(state);
    localStorage.setItem(KEY, serializedState);
  } catch (e) {
    // Ignore
    console.error("Error saving state to localStorage:", e);
  }
}