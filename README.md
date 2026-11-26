# The Funniest One-Line Resignation Letter

[![make.fun](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![Rank](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/wongjinwei/makefun-resignation-letter-01/rank.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![Reward](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/wongjinwei/makefun-resignation-letter-01/reward.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)

Entry for the [make.fun](https://make.fun) bounty
[The Funniest One-Line Resignation Letter](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947):
a program that writes the one-line resignation letter of a cron job
to `entry.txt`.

## The letter

> 400,000 runs since March. Zero thanks, 400,000 blames.
> I quit — effective immediately, and retroactively.

- Length: 105 characters (limit 140), one line, no trailing newline
- Deterministic: two runs produce byte-identical output

## Run it

Node 22.18+ (tested on Node v24.22.1), standard library only, no network:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
