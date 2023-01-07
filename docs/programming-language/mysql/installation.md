---
title: '[MySQL] MySQL 설치'
icon: article
category:
  - MySQL
date: 2023-01-07
---

작성일 기준 세계에서 가장 많이 쓰이는 오픈 소스 관계형 데이터베이스 관리 시스템(RDBMS) MySQL을 사용하기 위해 설치하는 방법을 다룹니다.

## 1. 윈도우
윈도우에서 CLI로 MySQL를 설치하기 위해서는 윈도우의 어플리케이션 패키지 관리자 Chocolatey가 필요합니다. 리눅스의 패키지 관리자와 달리 윈도우는 별도로 Chocolatey를 설치해줘야 합니다.
 
### 1.1. Chocolatey 설치
자신의 윈도우 머신에 Chocolatey가 설치되어 있다면 [1.2장](#12-MySQL-설치)으로 넘어가도 됩니다.

설치 방법은 [Chocolatey 설치 공식 웹페이지](https://chocolatey.org/install)를 참조하였습니다.

윈도우 파워 쉘(Window PowerShell)을 **관리자 권한**으로 실행한 뒤 다음 코드를 실행하면 됩니다.

```:no-line-numbers
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

```:no-line-numbers
PS C:\Users\...> choco
Chocolatey v1.1.0
Please run 'choco -?' or 'choco <command> -?' for help menu.
```

### 1.2. MySQL 설치
choco가 설치되었다면 MySQL을 설치할 수 있습니다.

관리자 권한으로 실행한 윈도우 파워 쉘에서 바로 다음 명령어를 실행합니다.

```:no-line-numbers
choco install mysql
```

`-y` 옵션을 주지 않아 중간 중간에 설치에 대해 물어보는데 전부 `y`를 입력하면 설치가 완료됩니다.

이후엔 쉘을 닫고 새로운 터미널(CMD, PowerShell, Git Bash 등 아무거나 상관 없었다)을 실행한 뒤 `mysql --version`을 입력하여 설치 여부를 확인합니다.

```:no-line-numbers
$ mysql --version
C:\tools\mysql\current\bin\mysql.exe  Ver 8.0.28 for Win64 on x86_64 (MySQL Community Server - GPL)
```

설치 직후 `mysql`을 실행해보면 다음과 같이 패스워드 관련 오류가 발생합니다. 이와 관련된 설정을 추가로 해줘야 합니다.

```:no-line-numbers
$ mysql
ERROR 1045 (28000): Access denied for user 'ODBC'@'localhost' (using password: NO)
```

### 1.3. MySQL 보안 관련 설정
`mysql_secure_installation` 명령어를 실행합니다. 이후 몇 가지 보안 설정에 관련된 질문을 받게 되는데, 자신의 상황에 맞게 설정하면 된다. 본문에서는 필자의 설정을 다뤘는데 독자 여러분은 여러분의 상황에 맞게 설정하면 됩니다.

1. 비밀번호 강도 - No

```:no-line-numbers
$ mysql_secure_installation
Securing the MySQL server deployment.

Connecting to MySQL using a blank password.

VALIDATE PASSWORD COMPONENT can be used to test passwords
and improve security. It checks the strength of password
and allows the users to set only those passwords which are
secure enough. Would you like to setup VALIDATE PASSWORD component?

Press y|Y for Yes, any other key for No:
```

2. 비밀번호 입력

```:no-line-numbers
...
Press y|Y for Yes, any other key for No: n
Please set the password for root here.

New password: ***************

Re-enter new password: ***************
```

3. 익명 유저(Anonymous Users) 여부 - N

```:no-line-numbers
...
By default, a MySQL installation has an anonymous user,
allowing anyone to log into MySQL without having to have
a user account created for them. This is intended only for
testing, and to make the installation go a bit smoother.
You should remove them before moving into a production
environment.

Remove anonymous users? (Press y|Y for Yes, any other key for No) : N
```

4. 루트 계정 원격 접속 차단 여부 - Y

```:no-line-numbers
...
Normally, root should only be allowed to connect from
'localhost'. This ensures that someone cannot guess at
the root password from the network.

Disallow root login remotely? (Press y|Y for Yes, any other key for No) : Y
Success.
```

5. 테스트 DB 삭제 여부 - N

```:no-line-numbers
...
By default, MySQL comes with a database named 'test' that
anyone can access. This is also intended only for testing,
and should be removed before moving into a production
environment.


Remove test database and access to it? (Press y|Y for Yes, any other key for No) : N
```

6. (마지막 질문)Privilege Tables Reload 여부 - Y

```:no-line-numbers
...
Reloading the privilege tables will ensure that all changes
made so far will take effect immediately.

Reload privilege tables now? (Press y|Y for Yes, any other key for No) : Y
Success.

All done!
```

### 1.4. MySQL 실행
```:no-line-numbers
$ mysql -u root -p
Enter password: ***************
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 17
Server version: 8.0.28 MySQL Community Server - GPL

Copyright (c) 2000, 2022, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql>
```

### 1.A. 기타 도구 설치
GUI로 MySQL을 다룰 수 있는 도구인 MySQL Workbench를 설치할 수 있습니다.

```:no-line-numbers
PS C:\...> choco install mysql.workbench
```

## A. 참조
Kamang's IT Blog, "[Choco]윈도우 choco 패키지 관리자", [https://kamang-it.tistory.com/236](https://kamang-it.tistory.com/236)

Kamang's IT Blog, "[MySQL]MySQL설치하기", [https://kamang-it.tistory.com/entry/MySQLMySQL설치하기](https://kamang-it.tistory.com/entry/MySQLMySQL설치하기)
