---
title: '[운영체제] 02. 시스템 콜(System Call)'
icon: article
category: Operating System
date: 2022-07-14
order: 2
---

*본문은 2019년도 하반기 아주대학교의 컴퓨터공학과 교수로 재직하셨던 김상훈 교수님의 운영체제 과목 강의 자료를 기반으로 작성되었음을 알립니다.*

## 1. 시스템 콜(System Call)이란?
시스템 콜(System Call)은 운영체제가 시스템을 보호하고 어플리케이션을 지원하는 프로그래밍 인터페이스(Programming Interface)이다.

## 2. 모드(Mode)와 특권명령(Privileged Instructions)
다음과 같이 사용자 어플리케이션이 시스템에 피해를 줄 수 있는 예시를 생각해볼 수 있다.

- 어플리케이션이 디스크 드라이브에 직접 접근
- 어플리케이션이 키보드 Interrupt handler의 기능을 override하는 경우
- 어플리케이션이 HLT instruction을 시도하려 하는 경우

<div class="mxgraph" style="max-width:100%; margin:auto;" data-mxgraph="{&quot;highlight&quot;:&quot;#0000ff&quot;,&quot;lightbox&quot;:false,&quot;nav&quot;:true,&quot;edit&quot;:&quot;_blank&quot;,&quot;xml&quot;:&quot;&lt;mxfile host=\&quot;app.diagrams.net\&quot; modified=\&quot;2022-07-14T06:20:45.890Z\&quot; agent=\&quot;5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36\&quot; etag=\&quot;velk-W2rbAjYRAChh0O0\&quot; version=\&quot;20.1.1\&quot; type=\&quot;google\&quot;&gt;&lt;diagram id=\&quot;hRgPx78bJbYKZx-3B4bj\&quot; name=\&quot;표 1. HLT instruction\&quot;&gt;5Zhdb5swFIZ/DZeVAgaSXC4fbSq13Uem9XJysQNWjc2MWZL++h0Xk4Q5XbZpIZq4inl9fLDfxwdMPDTNNzcKF9m9JJR7wYBsPDTzgsAfoBH8GGVbK/EI1UKqGLFBe2HJXmgz0qoVI7RsBWopuWZFW0ykEDTRLQ0rJdftsJXk7bsWOKWOsEwwd9VHRnRWq6NguNcXlKVZc2c/Htc9OW6C7UrKDBO5PpDQ3ENTJaWuW/lmSrkxr/GlHnf9Ru9uYooK/TsDbjcKLUge4cp//vRAll+/fby5slm+Y17ZBdvJ6m3jgJKVINQkGXhoss6YpssCJ6Z3DcxBy3TO4cqH5opxPpVcKrgWUkDQxN6BKk03b07d3xkCO4nKnGq1hRA7ILYW2j3kB1F9vd4TiRqbswMasY3DdhOku8x7n6BhrfoD2wLHtvdFAnvfMQ/WrNsOYc5SAW1OV6bH+MJgu72zcs4IMYMnipbsBT+9JjLGF5IJ/bqOaOJFM5Op0rKsC8YkLrWSz/Qn84/wWEmhl3aG/r+AE52EMzzCBg3OxAY5bG4FeFMlmknRR0B+HJ4kNO6SUHikeiDRvJd0dsXxCzpxl3Qih04cXk2Y9oKYG8ufFLRS07rv6RMPhX+HLDwXsthBNpV5gbXJ6lC7oynE9pVd6J9mN+qS3dBhN6NloljR19dVNDhNqNPX1cghdB3+D2DOcLZrnmoHKMIuUYwdFIu7zz1h4RzjjsCIuoTRPEkPaDx86AkM59R26crw3S/5L2A06QkP50h28eJwP0MXGE5i/cDhvMMvXh7uN2efysM59Z6vPOBy/5/ma9/BP8No/gM=&lt;/diagram&gt;&lt;/mxfile&gt;&quot;}"></div>
<div class="align-center">&lt;표 1. HLT Instruction&gt;</div>

운영체제는 시스템을 보호하기 위해 다음과 같은 정책을 사용한다.

- 2개 이상의 모드(user mode, kernel mode, etc.)를 구분하여 운영체제가 동작함
    - 시스템에 치명적인 것들(Critical things)을 일반적인 것들(General Things)과 구분
    - 하드웨어에 의해 지원되는 **Mode bit**을 사용해서 운영체제가 동작함
    - 현대의 CPU는 2개 이상의 모드를 지원
        - I.e., Virtual Machine Manager(VMM) mode for guest VMs
        - VM은 호스트 시스템의 메모리 접근에 제약을 가짐
