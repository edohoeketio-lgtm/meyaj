import { Slot } from 'expo-router';
import '../global.css'; // NativeWind CSS injection

export default function RootLayout() {
  return (
    <Slot />
  );
}
