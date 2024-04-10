CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" 
("url", "title", "description")
VALUES
('images/disney1.png', 'Mission: Breakout', 'Photo of the ride Mission: Breakout'),
('images/disney2.png', 'Zootopia Meet', 'Photo of character meet & greet with Zootopia characters'),
('images/disney3.png', 'Caballeros', 'Photo of meet & greet with 3 Caballeros'),
('images/disney4.png', 'Star Wars', 'Photo of Star Wars Land');
  