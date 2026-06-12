import React from 'react';

import { View, Text } from 'react-native';

export const HomeScreen = (): React.JSX.Element => {
  return (
    <View className="flex-1 items-center justify-center bg-white px-lg">
      <Text className="text-h4 font-bold text-green-900 mb-xs">Bienvenue sur ScubaFind 🤿</Text>
      <Text className="text-b1 text-neutral-600">
        Trouvez les meilleurs spots de plongée autour de vous
      </Text>
    </View>
  );
}