- 특권명령(Privileged Instructions) 일부는 kernel mode와 같이 관리자 모드에서만 실행할 수 있도록 함
    - Direct I/O Access
    - Accessing/manipulating system registers
        - Control registers
        - Interrupt service routine table
    - Memory state management
        - Page table updates, page table pointers, TLB loads, etc.
    - 그 외에도 E.g., HLT in x86 등 시스템에 치명적 결과를 낳을 수 있는 명령들
    - user mode에서 특권명령을 수행하면 **Exception** 발생

## 3. Interrupt vs Exception
Interrupt는 External Interrupt, Exception은 Internal Interrupt라고도 한다. 어느 경우든 user mode에서 시스템이 동작하다가 발생 시 kernel mode로 전환하고 처리 루틴에 따라 적절히 처리 후 다시 user mode로 전환한다.

> 현대의 운영체제는 대부분 Interrupt(or Exception)-driven으로 동작한다

- Interrupt
    - 하드웨어 장치에 의해 발생
    - 비동기(어느 때나 발생할 수 있음)
    - Interrupt 발생 → 현재 실행중인 instruction 완료 → ISR(Interrupt Service Routine) → 다음 명령 실행
- Exception
    - instruction을 실행하는 소프트웨어에 의해 발생
        - Software Error(e.g., division by zero)
        - Unauthorized access of data
        - Request for operating system service, etc.
    - 동기(CPU가 instruction을 실행할 때 발생)
    - Fault, Trap, Abort로 분류
        - Trap
            - 의도하거나 예상한 오류가 발생한 경우
            - Trap 발생 → 현재 명령어 저장 → ISR의 Trap handler runs → 이후 Trap을 발생시킨 명령의 다음 명령 실행
            - E.g., Breakpoint
        - Fault
            - 예상치 못했지만 잠재적으로 시스템 회복이 가능한 오류 발생
            - Fault 발생 → 현재 명령어 저장 → ISR의 Fault handler runs → Fault를 발생시킨 명령 재실행
            - E.g., Page Fault, Division by zero, Invalid memory access(Segmentation Fault)
        - Abort
            - 시스템에 치명적인 결과를 가져올 수 있는 회복 불가능한 오류 발생
            - 즉시 프로세스 종료
            - Abort 발생 → ISR → 프로세스 종료
            - E.g., Invalid input, Parity bit error

