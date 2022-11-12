---
title: '[MacOS] 서드 파티 앱 없이 MacOS 키 매핑하기'
icon: article
category: Other
date: 2022-11-13
---

## 1. 들어가며, 서드 파티 앱을 이용한 키보드 매핑의 문제

MacOS에서 키보드를 윈도우처럼 사용하기 위해 본 블로그의 [[macOS] 맥북에서 윈도우 키보드를 윈도우처럼 사용하기](https://drmaemi.github.io/blog/other/mac-how-to-use-keyboard-as-window.html) 포스트에서 관련 내용을 다뤘습니다.

그러나 위 포스트에서는 서드 파티 앱인 Karabiner를 사용하는 방식을 다뤘고, 이는 MacOS를 업데이트할 때 종종 호환성 문제로 동작하지 않을 때가 있습니다.

이런 문제를 해결하기 위해선 서드 파티 앱 없이 키보드 입력을 매핑하는 것입니다. 본문에서는 이를 어떻게 할 수 있는지에 대해 설명합니다.

## 2. com.example.KeyRemapping.plist 파일 작성
`~/Library/LaunchAgents` 경로 하위에 `com.example.KeyRemapping.plist` 파일을 생성해줍니다. 그리고 파일 내용을 다음과 같이 작성합니다.

::: details com.example.KeyRemapping.plist 작성 템플릿
```plist {14-15}
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.example.KeyRemapping</string>
    <key>ProgramArguments</key>
    <array>
        <string>/usr/bin/hidutil</string>
        <string>property</string>
        <string>--set</string>
        <string>{"UserKeyMapping":[
          {
            "HIDKeyboardModifierMappingSrc": {소스 키 코드},
            "HIDKeyboardModifierMappingDst": {목적 키 코드}
          },
        ]}</string>
    </array>
    <key>RunAtLoad</key>
    <true/>
</dict>
</plist>
```
:::

위 코드 14번 라인의 `{소스 키 코드}` 자리에 자신이 바꾸고자 하는 키 코드, 즉 MacOS가 지원하는 한/영 키 코드를 기입하면 됩니다. 15번 라인의 `{목적 키 코드}` 자리에는 바뀐 뒤 키 코드, 즉 F13의 키 코드를 기입하면 됩니다.

해당 키 코드는 [developer.apple.com - UIKit / Keyboards and input / UIKeyboardHIUsage](https://developer.apple.com/documentation/uikit/uikeyboardhidusage)에서 확인할 수 있습니다.

![](https://drive.google.com/uc?export=view&id=1B2swo-dY9WsKoSrRuowQ384KYZ0hSzw3){ .border-rectangle }
&lt;화면 1. UIKeyboardHIDUsage - Right Command&gt;
{ .align-center}

![](https://drive.google.com/uc?export=view&id=1FMrOsfRfiC9fPxCnrSKZKqaty449H6pH){ .border-rectangle}
&lt;화면 2. UIKeyboardHIDUsage - F13&gt;
{ .align-center }

한 가지 의문인 것은.. 정확히 Right Command에 해당하는 키 코드를 찾을 순 없었고, 대신 실험해 본 결과 RightGUI에 해당하는 231번이 Right Command로 동작했습니다.

참고로 코드에 있는 값은 10진수이고, KeyRemapping.plist에 기입할 때는 16진수로 변환해야 합니다.

::: details com.example.KeyRemapping.plist 작성
```plist {14-15}
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.example.KeyRemapping</string>
    <key>ProgramArguments</key>
    <array>
        <string>/usr/bin/hidutil</string>
        <string>property</string>
        <string>--set</string>
        <string>{"UserKeyMapping":[
          {
            "HIDKeyboardModifierMappingSrc": 0x7000000E7,
            "HIDKeyboardModifierMappingDst": 0x700000068
          },
        ]}</string>
    </array>
    <key>RunAtLoad</key>
    <true/>
</dict>
</plist>
```

만약 여러 개의 키를 매핑해야 한다면 12번 라인의 `UserKeyMapping` 키에 바인딩하는 배열에 지금 작성한 것처럼 객체들을 여러 개 추가하면 될 것 같습니다.
:::

## 3. 권한 부여 및 부트스트랩 스크립트 등록
터미널에서 다음 명령어를 실행합니다.

```sh:no-line-numbers
sudo chown root ~/Library/LaunchAgents/com.example.KeyRemapping.plist
sudo launchctl bootstrap ~/Library/LaunchAgents/com.example.KeyRemapping.plist
```

이후 재부팅하면, 맥북이 부팅할 때마다 해당 스크립트를 실행하며 키 매핑이 됩니다.

## 4. 입력 소스 전환(한/영 키 전환) 단축키 설정
![](https://drive.google.com/uc?export=view&id=1pNFbfQelLA1ZcisoSN7PcwxsZhwUmlG-)
&lt;화면 3. 시스템 환경 설정 - 키보드 - 단축키 - 입력 소스 전환&gt;
{ .align-center }

- 입력 소스 전환은 언어 변환을 의미합니다.
- 이전 입력 소스(previous input source)와 다음 소스(next source)의 원리 상 차이는 잘 모르겠습니다.
- 체감 상 다음 소스 선택 방법이 한/영 전환 반응 속도가 더 빨랐습니다.

## A. 참조
Junroot, "서드 파티 앱 없이 macOS 키 매핑하기," *Github.io*, Jun. 7, 2021. [Online]. Available: [https://junroot.github.io/hobby/서드-파티-앱-없이-macOS-키-매핑하기/](https://junroot.github.io/hobby/서드-파티-앱-없이-macOS-키-매핑하기/) [Accessed Nov. 12, 2022].

<script setup lang="ts">
import DetailsOpen from "@DetailsOpen";
</script>

<DetailsOpen/>
