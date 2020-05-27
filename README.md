# Hangman

This is my Hangman game (and because I wanted to learn Electron)

## Contributing

Pull requests are always welcome. However, for bigger changes, consider making an issue for discussion instead. One small thing. Please maintain the code style of the project. For issues, please do NOT add the bug label unless you can explain how to reproduce the issue. Instead, add the needs-reproduction label to signify that it ins't yet confirmed.

## Downloading

### Pre-built binaries (portable)

Go to the releases tab and download the latest releast for your platform.

### PowerShell installer (recommended)

> Note to devs: this script should download the LATEST version of the game. For those of you that really want an old version's installer, it will be in that release. But the version in the source should download (and install) the latest version.

Download the PowerShell installer script from the releases page. Run it. It will go install the app. You will need to reboot your computer for it to show up (although for those advanced users, restarting `explorer` should also work.

> 🔒 Note about the script: Not everyone is OK with downloading and running a script from online. A few things to note here: (1) you can open it in a text editor (like Notepad) to see exactly what it does before running it. (2) You can always compare it against the version in the repo (although you might notice slight changes, as the repo always has the latest version, especially if you use an older release. (3) If you still don't want to, you can download the portable version, and install it manually by copying and creating shortcuts completely without the PowerShell script. That said, it is just to assist in installation.)

### Running from source

> NOTE: This is always the latest changes, so it is NOT recomended if you don't have experiance with npm/node.js. This is for running it via `npm`.

Clone the repo. Go into the repo (in a shell). Run `npm install` and run `npm start`. This will run the app.

### Building from source

> NOTE: This is always the latest changes, so it is NOT recomended if you don't have experiance with npm/node.js. This is also how to BUILD this into a executable, not run it from source.

Clone the repo. Go into the repo (in a shell). Run `npm install`. This is IMPORTANT. Then run `electron-packager . --extra-resource="resources/dict.txt"`. This will take some time, and then there will be an folder called something like `Hangman-win32-x64`, which is where the .exe is. Specifically, `Hangman.exe` is the game.

### Uninstalling

Portable version - delete the folder with the app
PowerShell installer version - Delete the folder `c:\users\<<USERNAME>>\appdata\local\hangman-game`. Now go to `C:\Users\<<USERNAME>>\AppData\Roaming\Microsoft\Windows\Start Menu\Programs` and delete the `Hangman` file.
Building from source - Several ways (assuming you used `git clone`) delete the cloned folder. Done... but if you acctually _ran_ the installer (the PowerShell one), not just build from source, see the solution above as well.

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