<div class="mxgraph" style="max-width:100%; margin:auto;" data-mxgraph="{&quot;highlight&quot;:&quot;#0000ff&quot;,&quot;lightbox&quot;:false,&quot;nav&quot;:true,&quot;edit&quot;:&quot;_blank&quot;,&quot;xml&quot;:&quot;&lt;mxfile host=\&quot;app.diagrams.net\&quot; modified=\&quot;2022-07-14T08:41:01.916Z\&quot; agent=\&quot;5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36\&quot; etag=\&quot;wGlFTU4MFVfCdHxEzoaD\&quot; version=\&quot;20.1.1\&quot; type=\&quot;google\&quot;&gt;&lt;diagram id=\&quot;0-2DUKc_c3IAZlrnvXF6\&quot; name=\&quot;그림 1. Interrupt control flow\&quot;&gt;7Vlbc6IwFP41zrgPnQECqI/VXqe125nOTnf7soMQIbsxsSFU21+/CQS5BFfrqLUXfQAOyeHkfF+Sc05aYDCZnzNvGg1pAHHLMoJ5C5y0LMs0u464SMlzJnGtbiYIGQpUo0Jwh16gEhpKmqAAxpWGnFLM0bQq9Ckh0OcVmccYnVWbjSmufnXqhVAT3Pke1qX3KOBRJu1anUJ+AVEY5V823V72ZuLljdVI4sgL6KwkAqctMGCU8uxuMh9ALJ2X+yXrd7bk7cIwBglfp8NvaA87V/HT4PTKfeyNxxhcDI+UlicPJ2rAylj+nHuA0YQEUCoxWqA/ixCHd1PPl29nAnMhi/gEiydT3I4p4QpE01LPA4opS3UBI/1JOcI4lxNKRPt+zBn9C2tCZR5kHM6XjttceFPQENIJ5OxZNFEdusr/ioC2epwVaNp5k6iEpLBVsUgxKFxoLpwsbpSfm30+vP113j2enwVu57s1iM+weXPZ4PMfMWSSMmL2aO4XA+dVH3sYhUTc+8IBoh/oS/cgQdlj9WKCgkB27zMYoxdvlKqSXp9SRHg6HKffck6kroTTWOG1DIMGrFKYlY1gNexuX/63A6dlOBU8ezqevUY4d4SmpaF5BRlJV8EvPNfAE9jGKjxNY5+AAg3QtvlNCC4lOiyZcjk8RFqWiyWQIzFz3VDehVRsVMJIYaPc8BKGSKi3gnPoJxxRocCgY/29n7DUdcJKIuBL/Kzt2iximYveikTLSWOfyP9O1nSz5+iksRpI09kVaezV+ygkwbEMSORMx14cI78KYHWffZ0zYaBFMTVXClNowny4al/SXV7yqdPg0lzGIPY4eqqa0eRn9YVbSbsCUdusQmqZTlVFZr7qVQ5zaooWBi1TxD0WQq4pSmFfDHtzJjiHzoS3QnglMOsiDHpvi7D7hfCGwGyMsLtfhDuHjrBIglMP/G81Nw6KCnUE16WCXVs1ANgvFXoNVMhCNolhhRPuYyJz+X75zvAXKBfCPA0u9wjVNYsGc8FlLhG2j+qt4mS08vtFTFnSlHas6hLSbDy5+N1kLWtkKeXsJk/XtpmCNoWf9j5Tljx2et8sJZJjXyzdHkuX7MYrdoDdsXSNYuPnDJy00Li+yW2a/ABrv7ulqefBbUsWTwYCGUZx6vQ4lnWSet2DU+lbj4jZKGuh3pin10U5pN6+Uh0xxoigOJJ6P8CSsKiSb2MVqDHCdBpKJU2blbuzZUDPkNu25MhFDn4dagZ5woisrUmS1N9m28aG1bJPQoJObX1pIkFTkXV3JNCT6DaoVVnrQBeLA0vIa2Y6huODrIhuE2K7vttbOsRN5yL2FhC+t69/9u8fIHj5E8dHJriJHq4bTxZdbyLPC1Ncy0Bn4o8T0xXHnKWYztwCylanmnnk83P7h1/isTiazsKD4oAfnP4D&lt;/diagram&gt;&lt;/mxfile&gt;&quot;}"></div>
<div class="align-center">&lt;그림 1. Interrupt control flow&gt;</div>

