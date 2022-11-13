---
title: '[MacOS] 맥북에서 마우스 가속도 끄기'
icon: article
category:
  - Others
  - MacOS
date: 2022-11-11
---

맥북에서 트랙패드를 사용할 때 유용하게 쓰이는 마우스 가속도, 그러나 정작 진짜 마우스를 사용하면 가속도 때문에 커서의 정확도가 떨어지는 느낌입니다.

본문에서는 자료 검색을 통해 제가 알아 본, 맥OS에서 마우스 가속도를 끄는 방법에 대해 다룹니다.

1. Mac Terminal 또는 System Preferences 사용
2. SteelSeries의 Tool: ExactMous 사용

저는 2번의 방법을 통해 해결했습니다. 만약 1번 방법이 된다면 별도의 프로그램을 설치해야 하는 2번보다 더 좋은 방법이겠네요.

## 1. Mac Terminal 또는 System Preferences 사용
1. Mac의 Terminal 실행
2. 다음 명령어 입력

```sh:no-line-numbers
defaults write .GlobalPreferences com.apple.mouse.scaling -1
```

::: tip com.apple.mouse.scaling 설정값
값을 0과 3 사이로 설정하거나 기입하지 않으면 마우스 가속도가 다시 켜집니다.
:::

## 2. SteelSeries의 Tool: ExactMous 사용
[SteelSeries 링크](https://steelseries.com/engine)

위 링크에 접속한 후 Miscellaneous 항목의 ExactMous 도구를 다운받아 설치해줍니다.

![](https://drive.google.com/uc?export=view&id=1jWwpIPPujXOqS5KItMsF1mx5C9WCY-97)
&lt;화면 1. SteelSeries Miscellaneous - ExactMous&gt;
{ .align-center }

## A. 참조
Jennifer Allen, "How to Turn off Mouse Acceleration on Mac," *lifewire.com*, Sep. 18, 2022. [Online]. Available: [https://www.lifewire.com/turn-off-mouse-acceleration-on-mac-6503047](https://www.lifewire.com/turn-off-mouse-acceleration-on-mac-6503047) [Accessed Nov. 11, 2022].

Shane's planet, "MacOS) 마우스 가속 기능 끄기," *Tistory*, Dec. 6, 2022. [Online]. Available: [https://shanepark.tistory.com/297](https://shanepark.tistory.com/297) [Accessed Nov. 11, 2022].
