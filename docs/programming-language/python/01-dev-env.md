---
title: '[Python] 파이썬 개발 환경 설정'
icon: article
category:
  - Python
  - Anaconda
  - Jupyter-Notebook
  - VS Code
date: 2022-02-08
order: 1
---

문법이 간단해서 비전공자도 쉽고 재미있게 배울 수 있는 파이썬, 본문에서는 파이썬 개발을 어떻게 시작할 수 있는지에 대해 다룹니다.

필자는 AI 엔진을 개발하거나 백엔드 서버에서 일부 비즈니스 로직을 다루는데 파이썬을 사용하는데, 아나콘다와 주피터 노트북, VS Code를 이용해서 개발하는게 편했습니다. 본문의 내용은 이와 관련된 내용으로 구성되어 있습니다.

## 1. 아나콘다
### 1.1. 설치
[https://www.anaconda.com/products/individual](https://www.anaconda.com/products/individual) - 공식 배포 버전<br>
[https://repo.anaconda.com/archive/](https://repo.anaconda.com/archive/) - 버전 별 다운, 쉘 명령어 `wget` 혹은 `curl`로 다운 가능


- i386 은 Intel 의 80386 CPU 계열의 CPU
- i586 은 Intel 의 80586 CPU 계열의 Pentium CPU
- i686 은 Intel 의 80686 CPU 계열의 Pentium Pro 이상의 CPU

- x86 - 위에 언급한 CPU들을 의미

리눅스의 여러 패키지를 다운 받을 때 i386, i586, i686, x86, x86_64 등 여러가지가 표시되어 있는데, 이것들의 의미는 해당 코드가 타겟 CPU에 적합하게 컴파일되어 있습니다는 것을 의미합니다.

그러므로 x86 은 i386, i586, i686 의 모든 플랫폼에서 동작할 수 있고, x86_64 는 i386, i586, i686 의 64bit 환경에서 동작하는 것을 의미합니다.

### 1.2. 가상환경 생성
다음과 같이 가상환경을 생성할 수 있습니다.

```:no-line-numbers
conda create --name(-n) [가상환경명] [설치할패키지]
```

예시

```:no-line-numbers
conda create -n testenv python=3.6
```

이후 다음과 같이 가상환경 활성화, 비활성화할 수 있습니다.

```:no-line-numbers
conda activate testenv
conda deactivate
```

::: warning 에러 - CommandNotFoundError
가상환경 활성화 시 다음과 같은 오류를 만날 수 있습니다.

```:no-line-numbers
CommandNotFoundError: Your shell has not been properly configured to use 'conda activate'. If using 'conda activate' from a batch script, change your invocation to 'CALL conda.bat activate'.
```

이 경우 `source <anaconda 설치 경로>/etc/profile.d/conda.sh` 명령어를 통해 해결할 수 있습니다.

```:no-line-numbers
source ~/anaconda3/etc/profile.d/conda.sh
conda activate test-env
```

위 명령어는 터미널을 껐다 킬 때마다 수행해줘야 합니다. 윈도우 시작 시 위 스크립트가 실행되도록 설정해주거나, 이게 번거롭다면 `source activate` 명령어를 통해서도 할 수 있습니다. 최초 한 번만 해주면 이후 conda activate 명령어를 사용할 수 있습니다.

```:no-line-numbers
source activate test-env
```

아나콘다를 설치한 뒤 가상환경 생성까지 문제 없이 되는데 왜 활성화 때 이런 문제가 발생하는지는 잘 모르겠습니다.
:::

가상환경 삭제는 base(root) 계정으로 활성화(activate) 후 삭제하는 게 좋습니다.

```:no-line-numbers
conda activate root
conda remove --name [가상환경명] --all
```

### 1.3. 패키지 설치
```:no-line-numbers
conda activate [가상환경 명]
conda install [패키지 명]
pip install [패키지 명]
```

다음과 같이 패키지 버전을 명시하여 설치할 수 있습니다.

```:no-line-numbers
pip install numpy==1.19.4
```

### 1.4. 설치된 패키지 삭제
```:no-line-numbers
conda uninstall [패키지 명]
```

### 1.5. 가상환경 복제
기존에 세팅해둔 가상환경에서 약간의 변경 후 사용하고 싶을 때 사용합니다.

```:no-line-numbers
conda create --name [새로운 가상환경 명] --clone [기존 가상환경 명]
```

## 2. 주피터 노트북 - 가상 환경 연동

![](https://drive.google.com/uc?export=view&id=1FdSXpvQKyCVjyo5JKjEeqNqTCz7RaLVY)
파이썬 파일 생성
{ .align-center}

![](https://drive.google.com/uc?export=view&id=1Z-Qq12cfMYxzpejDN9R4MvuoknsLfbQr)
가상환경 커널이 아직 존재하지 않는다
{ .align-center}

![](https://drive.google.com/uc?export=view&id=1EEiCy2I6G3qhx8HQ5L7uDEPnPpgxCLqD)
testenv라는 가상환경이 존재
{ .align-center}


이 상태에서 testenv를 활성화하고 `jupyter --version`를 커맨드로 입력하면 ipykernel이 설치되어 있음을 확인합니다.


만약 그렇지 않다면 활성화한 가상환경에서 `pip install jupyter`로 설치합니다.


확인했다면 비활성화 후 가상환경 커널을 생성합니다.

```:no-line-numbers
conda deactivate
python -m ipykernel install --user --name [가상환경명] --display-name [커널명]
```

예시

```:no-line-numbers
python -m ipykernel install --user --name testenv --display-name testenv
```

![](https://drive.google.com/uc?export=view&id=1L2cEAmqzgJhX4aGE1bOBYjb4ef8W70yP)
ipykernel 명령어 입력
{ .align-center}

![](https://drive.google.com/uc?export=view&id=1jvQqaTjcTknZVBo140tkSC01srO4EaUr)
주피터 노트북 새로고침 후 가상환경 확인
{ .align-center}

## 3. VS Code - 가상환경 연동
[Ctrl] + [Shift] + [P]를 입력하면 command pallet가 나타난다.

나타난 창에 'Python: Select Interpreter'을 입력하면, 원하는 파이썬 버전의 가상환경을 선택할 수 있습니다.

만약 Select Interpreter를 검색했음에도 나타나지 않는다면, VS Code의 Python extension을 설치해야 합니다.
