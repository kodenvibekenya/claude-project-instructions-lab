# Claude Project Instructions Lab

Pair this exercise with the [Claude Code notes](https://kodenvibe.tech/notes/claude-code/).

## Start your own copy

1. Click **Use this template**, then **Create a new repository**.
2. Choose whether the new repository is public or private.
3. Clone your own copy before editing.

**Time-box:** 30 minutes<br>
**Lesson milestone:** Turn a vague `CLAUDE.md` into concise, checkable, secret-free project guidance and confirm that Claude loaded it.

The code already passes. Only the project instructions need attention.

## Safety boundary

- Edit only `CLAUDE.md` during the exercise.
- Do not install packages, use the network, or add personal/global memory.
- Do not place credentials, machine paths, names, or private data in memory files.
- Treat `CLAUDE.md` as context, not as a permission control.

## Exercise

From this repository's root, read `package.json`, `src/initials.js`, and `test/initials.test.js` yourself. Then start Claude Code and prompt:

```text
Inspect this small project in plan mode. Review CLAUDE.md for vague or missing
instructions. Propose a replacement under 30 lines that documents the layout,
exact test command, code conventions, safety limits, and definition of done.
Do not edit code, tests, or package metadata.
```

Review its proposal, then approve an edit to `CLAUDE.md` only. Start a fresh Claude Code session and run:

```text
/context
```

Ask Claude to state the project's test command and excluded actions. Confirm its answer against the file. Finally run:

```bash
npm test
```

There is no install step.

## Acceptance checklist

- [ ] `CLAUDE.md` accurately states the project purpose and layout.
- [ ] It contains the exact `npm test` command.
- [ ] Its rules are concrete and checkable, not “write good code.”
- [ ] It forbids new dependencies/network use and fixture weakening for this exercise.
- [ ] It asks for changed files, test evidence, and uncertainty at completion.
- [ ] It is under 30 lines and contains no secret or private machine detail.
- [ ] `/context` shows the project memory loaded in a fresh session.
- [ ] Tests still pass and no file except `CLAUDE.md` changed.

<!-- mastery-kit:start -->
## Get your automatic project grade

1. [Create your own copy](https://github.com/kodenvibekenya/claude-project-instructions-lab/generate) from this template.
2. Read [MASTERY.md](MASTERY.md), then create an attempt branch:

   ```sh
   git switch -c attempt/my-project
   ```

3. Build the project and run the same check GitHub uses:

   ```sh
   npm test
   ```

4. Commit and push the attempt branch:

   ```sh
   git add .
   git commit -m "Complete project attempt"
   git push -u origin attempt/my-project
   ```

GitHub Actions grades every pushed attempt automatically. **PASS — NAILED IT** means every required check passed. **REVISE — KEEP BUILDING** means the run shows what to fix before you push again. You do not need the KODE Ń VIBE owner to review or start anything; the template's `main` branch stays quiet on purpose.

The [free grading guide](https://kodenvibe.tech/notes/mastery/) explains the result and its limits.
<!-- mastery-kit:end -->