<div class="mxgraph" style="max-width:100%; margin:auto;" data-mxgraph="{&quot;highlight&quot;:&quot;#0000ff&quot;,&quot;lightbox&quot;:false,&quot;nav&quot;:true,&quot;edit&quot;:&quot;_blank&quot;,&quot;xml&quot;:&quot;&lt;mxfile host=\&quot;app.diagrams.net\&quot; modified=\&quot;2022-07-14T08:40:18.260Z\&quot; agent=\&quot;5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36\&quot; etag=\&quot;qKNT5TqD5CHK3rgZakMc\&quot; version=\&quot;20.1.1\&quot; type=\&quot;google\&quot;&gt;&lt;diagram name=\&quot;그림 2. Trap, Fault control flow\&quot; id=\&quot;itdt0YleofmE9aH8m0IG\&quot;&gt;7Ztbd5s4EMc/jc/JPqSHm7HzaDtpk5Nu025u233pkY1s02LkCpHY+fQrgcAgyQFfwHFK81A8RgPo95c0msEtczBbfMJgPv0bOdBrGZqzaJnnLcPQ9W6b/scsy9hiG93YMMGuw09aGW7dF8iNGreGrgOD3IkEIY+487xxhHwfjkjOBjBGz/nTxsjLX3UOJlAy3I6AJ1sfXYdMY2vX6Kzsl9CdTJMr6/ZZ/M0MJCfzJwmmwEHPGZN50TIHGCESH80WA+ixzkv65fON9rnrXJ5r9w/+j+/X40fyxT2NnX3cpEn6CBj6ZL+ujdj1E/BC3l/3AcTs6akQ+GOTZdKXBC7o9ftTMvOoQaeHwHMnPj0e0Tuj7cz+E8TEpb3f41/MXMdhzfsYBu4LGEauNPp5jlyfRGzb/Vb7nPkKCQpi/TDXAcHoFxwgD1G/5z7ymZex63miCfnklt+jmXzmbgz+OWnSMky7z/6onT85vV+4EKRS0M96Cp+OGohmkOAlbZd4MfiI4QMmGUDPK/WdcUVNM8IzuQ1wvU9Sxyum9IBj3QCxKSG+htiPRnkDeVvIhq0VQda1OilbEuUT/S9q6M3nHkVFXOS3DNtjZId0fNsTdjQDv+jUTO9G/ipYBgTO2LwM2MVLawTHz3ooiayXhHXO/qoc93lF6GUlYVclibYkCYkj9J0eW2PZ4PZAELijPFWMQt+BDke1WQ9DR1qYy/QvvT8U4hEsWrRkDpmObiv6ObFh6NHh8JS/N1Xn8yt8ZQJdYTbNPOeUe+Iivn3eKrseC470ToEjAvAEEslRpIX0sbeXh32U8jgU9kJaZbGb+mGxdxrsm4z2IlpbYxen/Yqxd48SO90rRt3y2nnam9KHiLW0PoT5xRQjxYr1cabQRxwTMrDR/jxha/8O2ZaXkjW16F/WFEePaTyZCSfjQDK201sciudSW3ypxHw0+5IS+5Ds/iXZc+8/AhVD0GSfmRkLtmIsVLYpSe5nvapWfDMSSo92FN3Va3ILwmHh9eMWPhPeylPUsJHuvpMma9bZgmm8OunqR7lgvpnwWASz7a7INOpdB3U5I3pisETKgOLCyItIBAFLm4gpE4JY3wKfjlv8LqYAPtFWmDLpCgtWRx716cyQVa1V2bCXs6UnFsN/mXClI4WE2F/H3/Vp54cjdb5tjDwPPbv+hAW2U8gUksRFjVxKyKWTz6wbliLFZirkUlmKTVekXU0mlysGCYdzIotgulJSyGRUmrwHx28ys1o5d1MMDgx5mlCVVPYxS3yZfPv3pq/jqePfP/0emlffx+GpMqwFszntgwj2HQbz1PJ+QsIUdDYk1KuiLibU2/VtZl5u7gbf7pd3vUv9JwaPvf8uwCcF9KZUuiPitoC4xlKpErEc8zel0p0h21ZhPbyyUqmSsiLCj0qlgxBHDyqt2K/GdCMQBkkRVRuD0CMbyOTPrZZahyyXKmUhR/4SyDe44c+XS9cvXIdKDHR0IWbftoDSbhc42l9iQNmLcqR/DPI4FPZCWmWx22eHxX6cL1EcCnshra2xJ3qqCXvzcsRO2EVa20/y9WJXvRxxdPWqEY1jm3pVtfUqceeqKrVadW5qVPX7ZsJaH55YHzr261PNtnNWhRUrddJCTkw1FavKxr2dh63bim1rVRUrNX45aSVWrKBLprx0dQoXcBQSlRhGSfojX8PSEGsJhgiTTYoVf7BGbE0IYmx5bUgrn/VoRJHyispUH+N8VVOi2pV5R2Sul0tlV4dclc7K1qgS9E2Raqf14CwfByqKVJ06w0BFQfq1OJB3qQOCaRT46XnazP4VEErajztRM1NQyY8pjU0jR2EsHlnkaAm1aCnaKxs2io7alUWND6Z7dQ3++eHeDxbLy7BnLB50ZQm7lv1CTmuywIxjFcbeciCd+lJfSmWoXnwUEhVRNKhOVrzXFaSyTIKE25KXkD29+Uo/rn6tHstl9Zt/8+J/&lt;/diagram&gt;&lt;/mxfile&gt;&quot;}"></div>
<div class="align-center">&lt;그림 2. Trap & Fault control flow&gt;</div>

