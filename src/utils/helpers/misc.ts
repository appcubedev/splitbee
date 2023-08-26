import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";

export const handleSignOut = async () => {
	try {
		await GoogleSignin.revokeAccess();
		await GoogleSignin.signOut();
		await auth().signOut();
	} catch (error) {
		console.error("Error during sign-out:", error);
	}
};
