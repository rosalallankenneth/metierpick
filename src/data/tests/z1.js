let result = [
  { attr_1: "LO", attr_2: "IE", attr_3: "IA" },
  { attr_1: "LO", attr_2: "SP", attr_3: "BO" },
  { attr_1: "NA", attr_2: "IE", attr_3: "LO" },
  { attr_1: "LO", attr_2: "NA", attr_3: "SP" },
  { attr_1: "NA", attr_2: "SP", attr_3: "IE" },
  { attr_1: "NA", attr_2: "IE", attr_3: "IA" },
  { attr_1: "NA", attr_2: "LO", attr_3: "IE" },
  { attr_1: "NA", attr_2: "LO", attr_3: "SP" },
  { attr_1: "LO", attr_2: "SP", attr_3: "IE" },
  { attr_1: "NA", attr_2: "BO", attr_3: "IE" },
  { attr_1: "NA", attr_2: "SP", attr_3: "LO" },
  { attr_1: "LO", attr_2: "SP", attr_3: "IA" },
  { attr_1: "NA", attr_2: "BO", attr_3: "SP" },
  { attr_1: "LI", attr_2: "IE", attr_3: "IA" },
  { attr_1: "SP", attr_2: "LO", attr_3: "BO" },
  { attr_1: "SP", attr_2: "MU", attr_3: "BO" },
  { attr_1: "SP", attr_2: "IA", attr_3: "MU" },
  { attr_1: "IE", attr_2: "LI", attr_3: "IA" },
  { attr_1: "SP", attr_2: "BO", attr_3: "LO" },
  { attr_1: "SP", attr_2: "LO", attr_3: "IE" },
  { attr_1: "IE", attr_2: "LO", attr_3: "IA" },
  { attr_1: "IE", attr_2: "LI", attr_3: "MU" },
  { attr_1: "IA", attr_2: "LI", attr_3: "IE" },
  { attr_1: "IE", attr_2: "IA", attr_3: "LO" },
  { attr_1: "SP", attr_2: "IE", attr_3: "MU" },
  { attr_1: "BO", attr_2: "MU", attr_3: "SP" },
  { attr_1: "IA", attr_2: "IE", attr_3: "LO" },
  { attr_1: "IA", attr_2: "BO", attr_3: "SP" },
  { attr_1: "IA", attr_2: "BO", attr_3: "IE" },
  { attr_1: "IE", attr_2: "IA", attr_3: "MU" },
  { attr_1: "SP", attr_2: "IE", attr_3: "IA" },
  { attr_1: "IE", attr_2: "LI", attr_3: "LO" },
  { attr_1: "IA", attr_2: "IE", attr_3: "LI" },
  { attr_1: "IE", attr_2: "LO", attr_3: "LI" },
  { attr_1: "NA", attr_2: "IE", attr_3: "SP" },
  { attr_1: "LO", attr_2: "NA", attr_3: "IE" },
  { attr_1: "LI", attr_2: "IE", attr_3: "LA" },
  { attr_1: "SP", attr_2: "BO", attr_3: "IA" },
  { attr_1: "SP", attr_2: "LO", attr_3: "NA" },
  { attr_1: "IE", attr_2: "SP", attr_3: "LO" },
  { attr_1: "NA", attr_2: "SP", attr_3: "BO" },
  { attr_1: "LO", attr_2: "IE", attr_3: "NA" },
  { attr_1: "SP", attr_2: "NA", attr_3: "LO" },
  { attr_1: "LI", attr_2: "IE", attr_3: "LO" },
  { attr_1: "BO", attr_2: "IA", attr_3: "SP" },
  { attr_1: "BO", attr_2: "IE", attr_3: "SP" },
  { attr_1: "BO", attr_2: "SP", attr_3: "LO" },
  { attr_1: "IE", attr_2: "LI", attr_3: "BO" },
  { attr_1: "LO", attr_2: "IE", attr_3: "LI" },
  { attr_1: "IE", attr_2: "SP", attr_3: "IA" },
  { attr_1: "IA", attr_2: "IE", attr_3: "SP" },
  { attr_1: "LI", attr_2: "IA", attr_3: "IE" },
  { attr_1: "SP", attr_2: "LI", attr_3: "IA" },
  { attr_1: "LI", attr_2: "IE", attr_3: "SP" },
  { attr_1: "LO", attr_2: "BO", attr_3: "IE" },
  { attr_1: "SP", attr_2: "IE", attr_3: "LO" },
  { attr_1: "LO", attr_2: "BO", attr_3: "SP" },
  { attr_1: "MU", attr_2: "IE", attr_3: "LI" },
  { attr_1: "IE", attr_2: "NA", attr_3: "SP" },
  { attr_1: "IE", attr_2: "IA", attr_3: "BO" },
  { attr_1: "MU", attr_2: "LI", attr_3: "IE" },
  { attr_1: "IE", attr_2: "BO", attr_3: "IA" },
  { attr_1: "IE", attr_2: "LI", attr_3: "LA" },
  { attr_1: "SP", attr_2: "BO", attr_3: "IE" },
  { attr_1: "LO", attr_2: "LI", attr_3: "IA" },
  { attr_1: "IE", attr_2: "BO", attr_3: "LO" },
  { attr_1: "IE", attr_2: "LO", attr_3: "NA" },
  { attr_1: "IE", attr_2: "IA", attr_3: "LI" },
  { attr_1: "SP", attr_2: "IE", attr_3: "BO" },
  { attr_1: "IE", attr_2: "LO", attr_3: "SP" },
  { attr_1: "LO", attr_2: "IE", attr_3: "SP" },
  { attr_1: "BO", attr_2: "SP", attr_3: "IE" }
];