<div class="mxgraph" style="max-width:100%; margin:auto;" data-mxgraph="{&quot;highlight&quot;:&quot;#0000ff&quot;,&quot;lightbox&quot;:false,&quot;nav&quot;:true,&quot;edit&quot;:&quot;_blank&quot;,&quot;xml&quot;:&quot;&lt;mxfile host=\&quot;app.diagrams.net\&quot; modified=\&quot;2022-07-14T08:44:02.842Z\&quot; agent=\&quot;5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36\&quot; etag=\&quot;fzkUmrwSi_qyzYVf7YQu\&quot; version=\&quot;20.1.1\&quot; type=\&quot;google\&quot;&gt;&lt;diagram id=\&quot;eq14KkWH4oYaq5Phlt2_\&quot; name=\&quot;그림 3. Abort control flow\&quot;&gt;7Zlbc5s6EMc/jWfSh86ABMR+jO0k7ZyTXsZNm/QlI4NslArJEcKXfPpKIMBcXNs5TtyTSZwH+IMWaX+73kXuwEG0vBRoFl7xANMOsIJlBw47ANgOAB39bwWrTDl1nUyYChKYm0phRB6xES2jJiTAceVGyTmVZFYVfc4Y9mVFQ0LwRfW2CafVp87QFDeEkY9oU/1BAhlmaheclvoHTKZh/mTb62VXIpTfbFYShyjgizUJnnfgQHAus6NoOcBUOy/3SzbuYsPVYmICM7nLgPlNCOny2/2Vd+ey6+vL+DuavTdW5ogmZsHXMRZ6+oqkmbdc5c6QeKke1Q9lRJVgq0NEyZSpY19NQo2D/TkWkij3nZkLEQkCPbwvcEwe0Tg1ZanzGSdMpnDcfscdaluJ5HEWANp0LAX/hQeccmV3yDjTViaE0rrEmRyZOcL83JgB5jwf0gHQ6+uP0s3K1XzxcqNL7QKUinDMIyzFSt1iBgDgZkOK4M5OF2Wk9Az9cC1IoNGQic1pYbjEpw4MwT1oggbNf7BgaUa+8dyBJ/SsbTxt6yWBwgbQE/udEi6QRHpwiESwUMvrAI9qkmOVut5UH2H13afzmPt+IuI9yItsWccCvxm0M9Sfw4DuVTnb3RbQoAW081ygnQboBjLMgjNd0HR2UhTHxK8CFDxhAQ4Mlf2ciYNGFay5Uk2FJ8LH22pJ0+VrPnVbXJprAlMkybw6jTY/myd80WFXEnVgFSmwaqiy6ZtR62WyZgicbjEkkZhi2TCUYi+W/fRIcP/2SDgW4a1gdiXs2Mcl7L0RfiKYJxN2X5aw3WyrT4Cu2wNFRnCaOj2O1XtNo25LnpZ1pmqt2KNqH7tf2xx9Vvp3oH67W6vbeb92tLptN1vuE0eT/pAjVEkhE8E2oc5lkqtozIXMVTWn4oI2xRNJ2P+pj3+ZuIC1fg4cPy5aOneo4+JsHW8ZC2EZLgnbp12nePJXduuHxOuAGl67ibftPfv56La16x6KZmq9KdicciaZ9H1NSbv+km4fADG0qjspTpPwaQvhQ7x4hxS5jLD77u3Nzfuf4yQ4fxi07Iu99Wi7tVa79mjuy/Vo/y4mKOxNPt79uumz4cMF7dqfWgmbb+VNpXhcluLXmst5O/NfcrlBFjqNZG6L0EMks3BX8PrxU+82hl/FVzzq3g74H1DrpVdIeg8JzwiXR5ZfOK0Uc/etjzCxUYuij+0RlGlxMt76/GyEnwixZikdWLWl1Gw9ryhIi93dQwdpfeu+bQvQeaYgvTqnUXS/+jy30B3+0g8v3W/BLhWnWlEWIZF4NEPpntxCoFmV7c7Z32TSyu4APi/2zjcXeafb6vP9na5Oy5/WsppR/kAJz38D&lt;/diagram&gt;&lt;/mxfile&gt;&quot;}"></div>
<div class="align-center">&lt;그림 3. Abort control flow&gt;</div>

