/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 90],
  },
  async redirects() {
    return [
      {
        source: "/blog/beer-tap-maintenance",
        destination: "/blog/taiwan-bars-and-bistros",
        statusCode: 301,
      },
      {
        source: "/blog/draft-beer-temperature",
        destination: "/blog/opening-beverage-system-guide",
        statusCode: 301,
      },
      {
        source: "/blog/bar-trends-1",
        destination: "/blog/about-beer-taps",
        statusCode: 301,
      },
      {
        source: "/blog/special-thanks",
        destination: "/blog/opening-beverage-system-guide",
        statusCode: 301,
      },
      {
        source: "/blog/beverage-temperature-and-pressure",
        destination: "/blog/opening-beverage-system-guide",
        statusCode: 301,
      },
      {
        source: "/blog/bar-equipment-brand-space",
        destination: "/blog/about-beer-taps",
        statusCode: 301,
      },
      {
        source: "/blog/beer-foam-science",
        destination: "/blog/opening-beverage-system-guide",
        statusCode: 301,
      },
      {
        source: "/blog/beverage-equipment-planning",
        destination: "/blog/opening-beverage-system-guide",
        statusCode: 301,
      },
    ]
  },
}

export default nextConfig
