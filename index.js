export const crudReducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return [...state, action.payload];
      
    case "READ_ALL":
      return action.payload; // Asumiendo payload inicial o fetched
      
    case "UPDATE":
      return state.map(item => 
        item.id === action.payload.id ? { ...item, ...action.payload.data } : item
      );
      
    case "DELETE":
      return state.filter(item => item.id !== action.payload);
      
    default:
      return state;
  }
};

// Ejemplo de dispatchers:
// dispatch({ type: "CREATE", payload: { id: 1, name: "Admin" } });
// dispatch({ type: "UPDATE", payload: { id: 1, data: { name: "SuperAdmin" } } });
// dispatch({ type: "DELETE", payload: 1 });