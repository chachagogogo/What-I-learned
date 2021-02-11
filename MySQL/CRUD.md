# 시작하기, 끄기

```sql
-- 시작하기
mysql-ctl cli;

-- 끄기
exit;

-- 에러 확인하기
SHOW WARNINGS;
```

# 만들기, 지우기

## DATABASE → TABLE

### DATABASE

```sql
-- 보기
show databases;

-- 만들기
CREATE DATABASE database_name;

-- 사용하기
USE <database name>;

-- 현재 사용중인 데이터베이스 확인하기
SELECT database();

-- 지우기
DROP DATABASE database_name;
```

### TABLE

```sql
-- 보기
SHOW TABLES;

-- 만들기
CREATE TABLE cats
(
		cat_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
		name VARCHAR(100) NOT NULL,
		age INT DEFAULT 0
);

-- 지우기
DROP TABLE <tablename>;

-- 표의 속성 확인하기
SHOW COLUMNS FROM tablename;
DESC tablename;
```

# CRUD

## CREATE

```sql
INSERT INTO cats(name, age) VALUES ('Jetson', 7), ('Charlie', 10), ('Ari', 1);
```

## READ

```sql
SELECT * FROM database_name;
SELECT cat_id AS id, name FROM cats WHERE cat_id = age;
```

AS: 원본은 그대로이고 출력할 때에 어떤 이름으로 출력할지 정함(aliases)

WHERE: 조건을 나타냄

## UPDATE

```sql
UPDATE cats SET breed='British Shorthair' WHERE name='Ringo';
UPDATE cats SET age=12 WHERE breed='Maine Coon';
```

UPDATE ~ SET ~ WHERE ~

## DELETE

```sql
DELETE FROM cats WHERE name='egg';
DELETE FROM cats; // cats 테이블의 껍데기는 남기고 내용물 모두를 삭제한다.
```
