"use strict";

const { USER_TABLE } = require('../models/user.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(USER_TABLE, [
      {
        first_name: "Krysta",
        last_name: "Beelby",
        email: "kbeelby0@google.pl",
        phone: "555-600-5289",
        is_dark: true,
        address: "753 Welch Plaza",
      },
      {
        first_name: "Mirna",
        last_name: "Folca",
        email: "mfolca1@weebly.com",
        phone: "304-647-3736",
        is_dark: false,
        address: "416 Bunker Hill Place",
      },
      {
        first_name: "Sandy",
        last_name: "Brettoner",
        email: "sbrettoner2@salon.com",
        phone: "710-714-5296",
        is_dark: false,
        address: "2 Canary Trail",
      },
      {
        first_name: "Rozella",
        last_name: "Bugbee",
        email: "rbugbee3@npr.org",
        phone: "621-922-3119",
        is_dark: true,
        address: "7883 Cherokee Park",
      },
      {
        first_name: "Ransell",
        last_name: "Anthiftle",
        email: "ranthiftle4@sitemeter.com",
        phone: "681-177-5192",
        is_dark: false,
        address: "21446 Hermina Drive",
      },
      {
        first_name: "Koo",
        last_name: "McIlvenny",
        email: "kmcilvenny5@theguardian.com",
        phone: "992-168-6146",
        is_dark: false,
        address: "0340 Coolidge Street",
      },
      {
        first_name: "Rick",
        last_name: "Notman",
        email: "rnotman6@comcast.net",
        phone: "648-263-8904",
        is_dark: true,
        address: "3450 Superior Center",
      },
      {
        first_name: "Penny",
        last_name: "Perfect",
        email: "pperfect7@so-net.ne.jp",
        phone: "391-187-8726",
        is_dark: true,
        address: "502 Prairie Rose Avenue",
      },
      {
        first_name: "Amalee",
        last_name: "Blazej",
        email: "ablazej8@prlog.org",
        phone: "720-937-2546",
        is_dark: false,
        address: "9397 Dakota Pass",
      },
      {
        first_name: "Arne",
        last_name: "Breeder",
        email: "abreeder9@acquirethisname.com",
        phone: "320-486-1290",
        is_dark: false,
        address: "3 Crest Line Pass",
      },
      {
        first_name: "Lizbeth",
        last_name: "Brockett",
        email: "lbrocketta@g.co",
        phone: "585-391-1544",
        is_dark: true,
        address: "74899 Lakeland Road",
      },
      {
        first_name: "Lonnard",
        last_name: "Phelips",
        email: "lphelipsb@mozilla.org",
        phone: "440-429-4461",
        is_dark: false,
        address: "50975 Briar Crest Avenue",
      },
      {
        first_name: "Della",
        last_name: "Fayne",
        email: "dfaynec@nps.gov",
        phone: "792-595-6869",
        is_dark: true,
        address: "50436 Monument Crossing",
      },
      {
        first_name: "Felic",
        last_name: "Barge",
        email: "fbarged@eepurl.com",
        phone: "255-861-7247",
        is_dark: true,
        address: "49 Fair Oaks Place",
      },
      {
        first_name: "Kasper",
        last_name: "Grayne",
        email: "kgraynee@bloomberg.com",
        phone: "955-299-9466",
        is_dark: false,
        address: "4 Pearson Place",
      },
      {
        first_name: "Neel",
        last_name: "de Cullip",
        email: "ndecullipf@go.com",
        phone: "633-168-2845",
        is_dark: false,
        address: "294 Doe Crossing Junction",
      },
      {
        first_name: "Chris",
        last_name: "Hastwall",
        email: "chastwallg@wsj.com",
        phone: "448-767-0508",
        is_dark: true,
        address: "88852 Kinsman Court",
      },
      {
        first_name: "Ody",
        last_name: "Palatini",
        email: "opalatinih@ibm.com",
        phone: "882-911-3625",
        is_dark: true,
        address: "750 Kropf Court",
      },
      {
        first_name: "Holden",
        last_name: "Bevan",
        email: "hbevani@thetimes.co.uk",
        phone: "275-225-5957",
        is_dark: false,
        address: "5 Myrtle Road",
      },
      {
        first_name: "Jabez",
        last_name: "Coburn",
        email: "jcoburnj@archive.org",
        phone: "506-911-0527",
        is_dark: true,
        address: "42434 Roxbury Way",
      },
      {
        first_name: "Job",
        last_name: "Callan",
        email: "jcallank@mapquest.com",
        phone: "991-763-1652",
        is_dark: false,
        address: "46 Anthes Hill",
      },
      {
        first_name: "Dolly",
        last_name: "Paskerful",
        email: "dpaskerfull@census.gov",
        phone: "652-242-1022",
        is_dark: true,
        address: "22 Graceland Trail",
      },
      {
        first_name: "Shaun",
        last_name: "Elphick",
        email: "selphickm@reddit.com",
        phone: "694-974-2251",
        is_dark: true,
        address: "3 Surrey Pass",
      },
      {
        first_name: "Rozanne",
        last_name: "Sawers",
        email: "rsawersn@chicagotribune.com",
        phone: "793-838-5112",
        is_dark: false,
        address: "4 Corry Court",
      },
      {
        first_name: "Fax",
        last_name: "Maciejak",
        email: "fmaciejako@symantec.com",
        phone: "404-531-2941",
        is_dark: true,
        address: "9 Aberg Point",
      },
      {
        first_name: "Sella",
        last_name: "Haldenby",
        email: "shaldenbyp@cnet.com",
        phone: "195-349-0918",
        is_dark: false,
        address: "9649 Reinke Parkway",
      },
      {
        first_name: "Meriel",
        last_name: "Ruste",
        email: "mrusteq@lulu.com",
        phone: "654-677-1488",
        is_dark: true,
        address: "99303 Elka Plaza",
      },
      {
        first_name: "Dana",
        last_name: "Galbreath",
        email: "dgalbreathr@rediff.com",
        phone: "292-546-2956",
        is_dark: false,
        address: "94 Iowa Avenue",
      },
      {
        first_name: "Patrick",
        last_name: "Skett",
        email: "psketts@cpanel.net",
        phone: "807-922-2518",
        is_dark: true,
        address: "1252 Kipling Parkway",
      },
      {
        first_name: "Taylor",
        last_name: "Whittet",
        email: "twhittett@issuu.com",
        phone: "980-232-7211",
        is_dark: true,
        address: "8 Darwin Trail",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete(USER_TABLE, null, {});
  },
};
