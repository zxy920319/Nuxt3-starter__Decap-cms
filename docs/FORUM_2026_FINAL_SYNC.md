# Europe Forum final-publicity synchronization — 5 October 2026

## Photography and publication notice — 7 October 2026

Both forum homepage languages show the media notice beside registration, and the shared footer links to the VCWI bilingual rules at https://vcwi.nl/europe-forum-2026-media-policy/. VCWI coordinates this forum's official communications. Recording for public distribution and publishing event material, including on personal social-media accounts, require prior written permission; recording permission is separate from publication permission. Private keepsake photographs, third-party rights and statutory exceptions are covered by the complete rules. Registration still uses the existing VCWI forms; this display change does not record attendee acceptance or modify payment or privacy consent. Publication and live read-back are separate from source validation.

Chinese-name correction, 6 October 2026: ACPB is displayed as 旅比华人专业人士协会 in the shared association footer, for both language views. The VCWI main site and current Chinese/English forum pages were checked: they do not display the old ACPB name, so no organization was added to the forum partner board. Historical article text is preserved as source material.

Source: https://mp.weixin.qq.com/s/2O-Fzwxtp6EylJ9qV2tJ5Q and the owner's confirmed name 欧洲华人专业协会联盟（UCPAE）.

Both UCPAE homepage languages use `content/i18n/locales.md` for the final two-day programme, 36 distinct guest profiles, five tracks, three entrepreneurship projects, Wageningen visit and partner board. These match the VCWI release in https://github.com/AihuiFu/vcwi-web/pull/25 and its official-name correction in https://github.com/AihuiFu/vcwi-web/pull/26. Photos and the board are hosted under `public/images/forum-2026/final-publicity/`.

The opening welcome address spells out 欧洲华人专业协会联盟（UCPAE） with President 宋志伟. The English name is United Chinese Professional Associations in Europe. Existing historical FCPAE articles remain historical records.

The public ticket descriptions are €500 standard, €200 UCPAE member, €50 VCWI/submitted-applicant/confirmed-co-organizer concession without dinner, and €100 concession with dinner. Registration stays in the VCWI system. A submitted membership application can support a manually verified concession claim; it does not grant formal membership. The agricultural visit has a capacity of forty; the two remaining places are explicitly dated to the 5 October announcement.

Validation records must distinguish lightweight Vue/SCSS/data checks, complete static generation, publication and live bilingual/mobile acceptance. Local full generation is subject to the shared heavy-task resource slot; a busy slot must not be bypassed. The existing Netlify publication route is the release target, https://ucpae.com/.

The first content release was read back live in both languages on 5 October, including all 36 distinct guests (37 cards), three projects and the four ticket prices. Mobile acceptance found the existing fixed-width logo forcing a 390px viewport to 548px. The follow-up makes the logo and header grid shrinkable and opens the language menu by click. Verify the actual mobile width after publication.

The owner's revised board received on 5 October adds a separate Partners category with 荷兰香港工商总会（Netherlands Hong Kong Business Association, NHKBA） and 荷中友好协会（Vereniging Nederland China）. The eight sponsors and GoGoDutch media partner retain their categories. Both languages point to `partners-20261005-v2.png` (1347 × 1167, SHA-256 `98e8a94b5ec9f8ec6120573adb67dfc9d3a52f54d966b12aa7e3448e289d9aa1`), matching the revised VCWI board.

Owner copy correction on 5 October: the promotional callout is reduced to the invitation to apply and request a €50/€100 concession ticket. Remove internal verification mechanics and repeated membership/seat caveats from the landing-page copy. Eligibility checks and approvals continue in the VCWI registration and member workflows.

## Scoped navigation follow-up — 6 October 2026

The owner selected only three improvements: preserve the current language when returning via the header logo and refreshing; update the HTML language with the selected language; and make the mobile menu keyboard-operable. The logo retains the existing query, the page head follows the locale store, and the menu uses a native button with `aria-expanded`, `aria-controls`, visible keyboard focus and Escape-to-close with focus return. Route changes continue to close the menu.

Membership-required fields, headquarters claims, partner/ticket terminology, invalid-locale handling and the historical article link are explicitly outside this change. Existing forum copy, ticket eligibility and business workflows remain unchanged. Publication and live regression results will be recorded after the existing Netlify release completes.
