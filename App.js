import React from 'react';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <WebView source={{ uri: 'http://allpgs.iptime.org:3000/' }} style={{ marginTop: 25 }} />
  );
}