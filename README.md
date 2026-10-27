# Carella’s Kitchen Competitive Pricing Intelligence

A static, accessible competitive pricing dashboard for a proposed Fairfield, Connecticut food truck. Includes competitor profiles, offer search and filters, interactive bar charts, a price position explorer, scenario presets, differences and percentages, strategic interpretations, and offer-level sources.

## Run and build

Requires Node.js 18 or newer. There are no package dependencies, paid services, API keys, backend, or database. Native JavaScript modules and CSS produce a small static site. Fonts use Google Fonts with local system fallbacks.

```
npm test
npm run build
npm run dev
```

Equivalent commands when npm is unavailable: `node --test tests/analytics.test.mjs`, `node scripts/build.mjs`, and `node scripts/serve.mjs`. Preview: http://127.0.0.1:4173/Mission-2/ . Deploy the contents of `dist/` or the equivalent root static files to GitHub Pages. Relative asset URLs and hash navigation support the `/Mission-2/` base path and refreshes.

## Data and methodology

`data/competitor_data.json` is the unchanged Mission 1 primary dataset, researched October 27, 2026. Cross-checked against the supplied `competitor_research.xlsx` (all five worksheets) and `competitor_analysis.docx`; records, prices, classifications, and benchmark statistics agree. Source files remain in the original local Pricing workspace and are not published with private local paths.

- Four unique competitors: three direct, one indirect.
- Ten offer records: nine numeric USD per-item prices and one unavailable price.
- Comparable benchmark: P01, P04, P07. Minimum $12.75, maximum $15.93, median $13.95, mean $14.21.
- Representative UI view also shows unpriced P10; it is excluded from arithmetic.
- All-offer statistics mix different menu products and portions and must not be treated as like-for-like comparisons. There are no add-on records. All listed offers are one-time purchases.
- Missing prices remain null. Promotions, regular-price history, exact portion weights, complete macros, and stock availability were not independently established. No estimated prices are introduced.
- Restaurant-direct Toast records retain the original research’s Verified designation, while prominently disclosing that the crawl was four months old. Chipotle and CAVA are Partially Verified delivery listings, potentially different from in-store prices. Clean Slate’s price is Unavailable.
- Prices are historical snapshots, before taxes, delivery, service fees, and extras. Source links provide provenance, not a claim of live availability.

The $13–$15 recommendation is **Preliminary — Subject to Cost and Demand Analysis**. The user’s exploratory slider selection is separate. Differences are selection minus benchmark; percentages divide by benchmark. A count within $1 is descriptive of this small sample and is not a market density or demand estimate. Opportunity language is hypothetical and follows the report. No demand, revenue, profit, or customer behavior predictions are made.

## Architecture and update process

`analytics.mjs` contains validation, filtering, statistics, and comparison logic. `app.js` renders the JSON into the interface. `styles.css` controls responsive design and reduced-motion behavior. `scripts/build.mjs` validates and copies the static production files. No compilation or framework runtime is needed.

To update research, edit the JSON, preserve IDs and units, document a new research date and limitations, run tests and the build, and republish. Some explanatory copy explicitly describes the original dataset and should be reviewed if the research population changes. Never silently replace historical prices with current claims.

Tests exercise the actual research benchmark, all-offer statistics, null exclusion, intersecting filters, search, sorting, price differences, percentages, and invalid references. Browser QA and deployment status are reported separately in the delivery notes.
