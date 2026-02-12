# Josh Realty Inc. - Website

25th anniversary website for Josh Realty Inc., a South Florida real estate brokerage.

## Project Structure

```
josh-realty/
  index.html            # Main page
  css/
    styles.css          # All styles
  js/
    main.js             # Nav scroll, animations, search tabs
  assets/
    images/             # Drop your photos here
    video/
      hero.mp4          # Replace with your own drone footage
```

## Quick Start

1. Clone the repo
2. Open `index.html` in a browser, or deploy to any static host

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repo
3. It deploys instantly (no build step needed)
4. Point your domain (`joshrealtyinc.com`) to Vercel in your DNS settings

## Replacing Stock Photos

The site currently uses Unsplash stock photos. Replace them in `css/styles.css` by searching for `unsplash.com` URLs and swapping with your own image paths.

Images to replace:
- **Community cards** (7 images): Miami, Fort Lauderdale, Sunny Isles, West Palm Beach, Homestead, Miami Beach, Bal Harbour
- **Listing cards** (3 images): Featured property photos from MLS
- **Story section** (2 images): Family photo + photo of Josh

## Hero Video

Download a free South Florida drone video from:
- https://www.pexels.com/video/drone-of-miami-19109604/
- https://www.pexels.com/video/praia-mar-miami-drones-4134979/

Save as `assets/video/hero.mp4` and update the `<source>` tag in `index.html`.

## IDX/MLS Integration

For live MLS search, sign up for [IDX Broker Core](https://idxbroker.com) ($60/mo) and embed their search widget on a `/search` page.

## License

Private. All rights reserved Josh Realty Inc.
