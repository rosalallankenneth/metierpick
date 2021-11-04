const rawDataset = [
  {
    "PSCED_Name": "Accountancy",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "695",
        "graduates": "88"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "1260",
        "graduates": "284"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga Sibugay",
        "enrollment": "35",
        "graduates": "11"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "477",
        "graduates": "89"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Camiguin",
        "enrollment": "54",
        "graduates": "14"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "736",
        "graduates": "172"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "525",
        "graduates": "115"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "1550",
        "graduates": "277"
      },
      {
        "region": "11 - Davao Region",
        "province": "Compostela Valley",
        "enrollment": "67",
        "graduates": "16"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "1541",
        "graduates": "108"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "4221",
        "graduates": "375"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "531",
        "graduates": "69"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "1984",
        "graduates": "194"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "192",
        "graduates": "39"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Basilan",
        "enrollment": "28",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "435",
        "graduates": "28"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "356",
        "graduates": "56"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Sulu",
        "enrollment": "50",
        "graduates": "10"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "335",
        "graduates": "32"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "136",
        "graduates": "14"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "266",
        "graduates": "114"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "188",
        "graduates": "20"
      }
    ]
  },
  {
    "PSCED_Name": "Accounting Technology",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "189",
        "graduates": "270"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "129",
        "graduates": "233"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "86",
        "graduates": "101"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "3",
        "graduates": "27"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "65",
        "graduates": "87"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "173",
        "graduates": "203"
      },
      {
        "region": "11 - Davao Region",
        "province": "Compostela Valley",
        "enrollment": "11",
        "graduates": "15"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "1065",
        "graduates": "278"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "783",
        "graduates": "538"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Occidental",
        "enrollment": "17",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "38",
        "graduates": "208"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sarangani",
        "enrollment": "96",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "500",
        "graduates": "452"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "119",
        "graduates": "238"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Basilan",
        "enrollment": "7",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "31",
        "graduates": "72"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "291",
        "graduates": "321"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "59",
        "graduates": "60"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "66",
        "graduates": "39"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "18",
        "graduates": "13"
      }
    ]
  },
  {
    "PSCED_Name": "Aeronautical Engineering",
    "description": "",
    "statsData": [
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "132",
        "graduates": "16"
      }
    ]
  },
  {
    "PSCED_Name": "Agri-Business",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "32",
        "graduates": "38"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "24",
        "graduates": "9"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "56",
        "graduates": "17"
      },
      {
        "region": "11 - Davao Region",
        "province": "Compostela Valley",
        "enrollment": "269",
        "graduates": "36"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "428",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "1011",
        "graduates": "306"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Occidental",
        "enrollment": "379",
        "graduates": "34"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "391",
        "graduates": "133"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sarangani",
        "enrollment": "510",
        "graduates": "21"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "388",
        "graduates": "73"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Basilan",
        "enrollment": "29",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "55",
        "graduates": "12"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "250",
        "graduates": "95"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "393",
        "graduates": "39"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "275",
        "graduates": "115"
      }
    ]
  },
  {
    "PSCED_Name": "Agri-Business Management/Administration",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "247",
        "graduates": "30"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "294",
        "graduates": "115"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Oriental",
        "enrollment": "679",
        "graduates": "122"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "274",
        "graduates": "27"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "105",
        "graduates": "13"
      }
    ]
  },
  {
    "PSCED_Name": "Agricultural Chemistry",
    "description": "",
    "statsData": [
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Agricultural Development",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "71",
        "graduates": "10"
      }
    ]
  },
  {
    "PSCED_Name": "Agricultural Economics ",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "12",
        "graduates": "1"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "1",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "83",
        "graduates": "78"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "216",
        "graduates": "27"
      }
    ]
  },
  {
    "PSCED_Name": "Agricultural Education",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "28",
        "graduates": "21"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "54",
        "graduates": "13"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "14",
        "graduates": "1"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "0",
        "graduates": "61"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "607",
        "graduates": "30"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "172",
        "graduates": "49"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Sulu",
        "enrollment": "243",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "599",
        "graduates": "91"
      }
    ]
  },
  {
    "PSCED_Name": "Agricultural Engineering",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "193",
        "graduates": "25"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "46",
        "graduates": "26"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "117",
        "graduates": "46"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "13",
        "graduates": "2"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "43",
        "graduates": "9"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "157",
        "graduates": "30"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "91",
        "graduates": "46"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Occidental",
        "enrollment": "15",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "259",
        "graduates": "42"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "185",
        "graduates": "10"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "89",
        "graduates": "13"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "287",
        "graduates": "8"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "198",
        "graduates": "28"
      }
    ]
  },
  {
    "PSCED_Name": "Agricultural Extension",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "7",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "40",
        "graduates": "12"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "5",
        "graduates": "1"
      }
    ]
  },
  {
    "PSCED_Name": "Agricultural Management",
    "description": "",
    "statsData": [
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "6",
        "graduates": "2"
      }
    ]
  },
  {
    "PSCED_Name": "Agricultural Science",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "248",
        "graduates": "38"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Camiguin",
        "enrollment": "102",
        "graduates": "31"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "74",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "20",
        "graduates": "66"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "119",
        "graduates": "2"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "71",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Agricultural Technology",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "210",
        "graduates": "40"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "596",
        "graduates": "228"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga Sibugay",
        "enrollment": "722",
        "graduates": "34"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Camiguin",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "43",
        "graduates": "11"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "282",
        "graduates": "63"
      },
      {
        "region": "11 - Davao Region",
        "province": "Compostela Valley",
        "enrollment": "1050",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "352",
        "graduates": "115"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "153",
        "graduates": "49"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Occidental",
        "enrollment": "54",
        "graduates": "74"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Oriental",
        "enrollment": "357",
        "graduates": "191"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "359",
        "graduates": "89"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "499",
        "graduates": "321"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "497",
        "graduates": "154"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Basilan",
        "enrollment": "182",
        "graduates": "28"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "228",
        "graduates": "61"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "280",
        "graduates": "81"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Sulu",
        "enrollment": "13",
        "graduates": "11"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "268",
        "graduates": "40"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "387",
        "graduates": "155"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "714",
        "graduates": "172"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "1198",
        "graduates": "229"
      }
    ]
  },
  {
    "PSCED_Name": "Agricultural Technology Education",
    "description": "",
    "statsData": [
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "51",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Agriculture ",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "142",
        "graduates": "63"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "942",
        "graduates": "127"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga Sibugay",
        "enrollment": "255",
        "graduates": "112"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "1944",
        "graduates": "394"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Camiguin",
        "enrollment": "64",
        "graduates": "80"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "241",
        "graduates": "114"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "384",
        "graduates": "35"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "1205",
        "graduates": "188"
      },
      {
        "region": "11 - Davao Region",
        "province": "Compostela Valley",
        "enrollment": "0",
        "graduates": "41"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "413",
        "graduates": "253"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "710",
        "graduates": "65"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Occidental",
        "enrollment": "125",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Oriental",
        "enrollment": "95",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "2688",
        "graduates": "549"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "2546",
        "graduates": "455"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "26",
        "graduates": "22"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Basilan",
        "enrollment": "68",
        "graduates": "10"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "754",
        "graduates": "67"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "683",
        "graduates": "122"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Sulu",
        "enrollment": "701",
        "graduates": "73"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "645",
        "graduates": "38"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "528",
        "graduates": "33"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "416",
        "graduates": "108"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "132",
        "graduates": "48"
      }
    ]
  },
  {
    "PSCED_Name": "Agro-Forestry",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "37",
        "graduates": "21"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "215",
        "graduates": "14"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "144",
        "graduates": "18"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "206",
        "graduates": "2"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "286",
        "graduates": "79"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "275",
        "graduates": "90"
      }
    ]
  },
  {
    "PSCED_Name": "Agronomy ",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "18",
        "graduates": "2"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "15",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "2",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "10",
        "graduates": "2"
      }
    ]
  },
  {
    "PSCED_Name": "Aircraft Maintenance Technology",
    "description": "",
    "statsData": [
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "1313",
        "graduates": "194"
      }
    ]
  },
  {
    "PSCED_Name": "Airline Business Administration/Management",
    "description": "",
    "statsData": [
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "32",
        "graduates": "15"
      }
    ]
  },
  {
    "PSCED_Name": "Animal Husbandry",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Animal Science",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "44",
        "graduates": "2"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "5",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "1",
        "graduates": "2"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "13",
        "graduates": "10"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "2",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Animal Technology",
    "description": "",
    "statsData": [
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Anthropology",
    "description": "",
    "statsData": [
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "97",
        "graduates": "8"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Applied Mathematics",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "145",
        "graduates": "9"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "98",
        "graduates": "35"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "55",
        "graduates": "2"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "216",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Applied Physics",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "72",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Applied Science",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "11",
        "graduates": "12"
      }
    ]
  },
  {
    "PSCED_Name": "Applied Social Research",
    "description": "",
    "statsData": [
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "11",
        "graduates": "1"
      }
    ]
  },
  {
    "PSCED_Name": "Applied Statistics",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "2",
        "graduates": "2"
      }
    ]
  },
  {
    "PSCED_Name": "Aquaculture",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "210",
        "graduates": "50"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "17",
        "graduates": "1"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Occidental",
        "enrollment": "1",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Sulu",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "6",
        "graduates": "1"
      }
    ]
  },
  {
    "PSCED_Name": "Arabic Education (teaching Arabic)",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "233",
        "graduates": "47"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "118",
        "graduates": "8"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "54",
        "graduates": "10"
      }
    ]
  },
  {
    "PSCED_Name": "Architectural Drafting",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "100",
        "graduates": "115"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "1",
        "graduates": "3"
      }
    ]
  },
  {
    "PSCED_Name": "Architectural Science/Technology",
    "description": "",
    "statsData": [
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "183",
        "graduates": "100"
      }
    ]
  },
  {
    "PSCED_Name": "Architecture",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "546",
        "graduates": "36"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "107",
        "graduates": "15"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "121",
        "graduates": "17"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "660",
        "graduates": "43"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "2634",
        "graduates": "124"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "158",
        "graduates": "24"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "128",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "49",
        "graduates": "6"
      }
    ]
  },
  {
    "PSCED_Name": "Art Education",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "129",
        "graduates": "0"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "18",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "16",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "42",
        "graduates": "16"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Arts",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "50",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "99",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Arts (Classical/Philosophy)",
    "description": "",
    "statsData": [
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "78",
        "graduates": "26"
      }
    ]
  },
  {
    "PSCED_Name": "Asian Studies/Asian Culture",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "91",
        "graduates": "43"
      }
    ]
  },
  {
    "PSCED_Name": "Automotive Technology",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "398",
        "graduates": "59"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "258",
        "graduates": "119"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "174",
        "graduates": "112"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "1",
        "graduates": "2"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Aviation Electronics/Electrical  Engineering",
    "description": "",
    "statsData": [
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "77",
        "graduates": "15"
      }
    ]
  },
  {
    "PSCED_Name": "Banking and Finance",
    "description": "",
    "statsData": [
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "204",
        "graduates": "69"
      }
    ]
  },
  {
    "PSCED_Name": "Basic Engineering",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "44",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "53",
        "graduates": "5"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "12",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "139",
        "graduates": "7"
      }
    ]
  },
  {
    "PSCED_Name": "Biology",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "20",
        "graduates": "1"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "437",
        "graduates": "85"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "384",
        "graduates": "71"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Camiguin",
        "enrollment": "51",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "798",
        "graduates": "305"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "95",
        "graduates": "4"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "250",
        "graduates": "56"
      },
      {
        "region": "11 - Davao Region",
        "province": "Compostela Valley",
        "enrollment": "24",
        "graduates": "5"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "0",
        "graduates": "3"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "847",
        "graduates": "428"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Oriental",
        "enrollment": "123",
        "graduates": "43"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "196",
        "graduates": "47"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "75",
        "graduates": "43"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "316",
        "graduates": "85"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "302",
        "graduates": "15"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "22",
        "graduates": "23"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Sulu",
        "enrollment": "372",
        "graduates": "22"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "370",
        "graduates": "51"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "275",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "300",
        "graduates": "46"
      }
    ]
  },
  {
    "PSCED_Name": "Biology Education",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "1",
        "graduates": "1"
      }
    ]
  },
  {
    "PSCED_Name": "Broadcast",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "157",
        "graduates": "30"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Building Technology",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "60",
        "graduates": "105"
      }
    ]
  },
  {
    "PSCED_Name": "Business Administration",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "4498",
        "graduates": "1098"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "2874",
        "graduates": "742"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga Sibugay",
        "enrollment": "1239",
        "graduates": "295"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "7397",
        "graduates": "1296"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Camiguin",
        "enrollment": "325",
        "graduates": "96"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "2293",
        "graduates": "542"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "3848",
        "graduates": "759"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "11138",
        "graduates": "2755"
      },
      {
        "region": "11 - Davao Region",
        "province": "Compostela Valley",
        "enrollment": "2168",
        "graduates": "501"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "7866",
        "graduates": "1404"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "11495",
        "graduates": "2327"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Occidental",
        "enrollment": "5",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Oriental",
        "enrollment": "2222",
        "graduates": "533"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "2208",
        "graduates": "729"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "10076",
        "graduates": "2720"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "466",
        "graduates": "143"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Basilan",
        "enrollment": "3",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "996",
        "graduates": "71"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "1535",
        "graduates": "530"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Sulu",
        "enrollment": "1899",
        "graduates": "399"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "16",
        "graduates": "4"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "4382",
        "graduates": "848"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "1065",
        "graduates": "291"
      },
      {
        "region": "16 - Caraga",
        "province": "Dinagat Islands",
        "enrollment": "226",
        "graduates": "41"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "1352",
        "graduates": "343"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "3508",
        "graduates": "784"
      }
    ]
  },
  {
    "PSCED_Name": "Business Administration/Management & Accountancy",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "166",
        "graduates": "0"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "92",
        "graduates": "44"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "44",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "179",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "45",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "190",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "145",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "696",
        "graduates": "124"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "88",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "39",
        "graduates": "2"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Sulu",
        "enrollment": "43",
        "graduates": "37"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "154",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Business Data Processing",
    "description": "",
    "statsData": [
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "0",
        "graduates": "1"
      }
    ]
  },
  {
    "PSCED_Name": "Business Economics",
    "description": "",
    "statsData": [
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "110",
        "graduates": "14"
      }
    ]
  },
  {
    "PSCED_Name": "Business Education",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "1",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Business Entrepreneurship",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "310",
        "graduates": "43"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "486",
        "graduates": "4"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "274",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "4",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "780",
        "graduates": "21"
      },
      {
        "region": "11 - Davao Region",
        "province": "Compostela Valley",
        "enrollment": "1947",
        "graduates": "298"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "874",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "722",
        "graduates": "217"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "319",
        "graduates": "105"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "158",
        "graduates": "36"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "167",
        "graduates": "93"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "0",
        "graduates": "5"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Sulu",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "26",
        "graduates": "6"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "107",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "60",
        "graduates": "20"
      }
    ]
  },
  {
    "PSCED_Name": "Business Management",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "111",
        "graduates": "6"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Camiguin",
        "enrollment": "1",
        "graduates": "3"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "22",
        "graduates": "13"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "167",
        "graduates": "41"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "445",
        "graduates": "187"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "305",
        "graduates": "37"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "4",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Ceramics Engineering",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "133",
        "graduates": "23"
      }
    ]
  },
  {
    "PSCED_Name": "Chemical Engineering",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "165",
        "graduates": "34"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "167",
        "graduates": "39"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "493",
        "graduates": "21"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "141",
        "graduates": "7"
      }
    ]
  },
  {
    "PSCED_Name": "Chemical Engineering Technology",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "10",
        "graduates": "6"
      }
    ]
  },
  {
    "PSCED_Name": "Chemical Technology",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Chemistry",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "54",
        "graduates": "36"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "131",
        "graduates": "10"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "141",
        "graduates": "33"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "149",
        "graduates": "22"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "74",
        "graduates": "9"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "63",
        "graduates": "12"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "10",
        "graduates": "7"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "118",
        "graduates": "8"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "100",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Chemistry Education",
    "description": "",
    "statsData": [
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "13",
        "graduates": "1"
      }
    ]
  },
  {
    "PSCED_Name": "Childhood Education",
    "description": "",
    "statsData": [
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "2",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Christian Education",
    "description": "",
    "statsData": [
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "102",
        "graduates": "39"
      }
    ]
  },
  {
    "PSCED_Name": "Civil Engineering",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "590",
        "graduates": "105"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "2184",
        "graduates": "313"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "486",
        "graduates": "98"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "930",
        "graduates": "160"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "401",
        "graduates": "38"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "2023",
        "graduates": "284"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "286",
        "graduates": "80"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "4713",
        "graduates": "285"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Oriental",
        "enrollment": "387",
        "graduates": "32"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "671",
        "graduates": "48"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "1438",
        "graduates": "110"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "223",
        "graduates": "37"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Basilan",
        "enrollment": "37",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "564",
        "graduates": "29"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "788",
        "graduates": "123"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "46",
        "graduates": "7"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "651",
        "graduates": "9"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "146",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "573",
        "graduates": "74"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "271",
        "graduates": "76"
      }
    ]
  },
  {
    "PSCED_Name": "Clinical Psychology",
    "description": "",
    "statsData": [
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "37",
        "graduates": "3"
      }
    ]
  },
  {
    "PSCED_Name": "Commerce",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Basilan",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "545",
        "graduates": "91"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "159",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Sulu",
        "enrollment": "41",
        "graduates": "40"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Commercial Science/Arts",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Communication",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "0",
        "graduates": "3"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "31",
        "graduates": "5"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "53",
        "graduates": "1"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "89",
        "graduates": "29"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "60",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "268",
        "graduates": "16"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "52",
        "graduates": "23"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sarangani",
        "enrollment": "22",
        "graduates": "11"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "538",
        "graduates": "124"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "4",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "35",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "40",
        "graduates": "13"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Sulu",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "45",
        "graduates": "43"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "6",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Communication Arts (Pilipino, English)",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "4",
        "graduates": "4"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "86",
        "graduates": "35"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Community Development",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "306",
        "graduates": "156"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "185",
        "graduates": "66"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "48",
        "graduates": "15"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "54",
        "graduates": "26"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "182",
        "graduates": "29"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "732",
        "graduates": "119"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "141",
        "graduates": "46"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "601",
        "graduates": "307"
      }
    ]
  },
  {
    "PSCED_Name": "Community Health",
    "description": "",
    "statsData": [
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "31",
        "graduates": "2"
      }
    ]
  },
  {
    "PSCED_Name": "Community Health Development and Management",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "17",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Computer Applications",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "160",
        "graduates": "1"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "28",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Computer Engineering",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "139",
        "graduates": "36"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "341",
        "graduates": "92"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga Sibugay",
        "enrollment": "17",
        "graduates": "4"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "181",
        "graduates": "10"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "32",
        "graduates": "7"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "470",
        "graduates": "100"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "633",
        "graduates": "41"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "302",
        "graduates": "42"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "226",
        "graduates": "33"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "152",
        "graduates": "29"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "231",
        "graduates": "61"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Sulu",
        "enrollment": "290",
        "graduates": "57"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "4",
        "graduates": "2"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "54",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "223",
        "graduates": "43"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "72",
        "graduates": "12"
      }
    ]
  },
  {
    "PSCED_Name": "Computer Management",
    "description": "",
    "statsData": [
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Basilan",
        "enrollment": "33",
        "graduates": "6"
      }
    ]
  },
  {
    "PSCED_Name": "Computer Science",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "853",
        "graduates": "133"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur",
        "enrollment": "2",
        "graduates": "1"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "2174",
        "graduates": "186"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga Sibugay",
        "enrollment": "1002",
        "graduates": "156"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Camiguin",
        "enrollment": "78",
        "graduates": "40"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "485",
        "graduates": "111"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "215",
        "graduates": "33"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "297",
        "graduates": "69"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "238",
        "graduates": "44"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "644",
        "graduates": "132"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "347",
        "graduates": "102"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "275",
        "graduates": "86"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "90",
        "graduates": "6"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Basilan",
        "enrollment": "277",
        "graduates": "17"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "464",
        "graduates": "84"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "170",
        "graduates": "38"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Sulu",
        "enrollment": "584",
        "graduates": "107"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "724",
        "graduates": "70"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "274",
        "graduates": "36"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "173",
        "graduates": "61"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "1390",
        "graduates": "231"
      }
    ]
  },
  {
    "PSCED_Name": "Computer Secretarial",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "1",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Computer Technology",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "147",
        "graduates": "23"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "422",
        "graduates": "99"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "20",
        "graduates": "11"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "1",
        "graduates": "2"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "29",
        "graduates": "6"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "33",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "148",
        "graduates": "91"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Occidental",
        "enrollment": "21",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "77",
        "graduates": "92"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "412",
        "graduates": "188"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "217",
        "graduates": "113"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Basilan",
        "enrollment": "224",
        "graduates": "108"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "283",
        "graduates": "61"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "83",
        "graduates": "46"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Sulu",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "48",
        "graduates": "26"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "97",
        "graduates": "46"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "1",
        "graduates": "2"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "19",
        "graduates": "11"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "2",
        "graduates": "14"
      }
    ]
  },
  {
    "PSCED_Name": "Construction Technology",
    "description": "",
    "statsData": [
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "1",
        "graduates": "1"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "57",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Cooperative Management",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "26",
        "graduates": "9"
      }
    ]
  },
  {
    "PSCED_Name": "Counseling Psychology",
    "description": "",
    "statsData": [
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "24",
        "graduates": "5"
      }
    ]
  },
  {
    "PSCED_Name": "Creative and Performing  Arts",
    "description": "",
    "statsData": [
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "82",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Criminal Justice",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "72",
        "graduates": "1"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "41",
        "graduates": "8"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "55",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "68",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "41",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "7",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Criminology",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "2879",
        "graduates": "646"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur",
        "enrollment": "135",
        "graduates": "0"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "7394",
        "graduates": "1267"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga Sibugay",
        "enrollment": "1866",
        "graduates": "237"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "2239",
        "graduates": "377"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "2420",
        "graduates": "427"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "2215",
        "graduates": "278"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "5627",
        "graduates": "948"
      },
      {
        "region": "11 - Davao Region",
        "province": "Compostela Valley",
        "enrollment": "882",
        "graduates": "59"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "5260",
        "graduates": "622"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "6842",
        "graduates": "625"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Occidental",
        "enrollment": "89",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Oriental",
        "enrollment": "1075",
        "graduates": "322"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "3174",
        "graduates": "497"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sarangani",
        "enrollment": "79",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "6806",
        "graduates": "932"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "2363",
        "graduates": "706"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Basilan",
        "enrollment": "675",
        "graduates": "85"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "1044",
        "graduates": "31"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "3322",
        "graduates": "471"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Sulu",
        "enrollment": "507",
        "graduates": "80"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "319",
        "graduates": "71"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "2237",
        "graduates": "159"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "1597",
        "graduates": "218"
      },
      {
        "region": "16 - Caraga",
        "province": "Dinagat Islands",
        "enrollment": "240",
        "graduates": "34"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "2401",
        "graduates": "260"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "1555",
        "graduates": "242"
      }
    ]
  },
  {
    "PSCED_Name": "Criminology and Police Administration",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "36",
        "graduates": "9"
      }
    ]
  },
  {
    "PSCED_Name": "Crop Protection",
    "description": "",
    "statsData": [
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "24",
        "graduates": "6"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Crop Science",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "7",
        "graduates": "4"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "44",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Culture Heritage Studies",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "10",
        "graduates": "1"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "24",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Curriculum and Instruction",
    "description": "",
    "statsData": [
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Customs Administration",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "235",
        "graduates": "45"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "148",
        "graduates": "37"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "744",
        "graduates": "250"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "424",
        "graduates": "112"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "65",
        "graduates": "28"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "139",
        "graduates": "21"
      }
    ]
  },
  {
    "PSCED_Name": "Dental Medicine",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "124",
        "graduates": "3"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "627",
        "graduates": "56"
      }
    ]
  },
  {
    "PSCED_Name": "Development Communication",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "383",
        "graduates": "32"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "246",
        "graduates": "63"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "98",
        "graduates": "47"
      },
      {
        "region": "11 - Davao Region",
        "province": "Compostela Valley",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "105",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Occidental",
        "enrollment": "40",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Oriental",
        "enrollment": "84",
        "graduates": "25"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "153",
        "graduates": "31"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "25",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "1",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Development Economics",
    "description": "",
    "statsData": [
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "45",
        "graduates": "2"
      }
    ]
  },
  {
    "PSCED_Name": "Development Management/Administration",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "41",
        "graduates": "2"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "114",
        "graduates": "7"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "210",
        "graduates": "89"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Sulu",
        "enrollment": "9",
        "graduates": "1"
      }
    ]
  },
  {
    "PSCED_Name": "Development Studies",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "0",
        "graduates": "1"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "66",
        "graduates": "15"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "42",
        "graduates": "5"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "30",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "16",
        "graduates": "19"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "3",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "44",
        "graduates": "6"
      }
    ]
  },
  {
    "PSCED_Name": "Divinity",
    "description": "",
    "statsData": [
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "15",
        "graduates": "5"
      }
    ]
  },
  {
    "PSCED_Name": "Early Childhood Education",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "21",
        "graduates": "0"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "20",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "416",
        "graduates": "18"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "109",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "1",
        "graduates": "4"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "226",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Compostela Valley",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "60",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "162",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Oriental",
        "enrollment": "84",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "16",
        "graduates": "1"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sarangani",
        "enrollment": "20",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "1131",
        "graduates": "36"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "292",
        "graduates": "50"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Sulu",
        "enrollment": "8",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "23",
        "graduates": "35"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "1",
        "graduates": "6"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "15",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Economics",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "4",
        "graduates": "14"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "232",
        "graduates": "37"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "279",
        "graduates": "102"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "80",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "43",
        "graduates": "13"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "101",
        "graduates": "69"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "397",
        "graduates": "45"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "81",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "115",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "520",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "1",
        "graduates": "2"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "191",
        "graduates": "21"
      }
    ]
  },
  {
    "PSCED_Name": "Economics Education",
    "description": "",
    "statsData": [
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "18",
        "graduates": "1"
      }
    ]
  },
  {
    "PSCED_Name": "Education",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "704",
        "graduates": "103"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "5220",
        "graduates": "470"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga Sibugay",
        "enrollment": "56",
        "graduates": "4"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "617",
        "graduates": "136"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Camiguin",
        "enrollment": "111",
        "graduates": "25"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "946",
        "graduates": "186"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "1393",
        "graduates": "241"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "928",
        "graduates": "142"
      },
      {
        "region": "11 - Davao Region",
        "province": "Compostela Valley",
        "enrollment": "299",
        "graduates": "72"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "681",
        "graduates": "36"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "2402",
        "graduates": "294"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Occidental",
        "enrollment": "120",
        "graduates": "45"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Oriental",
        "enrollment": "51",
        "graduates": "14"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "1371",
        "graduates": "191"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "859",
        "graduates": "82"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "38",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Basilan",
        "enrollment": "68",
        "graduates": "98"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "498",
        "graduates": "88"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "3640",
        "graduates": "423"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Sulu",
        "enrollment": "155",
        "graduates": "69"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "186",
        "graduates": "24"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "676",
        "graduates": "63"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "26",
        "graduates": "6"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "412",
        "graduates": "78"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "755",
        "graduates": "57"
      }
    ]
  },
  {
    "PSCED_Name": "Educational Administration and Supervision",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "832",
        "graduates": "62"
      }
    ]
  },
  {
    "PSCED_Name": "Educational Administration/Management",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "79",
        "graduates": "8"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "108",
        "graduates": "31"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "32",
        "graduates": "3"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "136",
        "graduates": "34"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "107",
        "graduates": "12"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "1474",
        "graduates": "283"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "9",
        "graduates": "4"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "99",
        "graduates": "5"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "277",
        "graduates": "6"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "77",
        "graduates": "3"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "148",
        "graduates": "42"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "24",
        "graduates": "4"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "39",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "44",
        "graduates": "20"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Educational Technology",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "0",
        "graduates": "3"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "152",
        "graduates": "13"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "144",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Electrical Engineering",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "246",
        "graduates": "43"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "479",
        "graduates": "90"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "145",
        "graduates": "24"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Camiguin",
        "enrollment": "146",
        "graduates": "28"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "629",
        "graduates": "121"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "120",
        "graduates": "14"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "658",
        "graduates": "89"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "1155",
        "graduates": "91"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "131",
        "graduates": "22"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "158",
        "graduates": "32"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "179",
        "graduates": "1"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "84",
        "graduates": "9"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "16",
        "graduates": "4"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "317",
        "graduates": "17"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "622",
        "graduates": "173"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "31",
        "graduates": "30"
      }
    ]
  },
  {
    "PSCED_Name": "Electrical Technology",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "357",
        "graduates": "55"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "372",
        "graduates": "130"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "1",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Electronics Engineering/Technology",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "41",
        "graduates": "0"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "381",
        "graduates": "68"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "259",
        "graduates": "95"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Camiguin",
        "enrollment": "66",
        "graduates": "5"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "253",
        "graduates": "107"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "27",
        "graduates": "13"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "718",
        "graduates": "145"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "610",
        "graduates": "77"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "172",
        "graduates": "6"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "186",
        "graduates": "32"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "26",
        "graduates": "7"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "269",
        "graduates": "8"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "192",
        "graduates": "9"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "289",
        "graduates": "101"
      }
    ]
  },
  {
    "PSCED_Name": "Electronics and Communications Engineering",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "2",
        "graduates": "10"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "306",
        "graduates": "68"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "82",
        "graduates": "52"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "67",
        "graduates": "9"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "28",
        "graduates": "16"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "53",
        "graduates": "8"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "83",
        "graduates": "4"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Elementary Education",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "3003",
        "graduates": "985"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "8910",
        "graduates": "1783"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga Sibugay",
        "enrollment": "3095",
        "graduates": "481"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "5440",
        "graduates": "1086"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Camiguin",
        "enrollment": "101",
        "graduates": "80"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "2366",
        "graduates": "666"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "2044",
        "graduates": "332"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "3479",
        "graduates": "1250"
      },
      {
        "region": "11 - Davao Region",
        "province": "Compostela Valley",
        "enrollment": "2420",
        "graduates": "381"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "3192",
        "graduates": "1011"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "2762",
        "graduates": "711"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Occidental",
        "enrollment": "42",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Oriental",
        "enrollment": "1011",
        "graduates": "354"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "1501",
        "graduates": "698"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sarangani",
        "enrollment": "278",
        "graduates": "161"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "4866",
        "graduates": "1547"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "1930",
        "graduates": "731"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Basilan",
        "enrollment": "1130",
        "graduates": "228"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "5126",
        "graduates": "751"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "5277",
        "graduates": "718"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Sulu",
        "enrollment": "2738",
        "graduates": "511"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "968",
        "graduates": "274"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "2145",
        "graduates": "676"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "1497",
        "graduates": "558"
      },
      {
        "region": "16 - Caraga",
        "province": "Dinagat Islands",
        "enrollment": "164",
        "graduates": "39"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "1273",
        "graduates": "600"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "1075",
        "graduates": "347"
      }
    ]
  },
  {
    "PSCED_Name": "Energy Engineering",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "8",
        "graduates": "1"
      }
    ]
  },
  {
    "PSCED_Name": "Engineering Education",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "8",
        "graduates": "3"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "1",
        "graduates": "1"
      }
    ]
  },
  {
    "PSCED_Name": "Engineering Technology",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "699",
        "graduates": "277"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "337",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "594",
        "graduates": "88"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "436",
        "graduates": "127"
      }
    ]
  },
  {
    "PSCED_Name": "English",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "139",
        "graduates": "33"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "551",
        "graduates": "121"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga Sibugay",
        "enrollment": "192",
        "graduates": "48"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "611",
        "graduates": "111"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Camiguin",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "283",
        "graduates": "81"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "200",
        "graduates": "57"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "312",
        "graduates": "114"
      },
      {
        "region": "11 - Davao Region",
        "province": "Compostela Valley",
        "enrollment": "124",
        "graduates": "14"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "536",
        "graduates": "109"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "747",
        "graduates": "256"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "147",
        "graduates": "50"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "935",
        "graduates": "97"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "186",
        "graduates": "14"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "64",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Sulu",
        "enrollment": "1085",
        "graduates": "135"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "66",
        "graduates": "16"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "160",
        "graduates": "78"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "650",
        "graduates": "33"
      },
      {
        "region": "16 - Caraga",
        "province": "Dinagat Islands",
        "enrollment": "176",
        "graduates": "30"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "563",
        "graduates": "72"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "213",
        "graduates": "76"
      }
    ]
  },
  {
    "PSCED_Name": "English Education",
    "description": "",
    "statsData": [
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "110",
        "graduates": "1"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "168",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "79",
        "graduates": "53"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "105",
        "graduates": "1"
      }
    ]
  },
  {
    "PSCED_Name": "English Literature",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Entomology",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "7",
        "graduates": "3"
      }
    ]
  },
  {
    "PSCED_Name": "Entrepreneurial Management",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "41",
        "graduates": "1"
      }
    ]
  },
  {
    "PSCED_Name": "Environmental Planning/Management",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "80",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "13",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "41",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "64",
        "graduates": "11"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "3",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "65",
        "graduates": "1"
      }
    ]
  },
  {
    "PSCED_Name": "Environmental Science",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "23",
        "graduates": "13"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga Sibugay",
        "enrollment": "59",
        "graduates": "18"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "200",
        "graduates": "35"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "30",
        "graduates": "2"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "503",
        "graduates": "150"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "44",
        "graduates": "5"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Occidental",
        "enrollment": "83",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Oriental",
        "enrollment": "123",
        "graduates": "26"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "35",
        "graduates": "18"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "36",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "20",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "45",
        "graduates": "6"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "213",
        "graduates": "28"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "122",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "417",
        "graduates": "133"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "493",
        "graduates": "76"
      }
    ]
  },
  {
    "PSCED_Name": "Environmental and Sanitary Engineering ",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "102",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "78",
        "graduates": "73"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "300",
        "graduates": "29"
      }
    ]
  },
  {
    "PSCED_Name": "Extension Education",
    "description": "",
    "statsData": [
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "18",
        "graduates": "11"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "119",
        "graduates": "12"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "50",
        "graduates": "15"
      }
    ]
  },
  {
    "PSCED_Name": "Farming System",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "5",
        "graduates": "2"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "3",
        "graduates": "6"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "40",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Filipino Education",
    "description": "",
    "statsData": [
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "37",
        "graduates": "5"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "35",
        "graduates": "41"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "53",
        "graduates": "6"
      }
    ]
  },
  {
    "PSCED_Name": "Fine Arts",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "186",
        "graduates": "12"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "174",
        "graduates": "15"
      }
    ]
  },
  {
    "PSCED_Name": "Fish Processing Technology",
    "description": "",
    "statsData": [
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Sulu",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Fisheries",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "192",
        "graduates": "88"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga Sibugay",
        "enrollment": "43",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "292",
        "graduates": "64"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "228",
        "graduates": "57"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Occidental",
        "enrollment": "102",
        "graduates": "32"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "162",
        "graduates": "43"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "392",
        "graduates": "99"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "63",
        "graduates": "14"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "345",
        "graduates": "33"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "192",
        "graduates": "57"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Sulu",
        "enrollment": "115",
        "graduates": "15"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "274",
        "graduates": "11"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "174",
        "graduates": "46"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "159",
        "graduates": "40"
      }
    ]
  },
  {
    "PSCED_Name": "Fisheries Technology",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga Sibugay",
        "enrollment": "4",
        "graduates": "1"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "296",
        "graduates": "20"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Occidental",
        "enrollment": "38",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "24",
        "graduates": "27"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "325",
        "graduates": "56"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "42",
        "graduates": "4"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "47",
        "graduates": "48"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Fishery Business Management ",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "8",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "35",
        "graduates": "3"
      }
    ]
  },
  {
    "PSCED_Name": "Fishing Technology",
    "description": "",
    "statsData": [
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "29",
        "graduates": "18"
      }
    ]
  },
  {
    "PSCED_Name": "Food Processing",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "0",
        "graduates": "8"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "1",
        "graduates": "2"
      }
    ]
  },
  {
    "PSCED_Name": "Food Science",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "25",
        "graduates": "2"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "12",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Food Science and Technology",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "36",
        "graduates": "80"
      }
    ]
  },
  {
    "PSCED_Name": "Food Service Administration",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "26",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "291",
        "graduates": "22"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Basilan",
        "enrollment": "12",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "144",
        "graduates": "10"
      }
    ]
  },
  {
    "PSCED_Name": "Food Technology",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "334",
        "graduates": "87"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "237",
        "graduates": "69"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "502",
        "graduates": "52"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "95",
        "graduates": "28"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "93",
        "graduates": "38"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "154",
        "graduates": "52"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Forest Ranger",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga Sibugay",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "214",
        "graduates": "44"
      }
    ]
  },
  {
    "PSCED_Name": "Forest Technology",
    "description": "",
    "statsData": [
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "6",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Forestry",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "133",
        "graduates": "12"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "315",
        "graduates": "48"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga Sibugay",
        "enrollment": "43",
        "graduates": "12"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "214",
        "graduates": "19"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "0",
        "graduates": "2"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "201",
        "graduates": "22"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "98",
        "graduates": "64"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "23",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "64",
        "graduates": "33"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "566",
        "graduates": "81"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "196",
        "graduates": "44"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "146",
        "graduates": "20"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "607",
        "graduates": "32"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "118",
        "graduates": "64"
      }
    ]
  },
  {
    "PSCED_Name": "Garment Technology",
    "description": "",
    "statsData": [
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "0",
        "graduates": "1"
      }
    ]
  },
  {
    "PSCED_Name": "General Mathematics",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "24",
        "graduates": "2"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "128",
        "graduates": "28"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga Sibugay",
        "enrollment": "10",
        "graduates": "1"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "155",
        "graduates": "22"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "195",
        "graduates": "47"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "38",
        "graduates": "2"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "0",
        "graduates": "2"
      },
      {
        "region": "11 - Davao Region",
        "province": "Compostela Valley",
        "enrollment": "12",
        "graduates": "1"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "84",
        "graduates": "29"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Oriental",
        "enrollment": "80",
        "graduates": "28"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "26",
        "graduates": "5"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "13",
        "graduates": "39"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "59",
        "graduates": "4"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "109",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Sulu",
        "enrollment": "6",
        "graduates": "1"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "38",
        "graduates": "15"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "161",
        "graduates": "5"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "117",
        "graduates": "8"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "294",
        "graduates": "39"
      }
    ]
  },
  {
    "PSCED_Name": "General Science",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "11",
        "graduates": "1"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "1",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "General Science Education",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "64",
        "graduates": "3"
      }
    ]
  },
  {
    "PSCED_Name": "Geodetic Engineering",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "15",
        "graduates": "0"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "140",
        "graduates": "20"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "11",
        "graduates": "2"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "293",
        "graduates": "59"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "413",
        "graduates": "8"
      }
    ]
  },
  {
    "PSCED_Name": "Geology",
    "description": "",
    "statsData": [
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "151",
        "graduates": "31"
      }
    ]
  },
  {
    "PSCED_Name": "Government Accounting and Auditing",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "104",
        "graduates": "0"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "12",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "12",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "10",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "4",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sarangani",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "14",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "64",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Guidance and Counselling",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "88",
        "graduates": "19"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "16",
        "graduates": "3"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "34",
        "graduates": "4"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "108",
        "graduates": "25"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "9",
        "graduates": "8"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "162",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "44",
        "graduates": "21"
      }
    ]
  },
  {
    "PSCED_Name": "Health Professional Education",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "28",
        "graduates": "3"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "31",
        "graduates": "1"
      }
    ]
  },
  {
    "PSCED_Name": "Health Science Education",
    "description": "",
    "statsData": [
      {
        "region": "11 - Davao Region",
        "province": "Davao Oriental",
        "enrollment": "28",
        "graduates": "2"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "10",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "History",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "188",
        "graduates": "52"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga Sibugay",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "73",
        "graduates": "36"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "124",
        "graduates": "79"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "18",
        "graduates": "3"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "61",
        "graduates": "5"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "252",
        "graduates": "43"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "98",
        "graduates": "12"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "187",
        "graduates": "4"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "152",
        "graduates": "1"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Sulu",
        "enrollment": "73",
        "graduates": "6"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "192",
        "graduates": "23"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Home Economics",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "33",
        "graduates": "4"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "256",
        "graduates": "138"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "15",
        "graduates": "2"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "25",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Home Economics Education",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "62",
        "graduates": "54"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "35",
        "graduates": "8"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "36",
        "graduates": "2"
      }
    ]
  },
  {
    "PSCED_Name": "Home Technology",
    "description": "",
    "statsData": [
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "33",
        "graduates": "65"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "303",
        "graduates": "29"
      }
    ]
  },
  {
    "PSCED_Name": "Horticulture",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "8",
        "graduates": "2"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "24",
        "graduates": "2"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "16",
        "graduates": "14"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Hospital Administration",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "11",
        "graduates": "2"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "87",
        "graduates": "18"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Basilan",
        "enrollment": "23",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Hotel and Restaurant Management",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "2088",
        "graduates": "248"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur",
        "enrollment": "111",
        "graduates": "0"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "2736",
        "graduates": "649"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga Sibugay",
        "enrollment": "265",
        "graduates": "65"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "971",
        "graduates": "308"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "836",
        "graduates": "268"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "1499",
        "graduates": "251"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "2454",
        "graduates": "563"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "1615",
        "graduates": "235"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "3594",
        "graduates": "791"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Oriental",
        "enrollment": "315",
        "graduates": "52"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "697",
        "graduates": "227"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sarangani",
        "enrollment": "2",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "3216",
        "graduates": "596"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "563",
        "graduates": "119"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Basilan",
        "enrollment": "134",
        "graduates": "19"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "142",
        "graduates": "29"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "177",
        "graduates": "45"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Sulu",
        "enrollment": "99",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "81",
        "graduates": "24"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "1068",
        "graduates": "148"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "197",
        "graduates": "21"
      },
      {
        "region": "16 - Caraga",
        "province": "Dinagat Islands",
        "enrollment": "65",
        "graduates": "10"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "679",
        "graduates": "156"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "1426",
        "graduates": "208"
      }
    ]
  },
  {
    "PSCED_Name": "Human Resource Development and Planning",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "11",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "34",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Industrial Education",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "3",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "3",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "64",
        "graduates": "13"
      }
    ]
  },
  {
    "PSCED_Name": "Industrial Engineering",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "142",
        "graduates": "34"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "160",
        "graduates": "47"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "125",
        "graduates": "26"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "119",
        "graduates": "16"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "150",
        "graduates": "33"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "35",
        "graduates": "8"
      }
    ]
  },
  {
    "PSCED_Name": "Industrial Psychology",
    "description": "",
    "statsData": [
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "2",
        "graduates": "8"
      }
    ]
  },
  {
    "PSCED_Name": "Industrial Technology",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "698",
        "graduates": "132"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "2007",
        "graduates": "400"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "415",
        "graduates": "160"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "685",
        "graduates": "132"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "77",
        "graduates": "166"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Oriental",
        "enrollment": "450",
        "graduates": "82"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "443",
        "graduates": "121"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "0",
        "graduates": "10"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "535",
        "graduates": "122"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "345",
        "graduates": "101"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Sulu",
        "enrollment": "419",
        "graduates": "115"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "497",
        "graduates": "58"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "1072",
        "graduates": "34"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "1491",
        "graduates": "229"
      }
    ]
  },
  {
    "PSCED_Name": "Information Management",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "296",
        "graduates": "35"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "339",
        "graduates": "8"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "11",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "170",
        "graduates": "18"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "90",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "74",
        "graduates": "45"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "334",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "77",
        "graduates": "24"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Occidental",
        "enrollment": "104",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "770",
        "graduates": "37"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "284",
        "graduates": "32"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "299",
        "graduates": "82"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "13",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "46",
        "graduates": "3"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "334",
        "graduates": "9"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "156",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "429",
        "graduates": "96"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "6",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Information Technology",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "1513",
        "graduates": "204"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "3946",
        "graduates": "730"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga Sibugay",
        "enrollment": "403",
        "graduates": "70"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "1872",
        "graduates": "452"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Camiguin",
        "enrollment": "277",
        "graduates": "105"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "634",
        "graduates": "206"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "2151",
        "graduates": "159"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "4510",
        "graduates": "959"
      },
      {
        "region": "11 - Davao Region",
        "province": "Compostela Valley",
        "enrollment": "77",
        "graduates": "7"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "926",
        "graduates": "634"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "4718",
        "graduates": "863"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Occidental",
        "enrollment": "127",
        "graduates": "17"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Oriental",
        "enrollment": "363",
        "graduates": "83"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "890",
        "graduates": "342"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sarangani",
        "enrollment": "6",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "4729",
        "graduates": "852"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "1234",
        "graduates": "299"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Basilan",
        "enrollment": "264",
        "graduates": "20"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "388",
        "graduates": "21"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "1208",
        "graduates": "441"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Sulu",
        "enrollment": "1349",
        "graduates": "213"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "281",
        "graduates": "69"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "1748",
        "graduates": "328"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "501",
        "graduates": "138"
      },
      {
        "region": "16 - Caraga",
        "province": "Dinagat Islands",
        "enrollment": "189",
        "graduates": "23"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "1604",
        "graduates": "439"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "731",
        "graduates": "116"
      }
    ]
  },
  {
    "PSCED_Name": "Institutional Development Management",
    "description": "",
    "statsData": [
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "15",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Interdisciplinary Studies",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "59",
        "graduates": "14"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "23",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "85",
        "graduates": "43"
      }
    ]
  },
  {
    "PSCED_Name": "Interior Design",
    "description": "",
    "statsData": [
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "75",
        "graduates": "6"
      }
    ]
  },
  {
    "PSCED_Name": "International Relations",
    "description": "",
    "statsData": [
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "190",
        "graduates": "37"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "369",
        "graduates": "47"
      }
    ]
  },
  {
    "PSCED_Name": "International Studies",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "23",
        "graduates": "15"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "395",
        "graduates": "121"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "304",
        "graduates": "96"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "2",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Islamic Studies",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "186",
        "graduates": "57"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "15",
        "graduates": "8"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "653",
        "graduates": "261"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "1206",
        "graduates": "158"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "420",
        "graduates": "142"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Sulu",
        "enrollment": "47",
        "graduates": "6"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "63",
        "graduates": "5"
      }
    ]
  },
  {
    "PSCED_Name": "Journalism",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "81",
        "graduates": "0"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "143",
        "graduates": "22"
      }
    ]
  },
  {
    "PSCED_Name": "Jurisprudence",
    "description": "",
    "statsData": [
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "38",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Kindergarten Education",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "0",
        "graduates": "14"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "9",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Occidental",
        "enrollment": "3",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Language Education/Language Teaching",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "14",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "67",
        "graduates": "6"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "187",
        "graduates": "16"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "140",
        "graduates": "26"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "36",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Language and Literature",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "23",
        "graduates": "3"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "17",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "21",
        "graduates": "1"
      }
    ]
  },
  {
    "PSCED_Name": "Laws",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "185",
        "graduates": "17"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "624",
        "graduates": "110"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "214",
        "graduates": "28"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "299",
        "graduates": "37"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "792",
        "graduates": "86"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "199",
        "graduates": "64"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "922",
        "graduates": "65"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "124",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "182",
        "graduates": "10"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "214",
        "graduates": "14"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "125",
        "graduates": "8"
      }
    ]
  },
  {
    "PSCED_Name": "Legal Management",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "21",
        "graduates": "10"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "90",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Liberal Arts-Liacom",
    "description": "",
    "statsData": [
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Library Science",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "4",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "12",
        "graduates": "17"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "20",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Library and Information Science",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "40",
        "graduates": "18"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "8",
        "graduates": "2"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "27",
        "graduates": "8"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "226",
        "graduates": "27"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "189",
        "graduates": "24"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "165",
        "graduates": "58"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "45",
        "graduates": "4"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "24",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "40",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "80",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "0",
        "graduates": "1"
      }
    ]
  },
  {
    "PSCED_Name": "Linguistics",
    "description": "",
    "statsData": [
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "30",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Literature",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "35",
        "graduates": "8"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "407",
        "graduates": "225"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sarangani",
        "enrollment": "484",
        "graduates": "114"
      }
    ]
  },
  {
    "PSCED_Name": "Local Government & Regional Development",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "0",
        "graduates": "39"
      }
    ]
  },
  {
    "PSCED_Name": "Management",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "130",
        "graduates": "19"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "226",
        "graduates": "59"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "25",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "229",
        "graduates": "40"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "91",
        "graduates": "4"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "192",
        "graduates": "43"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "11",
        "graduates": "1"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "278",
        "graduates": "7"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "291",
        "graduates": "2"
      }
    ]
  },
  {
    "PSCED_Name": "Manufacturing/Production Engineering",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "306",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Marine Bio-Diversity",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "7",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "6",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Occidental",
        "enrollment": "1",
        "graduates": "2"
      }
    ]
  },
  {
    "PSCED_Name": "Marine Biology",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "81",
        "graduates": "6"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "141",
        "graduates": "13"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "28",
        "graduates": "9"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "346",
        "graduates": "72"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "258",
        "graduates": "41"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "96",
        "graduates": "16"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Occidental",
        "enrollment": "134",
        "graduates": "24"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "27",
        "graduates": "1"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "166",
        "graduates": "34"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "197",
        "graduates": "20"
      }
    ]
  },
  {
    "PSCED_Name": "Marine Engineering/Technology",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "151",
        "graduates": "0"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur",
        "enrollment": "114",
        "graduates": "0"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "1806",
        "graduates": "158"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "618",
        "graduates": "95"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "377",
        "graduates": "159"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "1382",
        "graduates": "277"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "791",
        "graduates": "183"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "113",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Marine Transportation",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "204",
        "graduates": "0"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur",
        "enrollment": "244",
        "graduates": "0"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "944",
        "graduates": "100"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "407",
        "graduates": "91"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "888",
        "graduates": "88"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "849",
        "graduates": "356"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "2755",
        "graduates": "421"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "909",
        "graduates": "274"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "280",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "508",
        "graduates": "95"
      }
    ]
  },
  {
    "PSCED_Name": "Maritime Management",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "17",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Marketing",
    "description": "",
    "statsData": [
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "207",
        "graduates": "78"
      }
    ]
  },
  {
    "PSCED_Name": "Mass Communication",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "17",
        "graduates": "18"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "50",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "49",
        "graduates": "16"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "141",
        "graduates": "109"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "1",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "19",
        "graduates": "1"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "7",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "12",
        "graduates": "6"
      }
    ]
  },
  {
    "PSCED_Name": "Materials Science and Engineering",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "41",
        "graduates": "17"
      }
    ]
  },
  {
    "PSCED_Name": "Mathematical Science",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "0",
        "graduates": "1"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "22",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "46",
        "graduates": "5"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Oriental",
        "enrollment": "67",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Mathematics Teaching",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "59",
        "graduates": "5"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "116",
        "graduates": "21"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "91",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "84",
        "graduates": "70"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "42",
        "graduates": "11"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "11",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Mechanical Engineering",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "69",
        "graduates": "24"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "474",
        "graduates": "106"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "252",
        "graduates": "59"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "367",
        "graduates": "59"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "47",
        "graduates": "7"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "939",
        "graduates": "115"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "1342",
        "graduates": "63"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "152",
        "graduates": "42"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "249",
        "graduates": "26"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "248",
        "graduates": "9"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "70",
        "graduates": "7"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "47",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "412",
        "graduates": "184"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "95",
        "graduates": "21"
      }
    ]
  },
  {
    "PSCED_Name": "Mechanical Technology",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "198",
        "graduates": "37"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "893",
        "graduates": "181"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Medical Technology",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "134",
        "graduates": "46"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "922",
        "graduates": "110"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "209",
        "graduates": "76"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "498",
        "graduates": "105"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "336",
        "graduates": "131"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "686",
        "graduates": "91"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "139",
        "graduates": "23"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "3095",
        "graduates": "809"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "193",
        "graduates": "46"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "890",
        "graduates": "219"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Basilan",
        "enrollment": "14",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "65",
        "graduates": "8"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "205",
        "graduates": "24"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "308",
        "graduates": "86"
      }
    ]
  },
  {
    "PSCED_Name": "Medicine",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "199",
        "graduates": "50"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "628",
        "graduates": "80"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "2117",
        "graduates": "810"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Metallurgical Engineering",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "131",
        "graduates": "44"
      }
    ]
  },
  {
    "PSCED_Name": "Midwifery",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "361",
        "graduates": "88"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur",
        "enrollment": "122",
        "graduates": "77"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "91",
        "graduates": "44"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga Sibugay",
        "enrollment": "264",
        "graduates": "97"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "178",
        "graduates": "129"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "242",
        "graduates": "60"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "224",
        "graduates": "37"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "391",
        "graduates": "11"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "170",
        "graduates": "225"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "183",
        "graduates": "118"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Oriental",
        "enrollment": "59",
        "graduates": "37"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "392",
        "graduates": "126"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "680",
        "graduates": "193"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "983",
        "graduates": "247"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Basilan",
        "enrollment": "106",
        "graduates": "24"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "126",
        "graduates": "52"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "403",
        "graduates": "195"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Sulu",
        "enrollment": "78",
        "graduates": "29"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "32",
        "graduates": "10"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "82",
        "graduates": "84"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "59",
        "graduates": "20"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "42",
        "graduates": "12"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "73",
        "graduates": "45"
      }
    ]
  },
  {
    "PSCED_Name": "Mining Engineering",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "129",
        "graduates": "39"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "135",
        "graduates": "25"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "315",
        "graduates": "4"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "105",
        "graduates": "24"
      }
    ]
  },
  {
    "PSCED_Name": "Music",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "52",
        "graduates": "8"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "18",
        "graduates": "22"
      }
    ]
  },
  {
    "PSCED_Name": "Music Education",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "12",
        "graduates": "4"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "38",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "NA 2019/20",
    "description": "",
    "statsData": [
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Basilan",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Natural Science",
    "description": "",
    "statsData": [
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "349",
        "graduates": "126"
      }
    ]
  },
  {
    "PSCED_Name": "Nursing",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "864",
        "graduates": "84"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "2856",
        "graduates": "653"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga Sibugay",
        "enrollment": "42",
        "graduates": "9"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "1058",
        "graduates": "126"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Camiguin",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "801",
        "graduates": "217"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "803",
        "graduates": "204"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "1633",
        "graduates": "151"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "312",
        "graduates": "57"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "3607",
        "graduates": "316"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Oriental",
        "enrollment": "236",
        "graduates": "23"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "1071",
        "graduates": "144"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "982",
        "graduates": "106"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "564",
        "graduates": "48"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Basilan",
        "enrollment": "392",
        "graduates": "99"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "876",
        "graduates": "94"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "468",
        "graduates": "60"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Sulu",
        "enrollment": "699",
        "graduates": "125"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "216",
        "graduates": "63"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "484",
        "graduates": "51"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "130",
        "graduates": "16"
      }
    ]
  },
  {
    "PSCED_Name": "Nutrition and Dietetics",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "106",
        "graduates": "59"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "141",
        "graduates": "25"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "24",
        "graduates": "5"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "18",
        "graduates": "9"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "53",
        "graduates": "22"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "131",
        "graduates": "45"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Occupational Therapy/Health",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "41",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "217",
        "graduates": "31"
      }
    ]
  },
  {
    "PSCED_Name": "Office Administration/Management",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "32",
        "graduates": "12"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "204",
        "graduates": "163"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "1517",
        "graduates": "266"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "457",
        "graduates": "106"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "1014",
        "graduates": "211"
      },
      {
        "region": "11 - Davao Region",
        "province": "Compostela Valley",
        "enrollment": "153",
        "graduates": "28"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "689",
        "graduates": "61"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "217",
        "graduates": "19"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Oriental",
        "enrollment": "433",
        "graduates": "98"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "35",
        "graduates": "14"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sarangani",
        "enrollment": "310",
        "graduates": "54"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "2064",
        "graduates": "380"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "361",
        "graduates": "28"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "32",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "31",
        "graduates": "12"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "12",
        "graduates": "1"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "195",
        "graduates": "19"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "267",
        "graduates": "68"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Optometry",
    "description": "",
    "statsData": [
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "278",
        "graduates": "30"
      }
    ]
  },
  {
    "PSCED_Name": "Organizational Development and Planning",
    "description": "",
    "statsData": [
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "49",
        "graduates": "4"
      }
    ]
  },
  {
    "PSCED_Name": "Other Agriculture, Forestry, Fisheries",
    "description": "",
    "statsData": [
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Other Civil Security and Military",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "9",
        "graduates": "2"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga Sibugay",
        "enrollment": "7",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "3",
        "graduates": "3"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "33",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "232",
        "graduates": "7"
      }
    ]
  },
  {
    "PSCED_Name": "Other Education Science and Teacher Training",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "832",
        "graduates": "45"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga Sibugay",
        "enrollment": "92",
        "graduates": "3"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Camiguin",
        "enrollment": "303",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "368",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "796",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "560",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Compostela Valley",
        "enrollment": "179",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "335",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "239",
        "graduates": "81"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Occidental",
        "enrollment": "160",
        "graduates": "21"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Oriental",
        "enrollment": "468",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "21",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "99",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "43",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Basilan",
        "enrollment": "146",
        "graduates": "226"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "79",
        "graduates": "27"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "371",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "86",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "442",
        "graduates": "30"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "284",
        "graduates": "145"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "103",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Other Education not elsewhere coded (NEC)",
    "description": "",
    "statsData": [
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "248",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "177",
        "graduates": "35"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "96",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "96",
        "graduates": "17"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "12",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Basilan",
        "enrollment": "59",
        "graduates": "21"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Other Engineering and Technology",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "92",
        "graduates": "10"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "20",
        "graduates": "79"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "295",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "0",
        "graduates": "1"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "36",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "264",
        "graduates": "105"
      }
    ]
  },
  {
    "PSCED_Name": "Other Fine and Applied Arts",
    "description": "",
    "statsData": [
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "260",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "55",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "11",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Other IT-Related",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "176",
        "graduates": "144"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "106",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "74",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "95",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "41",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "4",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Other Maritime",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "76",
        "graduates": "5"
      }
    ]
  },
  {
    "PSCED_Name": "Other Medical and Allied",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "0",
        "graduates": "6"
      }
    ]
  },
  {
    "PSCED_Name": "Other Social and Behavioral Science",
    "description": "",
    "statsData": [
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "11",
        "graduates": "1"
      }
    ]
  },
  {
    "PSCED_Name": "Participatory Development",
    "description": "",
    "statsData": [
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Pastoral Ministry",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "44",
        "graduates": "24"
      }
    ]
  },
  {
    "PSCED_Name": "Personnel and Human Resources Management",
    "description": "",
    "statsData": [
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "55",
        "graduates": "62"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "2",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "58",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "36",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Pharmacy",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "34",
        "graduates": "38"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "747",
        "graduates": "131"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga Sibugay",
        "enrollment": "30",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "131",
        "graduates": "52"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "91",
        "graduates": "17"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "274",
        "graduates": "93"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "114",
        "graduates": "41"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "1387",
        "graduates": "356"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "123",
        "graduates": "36"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "541",
        "graduates": "127"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Basilan",
        "enrollment": "45",
        "graduates": "5"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Sulu",
        "enrollment": "67",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Philippine Literature",
    "description": "",
    "statsData": [
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "16",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Philippine Studies/Arts",
    "description": "",
    "statsData": [
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "32",
        "graduates": "1"
      }
    ]
  },
  {
    "PSCED_Name": "Philosophy",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "28",
        "graduates": "10"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "43",
        "graduates": "29"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "322",
        "graduates": "61"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "117",
        "graduates": "5"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "14",
        "graduates": "5"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "65",
        "graduates": "22"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "103",
        "graduates": "21"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "49",
        "graduates": "3"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "30",
        "graduates": "2"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "44",
        "graduates": "30"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "83",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "21",
        "graduates": "1"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "6",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Physical Education",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "586",
        "graduates": "28"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "1203",
        "graduates": "106"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "437",
        "graduates": "125"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "239",
        "graduates": "57"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "138",
        "graduates": "57"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "924",
        "graduates": "123"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "597",
        "graduates": "1"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "1249",
        "graduates": "199"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Oriental",
        "enrollment": "104",
        "graduates": "22"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "324",
        "graduates": "115"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "1108",
        "graduates": "96"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "78",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Basilan",
        "enrollment": "16",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "202",
        "graduates": "10"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "134",
        "graduates": "15"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "15",
        "graduates": "3"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "116",
        "graduates": "19"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "40",
        "graduates": "37"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "106",
        "graduates": "2"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "82",
        "graduates": "16"
      }
    ]
  },
  {
    "PSCED_Name": "Physical Therapy",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "18",
        "graduates": "0"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "49",
        "graduates": "20"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "34",
        "graduates": "9"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "131",
        "graduates": "49"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "521",
        "graduates": "83"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "7",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Physics",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "33",
        "graduates": "15"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "43",
        "graduates": "10"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "179",
        "graduates": "30"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "65",
        "graduates": "1"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "66",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Physics Teaching",
    "description": "",
    "statsData": [
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "9",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Pilipino/Filipino",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "36",
        "graduates": "2"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "158",
        "graduates": "9"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga Sibugay",
        "enrollment": "186",
        "graduates": "21"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "289",
        "graduates": "84"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "86",
        "graduates": "13"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "62",
        "graduates": "23"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "8",
        "graduates": "34"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "144",
        "graduates": "31"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "296",
        "graduates": "34"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "46",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Sulu",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "25",
        "graduates": "7"
      },
      {
        "region": "16 - Caraga",
        "province": "Dinagat Islands",
        "enrollment": "3",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "1",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "136",
        "graduates": "22"
      }
    ]
  },
  {
    "PSCED_Name": "Plant Breeding",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "10",
        "graduates": "2"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "3",
        "graduates": "1"
      }
    ]
  },
  {
    "PSCED_Name": "Plant Pathology",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "10",
        "graduates": "2"
      }
    ]
  },
  {
    "PSCED_Name": "Political Economy",
    "description": "",
    "statsData": [
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Basilan",
        "enrollment": "38",
        "graduates": "5"
      }
    ]
  },
  {
    "PSCED_Name": "Political Science",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "136",
        "graduates": "19"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "613",
        "graduates": "116"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga Sibugay",
        "enrollment": "78",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "104",
        "graduates": "32"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "168",
        "graduates": "45"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "171",
        "graduates": "25"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "92",
        "graduates": "6"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "581",
        "graduates": "43"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "68",
        "graduates": "17"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "107",
        "graduates": "13"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "139",
        "graduates": "19"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Basilan",
        "enrollment": "474",
        "graduates": "52"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "442",
        "graduates": "53"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "90",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Sulu",
        "enrollment": "40",
        "graduates": "7"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "82",
        "graduates": "32"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "81",
        "graduates": "25"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "152",
        "graduates": "53"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "22",
        "graduates": "4"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "442",
        "graduates": "51"
      }
    ]
  },
  {
    "PSCED_Name": "Pre-Dental",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Psychology",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "434",
        "graduates": "128"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "159",
        "graduates": "27"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "249",
        "graduates": "189"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "118",
        "graduates": "23"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "758",
        "graduates": "147"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "455",
        "graduates": "9"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "2425",
        "graduates": "455"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "161",
        "graduates": "63"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "603",
        "graduates": "117"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Basilan",
        "enrollment": "7",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "97",
        "graduates": "2"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "231",
        "graduates": "89"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Sulu",
        "enrollment": "19",
        "graduates": "14"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "335",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "65",
        "graduates": "24"
      }
    ]
  },
  {
    "PSCED_Name": "Public Administration/Management",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "191",
        "graduates": "49"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "1462",
        "graduates": "291"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga Sibugay",
        "enrollment": "60",
        "graduates": "20"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "3750",
        "graduates": "600"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Camiguin",
        "enrollment": "111",
        "graduates": "38"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "238",
        "graduates": "23"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "648",
        "graduates": "152"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "1806",
        "graduates": "209"
      },
      {
        "region": "11 - Davao Region",
        "province": "Compostela Valley",
        "enrollment": "112",
        "graduates": "2"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "1199",
        "graduates": "136"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "701",
        "graduates": "147"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Occidental",
        "enrollment": "252",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Oriental",
        "enrollment": "134",
        "graduates": "46"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "598",
        "graduates": "42"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "229",
        "graduates": "113"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "12",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Basilan",
        "enrollment": "34",
        "graduates": "33"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "1090",
        "graduates": "107"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "2172",
        "graduates": "572"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Sulu",
        "enrollment": "207",
        "graduates": "61"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "56",
        "graduates": "9"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "85",
        "graduates": "1"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "13",
        "graduates": "6"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "42",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "535",
        "graduates": "118"
      }
    ]
  },
  {
    "PSCED_Name": "Public Health/Medical Health",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "49",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "37",
        "graduates": "2"
      }
    ]
  },
  {
    "PSCED_Name": "Radiologic Technology",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "42",
        "graduates": "11"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "978",
        "graduates": "250"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "209",
        "graduates": "68"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "91",
        "graduates": "15"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "285",
        "graduates": "74"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "56",
        "graduates": "16"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "760",
        "graduates": "95"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "134",
        "graduates": "66"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "203",
        "graduates": "63"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "12",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "174",
        "graduates": "13"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "250",
        "graduates": "13"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "41",
        "graduates": "12"
      }
    ]
  },
  {
    "PSCED_Name": "Real Estate",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "14",
        "graduates": "6"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "38",
        "graduates": "27"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "226",
        "graduates": "10"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "88",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "26",
        "graduates": "1"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "67",
        "graduates": "52"
      }
    ]
  },
  {
    "PSCED_Name": "Religious Education (Character/Value Education)",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "27",
        "graduates": "6"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "26",
        "graduates": "7"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "4",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Religious Formation",
    "description": "",
    "statsData": [
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Research and Evaluation",
    "description": "",
    "statsData": [
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "58",
        "graduates": "3"
      }
    ]
  },
  {
    "PSCED_Name": "Respiratory/Pulmunary Therapy",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "707",
        "graduates": "54"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "362",
        "graduates": "116"
      }
    ]
  },
  {
    "PSCED_Name": "Rural Development",
    "description": "",
    "statsData": [
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "69",
        "graduates": "8"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Sanitary Engineering",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "120",
        "graduates": "22"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "39",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Science",
    "description": "",
    "statsData": [
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "148",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "9",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Science Education (teaching Science)",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "24",
        "graduates": "3"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "77",
        "graduates": "3"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "143",
        "graduates": "23"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "52",
        "graduates": "5"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "55",
        "graduates": "8"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "106",
        "graduates": "20"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Oriental",
        "enrollment": "53",
        "graduates": "19"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "37",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "23",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "71",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "39",
        "graduates": "42"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "11",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "31",
        "graduates": "1"
      }
    ]
  },
  {
    "PSCED_Name": "Secondary Education with no specialization",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "3706",
        "graduates": "790"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur",
        "enrollment": "8",
        "graduates": "3"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "7577",
        "graduates": "1054"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga Sibugay",
        "enrollment": "2387",
        "graduates": "151"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "2343",
        "graduates": "838"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Camiguin",
        "enrollment": "298",
        "graduates": "179"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "1770",
        "graduates": "412"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "1613",
        "graduates": "564"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "4267",
        "graduates": "1405"
      },
      {
        "region": "11 - Davao Region",
        "province": "Compostela Valley",
        "enrollment": "2300",
        "graduates": "680"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "5052",
        "graduates": "1149"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "9724",
        "graduates": "2087"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Occidental",
        "enrollment": "266",
        "graduates": "57"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Oriental",
        "enrollment": "1213",
        "graduates": "479"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "3340",
        "graduates": "973"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sarangani",
        "enrollment": "124",
        "graduates": "43"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "5379",
        "graduates": "1164"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "1251",
        "graduates": "495"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Basilan",
        "enrollment": "98",
        "graduates": "8"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "2471",
        "graduates": "267"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "2810",
        "graduates": "674"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Sulu",
        "enrollment": "595",
        "graduates": "101"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "191",
        "graduates": "64"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "2750",
        "graduates": "382"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "1722",
        "graduates": "378"
      },
      {
        "region": "16 - Caraga",
        "province": "Dinagat Islands",
        "enrollment": "131",
        "graduates": "14"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "1496",
        "graduates": "377"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "1783",
        "graduates": "508"
      }
    ]
  },
  {
    "PSCED_Name": "Secretarial Science",
    "description": "",
    "statsData": [
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "162",
        "graduates": "41"
      }
    ]
  },
  {
    "PSCED_Name": "Secretarial/Medical Secretarial/Clerical",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "1",
        "graduates": "4"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Social Development",
    "description": "",
    "statsData": [
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "7",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Social Science",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "17",
        "graduates": "0"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "61",
        "graduates": "25"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "462",
        "graduates": "230"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "0",
        "graduates": "55"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "1119",
        "graduates": "329"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "126",
        "graduates": "111"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Sulu",
        "enrollment": "3",
        "graduates": "4"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "0",
        "graduates": "1"
      }
    ]
  },
  {
    "PSCED_Name": "Social Science Education",
    "description": "",
    "statsData": [
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "36",
        "graduates": "46"
      }
    ]
  },
  {
    "PSCED_Name": "Social Services",
    "description": "",
    "statsData": [
      {
        "region": "11 - Davao Region",
        "province": "Compostela Valley",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "18",
        "graduates": "22"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "86",
        "graduates": "16"
      }
    ]
  },
  {
    "PSCED_Name": "Social Studies",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "11",
        "graduates": "3"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "8",
        "graduates": "39"
      }
    ]
  },
  {
    "PSCED_Name": "Social Work",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "357",
        "graduates": "74"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur",
        "enrollment": "179",
        "graduates": "0"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "1223",
        "graduates": "241"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "107",
        "graduates": "20"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "866",
        "graduates": "86"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "404",
        "graduates": "82"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "395",
        "graduates": "50"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "153",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "1476",
        "graduates": "165"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Occidental",
        "enrollment": "71",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "527",
        "graduates": "91"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "1447",
        "graduates": "269"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "124",
        "graduates": "36"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Basilan",
        "enrollment": "95",
        "graduates": "5"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "472",
        "graduates": "14"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "1056",
        "graduates": "218"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Sulu",
        "enrollment": "74",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "76",
        "graduates": "23"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "319",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Sociology",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "641",
        "graduates": "194"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "172",
        "graduates": "103"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "306",
        "graduates": "34"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "8",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "18",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "23",
        "graduates": "3"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "2",
        "graduates": "10"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "311",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "3",
        "graduates": "2"
      }
    ]
  },
  {
    "PSCED_Name": "Soil Science",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "22",
        "graduates": "1"
      }
    ]
  },
  {
    "PSCED_Name": "Special Education",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "13",
        "graduates": "9"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "94",
        "graduates": "5"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "6",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "97",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "60",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "302",
        "graduates": "6"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Oriental",
        "enrollment": "76",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "10",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "7",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Sports Science (Sports Officiating/Coaching)",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "186",
        "graduates": "7"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "15",
        "graduates": "1"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "1",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Statistics",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "58",
        "graduates": "28"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "105",
        "graduates": "30"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "27",
        "graduates": "20"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "24",
        "graduates": "5"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "23",
        "graduates": "6"
      }
    ]
  },
  {
    "PSCED_Name": "Structural Engineering",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "40",
        "graduates": "2"
      }
    ]
  },
  {
    "PSCED_Name": "Teaching",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "228",
        "graduates": "17"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "392",
        "graduates": "80"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Camiguin",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "31",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "304",
        "graduates": "49"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "62",
        "graduates": "15"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "215",
        "graduates": "26"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "0",
        "graduates": "5"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "1274",
        "graduates": "72"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "262",
        "graduates": "53"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "24",
        "graduates": "3"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "90",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "2",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "326",
        "graduates": "27"
      }
    ]
  },
  {
    "PSCED_Name": "Teaching Handicapped Children ",
    "description": "",
    "statsData": [
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Technician Teacher Education",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "48",
        "graduates": "0"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur",
        "enrollment": "84",
        "graduates": "0"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "872",
        "graduates": "327"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga Sibugay",
        "enrollment": "323",
        "graduates": "71"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "59",
        "graduates": "4"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "157",
        "graduates": "86"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "167",
        "graduates": "19"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "263",
        "graduates": "48"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "501",
        "graduates": "147"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Oriental",
        "enrollment": "4",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "737",
        "graduates": "345"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sarangani",
        "enrollment": "535",
        "graduates": "0"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "2371",
        "graduates": "308"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "941",
        "graduates": "139"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Basilan",
        "enrollment": "13",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "27",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "16",
        "graduates": "40"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Tawi-Tawi",
        "enrollment": "8",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "124",
        "graduates": "55"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "67",
        "graduates": "14"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "329",
        "graduates": "216"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "178",
        "graduates": "29"
      }
    ]
  },
  {
    "PSCED_Name": "Technology Communications Management",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "616",
        "graduates": "183"
      }
    ]
  },
  {
    "PSCED_Name": "Technology Management",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "34",
        "graduates": "4"
      }
    ]
  },
  {
    "PSCED_Name": "Technology/Engineering",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "693",
        "graduates": "24"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Camiguin",
        "enrollment": "421",
        "graduates": "155"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "0",
        "graduates": "59"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "217",
        "graduates": "20"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "1298",
        "graduates": "37"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "160",
        "graduates": "71"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "887",
        "graduates": "281"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "698",
        "graduates": "86"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "14",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Theology/Theological Studies",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "119",
        "graduates": "42"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "186",
        "graduates": "33"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "36",
        "graduates": "20"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "102",
        "graduates": "36"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "791",
        "graduates": "168"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "56",
        "graduates": "13"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "0",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Tourism",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "58",
        "graduates": "48"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Camiguin",
        "enrollment": "0",
        "graduates": "24"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "21",
        "graduates": "12"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "13",
        "graduates": "2"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "1",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "22",
        "graduates": "2"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "175",
        "graduates": "55"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "18",
        "graduates": "25"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "6",
        "graduates": "2"
      }
    ]
  },
  {
    "PSCED_Name": "Tourism and Hotel & Restaurant Mgt.",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "0",
        "graduates": "16"
      }
    ]
  },
  {
    "PSCED_Name": "Tourism and Travel Management",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "636",
        "graduates": "19"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "100",
        "graduates": "54"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "59",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Camiguin",
        "enrollment": "65",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Lanao Del Norte",
        "enrollment": "91",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "204",
        "graduates": "43"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Oriental",
        "enrollment": "409",
        "graduates": "68"
      },
      {
        "region": "11 - Davao Region",
        "province": "Compostela Valley",
        "enrollment": "103",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "968",
        "graduates": "41"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "1968",
        "graduates": "230"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "413",
        "graduates": "87"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "South Cotabato",
        "enrollment": "1360",
        "graduates": "198"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "Sultan Kudarat",
        "enrollment": "123",
        "graduates": "1"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Basilan",
        "enrollment": "16",
        "graduates": "0"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "232",
        "graduates": "14"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Norte",
        "enrollment": "370",
        "graduates": "29"
      },
      {
        "region": "16 - Caraga",
        "province": "Agusan Del Sur",
        "enrollment": "21",
        "graduates": "0"
      },
      {
        "region": "16 - Caraga",
        "province": "Dinagat Islands",
        "enrollment": "20",
        "graduates": "3"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Norte",
        "enrollment": "280",
        "graduates": "20"
      },
      {
        "region": "16 - Caraga",
        "province": "Surigao Del Sur",
        "enrollment": "82",
        "graduates": "24"
      }
    ]
  },
  {
    "PSCED_Name": "Trade Technology",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "81",
        "graduates": "12"
      }
    ]
  },
  {
    "PSCED_Name": "Transport Engineering",
    "description": "",
    "statsData": [
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "23",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Urban and Regional Planning",
    "description": "",
    "statsData": [
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "23",
        "graduates": "23"
      }
    ]
  },
  {
    "PSCED_Name": "Veterinary Medicine",
    "description": "",
    "statsData": [
      {
        "region": "10 - Northern Mindanao",
        "province": "Bukidnon",
        "enrollment": "476",
        "graduates": "39"
      },
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "270",
        "graduates": "24"
      }
    ]
  },
  {
    "PSCED_Name": "Veterinary Technology",
    "description": "",
    "statsData": [
      {
        "region": "12 - Soccsksargen",
        "province": "North Cotabato",
        "enrollment": "244",
        "graduates": "40"
      }
    ]
  },
  {
    "PSCED_Name": "Vocational/Technical Education",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Norte",
        "enrollment": "67",
        "graduates": "0"
      },
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "87",
        "graduates": "0"
      },
      {
        "region": "10 - Northern Mindanao",
        "province": "Misamis Occidental",
        "enrollment": "112",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "388",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "267",
        "graduates": "27"
      },
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Maguindanao",
        "enrollment": "97",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Water Resources Engineering",
    "description": "",
    "statsData": [
      {
        "region": "09 - Zamboanga Peninsula",
        "province": "Zamboanga del Sur ",
        "enrollment": "0",
        "graduates": "0"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Norte",
        "enrollment": "28",
        "graduates": "6"
      },
      {
        "region": "11 - Davao Region",
        "province": "Davao Del Sur",
        "enrollment": "12",
        "graduates": "0"
      }
    ]
  },
  {
    "PSCED_Name": "Zoology",
    "description": "",
    "statsData": [
      {
        "region": "15 - Bangsamoro Autonomous Region in Muslim Mindanao",
        "province": "Lanao del Sur",
        "enrollment": "10",
        "graduates": "1"
      }
    ]
  }
]

