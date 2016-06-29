const predictions = ( state = [], action ) => {

  switch( action.type ) {

    case 'GET_GAMES':
      return {
        id: 'HELLO WORLD!'
      }
    default:
      return state;

  }

}

export default predictions;
