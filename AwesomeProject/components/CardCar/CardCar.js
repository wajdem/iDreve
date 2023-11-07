import { Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import styles from './style';

const App = () => {
  return (
    <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.card}>
        <View style={styles.Left}>
          <View style={styles.detailsCar}>
          <Text style={styles.nameCar}>هونداي النترا-H6</Text>
          <Text style={styles.companyCar}>استرا - 2023</Text>
          </View>
              <View style={styles.price}>
                <Text style={styles.price}>800 ر.س/اليوم</Text>
                <Image
                source={require('../../assets/Calendar.png')}
                style={styles.calendar}
              />
              </View>
        </View>
        <View style={styles.Right}>
                <Image
                  source={{ uri: 'https://pngimg.com/d/camaro_PNG5.png'}}
                  style={styles.image}
                />
          <View style={styles.location}>
                <Text style={styles.locationTextOne}>يبعد عنك</Text>
                <Text style={styles.locationTextTwo}>6,.كم</Text>
                <Image
                source={require('../../assets/location.png')}
                style={styles.locationIcon}
                />
          </View>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.Left}>
          <View style={styles.detailsCar}>
          <Text style={styles.nameCar}>هونداي النترا-H6</Text>
          <Text style={styles.companyCar}>استرا - 2023</Text>
          </View>
              <View style={styles.price}>
                <Text style={styles.price}>800 ر.س/اليوم</Text>
                <Image
                source={require('../../assets/Calendar.png')}
                style={styles.calendar}
              />
              </View>
        </View>
        <View style={styles.Right}>
                <Image
                  source={{ uri: 'https://pngimg.com/d/camaro_PNG5.png'}}
                  style={styles.image}
                />
          <View style={styles.location}>
                <Text style={styles.locationTextOne}>يبعد عنك</Text>
                <Text style={styles.locationTextTwo}>6,.كم</Text>
                <Image
                source={require('../../assets/location.png')}
                style={styles.locationIcon}
                />
          </View>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.Left}>
          <View style={styles.detailsCar}>
          <Text style={styles.nameCar}>هونداي النترا-H6</Text>
          <Text style={styles.companyCar}>استرا - 2023</Text>
          </View>
              <View style={styles.price}>
                <Text style={styles.price}>800 ر.س/اليوم</Text>
                <Image
                source={require('../../assets/Calendar.png')}
                style={styles.calendar}
              />
              </View>
        </View>
        <View style={styles.Right}>
                <Image
                  source={{ uri: 'https://pngimg.com/d/camaro_PNG5.png'}}
                  style={styles.image}
                />
          <View style={styles.location}>
                <Text style={styles.locationTextOne}>يبعد عنك</Text>
                <Text style={styles.locationTextTwo}>6,.كم</Text>
                <Image
                source={require('../../assets/location.png')}
                style={styles.locationIcon}
                />
          </View>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.Left}>
          <View style={styles.detailsCar}>
          <Text style={styles.nameCar}>هونداي النترا-H6</Text>
          <Text style={styles.companyCar}>استرا - 2023</Text>
          </View>
              <View style={styles.price}>
                <Text style={styles.price}>800 ر.س/اليوم</Text>
                <Image
                source={require('../../assets/Calendar.png')}
                style={styles.calendar}
              />
              </View>
        </View>
        <View style={styles.Right}>
                <Image
                  source={{ uri: 'https://pngimg.com/d/camaro_PNG5.png'}}
                  style={styles.image}
                />
          <View style={styles.location}>
                <Text style={styles.locationTextOne}>يبعد عنك</Text>
                <Text style={styles.locationTextTwo}>6,.كم</Text>
                <Image
                source={require('../../assets/location.png')}
                style={styles.locationIcon}
                />
          </View>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.Left}>
          <View style={styles.detailsCar}>
          <Text style={styles.nameCar}>هونداي النترا-H6</Text>
          <Text style={styles.companyCar}>استرا - 2023</Text>
          </View>
              <View style={styles.price}>
                <Text style={styles.price}>800 ر.س/اليوم</Text>
                <Image
                source={require('../../assets/Calendar.png')}
                style={styles.calendar}
              />
              </View>
        </View>
        <View style={styles.Right}>
                <Image
                  source={{ uri: 'https://pngimg.com/d/camaro_PNG5.png'}}
                  style={styles.image}
                />
          <View style={styles.location}>
                <Text style={styles.locationTextOne}>يبعد عنك</Text>
                <Text style={styles.locationTextTwo}>6,.كم</Text>
                <Image
                source={require('../../assets/location.png')}
                style={styles.locationIcon}
                />
          </View>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.Left}>
          <View style={styles.detailsCar}>
          <Text style={styles.nameCar}>هونداي النترا-H6</Text>
          <Text style={styles.companyCar}>استرا - 2023</Text>
          </View>
              <View style={styles.price}>
                <Text style={styles.price}>800 ر.س/اليوم</Text>
                <Image
                source={require('../../assets/Calendar.png')}
                style={styles.calendar}
              />
              </View>
        </View>
        <View style={styles.Right}>
                <Image
                  source={{ uri: 'https://pngimg.com/d/camaro_PNG5.png'}}
                  style={styles.image}
                />
          <View style={styles.location}>
                <Text style={styles.locationTextOne}>يبعد عنك</Text>
                <Text style={styles.locationTextTwo}>6,.كم</Text>
                <Image
                source={require('../../assets/location.png')}
                style={styles.locationIcon}
                />
          </View>
        </View>
      </View>
    </ScrollView>
    </View>
  );
};

export default App;

