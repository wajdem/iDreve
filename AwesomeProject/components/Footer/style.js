import { StyleSheet } from 'react-native';
import { Color, Border, FontSize, FontFamily, Padding } from "../../GlobalStyles";

const styles = StyleSheet.create({

    footerContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
      rectanglePosition: {
          zIndex: 0,
          height: 3,
          width: 48,
          backgroundColor: Color.algoColorsPrimaryColorsPSpotDark,
          borderBottomLeftRadius: Border.br_11xs,
          borderBottomRightRadius: Border.br_11xs,
          top: 0,
          position: "absolute",
        },
        accountGrayIconLayout: {
          height: 24,
          width: 24,
        },
        textTypo: {
          textAlign: "center",
          fontSize: FontSize.caption_size,
        },
        frameFlexBox: {
          justifyContent: "space-between",
          height: 45,
          width: 62,
          alignItems: "center",
          overflow: "hidden",
        },
        rectangle: {
          left: 281,
        },
        navigationBarIcons05Acc: {
          justifyContent: "center",
          alignItems: "center",
          width: 24,
        },
        text: {
          fontFamily: FontFamily.tajawalRegular,
          color: Color.grayFont,
        },
        hugeIconinterfaceoutlineno: {
          overflow: "hidden",
        },
        frame1: {
          marginLeft: 16,
        },
        vectorIcon: {
          width: 20,
          height: 20,
        },
        text3: {
          fontWeight: "700",
          fontFamily: FontFamily.tajawalBold,
          color: Color.secondaryColor,
        },
        frameParent: {
          zIndex: 1,
          marginLeft: 2,
          flexDirection: "row",
        },
        navigationBarexplore: {
          paddingBottom: Padding.p_5xl,
          paddingTop: Padding.p_sm,
          paddingHorizontal: Padding.p_9xs,
          height: 83,
          width: 375,
          shadowOpacity: 1,
          elevation: 5,
          shadowRadius: 5,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowColor: "rgba(0, 0, 0, 0.15)",
          backgroundColor: Color.surface,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        },
        rectangle1: {
          left: 203,
        },
        navigationShadowBox: {
          marginTop: 20,
          paddingBottom: Padding.p_5xl,
          paddingTop: Padding.p_sm,
          paddingHorizontal: Padding.p_9xs,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          height: 83,
          width: 375,
          shadowOpacity: 1,
          elevation: 5,
          shadowRadius: 5,
          shadowOffset: {
            width: 4,
            height: 4,
          },
          shadowColor: "rgba(0, 0, 0, 0.15)",
          backgroundColor: Color.surface,
        },
        rectangle2: {
          left: 125,
        },
        rectangle3: {
          left: 47,
        },
    });

export default styles;