import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function Navbar() {
	return (
		<View>
			<Link href="/">Home</Link>
			<Link href="/settings">Settings</Link>
			<Link href="/user">User</Link>
		</View>
	);
}
