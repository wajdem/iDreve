import { Text, View, Pressable, Image } from 'react-native';
import React, { Component } from 'react';
import styles from './style';


export class Footer extends Component {
  render() {
    return (
        <View style={styles.footerContainer}>

        <View style={styles.navigationShadowBox}>
             <View style={[styles.rectangle3, styles.rectanglePosition]} />
             <View style={styles.frameParent}>
               <Pressable
                 style={styles.frameFlexBox}
               >
                 <View
                   style={[
                     styles.navigationBarIcons05Acc,
                     styles.accountGrayIconLayout,
                   ]}
                 >
                   <Image
                     style={styles.accountGrayIconLayout}
                     contentFit="cover"
                     source={require('../../assets/-05-account-gray2.png')}
                   />
                 </View>
                 <Text style={[styles.text3, styles.textTypo]}>الحساب</Text>
               </Pressable>
               <Pressable
                 style={[styles.frame1, styles.frameFlexBox]}
               >
                 <Image
                   style={[
                     styles.hugeIconinterfaceoutlineno,
                     styles.accountGrayIconLayout,
                   ]}
                   contentFit="cover"
                   source={require('../../assets/hugeiconinterfaceoutlinenotification-04.png')}
                 />
                 <Text style={[styles.text, styles.textTypo]}>الاشعارات</Text>
               </Pressable>
               <Pressable
                 style={[styles.frame1, styles.frameFlexBox]}
               >
                 <View
                   style={[
                     styles.navigationBarIcons05Acc,
                     styles.accountGrayIconLayout,
                   ]}
                 >
                   <Image
                     style={styles.vectorIcon}
                     contentFit="cover"
                     source={require("../../assets/vector.png")}
                   />
                 </View>
                 <Text style={[styles.text, styles.textTypo]}>الطلبات</Text>
               </Pressable>
               <Pressable
                 style={[styles.frame1, styles.frameFlexBox]}
               >
                 <Image
                   style={[
                     styles.hugeIconinterfaceoutlineno,
                     styles.accountGrayIconLayout,
                   ]}
                   contentFit="cover"
                   source={require("../../assets/hugeiconinterfaceoutlinehome-031.png")}
                 />
                 <Text style={[styles.text, styles.textTypo]}>الرئيسية</Text>
               </Pressable>
             </View>
           </View>
         </View>
    )
  }
}



export default Footer;