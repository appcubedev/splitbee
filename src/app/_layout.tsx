import firebase from "@react-native-firebase/app";
import "@react-native-firebase/auth";
import auth from "@react-native-firebase/auth";
import "@react-native-firebase/firestore";
import { Slot, router } from "expo-router";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider, useDispatch } from "react-redux";
import store from "store";
import { setUser } from "store/auth";

const firebaseConfig = {
	apiKey: "AIzaSyCRGC_tI9TBjAGcKvwVFeYKBMKwHuejQRw",
	authDomain: "splitbeeapp.firebaseapp.com",
	projectId: "splitbeeapp",
	storageBucket: "splitbeeapp.appspot.com",
	messagingSenderId: "356701098833",
	appId: "1:356701098833:web:8e7b2639eb68f449bd7970",
	measurementId: "G-DYV08RZFM5",
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

export default function layout() {
	return (
		<Provider store={store}>
			<App>
				<Slot />
			</App>
		</Provider>
	);
}

const App = ({ children }: any) => {
	const dispatch = useDispatch();
	const [initializing, setInitializing] = useState(true);

	useEffect(() => {
		const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
		return subscriber;
	}, []);

	function onAuthStateChanged(user: any) {
		dispatch(setUser(user?._user ?? null));
		if (user) router.replace("/");
		if (initializing) setInitializing(false);
	}

	return <View>{children}</View>;
};
