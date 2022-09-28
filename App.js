import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

import Home from './src/screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{display: 'flex', flexDirection: 'row'}}>
      <Image source={{ uri:'https://picsum.photos/200/300'}} style={styles.postImage} />
      
         <View style={styles.postContentWrap}>
         <View>
         <Text style={styles.title}>Title for the rent</Text>
          <Text style={styles.des}>New York</Text>
         </View>
          <Text style={styles. postText}>$100/ Day</Text>
         </View>
          
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDFEF7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  postImage:{
 
    height:100, 
    width:200, 
    borderRadius: 10, 
    marginLeft: 10, 
    marginRight: 20, 
    marginVertical: 10
  },
  postContentWrap:{
    justifyContent:'space-around',
    paddingVertical: 10
  },
  title:{
    fontWeight: 'bold'

  },
  des:{
    color:'grey'
  },
  postText:{
    color:'#fec85c',
    backgroundColor:'#293241',
    alignSelf:'flex-start',
    padding: 5,
    borderRadius:4
  }


});
