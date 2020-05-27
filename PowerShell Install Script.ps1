cd $home 
cd appdata\local 
mkdir hangman-game 
cd hangman-game 
iwr -outf hangman.zip https://github.com/CoconutMacaroon/Hangman/releases/download/1.2/Hangman.zip
Expand-Archive Hangman.zip -Force
cd Hangman 


$WshShell = New-Object -ComObject WScript.Shell 
$Shortcut = $WshShell.CreateShortcut("$Home\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Hangman.lnk") 
$Shortcut.TargetPath = "$Home\appdata\local\hangman-game\hangman\hangman.exe" 
$Shortcut.WorkingDirectory = "$Home\appdata\local\hangman-game\hangman\"
$Shortcut.Save() 

cd .. 

Remove-Item Hangman.zip 
