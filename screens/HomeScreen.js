import React, {useState, useEffect} from 'react';
import Torch from 'react-native-torch';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  ToastAndroid,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {H2} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Slider from 'react-native-slider';

const HomeScreen = (props) => {
  const [enableTorch, setEnableTorch] = useState(false);
  const [torchOn, setTorchOn] = useState(false);
  const [initialValue, setInitialValue] = useState(1);
  const onLoad = async () => {
    try {
      const cameraAllowed = await Torch.requestCameraPermission(
        'Camera Permissions', // dialog title
        'We require camera permissions to use the torch on the back of your phone.', // dialog body
      );

      if (cameraAllowed) {
        setEnableTorch(!enableTorch);
        setTorchOn(!torchOn);
        Torch.switchState(!enableTorch);
      }
    } catch (error) {
      ToastAndroid.show(
        'We seem to have an issue accessing your torch',
        ToastAndroid.SHORT,
      );
    }
  };
  let time;
  const onBlink = () => {
    if (enableTorch) {
      setInterval(() => {}, 1000);
    } else {
      Alert.alert('enable the torch');
    }
  };

  return (
    <>
      <StatusBar backgroundColor="#140F2D" barStyle="light-content" />
      <View style={{height: '100%', backgroundColor: '#140F2D'}}>
        <View style={{width: '90%', marginLeft: '5%', marginTop: '20%'}}>
          {torchOn ? (
            <H2 style={{color: '#FD8B0E', textAlign: 'center'}}> TORCH ON</H2>
          ) : (
            <H2 style={{color: '#cccccc', textAlign: 'center'}}>TORCH OFF</H2>
          )}
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              onLoad();
            }}>
            <View
              style={{
                ...styles.circle1,
                backgroundColor: torchOn ? '#553B1A' : '#eeeeee',
              }}>
              <View
                style={{
                  ...styles.circle2,
                  backgroundColor: torchOn ? '#B26114' : '#cccccc',
                }}>
                <View
                  style={{
                    ...styles.circle3,
                    backgroundColor: torchOn ? '#FD8B0E' : '#b2b2b2',
                  }}>
                  <AntDesign name="poweroff" size={30} color="#fff" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* <View style={styles.container}>
            <Slider
              value={initialValue}
              maximumValue={50}
              minimumValue={1}
              step={1}
              thumbTintColor="#FD8B0E"
              minimumTrackTintColor="#FD8B0E"
              maximumTrackTintColor="#ffff"
              trackStyle={{height: 1}}
              onValueChange={(value) => {
                setInitialValue(value);
              }}
              onSlidingComplete={() => {
                onBlink();
              }}
            />

            <Text style={{color: '#ffff', textAlign: 'center'}}>
              {initialValue}
            </Text>
          </View> */}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    marginLeft: '10%',
    marginTop: 20,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  circle1: {
    height: 100,
    width: 100,
    borderRadius: 100,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  circle2: {
    height: 80,
    width: 80,
    borderRadius: 100,
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  circle3: {
    height: 60,
    width: 60,
    borderRadius: 100,
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
