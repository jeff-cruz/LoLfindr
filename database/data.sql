insert into "ranks" (
  "rankId",
  "rankUrl"
) values (
  'Iron',
  '/images/ranked-emblems/iron.png'
), (
  'Bronze',
  '/images/ranked-emblems/bronze.png'
), (
  'Silver',
  '/images/ranked-emblems/silver.png'
), (
  'Gold',
  '/images/ranked-emblems/gold.png'
), (
  'Platinum',
  '/images/ranked-emblems/platinum.png'
), (
  'Diamond',
  '/images/ranked-emblems/diamond.png'
), (
  'Master',
  '/images/ranked-emblems/master.png'
), (
  'Grandmaster',
  '/images/ranked-emblems/grandmaster.png'
), (
  'Challenger',
  '/images/ranked-emblems/challenger.png'
);

insert into "users" (
  "username",
  "hashedPassword",
  "createdAt",
  "imageUrl",
  "name",
  "bio",
  "rankId"
  ) values (
  'Soren',
  'password',
  'now',
  '/images/bjergsen.jpeg',
  'Bjergsen',
  'Mid-Laner for TL',
  'Challenger'
  ), (
  'Peter',
  'password',
  'now',
  '/images/doublelift.png',
  'Doublelift',
  'poggers',
  'Bronze'
);

insert into "roles" (
  "roleId",
  "roleUrl"
) values (
  'Top',
  '/images/ranked-roles/top.png'
), (
  'Jungle',
  '/images/ranked-roles/jungle.png'
), (
  'Mid',
  '/images/ranked-roles/mid.png'
), (
  'Bot',
  '/images/ranked-roles/bot.png'
), (
  'Support',
  '/images/ranked-roles/support.png'
);




insert into "champions" (
  "championId",
  "championUrl"
) values (
  'Vayne',
  '/images/champion-icons/Vayne.png'
), (
  'Jinx',
  '/images/champion-icons/Jinx.png'
), (
  'Ezreal',
  '/images/champion-icons/Ezreal.png'
), (
  'Syndra',
  '/images/champion-icons/Syndra.png'
), (
  'Leblanc',
  '/images/champion-icons/Leblanc.png'
), (
  'Zilean',
  '/images/champion-icons/Zilean.png'
);


insert into "userChampions" (
  "userId",
  "championId"
) values (
  1,
  'Syndra'
), (
  1,
  'Leblanc'
), (
  1,
  'Zilean'
);

insert into "userChampions" (
  "userId",
  "championId"
) values (
  2,
  'Vayne'
), (
  2,
  'Jinx'
), (
  2,
  'Ezreal'
);


insert into "userRoles" (
  "userId",
  "roleId"
) values (
  1,
  'Mid'
), (
  1,
  'Jungle'
);

insert into "userRoles" (
  "userId",
  "roleId"
) values (
  2,
  'Bot'
), (
  2,
  'Support'
);
