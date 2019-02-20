# What is this?

This is a simple node script that breaks long lists, into smaller lists with a defined items per row argument.

For example:

```
"aardvark",
"abacus",
"abbey",
"abdomen",
"ability",
"abolishment",
"abroad",
"abuse",
"accelerant",
"accelerator",
"access",
"accident",
"accommodation",
"accompanist",
"accordion",
"account",
"accountant",
"achiever",
"acid",
"acknowledgment",
"acoustic",
"acoustics"
```

Notice this is a list of strings, separated by commas. Say for instance the list is too long for your taste, and you want to break it into rows of 4.

Then you can do: node tower-breaker.js -i path-to-input-file -o path-to-output-file -n 4

It will turn it into:

```
"aardvark", "abacus", "abbey", "abdomen",
"ability", "abolishment", "abroad", "abuse",
"accelerant", "accelerator", "access", "accident",
"accommodation", "accompanist", "accordion", "account",
"accountant", "achiever", "acid", "acknowledgment",
"acoustic", "acoustics"
```

# Arguments

| Argument  | Description |
| ------------- | ------------- |
| -i  | Input file path. This is a file that only contains the list  |
| -o  | Output file path. If this is ommitted it will only print to the console  |
| -n  | The number of items per row  |
| -sep  | The separator string between items. Defaults to " " (Blank space)  |

# Flags

| Flag  | Description |
| ------------- | ------------- |
| --windows-linebreaks  | By default the result will be separated by \n . Using this flag changes it to \r\n |