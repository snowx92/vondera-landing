# Staggered Menu Component

A beautifully animated mobile navigation menu with GSAP animations, perfect for mobile-first designs.

## Features

- 🎨 Smooth GSAP-powered animations
- 📱 Mobile-optimized (hidden on desktop by default)
- 🎯 Customizable colors and styling
- 🔢 Optional item numbering
- 🌐 Social links support
- ♿ Accessible with ARIA labels
- 🎭 Multiple position options (left/right)

## Installation

The component is already installed and configured in the project. It uses:
- **GSAP** for animations
- **TypeScript** for type safety
- **Custom CSS** for styling

## Usage

### Basic Example

```tsx
import StaggeredMenu from '@/components/ui/StaggeredMenu';

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Services', ariaLabel: 'View our services', link: '/services' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];

<StaggeredMenu
  position="right"
  items={menuItems}
  socialItems={socialItems}
  displaySocials={true}
  displayItemNumbering={true}
  menuButtonColor="#000"
  openMenuButtonColor="#fff"
  changeMenuColorOnOpen={true}
  colors={['#B19EEF', '#5227FF']}
  logoUrl="/logo.webp"
  accentColor="#8b5cf6"
  isFixed={true}
/>
```

### MobileFooter Wrapper

The project includes a `MobileFooter` component that wraps the `StaggeredMenu` with predefined navigation items:

```tsx
import MobileFooter from '@/components/layout/MobileFooter';

// In your page or layout
<MobileFooter />
```

This component:
- ✅ Only shows on mobile devices (hidden on `lg` breakpoint and above)
- ✅ Includes all main navigation items
- ✅ Includes social media links
- ✅ Automatically manages body scroll when menu is open
- ✅ Uses Vondera brand colors

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `position` | `'left' \| 'right'` | `'right'` | Menu slide-in direction |
| `colors` | `string[]` | `['#B19EEF', '#5227FF']` | Background gradient colors for menu layers |
| `items` | `MenuItem[]` | `[]` | Navigation menu items |
| `socialItems` | `SocialItem[]` | `[]` | Social media links |
| `displaySocials` | `boolean` | `true` | Show/hide social links section |
| `displayItemNumbering` | `boolean` | `true` | Show/hide item numbers |
| `className` | `string` | `''` | Additional CSS classes |
| `logoUrl` | `string` | `'/logo.webp'` | Logo image URL |
| `menuButtonColor` | `string` | `'#000'` | Menu button color when closed |
| `openMenuButtonColor` | `string` | `'#000'` | Menu button color when open |
| `accentColor` | `string` | `'#5227FF'` | Accent color for menu elements |
| `changeMenuColorOnOpen` | `boolean` | `true` | Change button color on open |
| `isFixed` | `boolean` | `false` | Use fixed positioning |
| `onMenuOpen` | `() => void` | `undefined` | Callback when menu opens |
| `onMenuClose` | `() => void` | `undefined` | Callback when menu closes |

### MenuItem Interface

```tsx
interface MenuItem {
  label: string;         // Display text
  ariaLabel?: string;    // Accessibility label
  link: string;          // Navigation URL
}
```

### SocialItem Interface

```tsx
interface SocialItem {
  label: string;  // Display text
  link: string;   // Social media URL
}
```

## Styling

The component uses custom CSS defined in `StaggeredMenu.css`. You can customize:

- **Colors**: Via the `colors` prop for gradient layers
- **Accent**: Via the `accentColor` prop
- **Position**: Via the `position` prop
- **Typography**: Through CSS custom properties

### CSS Variables

```css
.staggered-menu-wrapper {
  --sm-accent: #5227FF; /* Set via accentColor prop */
}
```

## Animations

The component features:

1. **Staggered Layer Animation**: Background layers slide in with a staggered delay
2. **Panel Slide**: Main menu panel slides in smoothly
3. **Item Animation**: Menu items animate in with rotation and translation
4. **Number Fade**: Item numbers fade in sequentially
5. **Social Links**: Social links animate in from bottom
6. **Icon Rotation**: Plus icon rotates to X when opening
7. **Text Cycle**: "Menu"/"Close" text cycles through animation

## Accessibility

- Full keyboard navigation support
- ARIA labels for screen readers
- Semantic HTML structure
- Focus management
- Proper role attributes

## Integration

The mobile footer is integrated into the main page layout:

```tsx
// app/[locale]/page.tsx
export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pb-20 lg:pb-0">
        {/* Page content */}
      </main>
      <div className="hidden lg:block">
        <Footer /> {/* Desktop footer */}
      </div>
      <MobileFooter /> {/* Mobile footer - shows only on mobile */}
    </>
  );
}
```

## Mobile Optimization

The menu is optimized for mobile devices:

- Bottom-fixed navigation bar
- Full-screen menu panel
- Touch-friendly button sizes
- Smooth 60fps animations
- Auto-hide on route change
- Body scroll lock when open

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- iOS Safari 12+
- Android Chrome 90+
- Requires JavaScript enabled

## Tips

1. **Performance**: The component uses GSAP for hardware-accelerated animations
2. **Accessibility**: Always provide `ariaLabel` for menu items
3. **Colors**: Use an array of 2-4 colors for best visual effect
4. **Fixed Mode**: Use `isFixed={true}` for overlay-style menus
5. **Body Scroll**: Manage body overflow in callbacks to prevent background scroll

## Example with Callbacks

```tsx
<StaggeredMenu
  items={menuItems}
  socialItems={socialItems}
  onMenuOpen={() => {
    document.body.style.overflow = 'hidden';
    console.log('Menu opened');
  }}
  onMenuClose={() => {
    document.body.style.overflow = '';
    console.log('Menu closed');
  }}
/>
```

