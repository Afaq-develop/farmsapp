import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
   mainview:{
    flex:1,
    backgroundColor:'#141516',
    height:'100%',
    width:'100%'
   },
   view:{
      height:70,
      width:350,
      flexDirection:'row',
      backgroundColor:'#FFF',
      alignItems:'center',
      margin:20,
      borderRadius:10
   },
   image:{
       margin:20,
       height:40,
       width:40
   },
   text:{
      fontSize:25,
      fontWeight:'bold',
      color:'#141516'
   }
})

export default styles;