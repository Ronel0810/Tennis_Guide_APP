# Tennis Guide App

A React Native Expo app built for tennis enthusiasts. This app provides a clean foundation with navigation structure for building tennis-related features.

## Project Structure

This project was originally a Movie app that has been cleaned up and converted into a Tennis Guide app foundation.

### What was removed:
- All movie-specific components (MovieCard, SearchBar, TrendingCard)
- Movie-related services and API calls
- Movie-specific types and interfaces
- Movie detail pages and routes

### What remains:
- Clean navigation structure with 4 tabs: Home, Search, Saved, Profile
- Beautiful tab bar design with custom styling
- NativeWind (Tailwind CSS) for styling
- Expo Router for navigation
- All necessary dependencies for React Native development

## Features

- **Home Tab**: Welcome screen with Hello World message
- **Search Tab**: Placeholder for tennis content search
- **Saved Tab**: Placeholder for saved tennis favorites
- **Profile Tab**: Placeholder for user profile management

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Run on your preferred platform:
   ```bash
   npm run android  # For Android
   npm run ios      # For iOS
   npm run web      # For Web
   ```

## Tech Stack

- **React Native**: Cross-platform mobile development
- **Expo**: Development platform and tools
- **Expo Router**: File-based routing
- **NativeWind**: Tailwind CSS for React Native
- **TypeScript**: Type safety

## Next Steps

You can now start building your tennis guide features:

1. Add tennis-specific content to each tab
2. Implement search functionality for tennis tips/techniques
3. Add user authentication and profile management
4. Create tennis lesson or guide content
5. Add video playback for tennis tutorials
6. Implement favorites/saved content functionality

## Navigation Structure

The app uses Expo Router with a tab-based navigation:

```
app/
 _layout.tsx          # Root layout
 (tabs)/             # Tab navigation group
    _layout.tsx     # Tab layout configuration
    index.tsx       # Home tab
    search.tsx      # Search tab
    saved.tsx       # Saved tab
    profile.tsx     # Profile tab
 globals.css         # Global styles
```

The tab bar features a beautiful design with:
- Custom highlight background for active tabs
- Icon and text labels
- Rounded corners and modern styling
- Dark theme with purple accents
