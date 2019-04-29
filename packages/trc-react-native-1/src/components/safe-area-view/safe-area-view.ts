import { Platform } from "react-native";

/**
 * DO NOT USE THIS INSIDE COMPONENTS!
 *
 * Only use this in stories which portray how clients will
 * use it.
 *
 * The reason is that react native does not support android
 * safe areas yet, so the client may need to depend on native
 * modules.
 */
export const SafeAreaView =
    Platform.OS === "android"
        ? require("./safe-area-view.android").SafeAreaView
        : require("./safe-area-view.ios").SafeAreaView;
