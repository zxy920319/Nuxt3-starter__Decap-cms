# Europe Forum final-publicity synchronization — 5 October 2026

Owner-requested corrections, 11 October 2026: remove the second occurrence of
中欧生命科学联盟 from the shared association footer and add
奥地利code4u科技教育协会 linked to `https://code4u.at/`. The existing
法中孵化器联盟协会 remains once. Separate the historical forum announcement's
URL from the adjoining Chinese instructions, using an explicit Markdown link to
`https://vcwi.nl/europe-forum-2026-en/`; preserve the announcement's original body.
Both forum languages add Marktspan to Partners and use the approved VCWI board
`partners-20261008-marktspan.png` (1347 × 1167, SHA-256
`e39b51544647e4d972511eac7d9de88cc02c277b0f86c23501cb273ebb7c58c4`).
VCWI already lists this partner and uses this board, so it needs no duplicate
partner edit. Source changes and live publication must be verified separately.

Association-list addition, 8 October 2026: at the owner's request, the shared
UCPAE website footer includes 中东欧中国科技交流协会 and
全法中国青年科创协会. Their supplied Chinese names appear in both language
views. This update is limited to the UCPAE website association list.

Additional owner-supplied names on 8 October: 中欧城市更新与智慧城市研究会
and 法中孵化器联盟协会 are included in the same shared footer list.

Public-site fixes, 7 October 2026: both languages distinguish a direct
`2026 Forum` entry from the forum archive in navigation. The archive has a
heading and explanation. The forum hero uses less upper spacing and places
registration/programme actions before its statistics so they appear earlier
on mobile. Language queries, the existing programme, ticket destinations,
media rules and the confirmed full agricultural visit remain in their current
owners. Verify the published desktop and mobile screens after release.

The mobile navigation check also found the historical archive's fixed 500px
cards expanding the page beyond the viewport. Cards now keep that desktop
maximum while shrinking to the available mobile width, and the new archive
heading has explicit spacing. Preserve all existing article content and covers.
At phone widths, covers sit above titles so text keeps a readable column width;
cover images use contain scaling and titles remain fully visible.
The archive root overrides the legacy layout's extra content padding. Mobile
card rules match the base card selectors so the full-width image/text layout
is applied. The shared phone header reserves space for its menu button.

Owner correction, 7 October 2026: the EuCLP founder's Chinese name is 苏亦博
(Yibo Su). The agricultural visit is fully booked at 40 participants; both
languages show this in the schedule, visit heading and availability note.

## Photography and publication notice — 7 October 2026

Both forum homepage languages show the media notice beside registration, and the shared footer links to the VCWI bilingual rules at https://vcwi.nl/europe-forum-2026-media-policy/. VCWI coordinates this forum's official communications. Recording for public distribution and publishing event material, including on personal social-media accounts, require prior written permission; recording permission is separate from publication permission. Private keepsake photographs, third-party rights and statutory exceptions are covered by the complete rules. Registration still uses the existing VCWI forms; this display change does not record attendee acceptance or modify payment or privacy consent. Publication and live read-back are separate from source validation.

Chinese-name correction, 6 October 2026: ACPB is displayed as 旅比华人专业人士协会 in the shared association footer, for both language views. The VCWI main site and current Chinese/English forum pages were checked: they do not display the old ACPB name, so no organization was added to the forum partner board. Historical article text is preserved as source material.

Source: https://mp.weixin.qq.com/s/2O-Fzwxtp6EylJ9qV2tJ5Q and the owner's confirmed name 欧洲华人专业协会联盟（UCPAE）.

Both UCPAE homepage languages use `content/i18n/locales.md` for the final two-day programme, 36 distinct guest profiles, five tracks, three entrepreneurship projects, Wageningen visit and partner board. These match the VCWI release in https://github.com/AihuiFu/vcwi-web/pull/25 and its official-name correction in https://github.com/AihuiFu/vcwi-web/pull/26. Photos and the board are hosted under `public/images/forum-2026/final-publicity/`.

The opening welcome address spells out 欧洲华人专业协会联盟（UCPAE） with President 宋志伟. The English name is United Chinese Professional Associations in Europe. Existing historical FCPAE articles remain historical records.

The public ticket descriptions are €500 standard, €200 UCPAE member, €50 VCWI/submitted-applicant/confirmed-co-organizer concession without dinner, and €100 concession with dinner. Registration stays in the VCWI system. A submitted membership application can support a manually verified concession claim; it does not grant formal membership. The agricultural visit has a capacity of forty and is fully booked, as confirmed by the owner on 7 October.

Validation records must distinguish lightweight Vue/SCSS/data checks, complete static generation, publication and live bilingual/mobile acceptance. Local full generation is subject to the shared heavy-task resource slot; a busy slot must not be bypassed. The existing Netlify publication route is the release target, https://ucpae.com/.

The first content release was read back live in both languages on 5 October, including all 36 distinct guests (37 cards), three projects and the four ticket prices. Mobile acceptance found the existing fixed-width logo forcing a 390px viewport to 548px. The follow-up makes the logo and header grid shrinkable and opens the language menu by click. Verify the actual mobile width after publication.

The owner's revised board received on 5 October adds a separate Partners category with 荷兰香港工商总会（Netherlands Hong Kong Business Association, NHKBA） and 荷中友好协会（Vereniging Nederland China）. The eight sponsors and GoGoDutch media partner retain their categories. Both languages point to `partners-20261005-v2.png` (1347 × 1167, SHA-256 `98e8a94b5ec9f8ec6120573adb67dfc9d3a52f54d966b12aa7e3448e289d9aa1`), matching the revised VCWI board.

Owner copy correction on 5 October: the promotional callout is reduced to the invitation to apply and request a €50/€100 concession ticket. Remove internal verification mechanics and repeated membership/seat caveats from the landing-page copy. Eligibility checks and approvals continue in the VCWI registration and member workflows.

## Scoped navigation follow-up — 6 October 2026

The owner selected only three improvements: preserve the current language when returning via the header logo and refreshing; update the HTML language with the selected language; and make the mobile menu keyboard-operable. The logo retains the existing query, the page head follows the locale store, and the menu uses a native button with `aria-expanded`, `aria-controls`, visible keyboard focus and Escape-to-close with focus return. Route changes continue to close the menu.

Membership-required fields, headquarters claims, partner/ticket terminology, invalid-locale handling and the historical article link are explicitly outside this change. Existing forum copy, ticket eligibility and business workflows remain unchanged. Publication and live regression results will be recorded after the existing Netlify release completes.

Registration closure, 8 October 2026: both languages display Registration Closed / 报名已截止 with the owner-confirmed deadline of 00:00 Netherlands time (CEST). Remove registration buttons, ticket calls to action and concession recruitment from the current forum UI. VCWI owns the closed form URLs and server submission guard; ordinary association membership remains separate.
