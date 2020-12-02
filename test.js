const orderByKey =  require('./index.js');


const jsonData = {
    Platforms: "das",
    system: {
      user:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
      info: {
        processors: 152,
        model: "and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
      }
    },
    details: {
      wit: "no",
      buildPlatforms: "anasa",
      system: {
        user:
          "and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
          meminfo: {
          processors: 25,
          model: "and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        mine: {
          memoFree: "312312",
          memo: "12312"
        }
      },
      incrementalNum: 0,
      con: 0,
      plt: ["internal"],
      storage: "blocked",
      start: "Fri Nov 27 1987-12-12",
      bld: {
        os: "1987-12-12",
        ns: ["das", "da"],
        J_M_I: "lorem text ipsum"
      }
    },
    zc: {
      sg: "1987-12-12",
      ma: ["ds", "ds"],
      lns: "lorem text ipsum"
    },
    ws: "what/'s up guys",
    options: "alias-j64",
    img: [
      "and more recently",
      "with desktop ",
      "publishing ",
      "software like ",
      "Aldus PageMaker including versions",
      "Aldus PageMaker of Lorem Ipsum",
      "Aldus Ipsum"
    ],
    cmd:
      "ith desktop publishing software li",
    target: [
        "and more recently",
      "with desktop ",
      "publishing ",
      "software like ",
      "Aldus PageMaker including versions",
      "Aldus PageMaker of Lorem Ipsum",
      "Aldus Ipsum"
    ],
    scripts: "12",
    build: ["md"],
    migration: "fg",
    house: "dadse",
    platform: 1,
    home: "das",
    most: "ads-das-da",
    userId: "faleds",
    os: "da",
    site: "os",
    status: "success"
  };

const c = orderByKey(jsonData, 'ws,build,details.buildPlatforms,details.storage, details.system.meminfo');
  
console.log(JSON.stringify(c, null, 2));

