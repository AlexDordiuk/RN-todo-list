import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/Header";
import Input from "./components/Input";

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.inputContainer}>
        <Input/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32 ,
    width: '100%'
  },

});
