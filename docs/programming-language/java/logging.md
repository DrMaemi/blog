---
title: '로깅 Logging'
icon: article
category:
  - Java
date: 2023-09-17
---

## Java 기본 로깅 라이브러리 (JUL)
`java.util.logging` 패키지를 사용해 자바 기본 로깅 기능을 사용할 수 있다.

가장 낮은 레벨부터 가장 높은 레벨까지 `FINEST`, `FINER`, `FINE`, `CONFIG`, `INFO`, `WARNING`, `SEVERE`가 있다.

Java 1.4부터 사용할 수 있었는데, 당시 log4j가 잘 알려져 널리 사용되고 있어 기본 로깅 라이브러리는 잘 사용되지 않는다.

BasicLoggerExample.java

```java:no-line-numbers
package maemi.dr.log;

import java.util.logging.Level;
import java.util.logging.Logger;

public class BasicLoggerExample {

    private static Logger LOG = Logger.getLogger(BasicLoggerExample.class.getName());

    public static void main(String[] args) {

        LOG.fine("fine"); // Debug ?
        LOG.info("info");
        LOG.warning("warning");
        LOG.log(Level.WARNING, "lob level warning");
    }
}
```

기본 유틸리티 라이브러리는 log4j와 같은 여타 라이브러리에 비해 성능이 낮고, predefine 된 레벨 개념(ex. FINE, FINER, FINEST와 같이, 널리 쓰이지 않는 레벨 개념이 포함되어 있다)이 명확하지 않다는 단점이 있다.

## Log4j
Log4j는 Logger, Appender, Layout 세 개의 컴포넌트로 구성되어 있다.

Logger는 데이터를 기록하고, Appender는 데이터를 어디에 기록할 것인지를 정하고, Layout은 어떤 스타일로 데이터를 기록할지 정한다.

Log4jExample.java

```java:no-line-numbers
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Log4jExample {

    private static Logger LOG = LoggerFactory.getLogger(Log4jExample.class);

    public static void main(String[] args) {

        LOG.info(Log4jExample.class.getName());
        LOG.debug("debug");
        LOG.info("info");
        LOG.warn("warn");
        LOG.error("error");
    }
}
```

log4j2.xml

```xml:no-line-numbers
<?xml version="1.0" encoding="UTF-8"?>
<Configuration>
    <Appenders>
        <Console name="Console" target="SYSTEM_OUT">
            <PatternLayout pattern="%d{yyyy-MM-dd'T'HH:mm:ss.SSS} %t %c{1} [%p] %m%n"/>
        </Console>
    </Appenders>
    <Loggers>
        <Logger name="maemi.dr" level="${log4j.dr.maemi.log.level}" />
        <Root level="WARN">
            <AppenderRef ref="Console"/>
        </Root>
    </Loggers>
</Configuration>
```

## Slf4j
로깅 라이브러리의 wrapper 라이브러리이다. Slf4j는 다른 로깅 라이브러리를 추상화하여 사용할 수 있게 해준다. 따라서 Slf4j 단독으로 사용하지 않고 Slf4j + Logback + JUL, Slf4j + Log4j, Slf4j + Logback 와 같이 실제 로깅 기능을 구현한 라이브러리와 함께 사용한다.

사용자는 wrapper 라이브러리인 Slf4j에 명세된 인터페이스를 통해 코드를 작성한다.(Facade 패턴)

## A. 참조
nGyu, "로깅 라이브러리 비교(스프링,자바)," *velog.io*, Apr. 20, 2022. [Online]. Available: [https://velog.io/@vpdls1511/로깅-라이브러리-비교스프링자바](https://velog.io/@vpdls1511/로깅-라이브러리-비교스프링자바) [Accessed Sep. 8, 2023].

Oracle, "Java Logging Overview," *docs.oracle.com*, Nov. 26, 2001. [Online]. Available: [https://docs.oracle.com/javase/8/docs/technotes/guides/logging/overview.html](https://docs.oracle.com/javase/8/docs/technotes/guides/logging/overview.html) [Accessed Sep. 8, 2023].

Apache Software Foundation, "Apache Log4j™ 2 - Frequently Asked Technical Questions," *logging.apache.org*, May 13, 2012. [Online]. Available: [https://logging.apache.org/log4j/2.x/faq.html#noconfig](https://logging.apache.org/log4j/2.x/faq.html#noconfig) [Accessed Sep. 8, 2023].

Apache Software Foundation, "Welcom to Log4j 2!," [Online]. Available: [https://logging.apache.org/log4j/2.x/manual/index.html](https://logging.apache.org/log4j/2.x/manual/index.html) [Accessed Sep. 8, 2023].

Apache Software Foundation, "Apache Log4j™ 2 - Architecture," May 2, 2023. [Online]. Available: [https://logging.apache.org/log4j/2.x/manual/architecture.html](https://logging.apache.org/log4j/2.x/manual/architecture.html) [Accessed Sep. 17, 2023].
