import { StatusBar } from "react-native";
import { 
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Platform
 } from "react-native";
 import styles from "./styles";
 import { colors } from "../../modal/color";

 const PostItems = () => {
    return(
      <View style={styles.container}>
      <StatusBar style='auto'  />
      <View style={styles.postWrap}>
      <Image source={{ uri:'https://picsum.photos/200/300'}} style={styles.postImage} />
      
         <View style={styles.postContentWrap}>
         <View>
         <Text style={styles.postTitle}>Title for the rent</Text>
          <Text style={styles.postPlace}>New York</Text>
         </View>
          <Text style={styles. postValue}>$100/ Day</Text>
         </View>
      </View>
      </View>
    )
 }

 export default PostItems;