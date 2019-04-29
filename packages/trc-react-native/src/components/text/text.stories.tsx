import React from "react";
import { View, ScrollView } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { select, text } from "@storybook/addon-knobs";
import { Text, TextProps } from "./text";
import { SafeAreaView } from "../safe-area-view/safe-area-view";

storiesOf("Text", module).add("basic", () => {
    // const categories = ["headline1", "headline2", "headline3", "headline4", "headline5", "headline6", "subtitle1", "subtitle2", "subtitle3", "body1", "body2", "body3", "button", "caption1", "caption2", "caption3", "overline1", "overline2", "overline3"];
    const emphases = ["default", "semimuted", "muted", "disabled"];
    const emphasis = select("emphasis", emphases, "default") as TextProps["emphasis"];
    // const colors = ["primary", "default", "danger", "success", "info", "warning", "red", "blue", "green", "yellow", "brown", "strava", "garmin", "trainingPeaks", "dropbox", "placeholder"];
    // const color = select("color", colors, "default") as TextProps["color"];

    return (
        <ScrollView style={{ flex: 1 }}>
          <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 24 }}>
              <Text
                  category="headline1"
                  // color={color}
                  emphasis={emphasis}
                  ellipsizeMode="tail"
                  numberOfLines={1}
              >
                Headline1
              </Text>
              <Text
                  category="headline2"
                  // color={color}
                  emphasis={emphasis}
                  ellipsizeMode="tail"
                  numberOfLines={1}
              >
                Headline2
              </Text>
              <Text
                  category="headline3"
                  // color={color}
                  emphasis={emphasis}
                  ellipsizeMode="tail"
                  numberOfLines={1}
              >
                Headline3
              </Text>
              <Text
                  category="headline4"
                  // color={color}
                  emphasis={emphasis}
                  ellipsizeMode="tail"
                  numberOfLines={1}
              >
                Headline4
              </Text>
              <Text
                  category="headline5"
                  // color={color}
                  emphasis={emphasis}
                  ellipsizeMode="tail"
                  numberOfLines={1}
              >
                Headline5
              </Text>
              <Text
                  category="headline6"
                  // color={color}
                  emphasis={emphasis}
                  ellipsizeMode="tail"
                  numberOfLines={1}
              >
                Headline6
              </Text>
              <Text
                  category="subtitle1"
                  // color={color}
                  emphasis={emphasis}
                  ellipsizeMode="tail"
                  numberOfLines={1}
              >
                Subtitle1
              </Text>
              <Text
                  category="subtitle2"
                  // color={color}
                  emphasis={emphasis}
                  ellipsizeMode="tail"
                  numberOfLines={1}
              >
                Subtitle2
              </Text>
              <Text
                  category="body1"
                  // color={color}
                  emphasis={emphasis}
                  ellipsizeMode="tail"
                  numberOfLines={1}
              >
                Body1
              </Text>
              <Text
                  category="body2"
                  // color={color}
                  emphasis={emphasis}
                  ellipsizeMode="tail"
                  numberOfLines={1}
              >
                Body2
              </Text>
              <Text
                  category="body3"
                  // color={color}
                  emphasis={emphasis}
                  ellipsizeMode="tail"
                  numberOfLines={1}
              >
                Body3
              </Text>
              <Text
                  category="overline"
                  // color={color}
                  emphasis={emphasis}
                  ellipsizeMode="tail"
                  numberOfLines={1}
              >
                Overline
              </Text>
              <Text
                  category="caption"
                  // color={color}
                  emphasis={emphasis}
                  ellipsizeMode="tail"
                  numberOfLines={1}
              >
                Caption
              </Text>
            </View>
          </SafeAreaView>
        </ScrollView>
    );
});
