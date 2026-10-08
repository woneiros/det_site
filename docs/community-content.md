# Community homepage content

The homepage now uses an editorial noticeboard, followed by participation options,
member stories, and a closing invitation. All copy and destinations live in
`data/homepage.ts` and `data/site.ts`. The existing brand uses the readable name
“Data Engineer Things”; the redesign retains Fraunces and the warm theme tokens.

## Provenance

Reviewed October 4, 2026:

- https://www.dataengineerthings.org/ and its public
  `/assets/js/det-join-section.js`: verbatim member testimonials and portraits for
  Shachar Meir, Aminat Lawal, and Yaakov Bressler. Role labels match the published
  testimonials; employer claims are omitted because they can become stale.
- Photos copied from the local `de_open_forum_site/public/gallery/` assets.
  That repo's `app/page.tsx` identifies them as Data Engineering Open Forum 2025,
  credits Luis Medina, and names panelists Inna Giguere, Ryan Blue, and Jerry Wang.
  These are conference photos, not images of a newly announced local meetup.
- https://www.dataengineerthings.org/community-pulse/: newsletter #25,
  published November 5, 2025, with a direct Substack destination. The item keeps
  its publication date visible rather than implying it was published this week.
- The existing site's navigation supplies Slack, newsletter, meetup, mentorship,
  Medium, resource, team, and code of conduct destinations. Homepage/navigation
  links use those live services while local secondary pages remain draft stubs.
- Open Forum archive: https://www.dataengineeringopenforum.com/past/2025.

## Refreshing the noticeboard

No live integration is required. Update the data only when a source is confirmed.
For a future event, include its complete date/year, timezone, venue or online
format, named host, and direct RSVP destination. Once the date passes, label it
as past or replace it. Do not claim a mentorship cohort is open without checking
current availability. The current calendar and mentorship invitations avoid
unsupported dates, availability, attendance, and discussion counts.

## Remaining editorial gaps

A confirmed forthcoming event and a recent attributed member article would make
this selection more timely. Replace the dated reading item when an approved
newer story is selected. Add local meetup photography when suitable captioned
assets become available. No generated or stock people, invented quotes, or
unsupported audience statistics appear on the homepage.

## Verification in this session

Lint, TypeScript, diff whitespace checks, and `pnpm build --webpack` passed.
The default Turbopack build encountered an environment worker-port restriction.
Browser access to localhost was denied by a saved permission setting even after
explicit user approval, so desktop/mobile visual QA and Playwright execution
remain pending. Existing tests were updated for public destination links; the
homepage suite also checks photographs, section order, overflow, and placeholder
removal once browser access is available.
