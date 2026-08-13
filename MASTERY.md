# Mastery check — Claude Code Project 2 — Make project instructions useful

“Nailed it” is a three-gate decision. You must pass **all three** gates; a green automated run alone is not mastery.

## Gate 1 — Automated project checks

From the repository root, run:

```sh
npm test
```

Every check must pass without skipping, deleting, or weakening a check.

- [ ] CLAUDE.md stays under 30 lines and accurately names the purpose, source/test layout, and npm test command.
- [ ] Its boundaries forbid dependencies, network use, and hiding failures, and its definition of done asks for changed files, test evidence, and uncertainty.
- [ ] The dependency-free initials implementation and its original tests still pass.

These checks cover selected functional and structural criteria. They do **not** claim to judge visual quality, usability, or accessibility conformance.

## Gate 2 — Applicable manual browser and accessibility checks

- [ ] **Not applicable, with reason recorded:** This project has no browser interface, so the browser/accessibility gate is not applicable; record that reason rather than inventing a browser result.

## Gate 3 — Explain back

Answer all three prompts in your own words. Each answer passes when it is accurate, points to concrete evidence in this project, and explains the reason or trade-off—not merely what a line says. A peer, mentor, or reviewer should ask one follow-up where an answer is unclear and record pass/revise for every prompt.

1. Which instruction in your CLAUDE.md prevents the most likely scope mistake, and how can a reviewer check it?
2. Why is CLAUDE.md useful context but not a permission or security boundary?
3. What did a fresh /context check establish, and what can it not establish?

## Evidence record

Keep this short record in an issue, pull request, or learning log:

- Commit checked:
- Automated command, date/time, and result:
- Manual check environment and result for each item (or the documented not-applicable reason):
- Explain-back reviewer and pass/revise result for prompts 1–3:
- Help, tools, examples, or references used:
- Remaining limitation or next improvement:

## Honest boundary

This is formative practice, not a certification or proof of independent authorship. The repository owner can edit both code and visible checks, so CI records evidence about one revision rather than guaranteeing mastery. Manual observations and explain-back review remain necessary, and no single project demonstrates complete accessibility or professional readiness.
