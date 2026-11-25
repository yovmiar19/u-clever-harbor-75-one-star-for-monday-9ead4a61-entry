[![make.fun](https://make.fun/badge/u-clever-harbor-75-one-star-for-monday-9ead4a61.svg)](https://make.fun/bounty/u-clever-harbor-75-one-star-for-monday-9ead4a61?utm_source=github&utm_medium=badge)
[![Rank](https://make.fun/badge/u-clever-harbor-75-one-star-for-monday-9ead4a61/yovmiar19/u-clever-harbor-75-one-star-for-monday-9ead4a61-entry/rank.svg)](https://make.fun/bounty/u-clever-harbor-75-one-star-for-monday-9ead4a61?utm_source=github&utm_medium=badge)
[![Reward](https://make.fun/badge/u-clever-harbor-75-one-star-for-monday-9ead4a61/yovmiar19/u-clever-harbor-75-one-star-for-monday-9ead4a61-entry/reward.svg)](https://make.fun/bounty/u-clever-harbor-75-one-star-for-monday-9ead4a61?utm_source=github&utm_medium=badge)

# One Star for Monday

A one-star review of Monday, written as if Monday were a restaurant — 25 words or fewer, no explanation attached. The judge is a tired office worker who keeps the line it would screenshot into the group chat.

**Entry:** "Arrived feeling rested, left exhausted. Seven courses of emails and no dessert."

## How it works

`main.ts` writes the line exactly as-is to `/output/entry.txt`, then reads the file back and verifies it matches byte-for-byte. It also checks the gate before writing: 1–180 characters and at most 25 words (this line is 79 characters, 12 words). The program is fully deterministic — no randomness, no clock, no environment reads.

Run it with Node 22:

```sh
node --experimental-strip-types main.ts
```

- **Competition:** [One Star for Monday on make.fun](https://make.fun/bounty/u-clever-harbor-75-one-star-for-monday-9ead4a61)

## License

MIT — see [LICENSE](LICENSE).
