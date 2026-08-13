# Automated project grade — Claude Code Project 2 — Make project instructions useful

GitHub grades this project without waiting for a KODE Ń VIBE reviewer.

## The pass rule

- **PASS — Nailed it:** every required check passes in one run.
- **REVISE — Keep building:** one or more required checks fail.

There is no averaging and no partial-pass score. Do not delete, skip, rename, or weaken a check. Fix the project, push again, and GitHub replaces the result with a new grade for that commit.

## Automatic learner flow

1. On the KODE Ń VIBE starter, choose **Use this template** to create your own repository.
2. Create an attempt branch, for example `git switch -c attempt/my-project`. Keep the untouched starter on `main`.
3. Build the acceptance checklist, commit, and push the attempt branch. GitHub Actions starts the grade automatically; opening or updating a pull request to `main` is graded too.
4. Open **Actions → Automated project grade**. Read the failed check names and logs if the result says **REVISE**.
5. When the job summary says **PASS — NAILED IT**, save that run link as evidence.

Every repository's `main` branch is intentionally quiet, so unfinished starter code does not send false failure alerts. Grading starts automatically when you push an attempt branch or open a pull request to `main`.

## Run the same grade locally

From the repository root, run:

```sh
npm test
```

Every check must pass without skipping, deleting, or weakening a check.

- [ ] CLAUDE.md stays under 30 lines and accurately names the purpose, source/test layout, and npm test command.
- [ ] Its boundaries forbid dependencies, network use, and hiding failures, and its definition of done asks for changed files, test evidence, and uncertainty.
- [ ] The dependency-free initials implementation and its original tests still pass.

These checks cover selected functional and structural criteria. The individual test names are the grading rubric; a failed name identifies what to revise.

## Optional confidence check — not graded

No reviewer is required for the automated pass. These quick checks are still worth doing because code tests cannot see every visual, usability, or accessibility problem:

This project has no browser interface. A browser check is not relevant here.

## Optional explain-back — not graded

Use these prompts to check your own understanding. They do not need a reviewer and they do not change the GitHub grade.

1. Which instruction in your CLAUDE.md prevents the most likely scope mistake, and how can a reviewer check it?
2. Why is CLAUDE.md useful context but not a permission or security boundary?
3. What did a fresh /context check establish, and what can it not establish?

## Evidence to keep

GitHub keeps the commit, logs, and grade automatically. Save only:

- the commit SHA;
- the successful Actions run URL; and
- one sentence about what you would improve next.

## Honest boundary

**PASS means every published requirement checked by this project passed on one revision.** It is formative evidence, not a certificate or proof of independent authorship. A learner controls their copy and can edit visible tests or workflows, and automation cannot prove complete usability, accessibility, durable understanding, or professional readiness. Keep the supplied checks unchanged if you want the result to remain meaningful.
