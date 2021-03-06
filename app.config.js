require('dotenv').config()

export default {
  "expo": {
    "name": "SwapMeet",
    "slug": "SwapMeet",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "android": {
      "permissions": ["expo-location"],
      "config": {
        "googleMaps": {
            "apiKey": process.env.EXPO_GOOGLE_MAPS_API_KEY
        }
      }
    },
    "ios": {
      "supportsTablet": true,
      "infoPlist": {
        "UIBackgroundModes": [
          "location",
          "fetch"
        ]
      },
      "config": {
        "googleMapsApiKey": process.env.EXPO_GOOGLE_MAPS_API_KEY
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "description": "A place to buy and sell goods, chat, and designate meeting locations for physical trades.",
    "githubUrl": "https://github.com/ChadMcCaulley/ExpoSwapMeet"
  }
}
