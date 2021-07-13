import React from 'react';
import styles from './styles';
import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export default function TypeFilterModal({
  visible,
  onScreenPress,
  buyCheckBoxValue,
  sellCheckBoxValue,
  buyOnpress,
  sellOnpress,
}) {
  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <Pressable
        onPress={onScreenPress}
        style={{
          flex: 1,
          backgroundColor:
            window.Theme === 'dark'
              ? 'rgba(41, 52, 82,0.6)'
              : 'rgba(41, 52, 82,0.5)',
        }}>
        <View
          style={[
            styles.filterModalWindow,
            {
              backgroundColor:
                window.Theme === 'dark' ? 'rgb(34,40,49)' : 'rgb(255,255,255)',
            },
          ]}>
          {/* Triangle Border */}
          <View
            style={[
              styles.topWindowTriangle,
              {
                borderLeftWidth: 7,
                borderRightWidth: 7,
                top: -9,
                left: 14,
                borderBottomColor: 'rgb(0,173,181)',
              },
            ]}
          />
          <View
            style={[
              styles.topWindowTriangle,
              {
                borderBottomColor:
                  window.Theme === 'dark'
                    ? 'rgb(34,40,49)'
                    : 'rgb(255,255,255)',
              },
            ]}
          />

          <View style={styles.placardTypeOption}>
            <TouchableWithoutFeedback onPress={buyOnpress}>
              <Text
                style={{
                  fontFamily: 'IranSans',
                  fontSize: 13,
                  color:
                    window.Theme === 'dark'
                      ? 'rgb(0,173,181)'
                      : 'rgb(57,62,70)',
                }}>
                خرید(نیازمندی)
              </Text>
            </TouchableWithoutFeedback>
            <CheckBox
              tintColors={{true: 'rgb(0,173,181)', false: 'gray'}}
              value={buyCheckBoxValue}
              onValueChange={buyOnpress}
            />
          </View>
          <View style={styles.placardTypeOption}>
            <TouchableWithoutFeedback onPress={sellOnpress}>
              <Text
                style={{
                  fontFamily: 'IranSans',
                  fontSize: 13,
                  color:
                    window.Theme === 'dark'
                      ? 'rgb(0,173,181)'
                      : 'rgb(57,62,70)',
                }}>
                فروش
              </Text>
            </TouchableWithoutFeedback>
            <CheckBox
              tintColors={{true: 'rgb(0,173,181)', false: 'gray'}}
              value={sellCheckBoxValue}
              onValueChange={sellOnpress}
            />
          </View>
        </View>
      </Pressable>
    </Modal>
  );
}