<div class="mxgraph" style="max-width:100%; margin:auto;" data-mxgraph="{&quot;highlight&quot;:&quot;#0000ff&quot;,&quot;lightbox&quot;:false,&quot;nav&quot;:true,&quot;edit&quot;:&quot;_blank&quot;,&quot;xml&quot;:&quot;&lt;mxfile host=\&quot;app.diagrams.net\&quot; modified=\&quot;2022-07-14T07:55:47.157Z\&quot; agent=\&quot;5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36\&quot; etag=\&quot;6SzyYkNMnjCLXzWImNsO\&quot; version=\&quot;20.1.1\&quot; type=\&quot;google\&quot;&gt;&lt;diagram id=\&quot;e220UrmHefupR6rT55Ej\&quot; name=\&quot;표 2. Classes of Exceptions\&quot;&gt;7Zpbb5swFMc/TR4nYS5J89ik7dZJ7bamWrenyYGTYNXYzBhC+ulng2kupssqtWQVlaLE/H3BPj/I8Tkw8KZJ+VHgNL7iEdCB60TlwDsbuC7yXXegP060rpVR4NfCUpDINNoIM/IARnSMmpMIsp2GknMqSborhpwxCOWOhoXgq91mC053z5riJVjCLMTUVu9IJONaPXFHG/0TkGXcnBkNx3VNgpvGZiVZjCO+2pK884E3FZzLupSUU6DaeI1d6n4XT9Q+TkwAk//S4fN3dDm++XZ2MxRT+lAUtz/OJx/MKAWmuVnwlOIsMzOW68YMEkp1kkksE6oEpIqYkiVTZQoLXVOAkESZ7dTICYki3XkiICMPeF4N5KjjlBMmKyjBZBCc6ZFyybMavB44k4Lfw5RTLpTCONOjLAil+xJncmZm2CxDTQLKJ+2DHq2uLlfgCUixVk1Mh3FQ9zAX6onBttpQHxop3gLuGQ2b62z5OO4GhSoYGs8g49pkcJ5BH8mghsV/gsaz0Jxmaxaqseqf/hHygoOExl0S8i1CNyBzwZQ2hxgXRBmjh5h8/yAm5HbJKbA4XTIJQuSpfAt8Xt7rIBRYSEZdEhlaRG7Vxq6nMHwbRtAljJEF4wLntK+3xujINE5stz/noqc0XOfINMYWjZmyJtb9FoIn6udSjftFh55QkPBNbJxfANP+XrnNoSC/S1BNJL/n5JkkvMYFZQipPuorohY3g7xOEdlpgK+8QoQp1TMXEHK15sqgCpgQb2P//BqwWrwQ6nSHhuzMwDVn74T+5pk6/sd7MkHQCyD7yYA2F9RpvgbZ6YBZj3EcO6pBdtTfZxzHDmuQHfL3GMfR4xpkB/2ndIXXWbUN00lMXZJcfTFNRA3HlL3ysEc76P08ZpuHcZ1OqbUkB96pHaDW4og6pmYnEa6q0zbQGmZhLqpVvmNrd1jdYnPtjMI1qDVu32u9RNMa+rwWGlzM02A99eDeLX9d8N9D5ydpeZ/AQiF4ziKIjDlXMZEwS3Goa1f6UcMOpdex2+HnyUGbz0dB8GyzqcPNKx5V3daLMt75Hw==&lt;/diagram&gt;&lt;/mxfile&gt;&quot;}"></div>
<div class="align-center">&lt;표 2. Classes of Exceptions&gt;</div>

## 4. API
사용자 어플리케이션은 직접적으로 시스템 콜을 사용하지 않고 API(Application Programming Interface)를 통해 간접적으로 시스템 콜을 사용한다.

E.g., Win32 API for Windows, POSIX API for POSIX-based system, Java API for JVM(Java Virtual Machine).

## 5. 운영체제 서비스 개요
운영체제는 프로그램 관리, I/O 실행, 파일시스템 관리 등 다양한 서비스들을 제공한다.

