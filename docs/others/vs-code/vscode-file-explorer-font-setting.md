---
title: '[VS Code] File Explorer 폰트 사이즈 변경'
icon: article
category:
  - Others
  - VS Code
date: 2022-12-06
---

편집 창에서의 폰트 패밀리, 사이즈를 변경하는 방법은 [[VS Code] Font Family, Size 설정](vscode-font-setting) 포스트에서 다뤘었습니다.

문득 VS Code File Explorer 폰트 사이즈를 변경하는 방법이 궁금했는데, 위 포스트와 같이 VS Code 내 특정 영역의 폰트 크기를 조절하는 것은 불가능했고 Zoom Level을 조절하는 방법을 통해 가능했습니다.

Settings을 열어 "window.zoomLevel"을 설정해줍니다.

![](https://drive.google.com/uc?export=view&id=1N15_vl5hDAXLTmiwUeGzpqGEbjfWUzMu)
&lt;화면 1. VS Code - zoom level setting&gt;
{ .align-center }

또는 화면 2, 3을 거쳐 VS Code의 설정 파일 settings.json에서 직접 설정 코드를 기입해도 됩니다. 

![](https://drive.google.com/uc?export=view&id=1sLRxLv4NA1f1qekx3HmGeeCkh_pTe4gl)
&lt;화면 2. VS Code - Command Palette - user settings&gt;
{ .align-center }

![](https://drive.google.com/uc?export=view&id=10wTtmajtRhEVHTlcpsGMZVSPvGCVftV9)
&lt;화면 3. VS Code - zoom level with setting json&gt;
{ .align-center }

zoom level은 0이 default인데, 개인적으로 `Terminal Integration Font Size`, `Editor Font Size` 모두 15로 세팅한 뒤 zoom level을 0.2로 설정했을 때 가장 보기 편했습니다.

## A. 참조
"Visual Studio Code change font size for file explorer tray?," *stackoverflow.com*, Mar. 16, 2016. [Online]. Available: [https://stackoverflow.com/questions/36040857/visual-studio-code-change-font-size-for-file-explorer-tray](https://stackoverflow.com/questions/36040857/visual-studio-code-change-font-size-for-file-explorer-tray) [Accessed Nov. 25, 2022].

"How to change environment's font size?," *stackoverflow.com*, Nov. 13, 2015. [Online]. Available: [https://stackoverflow.com/questions/33701933/how-to-change-environments-font-size](https://stackoverflow.com/questions/33701933/how-to-change-environments-font-size) [Accessed May 6, 2023].
