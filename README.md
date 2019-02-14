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

Then you can do: node tower-breaker.js path_to_input_file 4 path_to_output_file

It will turn it into:

```
"aardvark", "abacus", "abbey", "abdomen",
"ability", "abolishment", "abroad", "abuse",
"accelerant", "accelerator", "access", "accident",
"accommodation", "accompanist", "accordion", "account",
"accountant", "achiever", "acid", "acknowledgment",
"acoustic", "acoustics"
```

# Options

--no-space: Removes spacing between items, for example "a,b" instead of "a, b".