<div class="mxgraph" style="max-width:100%; margin:auto;" data-mxgraph="{&quot;highlight&quot;:&quot;#0000ff&quot;,&quot;lightbox&quot;:false,&quot;nav&quot;:true,&quot;edit&quot;:&quot;_blank&quot;,&quot;xml&quot;:&quot;&lt;mxfile host=\&quot;app.diagrams.net\&quot; modified=\&quot;2022-07-14T10:28:55.446Z\&quot; agent=\&quot;5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36\&quot; etag=\&quot;TIRTN_wdU8KvhNcRK1eW\&quot; version=\&quot;20.1.1\&quot; type=\&quot;google\&quot;&gt;&lt;diagram id=\&quot;HuExrgryoPmv6NaveEDX\&quot; name=\&quot;그림 4. 운영체제 서비스 개요\&quot;&gt;5Zldc6IwFIZ/DZe7A0EQL6utbWe3dWedne5thKNkGggTYtH++k0gqBjd2h2p1u10FE8+SN4nOTkHLHeQLG45zuIHFgG1kB0tLPfaQsjpIGSpfztaVpau16kMM04iXWltGJNX0EZbW+ckgrxRUTBGBcmaxpClKYSiYcOcs6JZbcpo864ZnoFhGIeYmtYnEom4sgaou7bfAZnF9Z0dv1eVJLiurGeSxzhixYbJvbHcAWdMVFfJYgBUiVfrUrUb7ildDYxDKg5pcH01HRaDZye/L0bx77u7b4/jpy9I03jBdK5nrEcrlrUEnM3TCFQvtuX2i5gIGGc4VKWFhC5tsUio/OXIyylLhaboIP17wCjjZV+uXf5Jey44e4a6JGUpqMqE0i2THh5wAYu9E3dWcsp1CCwBwZeyim4QaAB6BTo1kGLN0/O1Ld5g2bG1Ees1NFt1vZZZXmil36G6Y4j+KwcuLVdZRkmIBWFpbqlxDuXnSMRlYb7MBSRq6pzNOE7y45JqEpGsAjRxfX8Li7RHHgRR5zhsnN4WHNeE43Z2wmmJDTLY3P66b1lpPwxgMt2hNIZgGraj9MrDbigdfKTQpufpYxHGFyA16p6Z1J4h9YAlCU4jafxOpJ/9/Jp33Lc1d+yPFN03RB/HZbNPr7Xrndn67u47T+9TAXwqxWz7rDyFB3e6pz4rA3OJ1zHKAFN6iaIj79Si90zRgb+QM1jjSmgZvdIrSmapLJswIVjSEofegRycoC0QtdfbIPGjiswt5FN5+/5E+iB/pq4ecCozxURNdj8kp630KoIpnpcj2pFhlV3q4ThHILU6DTQp1+5+9Q46H/zWSJkJlwzphyOT0ygDXqdfF87JRefHyUy+fkLO5lyqrFJhY1dBwtRt/+Pdth33ngNFM7MbEjlhA1MdLOzAR7I5LffhxQM03GWATg7QzBcfQRSMP5N0dvFADL94BkDMXFJGGgLCaods7x/5jRMlfPUpG44hnHOxvHh2hjc8A3ZmvH6HeVTIOf0FxzHi9UngdTzbjNenQQhhS+lR5+Q5KTKjch3UKd+17wjaAiEFEU21sc5pQlCPFHYkOwmJItW8zyEnr3hSdqXUzxhJRTlLr29516qvuWC5JveOVyGH7r8jYO1tBxUnfsCDzMDQYJbHOFOX0tPRZZ/j8BnE27uo6QFbcHHH2GR+E8euBz9oBw73H15gyZ/rV5Jl2caLXffmDw==&lt;/diagram&gt;&lt;/mxfile&gt;&quot;}"></div>
<div class="align-center">&lt;그림 4. 운영체제 계층 아키텍처&gt;</div>

- Program Management
    - 프로그램을 메모리에 로드하고 실행
    - 정상/비정상적 프로그램 종료
- I/O Operations
    - 파일 읽고 쓰기 또는 입출력 장치 제어를 포함한 I/O 기능을 프로그램이 사용할 수 있도록 지원
- Resource/Memory Management
    - 다중 사용자/어플리케이션이 동시에 Task를 수행할 때 모두 Task를 완수할 수 있도록 자원 할당 및 관리
    - 자원이란 CPU cycles, Main memory, File storage, I/O devices 등이 될 수 있음
- File System Manipulation
    - 프로그램이 파일 또는 디렉토리에 대한 CRUD 기능을 수행할 수 있도록 지원
    - E.g., Search, List file information, Permission management, etc.
- Networking
    - 프로세스가 시스템 내부 또는 외부로부터 통신할 수 있도록 지원
    - 공유 메모리 또는 메세지 전달(패킷)을 통해 통신 기능 제공
- Protection & Security
    - 시스템 안정성을 해치는 에러를 적절히 처리하거나 발생 가능한 에러를 조기에 알림
    - 특정 프로그램이 다른 프로그램이나 시스템에 피해를 주지 않도록 인가 정책을 사용하거나 자원 접근에 대해 제어

운영체제 각 서비스 목적에 맞는 시스템 콜과 API가 존재하며, 사용자 어플리케이션은 반드시 시스템 콜과 API를 활용하여야만 운영체제가 지원하는 시스템 기능들을 이용할 수 있다.

