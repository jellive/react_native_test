/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { Fragment, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// interface State {
//   text: 'original Text'
// }
type Props = {
  text: string
}

const Exercise = (props: Props) => {
  const [cnt, setCnt] = useState(0)
  const [text, setText] = useState('original text')
  const [propState] = useState(props.text || 'default')
  return (
    <Fragment>
      {/* <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.body}>
          <Text>Jell's react-native test app.</Text>
          <Text>Props: {propState}</Text>
          <Text style={{
            fontSize: 30,
            color: 'blue'
          }}>Hello this is {text}.</Text>
          <TouchableOpacity onPress={() => { setText('Changed text!'); setCnt(cnt + 1) }}>
            <Text style={{ fontSize: 20, color: 'red' }}>Change above text when onPressed! : {cnt}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView> */}


      <View style={styles.container}>
        <View style={styles.view1}>
        <View style={styles.box1}/>
        <View style={styles.box2}/>
        <View style={styles.box3}/>
        </View>
        <View style={styles.view2}>
        <View style={styles.box4}/>
        <View style={styles.box5}/>
        </View>
        <View style={styles.view3}>
        <View style={styles.box6}/>
        <View style={styles.box7}/>
        <View style={styles.box8}/>
        <View style={styles.box9}/>
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1
  },
  view1: {
    height: 100,
    flexDirection: 'row'
  },
  view2: {
    flexDirection: 'row',
    flexGrow: 1
  },
  view3: {
    height: 100,
    flexDirection: 'row'
  },
  box1: {
    flexGrow: 1,
    backgroundColor: 'red'
  },
  box2: {
    flexGrow: 1,
    backgroundColor: 'blue'
  },
  box3: {
    flexGrow: 1,
    backgroundColor: 'green'
  },
  box4: {
    flexGrow: 1,
    backgroundColor: 'yellow'
  },
  box5: {
    flexGrow: 1,
    backgroundColor: 'green'
  },
  box6: {
    height: 100,
    flexGrow: 1,
    backgroundColor: 'orange'
  },
  box7: {
    flexGrow: 1,
    backgroundColor: 'green'
  },
  box8: {
    flexGrow: 1,
    backgroundColor: 'red'
  },
  box9: {
    flexGrow: 1,
    backgroundColor: 'purple'
  },
});

export default Exercise;
