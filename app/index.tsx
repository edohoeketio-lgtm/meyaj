import { Redirect } from 'expo-router';

export default function Index() {
  // Redirect to the onboarding flow by default for now
  return <Redirect href="/(auth)/onboarding" />;
}
