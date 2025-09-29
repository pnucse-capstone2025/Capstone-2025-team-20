FROM gradle:8.7.0-jdk17 AS build
WORKDIR /workspace
COPY . .
RUN gradle clean bootJar --no-daemon

FROM eclipse-temurin:17-jre
WORKDIR /app
# Install Python for local conversion fallback
RUN apt-get update \
    && apt-get install -y --no-install-recommends python3 python3-venv python3-pip \
    && ln -sf /usr/bin/python3 /usr/bin/python \
    && rm -rf /var/lib/apt/lists/*
COPY --from=build /workspace/build/libs/app.jar /app/app.jar
EXPOSE 8080
ENV JAVA_OPTS="-Xms128m -Xmx256m"
ENTRYPOINT ["sh","-c","java $JAVA_OPTS -jar /app/app.jar"]

