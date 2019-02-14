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

Then you can do: node tower-breaker.js path-to-input-file 4 path-to-output-file

It will turn it into:

```
"aardvark", "abacus", "abbey", "abdomen",
"ability", "abolishment", "abroad", "abuse",
"accelerant", "accelerator", "access", "accident",
"accommodation", "accompanist", "accordion", "account",
"accountant", "achiever", "acid", "acknowledgment",
"acoustic", "acoustics"
```

If the output file path argument is ommitted it will only print to the console.

# Flags

Flags must go after the main arguments.

--no-spaces: Removes spacing between items, for example "a,b" instead of "a, b".

--windows-linebreaks: By default the result will be separated by \n . Using this flag changes it to \r\n.