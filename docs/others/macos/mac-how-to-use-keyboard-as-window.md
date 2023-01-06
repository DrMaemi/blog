---
title: '[MacOS] 맥북에서 윈도우 키보드를 윈도우처럼 사용하기'
icon: article
category:
  - Others
  - MacOS
date: 2022-11-10
---

## 1. 들어가며

회사에서 맥북을 지원해주는데 사실 그 전까지 맥북을 단 한 번도 사용해보지 못했습니다. 그래서 이번 기회에 맥북을 사용해봤는데 트랙패드 경험은 나쁘지 않았으나 키보드는 며칠 안에 적응하기 힘들겠다는 생각이 들었습니다.

그래도 맥북의 키보드 입력 방식에 효율이 좋음을 느끼거나 설계 철학이 엿보였다면 어떻게든 적응하려 노력했을 텐데.. 그렇지 못했고 불편하기만 해서 그냥 윈도우처럼 쓰는 방법이 없을까 자료를 찾아다녔습니다.

## 2. Command와 Control 키 변경
Mac에서 시스템 환경 설정 → 키보드 → 우측 하단 'Modifier Keys...(보조 키...)' 선택

- Control 키를 Command로 바인딩
- Command 키를 Control로 바인딩

![](https://drive.google.com/uc?export=view&id=1xCaYTi4n0NoNOZ0om6Jpf0mIIxf30iwT)
&lt;화면 1. 키보드 보조키(Modifier Keys) 설정&gt;
{ .align-center }

## 3. CapsLock과 한/영 키 변경
우선 맥북에 연결한 윈도우 키보드의 한/영 키가 어떤 키로 설정되어 있는지 확인해야 합니다. [keyboard checker](https://keyboardchecker.com/) 웹사이트에서 키를 눌러보며 확인할 수 있습니다.

이후 윈도우 키보드의 한/영 키를 입력했을 때의 신호를 Caps Lock으로 인식하도록 매핑하는 작업이 필요합니다. 맥북에서는 이런 기능을 제공하고 있지 않아 서드 파티 앱인 Karabiner-Elements를 설치해야 합니다.

### 3.1. Karabiner-Elements 서드 파티 앱 설치 및 이용
Karabiner-Elements는 [Karabiner-Elements 공식 다운로드 페이지](https://karabiner-elements.pqrs.org/)에서 다운로드할 수 있습니다.

정상적으로 설치하여 실행하면 키보드 설정을 변경할 수 있는 창이 나타나는데, 사전에 확인해둔 한/영 입력 시 인식되는 키(예를 들면 Right Command)를 `f13`과 같은, 존재하지 않는(사용하지 않는) 키로 변경합니다.

이후 맥의 시스템 환경 설정(System Preferences) → 키보드 → 단축키(Shortcut) → 이전 입력 소스 선택에서 `이전 입력 소스 선택`의 `^스페이스` 부분을 클릭하고 `F13`로 변경해줍니다(한/영 키를 눌러주면 됩니다).

![](https://drive.google.com/uc?export=view&id=1Lpjbd2beV3P3hBZjrDhdPXfwN-ox0XG0)
&lt;화면 2. Keyboard - Shortcut - 이전 입력 소스 선택 - F18&gt;
{ .align-center }

이후, 여전히 CapsLock 키의 한/영 변환 기능을 비활성화하기 위해 시스템 환경 설정(System Preferences) → 키보드 → 입력 소스(Input Source) → ABC에서 하단의 `한/영 키로 ABC 입력 소스 전환`을 체크 해제합니다.

![](https://drive.google.com/uc?export=view&id=1Kxrg-AV_itkUNQUj2N9TX6cBPcpAkeaA)
&lt;화면 3. Keyboard - Input Source - 한/영 키로 ABC 입력 소스 전환 체크 해제.png&gt;
{ .align-center }

한 가지 당황스러웠던 게, 저는 맥북에 연결한 키보드로 한/영 키를 누르면 맥북이 그 어떤 키로도 인식하지 않았습니다. Right Command과 같이 어떤 형태로든 입력이 인식되어야 그 키를 입력 소스 전환 키로 바인딩할 수 있는데.. 결국 저는 한/영 키 오른쪽에 있는 alt 키가 Right Option으로 인식됨을 이용했습니다.

#### 3.1.1. 블루투스 키보드 연결 시 Karabiner 설정 적용 무시 문제
저는 한성키보드 GK893B 모델을 사용하며 유선으로 연결해 사용하다가 무선 블루투스로 연결하자 `right_option` 키를 `f13`으로 매핑하는 Karabiner 설정이 적용되지 않는 문제를 만났습니다. 한참 헤메다가 검색을 통해 이 문제를 해결할 수 있는 Karabiner 설정을 알게 됐습니다.

![](https://drive.google.com/uc?export=view&id=1vSXATMy6ZPnff3WU1IuH30_gCrf87OjG)
&lt;화면 4. Karabiner setting - built-in keyboard activation&gt;
{ .align-center }

Karabiner의 Device 설정에서 연결된 블루투스 키보드를 built-in 키보드로 인식하도록 관련 설정을 활성화해주면 문제가 해결됐습니다. built-in 키보드 인식 여부가 맥 시스템과 Karabiner 간 동작에 어떤 차이를 보이는지 정확하게 알진 못합니다.

### 3.1.2. 한/영키가 right_option 대신 KanjiMode인 경우
- 한/영키가 right_option 대신 KanjiMode인 경우
  - lang1 → f13(자신이 정해둔)

![](https://drive.google.com/uc?export=view&id=1283mckpacvrC7TZT36cxoOd2xarIfTzr)
&lt;화면 5. 한영키가 right_option 대신 KanjiMode인 경우&gt;
{ .align-center }

- RControl 대신 Eisu인 경우
  - lang2 → right_control

## 4. 서드 파티 앱을 사용하고 싶지 않다면
본문에서는 서드 파티 앱인 Karabiner을 활용한 키 매핑 방법을 설명했습니다. 그러나 이 방법은 MacOS 호환 문제 때문에 간혹 동작하지 않을 수 있습니다.

이 때문에 서드 파티 앱을 사용하지 않고 키 매핑을 하는 방법을 따로 알아보았고, [[MacOS] 서드 파티 앱 없이 MacOS 키 매핑하기](mac-key-mapping-not-using-third-party-apps.html)에 정리했습니다.

## A. 참조
괴물공장, "Windows처럼 Mac 키보드 사용하는 방법", *Tistory*, Feb. 21, 2021. [Online]. Available: [https://mfact12.tistory.com/entry/Windows-사용자의-Mac-외부-키보드-설정](https://mfact12.tistory.com/entry/Windows-사용자의-Mac-외부-키보드-설정) [Accessed Nov. 10, 2022].
