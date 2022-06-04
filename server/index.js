require('dotenv/config');
const path = require('path');
const db = require('./db');
const express = require('express');
const errorMiddleware = require('./error-middleware');

const app = express();
const publicPath = path.join(__dirname, 'public');

if (process.env.NODE_ENV === 'development') {
  app.use(require('./dev-middleware')(publicPath));
}

app.use(express.static(publicPath));

// get user card data
app.get('/api/users', (req, res, next) => {
  const sql = `
    select "u"."userId",
            "u"."name",
            "u"."imageUrl",
            "c"."champions",
            "rl"."roles",
            "rk".*
      from "users" as "u"
    join "ranks" as "rk" using ("rankId")
    left join lateral (
      select json_agg("c") as "champions"
      from (
        select "c".*
        from "champions" as "c"
        join "userChampions" as "uc" using ("championId")
        where "uc"."userId" = "u"."userId"
      ) as "c"
    ) as "c" on true
    left join lateral (
      select json_agg("rl") as "roles"
      from (
        select "rl".*
        from "roles" as "rl"
        join "userRoles" as "url" using ("roleId")
        where "url"."userId" = "u"."userId"
      ) as "rl"
    ) as "rl" on true
  `;
  db.query(sql)
    .then(result => res.json(result.rows))
    .catch(err => next(err));
});

// get ranks data
app.get('/api/ranks', (req, res, next) => {
  const sql = `
        select  "rankId",
                "rankUrl"
    from "ranks"
  `;

  db.query(sql)
    .then(result => res.json(result.rows))
    .catch(err => next(err));

});

// get roles data
app.get('/api/roles', (req, res, next) => {
  const sql = `
        select  "roleId",
                "roleUrl"
    from "roles"
  `;

  db.query(sql)
    .then(result => res.json(result.rows))
    .catch(err => next(err));

});

// get roles data
app.get('/api/champions', (req, res, next) => {
  const sql = `
        select  "championId",
                "championUrl"
    from "champions"
  `;

  db.query(sql)
    .then(result => res.json(result.rows))
    .catch(err => next(err));

});

// get user card data by searching by rank
app.get('/api/filter', (req, res, next) => {
  const rankId = req.query.rankId;
  // const roleId = req.query.roleId;
  // const { champion } = req.query.champion;
  const sql = `
    select "u"."userId",
            "u"."name",
            "u"."imageUrl",
            "c"."champions",
            "rl"."roles",
            "rk".*
      from "users" as "u"
    join "ranks" as "rk" using ("rankId")
    left join lateral (
      select json_agg("c") as "champions"
      from (
        select "c".*
        from "champions" as "c"
        join "userChampions" as "uc" using ("championId")
        where "uc"."userId" = "u"."userId"
      ) as "c"
    ) as "c" on true
    left join lateral (
      select json_agg("rl") as "roles"
      from (
        select "rl".*
        from "roles" as "rl"
        join "userRoles" as "url" using ("roleId")
        where "url"."userId" = "u"."userId"
      ) as "rl"
    ) as "rl" on true
    where "rankId" = $1
  `;

  const query = [rankId];
  db.query(sql, query)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});

// api route
// app.get /api/search
// req.query not req.params
/// httpie docs on http strings/params
// 'key'=='value'
// rank == gold
// console.log( req.query.rank)

// app.get(/api/users), (req,res)
// const { rank } = req.query
// select twhere rank = the rank
// http -v get jsonplaceholder.typicode.com/posts?userId=2
