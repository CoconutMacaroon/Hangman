# Hangman

This is my Hangman game (and because I wanted to learn Electron)

## Contributing

Pull requests are always welcome. However, for bigger changes, consider making an issue for discussion instead. One small thing. Please maintain the code style of the project. For issues, please do NOT add the bug label unless you can explain how to reproduce the issue. Instead, add the needs-reproduction label to signify that it ins't yet confirmed.

## Downloading

### Building from source

> NOTE: This needs a shell, so it is NOT recomended if you don't have experiance with npm/node.js.

Clone the repo, with `git clone https://github.com/CoconutMacaroon/Hangman`. Go into the repo (in a shell). Run `npm start`.

## Releasing

This uses `electron-packager` to generate binaries. However, it is VERY IMPORTANT that you ADD `dict.txt` file in the folder with the .exe. Once a relese is published, it may not be modifyed. However, if there is a significant flaw (like a major security bug or a significant part of the game not working) a NOTICE may be added to the downlaod. But the download shouldn't change. Also, update the PowerShell installer with the latest release download.

## Issue tracking

If you found something that needs to be ADDED, do NOT add the bug label. Add the to-do label, instead. If you want to try to do it yourself, create a sepearte branch, and send a PR once done. In that case, you may create an issue to track progress, but use the in-progress label instead, noting that you have a branch. Also, issues may be used to track progress on a specific problem. However, I may create a milestone if it involves a lot of things.

## Code style

Contributions should follow this style:  
> These are guildines, not rules. So if there is a good reason to ignore one (or more) of these, you can. However, I ask that you please put a comment in the code explaining why so that everyone know that it is intentional. Thanks!

- Spaces around opperators (so `if(a == b)` not `if(a==b)`)
- Loops/ifs/etc. should have opening bracket on SAME line as operator. So the first line of an `if` would be `if(a == b) {` not `if(a == b)`
- Variables and functions should be camel case. So `someText` not `some_text` or `SomeText` or `Some_Text` or `SOME_TEXT`

## Known issues (by version)

### Version 1.0

#### Game doesn't display `guessingWord` (the hyphens) when using the .zip download

This is because the zip doesn't contain the `dict.txt` file needed for picking words. The workaround is to download the `dict.txt` file form the repo and add it to the folder with `Hangman.exe`. Downloading version 1.1 fixes this issue.

### Other
#### PowerShell installer doesn't work due to execution polocy
> This installer has been since removed  

No workaround. Download the portable version instead.
