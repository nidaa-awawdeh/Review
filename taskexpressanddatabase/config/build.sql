BEGIN;

DROP TABLE IF EXISTS class1;
DROP TABLE IF EXISTS class2;
DROP TABLE IF EXISTS class3;

CREATE TABLE IF NOT EXISTS class1 (
    id  SERIAL   PRIMARY KEY,
    name    TEXT       NOT NULL,
   birth INT 
);
CREATE TABLE IF NOT EXISTS class2 (
    id  SERIAL   PRIMARY KEY,
    name    TEXT       NOT NULL,
birth INT 
);

CREATE TABLE IF NOT EXISTS class3 (
    id  SERIAL   PRIMARY KEY,
    name    TEXT       NOT NULL,
 birth INT 
);

INSERT INTO class1 (name,  birth) VALUES ('lolo', 2000);
INSERT INTO class1 (name,  birth) VALUES (' BD', 1999);
INSERT INTO class1 (name,  birth) VALUES (' bBD', 2009);
INSERT INTO class2 (name,  birth) VALUES ('lo', 2002);
INSERT INTO class2 (name, birth) VALUES (' D', 1993);
INSERT INTO class3 (name, birth) VALUES ('llo', 1994);
INSERT INTO class3 (name,  birth) VALUES (' B', 1987);
INSERT INTO class3 (name,  birth) VALUES (' B', 2015);

COMMIT;