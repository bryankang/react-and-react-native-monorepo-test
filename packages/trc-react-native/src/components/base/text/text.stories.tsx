import React from "react";
import { View, ScrollView } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { select, text } from "@storybook/addon-knobs";
import { SafeAreaView } from "../safe-area-view/safe-area-view";
import { Text, TextProps } from "./text";

const categories = [
    "heading1",
    "heading2",
    "heading3",
    "heading4",
    "heading5",
    "heading6",
    "heading7",
    "paragraph-lead",
    "paragraph",
    "paragraph--semibold",
    "paragraph-s",
    "paragraph-s--semibold",
    "paragraph-xs",
    "paragraph-xs--semibold",
    "label",
    "label-s",
];

storiesOf("base/Text", module)
    .add("basic", () => (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 24 }}>
                <Text
                    category={select("category", categories, "heading1") as TextProps["category"]}
                >
                    {text("children", "Hello")}
                </Text>
            </View>
        </SafeAreaView>
    ))
    .add("all", () => {
        return (
            <ScrollView style={{ flex: 1 }}>
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={{ flex: 1, padding: 24 }}>
                        <Text
                            category="heading1"
                            ellipsizeMode="tail"
                            numberOfLines={1}
                        >
                            Heading1
                        </Text>
                        <Text
                            category="heading2"
                            ellipsizeMode="tail"
                            numberOfLines={1}
                        >
                            Heading2
                        </Text>
                        <Text
                            category="heading3"
                            ellipsizeMode="tail"
                            numberOfLines={1}
                        >
                            Heading3
                        </Text>
                        <Text
                            category="heading4"
                            ellipsizeMode="tail"
                            numberOfLines={1}
                        >
                            Heading4
                        </Text>
                        <Text
                            category="heading5"
                            ellipsizeMode="tail"
                            numberOfLines={1}
                        >
                            Heading5
                        </Text>
                        <Text
                            category="heading6"
                            ellipsizeMode="tail"
                            numberOfLines={1}
                        >
                            Heading6
                        </Text>
                        <Text
                            category="heading7"
                            ellipsizeMode="tail"
                            numberOfLines={1}
                        >
                            Heading7
                        </Text>
                        <Text
                            category="paragraph-lead"
                            ellipsizeMode="tail"
                            numberOfLines={1}
                        >
                            Paragraph Lead
                        </Text>
                        <Text
                            category="paragraph"
                            ellipsizeMode="tail"
                            numberOfLines={1}
                        >
                            Paragraph
                        </Text>
                        <Text
                            category="paragraph--semibold"
                            ellipsizeMode="tail"
                            numberOfLines={1}
                        >
                            Paragraph Semibold
                        </Text>
                        <Text
                            category="paragraph-s"
                            ellipsizeMode="tail"
                            numberOfLines={1}
                        >
                            Paragraph Small
                        </Text>
                        <Text
                            category="paragraph-s--semibold"
                            ellipsizeMode="tail"
                            numberOfLines={1}
                        >
                            Paragraph Small Semibold
                        </Text>
                        <Text
                            category="paragraph-xs"
                            ellipsizeMode="tail"
                            numberOfLines={1}
                        >
                            Paragraph Extra Small
                        </Text>
                        <Text
                            category="paragraph-xs--semibold"
                            ellipsizeMode="tail"
                            numberOfLines={1
                            }
                        >
                            Paragraph Extra Small Semibold
                        </Text>
                        <Text
                            category="label"
                            ellipsizeMode="tail"
                            numberOfLines={1}
                        >
                            Label
                        </Text>
                        <Text
                            category="label-s"
                            ellipsizeMode="tail"
                            numberOfLines={1}
                        >
                            Label Small
                        </Text>
                    </View>
                </SafeAreaView>
            </ScrollView>
        );
    });
