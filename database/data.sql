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
), (
  'Faker',
  'password',
  'now',
  '/images/faker.webp',
  'Faker',
  'GOAT',
  'Grandmaster'
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
  'Aatrox',
  '/images/champion-icons/Aatrox.png'
), (
  'Ahri',
  '/images/champion-icons/Ahri.png'
), (
  'Akali',
  '/images/champion-icons/Akali.png'
), (
  'Akshan',
  '/images/champion-icons/Akshan.png'
), (
  'Alistar',
  '/images/champion-icons/Alistar.png'
), (
  'Amumu',
  '/images/champion-icons/Amumu.png'
), (
  'Anivia',
  '/images/champion-icons/Anivia.png'
), (
  'Annie',
  '/images/champion-icons/Annie.png'
), (
  'Aphelios',
  '/images/champion-icons/Aphelios.png'
), (
  'Ashe',
  '/images/champion-icons/Ashe.png'
), (
  'Aurelion Sol',
  '/images/champion-icons/AurelionSol.png'
), (
  'Azir',
  '/images/champion-icons/Azir.png'
), (
  'Bard',
  '/images/champion-icons/Bard.png'
), (
  'Blitzcrank',
  '/images/champion-icons/Blitzcrank.png'
), (
  'Brand',
  '/images/champion-icons/Brand.png'
), (
  'Braum',
  '/images/champion-icons/Braum.png'
), (
  'Caitlyn',
  '/images/champion-icons/Caitlyn.png'
), (
  'Camille',
  '/images/champion-icons/Camille.png'
), (
  'Cassiopeia',
  '/images/champion-icons/Cassiopeia.png'
), (
  'ChoGath',
  '/images/champion-icons/Chogath.png'
), (
  'Corki',
  '/images/champion-icons/Corki.png'
), (
  'Darius',
  '/images/champion-icons/Darius.png'
), (
  'Diana',
  '/images/champion-icons/Diana.png'
), (
  'Draven',
  '/images/champion-icons/Draven.png'
), (
  'Dr. Mundo',
  '/images/champion-icons/DrMundo.png'
), (
  'Ekko',
  '/images/champion-icons/Ekko.png'
), (
  'Elise',
  '/images/champion-icons/Elise.png'
), (
  'Evelynn',
  '/images/champion-icons/Evelynn.png'
), (
  'Ezreal',
  '/images/champion-icons/Ezreal.png'
), (
  'Fiddlesticks',
  '/images/champion-icons/Fiddlesticks.png'
), (
  'Fiora',
  '/images/champion-icons/Fiora.png'
), (
  'Fizz',
  '/images/champion-icons/Fizz.png'
), (
  'Galio',
  '/images/champion-icons/Galio.png'
), (
  'Gangplank',
  '/images/champion-icons/Gangplank.png'
), (
  'Garen',
  '/images/champion-icons/Garen.png'
), (
  'Gnar',
  '/images/champion-icons/Gnar.png'
), (
  'Gragas',
  '/images/champion-icons/Gragas.png'
), (
  'Graves',
  '/images/champion-icons/Graves.png'
), (
  'Gwen',
  '/images/champion-icons/Gwen.png'
), (
  'Hecarim',
  '/images/champion-icons/Hecarim.png'
), (
  'Heimerdinger',
  '/images/champion-icons/Heimerdinger.png'
), (
  'Illaoi',
  '/images/champion-icons/Illaoi.png'
), (
  'Irelia',
  '/images/champion-icons/Irelia.png'
), (
  'Janna',
  '/images/champion-icons/Janna.png'
), (
  'Jarvan IV',
  '/images/champion-icons/JarvanIV.png'
), (
  'Jax',
  '/images/champion-icons/Jax.png'
), (
  'Jayce',
  '/images/champion-icons/Jayce.png'
), (
  'Jhin',
  '/images/champion-icons/Jhin.png'
), (
  'Jinx',
  '/images/champion-icons/Jinx.png'
), (
  'Kaisa',
  '/images/champion-icons/Kaisa.png'
), (
  'Kalista',
  '/images/champion-icons/Kalista.png'
), (
  'Karma',
  '/images/champion-icons/Karma.png'
), (
  'Karthus',
  '/images/champion-icons/Karthus.png'
), (
  'Kassadin',
  '/images/champion-icons/Kassadin.png'
), (
  'Katarina',
  '/images/champion-icons/Katarina.png'
), (
  'Kayle',
  '/images/champion-icons/Kayle.png'
), (
  'Kayn',
  '/images/champion-icons/Kayn.png'
), (
  'Kennen',
  '/images/champion-icons/Kennen.png'
), (
  'Khazix',
  '/images/champion-icons/Khazix.png'
), (
  'Kindred',
  '/images/champion-icons/Kindred.png'
), (
  'Kled',
  '/images/champion-icons/Kled.png'
), (
  'KogMaw',
  '/images/champion-icons/KogMaw.png'
), (
  'Leblanc',
  '/images/champion-icons/Leblanc.png'
), (
  'Lee Sin',
  '/images/champion-icons/LeeSin.png'
), (
  'Leona',
  '/images/champion-icons/Leona.png'
), (
  'Lillia',
  '/images/champion-icons/Lillia.png'
), (
  'Lissandra',
  '/images/champion-icons/Lissandra.png'
), (
  'Lucian',
  '/images/champion-icons/Lucian.png'
), (
  'Lulu',
  '/images/champion-icons/Lulu.png'
), (
  'Lux',
  '/images/champion-icons/Lux.png'
), (
  'Malphite',
  '/images/champion-icons/Malphite.png'
), (
  'Malzahar',
  '/images/champion-icons/Malzahar.png'
), (
  'Maokai',
  '/images/champion-icons/Maokai.png'
), (
  'Master Yi',
  '/images/champion-icons/MasterYi.png'
), (
  'Miss Fortune',
  '/images/champion-icons/MissFortune.png'
), (
  'Mordekaiser',
  '/images/champion-icons/Mordekaiser.png'
), (
  'Morgana',
  '/images/champion-icons/Morgana.png'
), (
  'Nami',
  '/images/champion-icons/Nami.png'
), (
  'Nasus',
  '/images/champion-icons/Nasus.png'
), (
  'Nautilus',
  '/images/champion-icons/Nautilus.png'
), (
  'Neeko',
  '/images/champion-icons/Neeko.png'
), (
  'Nidalee',
  '/images/champion-icons/Nidalee.png'
), (
  'Nocturne',
  '/images/champion-icons/Nocturne.png'
), (
  'Nunu',
  '/images/champion-icons/Nunu.png'
), (
  'Olaf',
  '/images/champion-icons/Olaf.png'
), (
  'Orianna',
  '/images/champion-icons/Orianna.png'
), (
  'Ornn',
  '/images/champion-icons/Ornn.png'
), (
  'Pantheon',
  '/images/champion-icons/Pantheon.png'
), (
  'Poppy',
  '/images/champion-icons/Poppy.png'
), (
  'Pyke',
  '/images/champion-icons/Pyke.png'
), (
  'Qiyana',
  '/images/champion-icons/Qiyana.png'
), (
  'Quinn',
  '/images/champion-icons/Quinn.png'
), (
  'Rakan',
  '/images/champion-icons/Rakan.png'
), (
  'Rammus',
  '/images/champion-icons/Rammus.png'
), (
  'RekSai',
  '/images/champion-icons/RekSai.png'
), (
  'Rell',
  '/images/champion-icons/Rell.png'
), (
  'Renata',
  '/images/champion-icons/Renata.png'
), (
  'Renekton',
  '/images/champion-icons/Renekton.png'
), (
  'Rengar',
  '/images/champion-icons/Rengar.png'
), (
  'Riven',
  '/images/champion-icons/Riven.png'
), (
  'Rumble',
  '/images/champion-icons/Rumble.png'
), (
  'Ryze',
  '/images/champion-icons/Ryze.png'
), (
  'Samira',
  '/images/champion-icons/Samira.png'
), (
  'Sejuani',
  '/images/champion-icons/Sejuani.png'
), (
  'Senna',
  '/images/champion-icons/Senna.png'
), (
  'Seraphine',
  '/images/champion-icons/Seraphine.png'
), (
  'Sett',
  '/images/champion-icons/Sett.png'
), (
  'Shaco',
  '/images/champion-icons/Shaco.png'
), (
  'Shen',
  '/images/champion-icons/Shen.png'
), (
  'Shyvana',
  '/images/champion-icons/Shyvana.png'
), (
  'Singed',
  '/images/champion-icons/Singed.png'
), (
  'Sion',
  '/images/champion-icons/Sion.png'
), (
  'Sivir',
  '/images/champion-icons/Sivir.png'
), (
  'Skarner',
  '/images/champion-icons/Skarner.png'
), (
  'Sona',
  '/images/champion-icons/Sona.png'
), (
  'Soraka',
  '/images/champion-icons/Soraka.png'
), (
  'Swain',
  '/images/champion-icons/Swain.png'
), (
  'Sylas',
  '/images/champion-icons/Sylas.png'
), (
  'Syndra',
  '/images/champion-icons/Syndra.png'
), (
  'Tahm Kench',
  '/images/champion-icons/TahmKench.png'
), (
  'Taliyah',
  '/images/champion-icons/Taliyah.png'
), (
  'Talon',
  '/images/champion-icons/Talon.png'
), (
  'Taric',
  '/images/champion-icons/Taric.png'
), (
  'Teemo',
  '/images/champion-icons/Teemo.png'
), (
  'Thresh',
  '/images/champion-icons/Thresh.png'
), (
  'Tristana',
  '/images/champion-icons/Tristana.png'
), (
  'Trundle',
  '/images/champion-icons/Trundle.png'
), (
  'Tryndamere',
  '/images/champion-icons/Tryndamere.png'
), (
  'Twisted Fate',
  '/images/champion-icons/TwistedFate.png'
), (
  'Twitch',
  '/images/champion-icons/Twitch.png'
), (
  'Udyr',
  '/images/champion-icons/Udyr.png'
), (
  'Urgot',
  '/images/champion-icons/Urgot.png'
), (
  'Varus',
  '/images/champion-icons/Varus.png'
), (
  'Vayne',
  '/images/champion-icons/Vayne.png'
), (
  'Veigar',
  '/images/champion-icons/Veigar.png'
), (
  'Velkoz',
  '/images/champion-icons/Velkoz.png'
), (
  'Vex',
  '/images/champion-icons/Vex.png'
), (
  'Vi',
  '/images/champion-icons/Vi.png'
), (
  'Viego',
  '/images/champion-icons/Viego.png'
), (
  'Viktor',
  '/images/champion-icons/Viktor.png'
), (
  'Vladimir',
  '/images/champion-icons/Vladimir.png'
), (
  'Volibear',
  '/images/champion-icons/Volibear.png'
), (
  'Warwick',
  '/images/champion-icons/Warwick.png'
), (
  'Wukong',
  '/images/champion-icons/Wukong.png'
), (
  'Xayah',
  '/images/champion-icons/Xayah.png'
), (
  'Xerath',
  '/images/champion-icons/Xerath.png'
), (
  'Xin Zhao',
  '/images/champion-icons/XinZhao.png'
), (
  'Yasuo',
  '/images/champion-icons/Yasuo.png'
), (
  'Yone',
  '/images/champion-icons/Yone.png'
), (
  'Yorick',
  '/images/champion-icons/Yorick.png'
), (
  'Yuumi',
  '/images/champion-icons/Yuumi.png'
), (
  'Zac',
  '/images/champion-icons/Zac.png'
), (
  'Zed',
  '/images/champion-icons/Zed.png'
), (
  'Zeri',
  '/images/champion-icons/Zeri.png'
), (
  'Ziggs',
  '/images/champion-icons/Ziggs.png'
), (
  'Zilean',
  '/images/champion-icons/Zilean.png'
), (
  'Zoe',
  '/images/champion-icons/Zoe.png'
), (
  'Zyra',
  '/images/champion-icons/Zyra.png'
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

insert into "userChampions" (
  "userId",
  "championId"
) values (
  3,
  'Zed'
), (
  3,
  'Azir'
), (
  3,
  'Orianna'
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

insert into "userRoles" (
  "userId",
  "roleId"
) values (
  3,
  'Mid'
), (
  3,
  'Top'
);
