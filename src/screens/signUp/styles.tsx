import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
 
    backgroundColor: '#141516',
    height:812,
    width:375,
    
  },
  flex:{
   flexDirection:'row', 
   alignSelf:'center'
  },
  logo:{
    height:140,
     width:140,
     alignSelf:'center',
     marginTop:50,
     margin:10
  },
  urtext: {
    color: '#FFF',
    textAlign:'center',
    fontSize:28,
    fontStyle:'normal',
    fontWeight:'700',
    letterSpacing:5,
  },
 frtext:{
    color: '#F34E3A',
    textAlign:'center',
    fontSize:28,
    fontStyle:'normal',
    fontWeight:'700',
    letterSpacing:5,
 },
 ustext:{
    color: '#656565',
    textAlign:'center',
    fontSize:16,
    fontStyle:'italic',
    fontWeight:'700',
    letterSpacing:3,
 },
 box: {
   height: 50,
   width: 285,
   flexShrink: 0,
   backgroundColor: '#080808',
   borderRadius: 25,
   borderColor: '#F34E3A',
   alignSelf: 'center',
   marginTop: 20,
   borderWidth: 2,
   flexDirection: 'row',
   alignItems: 'center',
 },
 icon: {
   margin: 20,
   height: 30,
   width: 30,
 },
 
 input: {
   flex: 1,
   color: '#484848',
   fontSize: 14,
   letterSpacing: 1,
   fontWeight: '700',
 },
 
 signupbtn:{
   backgroundColor:'#F34E3A',
   height:50,
   width:285,
   borderRadius:25,
   alignItems:'center',
   justifyContent:'center'

 },
 upbtnview:{
   alignItems:'center',
   marginTop:40
 },
 btntext:{
   color:'#fff',
   fontSize:20,
   fontWeight:'600',
 },
 havetext:{
   fontSize:15,
   fontWeight:'500',
   letterSpacing:1
 }

});

export default styles;
