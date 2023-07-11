import React from "react";
import { AuthProvider } from "./src/context/AuthContext";
import Navigation from "./src/components/Navigation";
import { KeyboardAvoidingView, ScrollView } from "react-native";

export default function App() {
  return (
    <AuthProvider>

      <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height' } className='flex-1'>

        <Navigation/>
        
     </KeyboardAvoidingView>

    </AuthProvider>
  );
}