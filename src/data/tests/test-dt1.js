// // Training set
// var data = [
//   { person: "Homer", hairLength: 0, weight: 250, age: 36, sex: "male" },
//   { person: "Marge", hairLength: 10, weight: 150, age: 34, sex: "female" },
//   { person: "Bart", hairLength: 2, weight: 90, age: 10, sex: "male" },
//   { person: "Lisa", hairLength: 6, weight: 78, age: 8, sex: "female" },
//   { person: "Maggie", hairLength: 4, weight: 20, age: 1, sex: "female" },
//   { person: "Abe", hairLength: 1, weight: 170, age: 70, sex: "male" },
//   { person: "Selma", hairLength: 8, weight: 160, age: 41, sex: "female" },
//   { person: "Otto", hairLength: 10, weight: 180, age: 38, sex: "male" },
//   { person: "Krusty", hairLength: 6, weight: 200, age: 45, sex: "male" }
// ];

const dataset = [
  {
    attr_1: "LO",
    attr_2: "IE",
    attr_3: "IA",
    path: "Accountancy"
  },
  {
    attr_1: "LO",
    attr_2: "IE",
    attr_3: "IA",
    path: "Accounting Technology"
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "BO",
    path: "Aeronautical Engineering"
  },
  {
    attr_1: "NA",
    attr_2: "IE",
    attr_3: "LO",
    path: "Agri-Business"
  },
  {
    attr_1: "NA",
    attr_2: "IE",
    attr_3: "LO",
    path: "Agri-Business Management/Administration"
  },
  {
    attr_1: "LO",
    attr_2: "NA",
    attr_3: "SP",
    path: "Agricultural Chemistry"
  },
  {
    attr_1: "NA",
    attr_2: "SP",
    attr_3: "IE",
    path: "Agricultural Development"
  },
  {
    attr_1: "NA",
    attr_2: "IE",
    attr_3: "LO",
    path: "Agricultural Economics "
  },
  {
    attr_1: "NA",
    attr_2: "IE",
    attr_3: "IA",
    path: "Agricultural Education"
  },
  {
    attr_1: "LO",
    attr_2: "NA",
    attr_3: "SP",
    path: "Agricultural Engineering"
  },
  {
    attr_1: "NA",
    attr_2: "SP",
    attr_3: "IE",
    path: "Agricultural Extension"
  },
  {
    attr_1: "NA",
    attr_2: "IE",
    attr_3: "LO",
    path: "Agricultural Management"
  },
  {
    attr_1: "NA",
    attr_2: "LO",
    attr_3: "IE",
    path: "Agricultural Science"
  },
  {
    attr_1: "NA",
    attr_2: "LO",
    attr_3: "IE",
    path: "Agricultural Technology"
  },
  {
    attr_1: "NA",
    attr_2: "LO",
    attr_3: "IE",
    path: "Agricultural Technology Education"
  },
  {
    attr_1: "NA",
    attr_2: "SP",
    attr_3: "IE",
    path: "Agriculture "
  },
  {
    attr_1: "NA",
    attr_2: "SP",
    attr_3: "IE",
    path: "Agro-Forestry"
  },
  {
    attr_1: "NA",
    attr_2: "LO",
    attr_3: "SP",
    path: "Agronomy "
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "BO",
    path: "Aircraft Maintenance Technology"
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "IE",
    path: "Airline Business Administration/Management"
  },
  {
    attr_1: "NA",
    attr_2: "BO",
    attr_3: "IE",
    path: "Animal Husbandry"
  },
  {
    attr_1: "NA",
    attr_2: "BO",
    attr_3: "IE",
    path: "Animal Science"
  },
  {
    attr_1: "NA",
    attr_2: "LO",
    attr_3: "IE",
    path: "Animal Technology"
  },
  {
    attr_1: "NA",
    attr_2: "SP",
    attr_3: "LO",
    path: "Anthropology"
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "IE",
    path: "Applied Mathematics"
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "IE",
    path: "Applied Physics"
  },
  {
    attr_1: "LO",
    attr_2: "IE",
    attr_3: "IA",
    path: "Applied Science"
  },
  {
    attr_1: "LO",
    attr_2: "IE",
    attr_3: "IA",
    path: "Applied Social Research"
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "IA",
    path: "Applied Statistics"
  },
  {
    attr_1: "NA",
    attr_2: "BO",
    attr_3: "SP",
    path: "Aquaculture"
  },
  {
    attr_1: "LI",
    attr_2: "IE",
    attr_3: "IA",
    path: "Arabic Education (teaching Arabic)"
  },
  {
    attr_1: "SP",
    attr_2: "LO",
    attr_3: "BO",
    path: "Architectural Drafting"
  },
  {
    attr_1: "SP",
    attr_2: "LO",
    attr_3: "BO",
    path: "Architectural Science/Technology"
  },
  {
    attr_1: "SP",
    attr_2: "LO",
    attr_3: "BO",
    path: "Architecture"
  },
  {
    attr_1: "SP",
    attr_2: "MU",
    attr_3: "BO",
    path: "Art Education"
  },
  {
    attr_1: "SP",
    attr_2: "MU",
    attr_3: "BO",
    path: "Arts"
  },
  {
    attr_1: "SP",
    attr_2: "IA",
    attr_3: "MU",
    path: "Arts (Classical/Philosophy)"
  },
  {
    attr_1: "IE",
    attr_2: "LI",
    attr_3: "IA",
    path: "Asian Studies/Asian Culture"
  },
  {
    attr_1: "SP",
    attr_2: "BO",
    attr_3: "LO",
    path: "Automotive Technology"
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "BO",
    path: "Aviation Electronics/Electrical Engineering"
  },
  {
    attr_1: "LO",
    attr_2: "IE",
    attr_3: "IA",
    path: "Banking and Finance"
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "IE",
    path: "Basic Engineering"
  },
  {
    attr_1: "NA",
    attr_2: "LO",
    attr_3: "IE",
    path: "Biology"
  },
  {
    attr_1: "NA",
    attr_2: "LO",
    attr_3: "IE",
    path: "Biology Education"
  },
  {
    attr_1: "IE",
    attr_2: "LI",
    attr_3: "IA",
    path: "Broadcast"
  },
  {
    attr_1: "SP",
    attr_2: "LO",
    attr_3: "IE",
    path: "Building Technology"
  },
  {
    attr_1: "IE",
    attr_2: "LO",
    attr_3: "IA",
    path: "Business Administration"
  },
  {
    attr_1: "IE",
    attr_2: "LO",
    attr_3: "IA",
    path: "Business Administration/Management & Accountancy"
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "IE",
    path: "Business Data Processing"
  },
  {
    attr_1: "IE",
    attr_2: "LO",
    attr_3: "IA",
    path: "Business Economics"
  },
  {
    attr_1: "IE",
    attr_2: "LO",
    attr_3: "IA",
    path: "Business Education"
  },
  {
    attr_1: "IE",
    attr_2: "LO",
    attr_3: "IA",
    path: "Business Entrepreneurship"
  },
  {
    attr_1: "IE",
    attr_2: "LO",
    attr_3: "IA",
    path: "Business Management"
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "BO",
    path: "Ceramics Engineering"
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "IE",
    path: "Chemical Engineering"
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "IE",
    path: "Chemical Engineering Technology"
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "IE",
    path: "Chemical Technology"
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "IE",
    path: "Chemistry"
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "IE",
    path: "Chemistry Education"
  },
  {
    attr_1: "IE",
    attr_2: "LI",
    attr_3: "MU",
    path: "Childhood Education"
  },
  {
    attr_1: "IA",
    attr_2: "LI",
    attr_3: "IE",
    path: "Christian Education"
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "IE",
    path: "Civil Engineering"
  },
  {
    attr_1: "IE",
    attr_2: "IA",
    attr_3: "LO",
    path: "Clinical Psychology"
  },
  {
    attr_1: "IE",
    attr_2: "LO",
    attr_3: "IA",
    path: "Commerce"
  },
  {
    attr_1: "IE",
    attr_2: "LO",
    attr_3: "IA",
    path: "Commercial Science/Arts"
  },
  {
    attr_1: "IE",
    attr_2: "LI",
    attr_3: "IA",
    path: "Communication"
  },
  {
    attr_1: "SP",
    attr_2: "IE",
    attr_3: "MU",
    path: "Communication Arts (Pilipino, English)"
  },
  {
    attr_1: "IE",
    attr_2: "IA",
    attr_3: "LO",
    path: "Community Development"
  },
  {
    attr_1: "IE",
    attr_2: "IA",
    attr_3: "LO",
    path: "Community Health"
  },
  {
    attr_1: "IE",
    attr_2: "IA",
    attr_3: "LO",
    path: "Community Health Development and Management"
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "IE",
    path: "Computer Applications"
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "IE",
    path: "Computer Engineering"
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "IE",
    path: "Computer Management"
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "IE",
    path: "Computer Science"
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "IE",
    path: "Computer Secretarial"
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "IE",
    path: "Computer Technology"
  },
  {
    attr_1: "SP",
    attr_2: "LO",
    attr_3: "IE",
    path: "Construction Technology"
  },
  {
    attr_1: "IE",
    attr_2: "LO",
    attr_3: "IA",
    path: "Cooperative Management"
  },
  {
    attr_1: "IE",
    attr_2: "IA",
    attr_3: "LO",
    path: "Counseling Psychology"
  },
  {
    attr_1: "BO",
    attr_2: "MU",
    attr_3: "SP",
    path: "Creative and Performing Arts"
  },
  {
    attr_1: "IA",
    attr_2: "IE",
    attr_3: "LO",
    path: "Criminal Justice"
  },
  {
    attr_1: "IA",
    attr_2: "BO",
    attr_3: "SP",
    path: "Criminology"
  },
  {
    attr_1: "IA",
    attr_2: "BO",
    attr_3: "IE",
    path: "Criminology and Police Administration"
  },
  {
    attr_1: "NA",
    attr_2: "SP",
    attr_3: "IE",
    path: "Crop Protection"
  },
  {
    attr_1: "NA",
    attr_2: "SP",
    attr_3: "IE",
    path: "Crop Science"
  },
  {
    attr_1: "IE",
    attr_2: "IA",
    attr_3: "MU",
    path: "Culture Heritage Studies"
  },
  {
    attr_1: "IE",
    attr_2: "LO",
    attr_3: "IA",
    path: "Curriculum and Instruction"
  },
  {
    attr_1: "IE",
    attr_2: "LO",
    attr_3: "IA",
    path: "Customs Administration"
  },
  {
    attr_1: "SP",
    attr_2: "IE",
    attr_3: "IA",
    path: "Dental Medicine"
  },
  {
    attr_1: "IE",
    attr_2: "LI",
    attr_3: "LO",
    path: "Development Communication"
  },
  {
    attr_1: "IE",
    attr_2: "LO",
    attr_3: "IA",
    path: "Development Economics"
  },
  {
    attr_1: "IE",
    attr_2: "LO",
    attr_3: "IA",
    path: "Development Management/Administration"
  },
  {
    attr_1: "IE",
    attr_2: "IA",
    attr_3: "LO",
    path: "Development Studies"
  },
  {
    attr_1: "IA",
    attr_2: "IE",
    attr_3: "LI",
    path: "Divinity"
  },
  {
    attr_1: "IE",
    attr_2: "LI",
    attr_3: "MU",
    path: "Early Childhood Education"
  },
  {
    attr_1: "IE",
    attr_2: "LO",
    attr_3: "IA",
    path: "Economics"
  },
  {
    attr_1: "IE",
    attr_2: "LO",
    attr_3: "IA",
    path: "Economics Education"
  },
  {
    attr_1: "IE",
    attr_2: "LI",
    attr_3: "LO",
    path: "Education"
  },
  {
    attr_1: "IE",
    attr_2: "LI",
    attr_3: "LO",
    path: "Educational Administration and Supervision"
  },
  {
    attr_1: "IE",
    attr_2: "LI",
    attr_3: "LO",
    path: "Educational Administration/Management"
  },
  {
    attr_1: "IE",
    attr_2: "LO",
    attr_3: "LI",
    path: "Educational Technology"
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "BO",
    path: "Electrical Engineering"
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "BO",
    path: "Electrical Technology"
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "BO",
    path: "Electronics Engineering/Technology"
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "BO",
    path: "Electronics and Communications Engineering"
  },
  {
    attr_1: "IE",
    attr_2: "LI",
    attr_3: "LO",
    path: "Elementary Education"
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "IE",
    path: "Energy Engineering"
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "IE",
    path: "Engineering Education"
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "IE",
    path: "Engineering Technology"
  },
  {
    attr_1: "LI",
    attr_2: "IE",
    attr_3: "IA",
    path: "English"
  },
  {
    attr_1: "LI",
    attr_2: "IE",
    attr_3: "IA",
    path: "English Education"
  },
  {
    attr_1: "LI",
    attr_2: "IE",
    attr_3: "IA",
    path: "English Literature"
  },
  {
    attr_1: "NA",
    attr_2: "SP",
    attr_3: "IE",
    path: "Entomology"
  },
  {
    attr_1: "IE",
    attr_2: "LO",
    attr_3: "IA",
    path: "Entrepreneurial Management"
  },
  {
    attr_1: "NA",
    attr_2: "IE",
    attr_3: "SP",
    path: "Environmental Planning/Management"
  },
  {
    attr_1: "NA",
    attr_2: "IE",
    attr_3: "SP",
    path: "Environmental Science"
  },
  {
    attr_1: "LO",
    attr_2: "NA",
    attr_3: "IE",
    path: "Environmental and Sanitary Engineering "
  },
  {
    attr_1: "IE",
    attr_2: "LI",
    attr_3: "LO",
    path: "Extension Education"
  },
  {
    attr_1: "NA",
    attr_2: "LO",
    attr_3: "IE",
    path: "Farming System"
  },
  {
    attr_1: "LI",
    attr_2: "IE",
    attr_3: "LA",
    path: "Filipino Education"
  },
  {
    attr_1: "SP",
    attr_2: "BO",
    attr_3: "IA",
    path: "Fine Arts"
  },
  {
    attr_1: "NA",
    attr_2: "BO",
    attr_3: "SP",
    path: "Fish Processing Technology"
  },
  {
    attr_1: "NA",
    attr_2: "IE",
    attr_3: "SP",
    path: "Fisheries"
  },
  {
    attr_1: "NA",
    attr_2: "BO",
    attr_3: "SP",
    path: "Fisheries Technology"
  },
  {
    attr_1: "NA",
    attr_2: "IE",
    attr_3: "SP",
    path: "Fishery Business Management "
  },
  {
    attr_1: "NA",
    attr_2: "BO",
    attr_3: "SP",
    path: "Fishing Technology"
  },
  {
    attr_1: "SP",
    attr_2: "LO",
    attr_3: "NA",
    path: "Food Processing"
  },
  {
    attr_1: "SP",
    attr_2: "LO",
    attr_3: "NA",
    path: "Food Science"
  },
  {
    attr_1: "SP",
    attr_2: "LO",
    attr_3: "NA",
    path: "Food Science and Technology"
  },
  {
    attr_1: "IE",
    attr_2: "SP",
    attr_3: "LO",
    path: "Food Service Administration"
  },
  {
    attr_1: "SP",
    attr_2: "LO",
    attr_3: "NA",
    path: "Food Technology"
  },
  {
    attr_1: "NA",
    attr_2: "BO",
    attr_3: "SP",
    path: "Forest Ranger"
  },
  {
    attr_1: "NA",
    attr_2: "BO",
    attr_3: "SP",
    path: "Forest Technology"
  },
  {
    attr_1: "NA",
    attr_2: "SP",
    attr_3: "BO",
    path: "Forestry"
  },
  {
    attr_1: "SP",
    attr_2: "BO",
    attr_3: "IA",
    path: "Garment Technology"
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "IE",
    path: "General Mathematics"
  },
  {
    attr_1: "LO",
    attr_2: "IE",
    attr_3: "NA",
    path: "General Science"
  },
  {
    attr_1: "LO",
    attr_2: "IE",
    attr_3: "NA",
    path: "General Science Education"
  },
  {
    attr_1: "SP",
    attr_2: "NA",
    attr_3: "LO",
    path: "Geodetic Engineering"
  },
  {
    attr_1: "SP",
    attr_2: "NA",
    attr_3: "LO",
    path: "Geology"
  },
  {
    attr_1: "LO",
    attr_2: "IE",
    attr_3: "IA",
    path: "Government Accounting and Auditing"
  },
  {
    attr_1: "IE",
    attr_2: "IA",
    attr_3: "LO",
    path: "Guidance and Counselling"
  },
  {
    attr_1: "IE",
    attr_2: "IA",
    attr_3: "LO",
    path: "Health Professional Education"
  },
  {
    attr_1: "IE",
    attr_2: "IA",
    attr_3: "LO",
    path: "Health Science Education"
  },
  {
    attr_1: "LI",
    attr_2: "IE",
    attr_3: "LO",
    path: "History"
  },
  {
    attr_1: "BO",
    attr_2: "IA",
    attr_3: "SP",
    path: "Home Economics"
  },
  {
    attr_1: "BO",
    attr_2: "IE",
    attr_3: "SP",
    path: "Home Economics Education"
  },
  {
    attr_1: "BO",
    attr_2: "SP",
    attr_3: "LO",
    path: "Home Technology"
  },
  {
    attr_1: "NA",
    attr_2: "SP",
    attr_3: "BO",
    path: "Horticulture"
  },
  {
    attr_1: "IE",
    attr_2: "LO",
    attr_3: "IA",
    path: "Hospital Administration"
  },
  {
    attr_1: "IE",
    attr_2: "LI",
    attr_3: "BO",
    path: "Hotel and Restaurant Management"
  },
  {
    attr_1: "LO",
    attr_2: "IE",
    attr_3: "IA",
    path: "Human Resource Development and Planning"
  },
  {
    attr_1: "BO",
    attr_2: "IE",
    attr_3: "SP",
    path: "Industrial Education"
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "BO",
    path: "Industrial Engineering"
  },
  {
    attr_1: "IE",
    attr_2: "IA",
    attr_3: "LO",
    path: "Industrial Psychology"
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "IE",
    path: "Industrial Technology"
  },
  {
    attr_1: "LO",
    attr_2: "IE",
    attr_3: "LI",
    path: "Information Management"
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "IE",
    path: "Information Technology"
  },
  {
    attr_1: "IE",
    attr_2: "SP",
    attr_3: "IA",
    path: "Institutional Development Management"
  },
  {
    attr_1: "IA",
    attr_2: "IE",
    attr_3: "SP",
    path: "Interdisciplinary Studies"
  },
  {
    attr_1: "SP",
    attr_2: "BO",
    attr_3: "LO",
    path: "Interior Design"
  },
  {
    attr_1: "IE",
    attr_2: "LI",
    attr_3: "IA",
    path: "International Relations"
  },
  {
    attr_1: "IE",
    attr_2: "LI",
    attr_3: "IA",
    path: "International Studies"
  },
  {
    attr_1: "IA",
    attr_2: "LI",
    attr_3: "IE",
    path: "Islamic Studies"
  },
  {
    attr_1: "LI",
    attr_2: "IE",
    attr_3: "IA",
    path: "Journalism"
  },
  {
    attr_1: "IA",
    attr_2: "LI",
    attr_3: "IE",
    path: "Jurisprudence"
  },
  {
    attr_1: "IE",
    attr_2: "LI",
    attr_3: "IA",
    path: "Kindergarten Education"
  },
  {
    attr_1: "LI",
    attr_2: "IE",
    attr_3: "IA",
    path: "Language Education/Language Teaching"
  },
  {
    attr_1: "LI",
    attr_2: "IE",
    attr_3: "IA",
    path: "Language and Literature"
  },
  {
    attr_1: "LI",
    attr_2: "IA",
    attr_3: "IE",
    path: "Laws"
  },
  {
    attr_1: "IE",
    attr_2: "LI",
    attr_3: "IA",
    path: "Legal Management"
  },
  {
    attr_1: "SP",
    attr_2: "LI",
    attr_3: "IA",
    path: "Liberal Arts-Liacom"
  },
  {
    attr_1: "LI",
    attr_2: "IE",
    attr_3: "SP",
    path: "Library Science"
  },
  {
    attr_1: "LI",
    attr_2: "IE",
    attr_3: "SP",
    path: "Library and Information Science"
  },
  {
    attr_1: "LI",
    attr_2: "IE",
    attr_3: "IA",
    path: "Linguistics"
  },
  {
    attr_1: "LI",
    attr_2: "IE",
    attr_3: "IA",
    path: "Literature"
  },
  {
    attr_1: "IE",
    attr_2: "LI",
    attr_3: "IA",
    path: "Local Government & Regional Development"
  },
  {
    attr_1: "IE",
    attr_2: "LO",
    attr_3: "IA",
    path: "Management"
  },
  {
    attr_1: "LO",
    attr_2: "BO",
    attr_3: "IE",
    path: "Manufacturing/Production Engineering"
  },
  {
    attr_1: "NA",
    attr_2: "IE",
    attr_3: "SP",
    path: "Marine Bio-Diversity"
  },
  {
    attr_1: "NA",
    attr_2: "IE",
    attr_3: "SP",
    path: "Marine Biology"
  },
  {
    attr_1: "SP",
    attr_2: "LO",
    attr_3: "IE",
    path: "Marine Engineering/Technology"
  },
  {
    attr_1: "SP",
    attr_2: "LO",
    attr_3: "BO",
    path: "Marine Transportation"
  },
  {
    attr_1: "SP",
    attr_2: "IE",
    attr_3: "IA",
    path: "Maritime Management"
  },
  {
    attr_1: "IE",
    attr_2: "LI",
    attr_3: "LO",
    path: "Marketing"
  },
  {
    attr_1: "IE",
    attr_2: "LI",
    attr_3: "IA",
    path: "Mass Communication"
  },
  {
    attr_1: "SP",
    attr_2: "LO",
    attr_3: "BO",
    path: "Materials Science and Engineering"
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "IE",
    path: "Mathematical Science"
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "IE",
    path: "Mathematics Teaching"
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "BO",
    path: "Mechanical Engineering"
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "BO",
    path: "Mechanical Technology"
  },
  {
    attr_1: "SP",
    attr_2: "IE",
    attr_3: "LO",
    path: "Medical Technology"
  },
  {
    attr_1: "IE",
    attr_2: "LO",
    attr_3: "IA",
    path: "Medicine"
  },
  {
    attr_1: "LO",
    attr_2: "BO",
    attr_3: "SP",
    path: "Metallurgical Engineering"
  },
  {
    attr_1: "IE",
    attr_2: "LO",
    attr_3: "IA",
    path: "Midwifery"
  },
  {
    attr_1: "SP",
    attr_2: "LO",
    attr_3: "BO",
    path: "Mining Engineering"
  },
  {
    attr_1: "MU",
    attr_2: "IE",
    attr_3: "LI",
    path: "Music"
  },
  {
    attr_1: "MU",
    attr_2: "IE",
    attr_3: "LI",
    path: "Music Education"
  },
  {
    attr_1: "NA",
    attr_2: "SP",
    attr_3: "LO",
    path: "Natural Science"
  },
  {
    attr_1: "IE",
    attr_2: "LO",
    attr_3: "IA",
    path: "Nursing"
  },
  {
    attr_1: "IE",
    attr_2: "NA",
    attr_3: "SP",
    path: "Nutrition and Dietetics"
  },
  {
    attr_1: "IE",
    attr_2: "IA",
    attr_3: "BO",
    path: "Occupational Therapy/Health"
  },
  {
    attr_1: "IE",
    attr_2: "LO",
    attr_3: "IA",
    path: "Office Administration/Management"
  },
  {
    attr_1: "SP",
    attr_2: "IE",
    attr_3: "IA",
    path: "Optometry"
  },
  {
    attr_1: "IE",
    attr_2: "LO",
    attr_3: "IA",
    path: "Organizational Development and Planning"
  },
  {
    attr_1: "NA",
    attr_2: "SP",
    attr_3: "IE",
    path: "Other Agriculture, Forestry, Fisheries"
  },
  {
    attr_1: "IA",
    attr_2: "BO",
    attr_3: "SP",
    path: "Other Civil Security and Military"
  },
  {
    attr_1: "IE",
    attr_2: "LI",
    attr_3: "LO",
    path: "Other Education Science and Teacher Training"
  },
  {
    attr_1: "IE",
    attr_2: "LI",
    attr_3: "LO",
    path: "Other Education not elsewhere coded (NEC)"
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "IE",
    path: "Other Engineering and Technology"
  },
  {
    attr_1: "SP",
    attr_2: "MU",
    attr_3: "BO",
    path: "Other Fine and Applied Arts"
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "IE",
    path: "Other IT-Related"
  },
  {
    attr_1: "SP",
    attr_2: "LO",
    attr_3: "BO",
    path: "Other Maritime"
  },
  {
    attr_1: "IE",
    attr_2: "LO",
    attr_3: "IA",
    path: "Other Medical and Allied"
  },
  {
    attr_1: "IE",
    attr_2: "IA",
    attr_3: "LO",
    path: "Other Social and Behavioral Science"
  },
  {
    attr_1: "IE",
    attr_2: "IA",
    attr_3: "LO",
    path: "Participatory Development"
  },
  {
    attr_1: "IA",
    attr_2: "LI",
    attr_3: "IE",
    path: "Pastoral Ministry"
  },
  {
    attr_1: "LO",
    attr_2: "IE",
    attr_3: "IA",
    path: "Personnel and Human Resources Management"
  },
  {
    attr_1: "IE",
    attr_2: "LO",
    attr_3: "IA",
    path: "Pharmacy"
  },
  {
    attr_1: "LI",
    attr_2: "IE",
    attr_3: "IA",
    path: "Philippine Literature"
  },
  {
    attr_1: "MU",
    attr_2: "LI",
    attr_3: "IE",
    path: "Philippine Studies/Arts"
  },
  {
    attr_1: "IA",
    attr_2: "IE",
    attr_3: "LI",
    path: "Philosophy"
  },
  {
    attr_1: "BO",
    attr_2: "IE",
    attr_3: "SP",
    path: "Physical Education"
  },
  {
    attr_1: "IE",
    attr_2: "BO",
    attr_3: "IA",
    path: "Physical Therapy"
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "IE",
    path: "Physics"
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "IE",
    path: "Physics Teaching"
  },
  {
    attr_1: "LI",
    attr_2: "IE",
    attr_3: "IA",
    path: "Pilipino/Filipino"
  },
  {
    attr_1: "NA",
    attr_2: "SP",
    attr_3: "LO",
    path: "Plant Breeding"
  },
  {
    attr_1: "NA",
    attr_2: "SP",
    attr_3: "LO",
    path: "Plant Pathology"
  },
  {
    attr_1: "IE",
    attr_2: "LI",
    attr_3: "LA",
    path: "Political Economy"
  },
  {
    attr_1: "IE",
    attr_2: "LI",
    attr_3: "LA",
    path: "Political Science"
  },
  {
    attr_1: "SP",
    attr_2: "BO",
    attr_3: "IE",
    path: "Pre-Dental"
  },
  {
    attr_1: "IE",
    attr_2: "IA",
    attr_3: "LO",
    path: "Psychology"
  },
  {
    attr_1: "IE",
    attr_2: "LI",
    attr_3: "LO",
    path: "Public Administration/Management"
  },
  {
    attr_1: "IE",
    attr_2: "LO",
    attr_3: "IA",
    path: "Public Health/Medical Health"
  },
  {
    attr_1: "SP",
    attr_2: "IE",
    attr_3: "LO",
    path: "Radiologic Technology"
  },
  {
    attr_1: "IE",
    attr_2: "SP",
    attr_3: "LO",
    path: "Real Estate"
  },
  {
    attr_1: "IA",
    attr_2: "LI",
    attr_3: "IE",
    path: "Religious Education (Character/Value Education)"
  },
  {
    attr_1: "IA",
    attr_2: "LI",
    attr_3: "IE",
    path: "Religious Formation"
  },
  {
    attr_1: "LO",
    attr_2: "LI",
    attr_3: "IA",
    path: "Research and Evaluation"
  },
  {
    attr_1: "IE",
    attr_2: "BO",
    attr_3: "LO",
    path: "Respiratory/Pulmunary Therapy"
  },
  {
    attr_1: "IE",
    attr_2: "LO",
    attr_3: "NA",
    path: "Rural Development"
  },
  {
    attr_1: "SP",
    attr_2: "NA",
    attr_3: "LO",
    path: "Sanitary Engineering"
  },
  {
    attr_1: "LO",
    attr_2: "NA",
    attr_3: "IE",
    path: "Science"
  },
  {
    attr_1: "LO",
    attr_2: "NA",
    attr_3: "IE",
    path: "Science Education (teaching Science)"
  },
  {
    attr_1: "IE",
    attr_2: "LI",
    attr_3: "LO",
    path: "Secondary Education with no specialization"
  },
  {
    attr_1: "IE",
    attr_2: "LO",
    attr_3: "IA",
    path: "Secretarial Science"
  },
  {
    attr_1: "IE",
    attr_2: "LO",
    attr_3: "IA",
    path: "Secretarial/Medical Secretarial/Clerical"
  },
  {
    attr_1: "IE",
    attr_2: "IA",
    attr_3: "LO",
    path: "Social Development"
  },
  {
    attr_1: "IE",
    attr_2: "IA",
    attr_3: "LO",
    path: "Social Science"
  },
  {
    attr_1: "IE",
    attr_2: "IA",
    attr_3: "LO",
    path: "Social Science Education"
  },
  {
    attr_1: "IE",
    attr_2: "IA",
    attr_3: "LO",
    path: "Social Services"
  },
  {
    attr_1: "IE",
    attr_2: "IA",
    attr_3: "LO",
    path: "Social Studies"
  },
  {
    attr_1: "IE",
    attr_2: "IA",
    attr_3: "LO",
    path: "Social Work"
  },
  {
    attr_1: "IE",
    attr_2: "IA",
    attr_3: "LO",
    path: "Sociology"
  },
  {
    attr_1: "SP",
    attr_2: "NA",
    attr_3: "LO",
    path: "Soil Science"
  },
  {
    attr_1: "IE",
    attr_2: "LI",
    attr_3: "LO",
    path: "Special Education"
  },
  {
    attr_1: "BO",
    attr_2: "IE",
    attr_3: "SP",
    path: "Sports Science (Sports Officiating/Coaching)"
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "IE",
    path: "Statistics"
  },
  {
    attr_1: "SP",
    attr_2: "LO",
    attr_3: "IE",
    path: "Structural Engineering"
  },
  {
    attr_1: "IE",
    attr_2: "LI",
    attr_3: "LO",
    path: "Teaching"
  },
  {
    attr_1: "IE",
    attr_2: "IA",
    attr_3: "LI",
    path: "Teaching Handicapped Children "
  },
  {
    attr_1: "SP",
    attr_2: "IE",
    attr_3: "BO",
    path: "Technician Teacher Education"
  },
  {
    attr_1: "IE",
    attr_2: "LO",
    attr_3: "LI",
    path: "Technology Communications Management"
  },
  {
    attr_1: "IE",
    attr_2: "LO",
    attr_3: "SP",
    path: "Technology Management"
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "IE",
    path: "Technology/Engineering"
  },
  {
    attr_1: "IA",
    attr_2: "LI",
    attr_3: "IE",
    path: "Theology/Theological Studies"
  },
  {
    attr_1: "IE",
    attr_2: "LI",
    attr_3: "IA",
    path: "Tourism"
  },
  {
    attr_1: "IE",
    attr_2: "LI",
    attr_3: "IA",
    path: "Tourism and Hotel & Restaurant Mgt."
  },
  {
    attr_1: "IE",
    attr_2: "LI",
    attr_3: "IA",
    path: "Tourism and Travel Management"
  },
  {
    attr_1: "LO",
    attr_2: "IE",
    attr_3: "SP",
    path: "Trade Technology"
  },
  {
    attr_1: "SP",
    attr_2: "LO",
    attr_3: "BO",
    path: "Transport Engineering"
  },
  {
    attr_1: "SP",
    attr_2: "LO",
    attr_3: "IE",
    path: "Urban and Regional Planning"
  },
  {
    attr_1: "NA",
    attr_2: "LO",
    attr_3: "SP",
    path: "Veterinary Medicine"
  },
  {
    attr_1: "NA",
    attr_2: "LO",
    attr_3: "SP",
    path: "Veterinary Technology"
  },
  {
    attr_1: "BO",
    attr_2: "SP",
    attr_3: "IE",
    path: "Vocational/Technical Education"
  },
  {
    attr_1: "SP",
    attr_2: "LO",
    attr_3: "NA",
    path: "Water Resources Engineering"
  },
  {
    attr_1: "NA",
    attr_2: "SP",
    attr_3: "LO",
    path: "Zoology"
  }
];

// Configuration
var config1 = {
  trainingSet: dataset,
  categoryAttr: "path"
  //ignoredAttributes: ["attr_2", "attr_3"]
};

// Building Decision Tree
var decisionTree = new dt.DecisionTree(config1);

// Building Random Forest
var numberOfTrees = 10;
var randomForest = new dt.RandomForest(config1, numberOfTrees);

// Testing Decision Tree and Random Forest
var comic = { attr_1: "IA", attr_2: "IE", attr_3: "LO" };

var decisionTreePrediction = decisionTree.predict(comic);
var randomForestPrediction = randomForest.predict(comic);

console.log("Attributes:", comic);
// console.log("Result:", JSON.parse(decisionTreePrediction));
console.log("Result:", randomForestPrediction);