const programs = [
  { PSCED_Name: "Accountancy", description: "LO,IE,IA" },
  { PSCED_Name: "Accounting Technology", description: "LO,IE,IA" },
  { PSCED_Name: "Aeronautical Engineering", description: "LO,SP,BO" },
  { PSCED_Name: "Agri-Business", description: "NA,IE,LO" },
  {
    PSCED_Name: "Agri-Business Management/Administration",
    description: "NA,IE,LO"
  },
  { PSCED_Name: "Agricultural Chemistry", description: "LO,NA,SP" },
  { PSCED_Name: "Agricultural Development", description: "NA,SP,IE" },
  { PSCED_Name: "Agricultural Economics ", description: "NA,IE,LO" },
  { PSCED_Name: "Agricultural Education", description: "NA,IE,IA" },
  { PSCED_Name: "Agricultural Engineering", description: "LO,NA,SP" },
  { PSCED_Name: "Agricultural Extension", description: "NA,SP,IE" },
  { PSCED_Name: "Agricultural Management", description: "NA,IE,LO" },
  { PSCED_Name: "Agricultural Science", description: "NA,LO,IE" },
  { PSCED_Name: "Agricultural Technology", description: "NA,LO,IE" },
  { PSCED_Name: "Agricultural Technology Education", description: "NA,LO,IE" },
  { PSCED_Name: "Agriculture ", description: "NA,SP,IE" },
  { PSCED_Name: "Agro-Forestry", description: "NA,SP,IE" },
  { PSCED_Name: "Agronomy ", description: "NA,LO,SP" },
  { PSCED_Name: "Aircraft Maintenance Technology", description: "LO,SP,BO" },
  {
    PSCED_Name: "Airline Business Administration/Management",
    description: "LO,SP,IE"
  },
  { PSCED_Name: "Animal Husbandry", description: "NA,BO,IE" },
  { PSCED_Name: "Animal Science", description: "NA,BO,IE" },
  { PSCED_Name: "Animal Technology", description: "NA,LO,IE" },
  { PSCED_Name: "Anthropology", description: "NA,SP,LO" },
  { PSCED_Name: "Applied Mathematics", description: "LO,SP,IE" },
  { PSCED_Name: "Applied Physics", description: "LO,SP,IE" },
  { PSCED_Name: "Applied Science", description: "LO,IE,IA" },
  { PSCED_Name: "Applied Social Research", description: "LO,IE,IA" },
  { PSCED_Name: "Applied Statistics", description: "LO,SP,IA" },
  { PSCED_Name: "Aquaculture", description: "NA,BO,SP" },
  { PSCED_Name: "Arabic Education (teaching Arabic)", description: "LI,IE,IA" },
  { PSCED_Name: "Architectural Drafting", description: "SP,LO,BO" },
  { PSCED_Name: "Architectural Science/Technology", description: "SP,LO,BO" },
  { PSCED_Name: "Architecture", description: "SP,LO,BO" },
  { PSCED_Name: "Art Education", description: "SP,MU,BO" },
  { PSCED_Name: "Arts", description: "SP,MU,BO" },
  { PSCED_Name: "Arts (Classical/Philosophy)", description: "SP,IA,MU" },
  { PSCED_Name: "Asian Studies/Asian Culture", description: "IE,LI,IA" },
  { PSCED_Name: "Automotive Technology", description: "SP,BO,LO" },
  {
    PSCED_Name: "Aviation Electronics/Electrical Engineering",
    description: "LO,SP,BO"
  },
  { PSCED_Name: "Banking and Finance", description: "LO,IE,IA" },
  { PSCED_Name: "Basic Engineering", description: "LO,SP,IE" },
  { PSCED_Name: "Biology", description: "NA,LO,IE" },
  { PSCED_Name: "Biology Education", description: "NA,LO,IE" },
  { PSCED_Name: "Broadcast", description: "IE,LI,IA" },
  { PSCED_Name: "Building Technology", description: "SP,LO,IE" },
  { PSCED_Name: "Business Administration", description: "IE,LO,IA" },
  {
    PSCED_Name: "Business Administration/Management & Accountancy",
    description: "IE,LO,IA"
  },
  { PSCED_Name: "Business Data Processing", description: "LO,SP,IE" },
  { PSCED_Name: "Business Economics", description: "IE,LO,IA" },
  { PSCED_Name: "Business Education", description: "IE,LO,IA" },
  { PSCED_Name: "Business Entrepreneurship", description: "IE,LO,IA" },
  { PSCED_Name: "Business Management", description: "IE,LO,IA" },
  { PSCED_Name: "Ceramics Engineering", description: "LO,SP,BO" },
  { PSCED_Name: "Chemical Engineering", description: "LO,SP,IE" },
  { PSCED_Name: "Chemical Engineering Technology", description: "LO,SP,IE" },
  { PSCED_Name: "Chemical Technology", description: "LO,SP,IE" },
  { PSCED_Name: "Chemistry", description: "LO,SP,IE" },
  { PSCED_Name: "Chemistry Education", description: "LO,SP,IE" },
  { PSCED_Name: "Childhood Education", description: "IE,LI,MU" },
  { PSCED_Name: "Christian Education", description: "IA,LI,IE" },
  { PSCED_Name: "Civil Engineering", description: "LO,SP,IE" },
  { PSCED_Name: "Clinical Psychology", description: "IE,IA,LO" },
  { PSCED_Name: "Commerce", description: "IE,LO,IA" },
  { PSCED_Name: "Commercial Science/Arts", description: "IE,LO,IA" },
  { PSCED_Name: "Communication", description: "IE,LI,IA" },
  {
    PSCED_Name: "Communication Arts (Pilipino, English)",
    description: "SP,IE,MU"
  },
  { PSCED_Name: "Community Development", description: "IE,IA,LO" },
  { PSCED_Name: "Community Health", description: "IE,IA,LO" },
  {
    PSCED_Name: "Community Health Development and Management",
    description: "IE,IA,LO"
  },
  { PSCED_Name: "Computer Applications", description: "LO,SP,IE" },
  { PSCED_Name: "Computer Engineering", description: "LO,SP,IE" },
  { PSCED_Name: "Computer Management", description: "LO,SP,IE" },
  { PSCED_Name: "Computer Science", description: "LO,SP,IE" },
  { PSCED_Name: "Computer Secretarial", description: "LO,SP,IE" },
  { PSCED_Name: "Computer Technology", description: "LO,SP,IE" },
  { PSCED_Name: "Construction Technology", description: "SP,LO,IE" },
  { PSCED_Name: "Cooperative Management", description: "IE,LO,IA" },
  { PSCED_Name: "Counseling Psychology", description: "IE,IA,LO" },
  { PSCED_Name: "Creative and Performing Arts", description: "BO,MU,SP" },
  { PSCED_Name: "Criminal Justice", description: "IA,IE,LO" },
  { PSCED_Name: "Criminology", description: "IA,BO,SP" },
  {
    PSCED_Name: "Criminology and Police Administration",
    description: "IA,BO,IE"
  },
  { PSCED_Name: "Crop Protection", description: "NA,SP,IE" },
  { PSCED_Name: "Crop Science", description: "NA,SP,IE" },
  { PSCED_Name: "Culture Heritage Studies", description: "IE,IA,MU" },
  { PSCED_Name: "Curriculum and Instruction", description: "IE,LO,IA" },
  { PSCED_Name: "Customs Administration", description: "IE,LO,IA" },
  { PSCED_Name: "Dental Medicine", description: "SP,IE,IA" },
  { PSCED_Name: "Development Communication", description: "IE,LI,LO" },
  { PSCED_Name: "Development Economics", description: "IE,LO,IA" },
  {
    PSCED_Name: "Development Management/Administration",
    description: "IE,LO,IA"
  },
  { PSCED_Name: "Development Studies", description: "IE,IA,LO" },
  { PSCED_Name: "Divinity", description: "IA,IE,LI" },
  { PSCED_Name: "Early Childhood Education", description: "IE,LI,MU" },
  { PSCED_Name: "Economics", description: "IE,LO,IA" },
  { PSCED_Name: "Economics Education", description: "IE,LO,IA" },
  { PSCED_Name: "Education", description: "IE,LI,LO" },
  {
    PSCED_Name: "Educational Administration and Supervision",
    description: "IE,LI,LO"
  },
  {
    PSCED_Name: "Educational Administration/Management",
    description: "IE,LI,LO"
  },
  { PSCED_Name: "Educational Technology", description: "IE,LO,LI" },
  { PSCED_Name: "Electrical Engineering", description: "LO,SP,BO" },
  { PSCED_Name: "Electrical Technology", description: "LO,SP,BO" },
  { PSCED_Name: "Electronics Engineering/Technology", description: "LO,SP,BO" },
  {
    PSCED_Name: "Electronics and Communications Engineering",
    description: "LO,SP,BO"
  },
  { PSCED_Name: "Elementary Education", description: "IE,LI,LO" },
  { PSCED_Name: "Energy Engineering", description: "LO,SP,IE" },
  { PSCED_Name: "Engineering Education", description: "LO,SP,IE" },
  { PSCED_Name: "Engineering Technology", description: "LO,SP,IE" },
  { PSCED_Name: "English", description: "LI,IE,IA" },
  { PSCED_Name: "English Education", description: "LI,IE,IA" },
  { PSCED_Name: "English Literature", description: "LI,IE,IA" },
  { PSCED_Name: "Entomology", description: "NA,SP,IE" },
  { PSCED_Name: "Entrepreneurial Management", description: "IE,LO,IA" },
  { PSCED_Name: "Environmental Planning/Management", description: "NA,IE,SP" },
  { PSCED_Name: "Environmental Science", description: "NA,IE,SP" },
  {
    PSCED_Name: "Environmental and Sanitary Engineering ",
    description: "LO,NA,IE"
  },
  { PSCED_Name: "Extension Education", description: "IE,LI,LO" },
  { PSCED_Name: "Farming System", description: "NA,LO,IE" },
  { PSCED_Name: "Filipino Education", description: "LI,IE,LA" },
  { PSCED_Name: "Fine Arts", description: "SP,BO,IA" },
  { PSCED_Name: "Fish Processing Technology", description: "NA,BO,SP" },
  { PSCED_Name: "Fisheries", description: "NA,IE,SP" },
  { PSCED_Name: "Fisheries Technology", description: "NA,BO,SP" },
  { PSCED_Name: "Fishery Business Management ", description: "NA,IE,SP" },
  { PSCED_Name: "Fishing Technology", description: "NA,BO,SP" },
  { PSCED_Name: "Food Processing", description: "SP,LO,NA" },
  { PSCED_Name: "Food Science", description: "SP,LO,NA" },
  { PSCED_Name: "Food Science and Technology", description: "SP,LO,NA" },
  { PSCED_Name: "Food Service Administration", description: "IE,SP,LO" },
  { PSCED_Name: "Food Technology", description: "SP,LO,NA" },
  { PSCED_Name: "Forest Ranger", description: "NA,BO,SP" },
  { PSCED_Name: "Forest Technology", description: "NA,BO,SP" },
  { PSCED_Name: "Forestry", description: "NA,SP,BO" },
  { PSCED_Name: "Garment Technology", description: "SP,BO,IA" },
  { PSCED_Name: "General Mathematics", description: "LO,SP,IE" },
  { PSCED_Name: "General Science", description: "LO,IE,NA" },
  { PSCED_Name: "General Science Education", description: "LO,IE,NA" },
  { PSCED_Name: "Geodetic Engineering", description: "SP,NA,LO" },
  { PSCED_Name: "Geology", description: "SP,NA,LO" },
  { PSCED_Name: "Government Accounting and Auditing", description: "LO,IE,IA" },
  { PSCED_Name: "Guidance and Counselling", description: "IE,IA,LO" },
  { PSCED_Name: "Health Professional Education", description: "IE,IA,LO" },
  { PSCED_Name: "Health Science Education", description: "IE,IA,LO" },
  { PSCED_Name: "History", description: "LI,IE,LO" },
  { PSCED_Name: "Home Economics", description: "BO,IA,SP" },
  { PSCED_Name: "Home Economics Education", description: "BO,IE,SP" },
  { PSCED_Name: "Home Technology", description: "BO,SP,LO" },
  { PSCED_Name: "Horticulture", description: "NA,SP,BO" },
  { PSCED_Name: "Hospital Administration", description: "IE,LO,IA" },
  { PSCED_Name: "Hotel and Restaurant Management", description: "IE,LI,BO" },
  {
    PSCED_Name: "Human Resource Development and Planning",
    description: "LO,IE,IA"
  },
  { PSCED_Name: "Industrial Education", description: "BO,IE,SP" },
  { PSCED_Name: "Industrial Engineering", description: "LO,SP,BO" },
  { PSCED_Name: "Industrial Psychology", description: "IE,IA,LO" },
  { PSCED_Name: "Industrial Technology", description: "LO,SP,IE" },
  { PSCED_Name: "Information Management", description: "LO,IE,LI" },
  { PSCED_Name: "Information Technology", description: "LO,SP,IE" },
  {
    PSCED_Name: "Institutional Development Management",
    description: "IE,SP,IA"
  },
  { PSCED_Name: "Interdisciplinary Studies", description: "IA,IE,SP" },
  { PSCED_Name: "Interior Design", description: "SP,BO,LO" },
  { PSCED_Name: "International Relations", description: "IE,LI,IA" },
  { PSCED_Name: "International Studies", description: "IE,LI,IA" },
  { PSCED_Name: "Islamic Studies", description: "IA,LI,IE" },
  { PSCED_Name: "Journalism", description: "LI,IE,IA" },
  { PSCED_Name: "Jurisprudence", description: "IA,LI,IE" },
  { PSCED_Name: "Kindergarten Education", description: "IE,LI,IA" },
  {
    PSCED_Name: "Language Education/Language Teaching",
    description: "LI,IE,IA"
  },
  { PSCED_Name: "Language and Literature", description: "LI,IE,IA" },
  { PSCED_Name: "Laws", description: "LI,IA,IE" },
  { PSCED_Name: "Legal Management", description: "IE,LI,IA" },
  { PSCED_Name: "Liberal Arts-Liacom", description: "SP,LI,IA" },
  { PSCED_Name: "Library Science", description: "LI,IE,SP" },
  { PSCED_Name: "Library and Information Science", description: "LI,IE,SP" },
  { PSCED_Name: "Linguistics", description: "LI,IE,IA" },
  { PSCED_Name: "Literature", description: "LI,IE,IA" },
  {
    PSCED_Name: "Local Government & Regional Development",
    description: "IE,LI,IA"
  },
  { PSCED_Name: "Management", description: "IE,LO,IA" },
  {
    PSCED_Name: "Manufacturing/Production Engineering",
    description: "LO,BO,IE"
  },
  { PSCED_Name: "Marine Bio-Diversity", description: "NA,IE,SP" },
  { PSCED_Name: "Marine Biology", description: "NA,IE,SP" },
  { PSCED_Name: "Marine Engineering/Technology", description: "SP,LO,IE" },
  { PSCED_Name: "Marine Transportation", description: "SP,LO,BO" },
  { PSCED_Name: "Maritime Management", description: "SP,IE,IA" },
  { PSCED_Name: "Marketing", description: "IE,LI,LO" },
  { PSCED_Name: "Mass Communication", description: "IE,LI,IA" },
  { PSCED_Name: "Materials Science and Engineering", description: "SP,LO,BO" },
  { PSCED_Name: "Mathematical Science", description: "LO,SP,IE" },
  { PSCED_Name: "Mathematics Teaching", description: "LO,SP,IE" },
  { PSCED_Name: "Mechanical Engineering", description: "LO,SP,BO" },
  { PSCED_Name: "Mechanical Technology", description: "LO,SP,BO" },
  { PSCED_Name: "Medical Technology", description: "SP,IE,LO" },
  { PSCED_Name: "Medicine", description: "IE,LO,IA" },
  { PSCED_Name: "Metallurgical Engineering", description: "LO,BO,SP" },
  { PSCED_Name: "Midwifery", description: "IE,LO,IA" },
  { PSCED_Name: "Mining Engineering", description: "SP,LO,BO" },
  { PSCED_Name: "Music", description: "MU,IE,LI" },
  { PSCED_Name: "Music Education", description: "MU,IE,LI" },
  { PSCED_Name: "Natural Science", description: "NA,SP,LO" },
  { PSCED_Name: "Nursing", description: "IE,LO,IA" },
  { PSCED_Name: "Nutrition and Dietetics", description: "IE,NA,SP" },
  { PSCED_Name: "Occupational Therapy/Health", description: "IE,IA,BO" },
  { PSCED_Name: "Office Administration/Management", description: "IE,LO,IA" },
  { PSCED_Name: "Optometry", description: "SP,IE,IA" },
  {
    PSCED_Name: "Organizational Development and Planning",
    description: "IE,LO,IA"
  },
  {
    PSCED_Name: "Other Agriculture, Forestry, Fisheries",
    description: "NA,SP,IE"
  },
  { PSCED_Name: "Other Civil Security and Military", description: "IA,BO,SP" },
  {
    PSCED_Name: "Other Education Science and Teacher Training",
    description: "IE,LI,LO"
  },
  {
    PSCED_Name: "Other Education not elsewhere coded (NEC)",
    description: "IE,LI,LO"
  },
  { PSCED_Name: "Other Engineering and Technology", description: "LO,SP,IE" },
  { PSCED_Name: "Other Fine and Applied Arts", description: "SP,MU,BO" },
  { PSCED_Name: "Other IT-Related", description: "LO,SP,IE" },
  { PSCED_Name: "Other Maritime", description: "SP,LO,BO" },
  { PSCED_Name: "Other Medical and Allied", description: "IE,LO,IA" },
  {
    PSCED_Name: "Other Social and Behavioral Science",
    description: "IE,IA,LO"
  },
  { PSCED_Name: "Participatory Development", description: "IE,IA,LO" },
  { PSCED_Name: "Pastoral Ministry", description: "IA,LI,IE" },
  {
    PSCED_Name: "Personnel and Human Resources Management",
    description: "LO,IE,IA"
  },
  { PSCED_Name: "Pharmacy", description: "IE,LO,IA" },
  { PSCED_Name: "Philippine Literature", description: "LI,IE,IA" },
  { PSCED_Name: "Philippine Studies/Arts", description: "MU,LI,IE" },
  { PSCED_Name: "Philosophy", description: "IA,IE,LI" },
  { PSCED_Name: "Physical Education", description: "BO,IE,SP" },
  { PSCED_Name: "Physical Therapy", description: "IE,BO,IA" },
  { PSCED_Name: "Physics", description: "LO,SP,IE" },
  { PSCED_Name: "Physics Teaching", description: "LO,SP,IE" },
  { PSCED_Name: "Pilipino/Filipino", description: "LI,IE,IA" },
  { PSCED_Name: "Plant Breeding", description: "NA,SP,LO" },
  { PSCED_Name: "Plant Pathology", description: "NA,SP,LO" },
  { PSCED_Name: "Political Economy", description: "IE,LI,LA" },
  { PSCED_Name: "Political Science", description: "IE,LI,LA" },
  { PSCED_Name: "Pre-Dental", description: "SP,BO,IE" },
  { PSCED_Name: "Psychology", description: "IE,IA,LO" },
  { PSCED_Name: "Public Administration/Management", description: "IE,LI,LO" },
  { PSCED_Name: "Public Health/Medical Health", description: "IE,LO,IA" },
  { PSCED_Name: "Radiologic Technology", description: "SP,IE,LO" },
  { PSCED_Name: "Real Estate", description: "IE,SP,LO" },
  {
    PSCED_Name: "Religious Education (Character/Value Education)",
    description: "IA,LI,IE"
  },
  { PSCED_Name: "Religious Formation", description: "IA,LI,IE" },
  { PSCED_Name: "Research and Evaluation", description: "LO,LI,IA" },
  { PSCED_Name: "Respiratory/Pulmunary Therapy", description: "IE,BO,LO" },
  { PSCED_Name: "Rural Development", description: "IE,LO,NA" },
  { PSCED_Name: "Sanitary Engineering", description: "SP,NA,LO" },
  { PSCED_Name: "Science", description: "LO,NA,IE" },
  {
    PSCED_Name: "Science Education (teaching Science)",
    description: "LO,NA,IE"
  },
  {
    PSCED_Name: "Secondary Education with no specialization",
    description: "IE,LI,LO"
  },
  { PSCED_Name: "Secretarial Science", description: "IE,LO,IA" },
  {
    PSCED_Name: "Secretarial/Medical Secretarial/Clerical",
    description: "IE,LO,IA"
  },
  { PSCED_Name: "Social Development", description: "IE,IA,LO" },
  { PSCED_Name: "Social Science", description: "IE,IA,LO" },
  { PSCED_Name: "Social Science Education", description: "IE,IA,LO" },
  { PSCED_Name: "Social Services", description: "IE,IA,LO" },
  { PSCED_Name: "Social Studies", description: "IE,IA,LO" },
  { PSCED_Name: "Social Work", description: "IE,IA,LO" },
  { PSCED_Name: "Sociology", description: "IE,IA,LO" },
  { PSCED_Name: "Soil Science", description: "SP,NA,LO" },
  { PSCED_Name: "Special Education", description: "IE,LI,LO" },
  {
    PSCED_Name: "Sports Science (Sports Officiating/Coaching)",
    description: "BO,IE,SP"
  },
  { PSCED_Name: "Statistics", description: "LO,SP,IE" },
  { PSCED_Name: "Structural Engineering", description: "SP,LO,IE" },
  { PSCED_Name: "Teaching", description: "IE,LI,LO" },
  { PSCED_Name: "Teaching Handicapped Children ", description: "IE,IA,LI" },
  { PSCED_Name: "Technician Teacher Education", description: "SP,IE,BO" },
  {
    PSCED_Name: "Technology Communications Management",
    description: "IE,LO,LI"
  },
  { PSCED_Name: "Technology Management", description: "IE,LO,SP" },
  { PSCED_Name: "Technology/Engineering", description: "LO,SP,IE" },
  { PSCED_Name: "Theology/Theological Studies", description: "IA,LI,IE" },
  { PSCED_Name: "Tourism", description: "IE,LI,IA" },
  {
    PSCED_Name: "Tourism and Hotel & Restaurant Mgt.",
    description: "IE,LI,IA"
  },
  { PSCED_Name: "Tourism and Travel Management", description: "IE,LI,IA" },
  { PSCED_Name: "Trade Technology", description: "LO,IE,SP" },
  { PSCED_Name: "Transport Engineering", description: "SP,LO,BO" },
  { PSCED_Name: "Urban and Regional Planning", description: "SP,LO,IE" },
  { PSCED_Name: "Veterinary Medicine", description: "NA,LO,SP" },
  { PSCED_Name: "Veterinary Technology", description: "NA,LO,SP" },
  { PSCED_Name: "Vocational/Technical Education", description: "BO,SP,IE" },
  { PSCED_Name: "Water Resources Engineering", description: "SP,LO,NA" },
  { PSCED_Name: "Zoology", description: "NA,SP,LO" }
];

const consDataset = programs.map(d => {
  const attrs = d.description.split(",");

  return {
    attr_1: attrs[0],
    attr_2: attrs[1],
    attr_3: attrs[2],
    path: d.PSCED_Name
  };
});

// const reducedDataset = consDataset
//   .filter(d => d.path !== "")
//   .filter(i => i.path.split(",").length > 2);

// console.log(JSON.stringify(reducedDataset));
// console.log(reducedDataset);
// console.log(consDataset);
// console.log(JSON.stringify(consDataset));

let paths = "";
consDataset.forEach(i => {
  if (i.path !== "") {
    paths += i.path;
  }
});

// console.log(new Set(paths.split(",")));

const newDS = programs.map(p => p.description);
const DS = [...new Set(newDS)].map(i => {
  const attr = i.split(",");

  return { attr_1: attr[0], attr_2: attr[1], attr_3: attr[2] };
});
