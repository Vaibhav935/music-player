# Music player project steps

1. Create new Project
2. Install dependencies needed like react-router, tailwind, redux, Lucid-react(for icons) etc.
3. Setup Router
4. Make layout folder - (AuthLayout.jsx and HomeLayout.jsx)
5. Make two components - (Login and Register) (Install react-hook-form)
6. Setup toggle in AuthLayout between login and register
7. Make HomeLayout.jsx (Design Layout) {
   Navbar
   Sidebar (left)
   Center (<Outlet/>)
   Right
   Player (downside)
   }
8. Make Pages (folder) -> Songs.jsx (to list all songs)
9. Make SongCard.jsx component for one song
10. Download songs in public folder
11. Make json data of songs in Songs.jsx component {
    Now using .map in array return SongCard.jsx for song cards
    }
12. Now setup Redux (for play pause state management) {
    make store
    then feature
    }
13. Now make slices under feature (SongSlice.jsx){
    this have actions like:
    PlayandPause
    AddSong
    }
14. Now set up play and pause song functionality in Song.jsx using SongCard.jsx and Redux state management.
15. Made a seperate component for the player downside
16. Now make functinality that if we play/pause song in home page then it should also reflect in the player down side of screen.
17. Set current / duration time before and after the bar using audioRef
18. Format song time from miliseconds to min:sec fromat using moment js
19.
