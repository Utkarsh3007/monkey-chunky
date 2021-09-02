import * as React from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity,Image } from 'react-native';
import { Header } from 'react-native-elements'
import { TouchableRipple } from 'react-native-paper';
import { Item } from 'react-native-paper/lib/typescript/src/components/List/List';
import {DB} from './localDB'
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      chunks: []
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Header backgroundColor={'#FF6700'} centerComponent={{ text: 'MONKEY CHUNKY', style: { color: '#000000', fontSize: 20 }, }} />
        <Image style={styles.imageIcon} source={{uri : 'https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png'}}/>
        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text: text })
          }} value={this.state.text}
        />

        <TouchableOpacity style={styles.goButton} onPress={() => {
          this.setState({ chunks:DB[this.state.text].chunks })
        }}>
          <Text style={styles.buttonText}> GO </Text>
        </TouchableOpacity>  
        {this.state.chunks.map(item=>{
          return(
            <TouchableOpacity style={styles.goButton}>
              <Text style = {styles.DisplayText}>{item}</Text>
            </TouchableOpacity>
          )
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF00',
  },
  inputBox: { marginTop: 100, width: '80%', alignSelf: 'center', height: 40, textAlign: 'center', borderWidth: 4, outline: 'none', },
  goButton: { width: '50%', height: '55', alignSelf: 'center', padding: 10, margin: 10 },
  buttonText: { textAlign: 'center', fontSize: 50, fontWeight: 'bold' },
  DisplayText: { textAlign: 'center', fontSize: 30 },
  imageIcon: {width:100,height:100,marginLeft:600,marginTop:100}
});
