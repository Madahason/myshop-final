import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  SafeAreaView, 
  Platform,
  TextInput
} from 'react-native';
import PostItems from './src/components/postItems';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


// import Home from './src/screens/Home';

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaViewForDroid}>
       <View style={{paddingVertical: 10,paddingHorizontal: 10, backgroundColor:'#fec85c', flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
        <View style={{backgroundColor:'#fff', flexDirection: 'row', margin: 10,
        padding: 10, borderRadius: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
           
        <AntDesign name="search1" size={24} color="black" />
        <TextInput 
          placeholder='Search for new products'
          style={{width: '100%'}} multiline={ false }
        />
        </View>
       <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row'}}>
              <Entypo name="location-pin" size={24} color="black" />
                <Text>Location</Text>
                <Text style={{fontWeight:'bold', marginLeft: 5}}>New York</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
              <Ionicons name="settings" size={24} color="black" />
                <Text>Category</Text>
                <Text style={{fontWeight:'bold', marginLeft: 5}}>Food & Drink</Text>
              </View>
       </View>
       </View>
    <PostItems />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaViewForDroid:{
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#DDFEF7',
    
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  postWrap:{
    
    display: 'flex', 
    flexDirection: 'row', 
    backgroundColor:'#fff',
    marginVertical: 5,
    marginHorizontal:10,
    borderRadius:10,
    shadowColor:'#000',
    shadowOffset: { width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  },
  // postImage:{
 
  //   height:100, 
  //   width:200, 
  //   borderRadius: 10, 
  //   marginLeft: 10, 
  //   marginRight: 20, 
  //   marginVertical: 10
  // },
  // postContentWrap:{
  //   justifyContent:'space-around',
  //   paddingVertical: 10
  // },
  // title:{
  //   fontWeight: 'bold'

  // },
  // des:{
  //   color:'grey'
  // },
  // postText:{
  //   color:'#fff',
  //   backgroundColor:'#F75B00',
  //   alignSelf:'flex-start',
  //   padding: 5,
  //   borderRadius:4
  // }
  


});
