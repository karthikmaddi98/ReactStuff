# My first React Learning

# Parcel Advantages
- Dev Build
- Local Server
- HMR - Hot Module Replacement (Automatically updating      changes in Chrome/Browser)
- A File Watching Algorithm - Written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code splitting
- Differential Bundling - support older browsers
- Diagnostics
- Good Error Handling
- HTTPS
- Reliable Caching
- Tree Shaking - Remove unused code
- Differenet dev and prod bundles

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Serach
 *  - RestaurantContainer
 *     - Restro Cards
 *          - Img
 *          - Name of Res, Rating, Cuisine, delivery time
 * Footer
 *  - CopyRight
 *  - Links
 *  - Address
 *  - Contact
 */


 Two Types of Export/Import

 - Default Export/Import

 export default Component;
 import Component from "path";

 - Named Export/Import

 export const Component;
 import { Component } from "path";


# React Hooks
(Normal JS Functions written by FB developers)

- useState() - SuperPowerful State Variables in React
- useEffect() 

Whenever a state Variable updables, React wil re-renders the compoent.

// Normal JS Variable
    // let LofRes = [];

    // Local State Variable - Super Powerful Variable
    const [ListofRestaurants, setListofRestaurants] = useState([]);



