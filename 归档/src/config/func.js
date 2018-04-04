const func = {
  ftoString: state => JSON.parse(JSON.stringify(state)),
  ftoArray: state => {
    let list = []
    for (let i = 0; i < state.length; i++) {
      if (state[i] instanceof Array) {
        func.ftoArray(state[i])
      } else {
        list.push({ ...state[i] })
      }
    }
    return list
  }
}
export default func
