
export default function reducer(state={num:10},action){
    switch (action.type) {
      case "add":
         state.num+=1;
         break;
      case "decr":
           state.num-=1;
           break;
      default:
        console.log("找不到对应的action.type")
      }
      return {...state}; //相当于复制得到一个新的state
  }