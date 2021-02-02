DROP TABLE users;
CREATE TABLE IF NOT EXISTS users (
  id SERIAL,
  is_admin BOOLEAN,
  name VARCHAR(50),
  email VARCHAR(50)
);
DROP TABLE reviews;
CREATE TABLE IF NOT EXISTS reviews (
  id SERIAL,
  reviewee_id INT,
  reviewer_id INT,
  content VARCHAR(300)
);
INSERT INTO users (id, is_admin, name, email)
VALUES (0, TRUE, 'Vildan', 'vildan.karadas@example.com'),
  (1, TRUE, 'Ida', 'ida.dean@example.com'),
  (2, TRUE, 'Gulay', 'gulay.engelmann@example.com'),
  (3, FALSE, 'Leslie', 'leslie.butler@example.com'),
  (4, FALSE, 'Rachel', 'rachel.duval@example.com'),
  (5, FALSE, 'Folker', 'folker.widmann@example.com'),
  (6, FALSE, 'Allan', 'allan.black@example.com'),
  (7, FALSE, 'Emily', 'emily.williams@example.com'),
  (8, FALSE, 'Marion', 'marion.thomas@example.com');