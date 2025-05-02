import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
  const { user } = useUser();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <SignedIn>
        <Text style={{ fontSize: 18, marginBottom: 10 }}>
          Hello {user?.emailAddresses[0].emailAddress}
        </Text>
      </SignedIn>

      <SignedOut>
        <Link href="/sign-in">
          <Text style={{ fontSize: 16, marginBottom: 5 }}>Sign In</Text>
        </Link>
        <Link href="/sign-up">
          <Text style={{ fontSize: 16 }}>Sign Up</Text>
        </Link>
      </SignedOut>
    </View>
  );
}
