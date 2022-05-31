insert into "users" (
  "username",
  "hashedPassword",
  "createdAt",
  "imageUrl",
  "name",
  "bio"
  ) values (
  'Soren',
  'password',
  'now',
  '/images/bjergsen.jpeg',
  'Bjergsen',
  'Mid-Laner for TL'
  ), (
  'Peter',
  'password',
  'now',
  '/images/doublelift.png',
  'Doublelift',
  'poggers'
);

insert into "champions" (
  "championId",
  "details"
) values (
  'Teemo',
  '"hi"'
);

insert into "champions" (
  "championId",
  "details"
) values (
  'Aatrox',
  '"hi"'
);

insert into "champions" (
  "championId",
  "details"
) values (
  'Ahri',
  '"hi"'
);

insert into "userChampions" (
  "userId",
  "championIdOne",
  "championIdTwo",
  "championIdThree"
) values (
  1,
  'Teemo',
  'Aatrox',
  'Ahri'
);
