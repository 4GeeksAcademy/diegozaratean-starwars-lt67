export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    message: 'yo no le creo a juan',
    navesFavoritas: ["a","b"],
    hobbiesFavoritas: ["c","d"]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    case 'change_message':


      return {
        ...store,
        message: action.payload
      };
    case 'toggle_nave':

    let updateNaves = []
    if(store.navesFavoritas.includes(action.payload)){
      updateNaves = store.navesFavoritas.filter((nave)=> nave != action.payload )
    }else{
      updateNaves = [...store.navesFavoritas,action.payload]
    }


      return {
        ...store,
        navesFavoritas: updateNaves
      };
    default:
      throw Error('Unknown action.');
  }    
}