<div class="mxgraph" style="max-width:100%; margin:auto;" data-mxgraph="{&quot;highlight&quot;:&quot;#0000ff&quot;,&quot;lightbox&quot;:false,&quot;nav&quot;:true,&quot;edit&quot;:&quot;_blank&quot;,&quot;xml&quot;:&quot;&lt;mxfile host=\&quot;app.diagrams.net\&quot; modified=\&quot;2022-07-14T12:09:11.682Z\&quot; agent=\&quot;5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36\&quot; etag=\&quot;Yrl3qkPL4etUkZxGk6d_\&quot; version=\&quot;20.1.1\&quot; type=\&quot;google\&quot;&gt;&lt;diagram id=\&quot;I6Tl8XzC2sRSxIQv2_et\&quot; name=\&quot;그림 5. 우리는 C 코드로 어떻게 입출력을 할 수 있나\&quot;&gt;7VndbpswGH2WXSC1F40AB5JcNmmXSlunSbnotQNOsGpsZkyT9Olng/knC82SNupGpcoc25/Nd86xDTHALNzOOYyCR+YjYtimvzXAnWHbYAzkfwXsMsC1zQxYc+xnkFUCC/yKNJg3S7CP4lpDwRgROKqDHqMUeaKGQc7Zpt5sxUh91AiuUQtYeJC00SfsiyBDx/aoxB8QXgf5yJY7yWpCmDfWTxIH0GebCgTuDTDjjImsFG5niKjc5XnJ+n3dU1tMjCMq+nT4Zs2j4fx5/ujemssb+sPcfHdvdJQXSBL9wHqyYpdngLOE+kgFMQ0w3QRYoEUEPVW7kZRLLBAhkXeWLK4YFZpEy9b3M0YYT2OB7JJ4LDh7RpUaN71UD0xIBV856k/ikOA1lRhBK/m4Uz1vxAXa7k2IVaRZyhOxEAm+k03yDkPNjJZmfrspebYcjQVVjnNGodbWughdpl8WNANvYMPuYANg6pHER4Ya1YWhSjgRaQp9zAZBAa6ztLhp5ZLLUopgmQylRkyvrlWMUUebIgZdxlF6b3ZAg8Hg2K4Rl9NYXcmaX4nS+/RBZoPJiifGpSFt80tZdd35GL2nePQcORIJp7Jgdk9gdNeyhtSeqOu/oVKlTywXk1sNh9j3VecpRzF+hcs0kBovYjJBqZycqeHcqUiJYLF2UsswlFHU8EoO/dmAZnqdyD9Owz9OT/9Y5/IPOLyaIerfqm2hzJgP4yBd3qw6lfV17215RX5rVzmY1UraurKWYxwRKPBLPXxXJvUIP1m2Amzri5zmzBrbg2aQmCXcQ7pfdUNphAKTw7EE5GskWrFSdotnP57wYYvwJEZcrXdMrZi97epJcmS/T25Y0ODLaW944w7lgXPZ1Wmx94w4Tc+P//nrwd+4zd/kPflzW/wtBKQ+5GpHlyFNgpcc6oEu8Eh5ij3QbnAy6jhEdpFiO2ciZfSmPdAjMI6x9y/sfJbboMps+KLvvmc1fThqBNqz6cmcw12lmV6C9k+4OY5Ze8GThSziSXfUcdvTu1igUDkapt03XNpVvUt8XlM3lFKsoFVTW+9p6nywy3W1bWaqPyStD3N/00yTBlfHur+1vZ7J/fYQnN/9Vo/vQR+ts4yoS9UZMA/Io/fblXlAsCfSWWvC76Kzri9dF6WzS9FP63DRVz/Fq9y+486Z9POXpxR5W34Sz5qXvyuA+98=&lt;/diagram&gt;&lt;/mxfile&gt;&quot;}"></div>
<div class="align-center">&lt;그림 5. 입출력 C 프로그램과 시스템 콜&gt;</div>

## A. 참조
::: left
GeeksforGeeks, "Difference between Interrupt and Exception", *geeksforgeeks.org*, Jul. 10, 2020. [Online]. Available: [https://www.geeksforgeeks.org/difference-between-interrupt-and-exception/](https://www.geeksforgeeks.org/difference-between-interrupt-and-exception/) [Accessed Jul. 14, 2022].

카프카뮈, "[시스템] Exceptions: 시스템의 다양한 예외 분류", *Tistory*, May 4, 2021. [Online]. Available: [https://kafcamus.tistory.com/27?category=915821](https://kafcamus.tistory.com/27?category=915821) [Accessed Jul. 14, 2022].

kim-jaemin420, "운영체제와 응용프로그램", *Velog.io*, May 4, 2021. [Online]. Availble: [https://velog.io/@kim-jaemin420/운영체제와-응용프로그램](https://velog.io/@kim-jaemin420/운영체제와-응용프로그램) [Accessed Jul 14, 2021].
:::

<script setup lang="ts">
import UmlScript from "@UmlScript";
</script>

<UmlScript/>
