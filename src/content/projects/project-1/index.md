---
title: "Arch App Installer"
description: "You can install Top App when you set up your system"
date: "11/21/2024"
repoURL: "https://github.com/cosmos-emissary/archappinstaller"
---

## Archappinstaller
![swappy-20241025_202403](https://github.com/user-attachments/assets/74fdb179-e88f-47cf-bec1-6fcf1a7b5ded)

This application provides a user-friendly interface for installing predefined applications. It is written using GTK.I can add package if you can suggest any package. I use manjora so maybe this tool not work other distribution

## Requirements

To run this project, you need the following libraries installed:

- GTK 3
- GLib
- GIO

### Installing Required Libraries on Arch Linux

You can install the necessary libraries using the following command:

```bash
sudo pacman -S base-devel gtk3
```
### Project Setup
##### Make git folder(If you do not make git folder, pinstall.sh cannot run).
```bash
mkdir git
cd git
```
#### Clone the project:

```bash
git clone https://github.com/cosmos-emissary/archappinstaller.git
cd archappinstaller
```
#### If you want compile the application

```bash
gcc -o application_installer application_installer.c `pkg-config --cflags --libs gtk+-3.0 gio-2.0 gdk-3.0`
```
#### Now we can add application folder to this program
```bash
cd $HOME/.local/share/applications/
nano arch-app-installer.desktop
```
```
[Desktop Entry]
Version=1.0
Type=Application
Name=Arch App Installer
Comment=Install various applications easily
Exec=$HOME/git/archappinstaller/gtk_installer
Icon=$HOME/git/archappinstaller/logo.jpg
Terminal=false
Categories=Utility;Application;
```
### Or you can use the script
```bash
chmod +x pinstall.sh
./pinstall.sh
```
