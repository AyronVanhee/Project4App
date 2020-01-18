/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import { registerNativeViewElement } from 'svelte-native/dom';

registerNativeViewElement("youtubeplayer", () => require("nativescript-youtubeplayer").YoutubePlayer);


import { svelteNative } from "svelte-native";
import App from  "./App.svelte";
svelteNative(App, {});

