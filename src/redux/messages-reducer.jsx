let initialState = {

  dialogData: [
    { id: 1, name: "Dimka" },
    { id: 2, name: "Alexandrou" },
    { id: 3, name: "Svetov" },
    { id: 4, name: "Barsik" },
    { id: 5, name: "Alinka" }
  ],
  messageData: [
    { id: 1, message: "Hi!", likesCount: 12 },
    { id: 2, message: "Your are welcome", likesCount: 4 },
    { id: 3, message: "Wasup baddy", likesCount: 43 }
  ],
  newMessText: ""

};

const messagesReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD-MESS':

      let newMess = action.newMessText;

      return {
        ...state,

        messageData: [...state.messageData, { id: 4, message: newMess, likesCount: 0 }]
      }

    default: return state;
  }
}
export let addMessActionCreator = (newMessText) => ({ type: 'ADD-MESS', newMessText })

export default messagesReducer;