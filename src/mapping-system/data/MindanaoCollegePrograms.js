const programs = [
  {
    PSCED_Name: "Accountancy",
    description:
      "Accounting is the process of recording financial transactions pertaining to a business. The accounting process includes summarizing, analyzing, and reporting these transactions to oversight agencies, regulators, and tax collection entities.",
    fullTitle: "Bachelor of Science in Accountancy"
  },
  {
    PSCED_Name: "Accounting Technology",
    description:
      "The BS in Accounting Technology is a four-year degree program that centers on the basic accounting skills, business, and finance skills that will help students pursue careers in bookkeeping, auditing, tax preparation, and business analysis.",
    fullTitle: "Bachelor of Science in Accounting Technology"
  },
  {
    PSCED_Name: "Aeronautical Engineering",
    description:
      "The Bachelor of Science in Aeronautical Engineering (BSAeE) course of the College of Engineering is a four-year degree program which is focused on the application of the basic principles of science in concurrence with mathematical and advanced computational tools and equipments that cover the study of the theories and principles of flight and aerodynamics, basic engineering sciences and the application of these principles to the research and development, aircraft design and manufacture, aircraft maintenance and operation, and modification of aircrafts and its components.",
    fullTitle: "Bachelor of Science in Aeronautical Engineering"
  },
  {
    PSCED_Name: "Agri-Business",
    description:
      "The Bachelor of Science in Agribusiness Management equips students with fundamental production and management skills to enable them to successfully run an agri-business venture in response to both the social need for food security and the environmental imperative of adopting sustainable and ecologically soundfarming practices and models.",
    fullTitle: "Bachelor of Science in Agribusiness"
  },
  {
    PSCED_Name: "Agri-Business Management/Administration",
    description:
      "Agribusiness management encompasses many aspects of the economy: agricultural producers, businesses that provide supplies and services to the producers, businesses that add value to agricultural products, and those that facilitate the marketing of agricultural products to an ever- growing marketplace. This sector of the economy went through many changes and will continue to evolve in the future. For this reason, there is a need for prospective managers to be abreast with the developments in the agribusiness and related sectors.",
    fullTitle: "Bachelor of Science in Agri-Business Management"
  },
  {
    PSCED_Name: "Agricultural Chemistry",
    description:
      "Agricultural Chemistry is an introductory chemistry course. Students will receive an in-depth look at chemical and biochemical properties and processes, which are integral to soils, agriculture and the environment. Topics include typical introductory chemistry topics such as matter and energy, chemical bonding and reactions, moles, gaseous and aqueous chemistry and more.",
    fullTitle: "Bachelor of Science in Agriculture major in Chemistry"
  },
  {
    PSCED_Name: "Agricultural Development",
    description:
      "The Agricultural Development Programme (PDA) supports the market orientation of small-scale agricultural and food production in agricultural value chains. ... The overall objective of the project is to meet the service needs of stakeholders along the rice and cassava value chains.",
    fullTitle:
      "Bachelor of Science in Agriculture major in Agricultural Development"
  },
  {
    PSCED_Name: "Agricultural Economics",
    description:
      "The field of Production Economics and Farm Management provides the students with the theories and tools in analyzing problems pertaining to productivity and economic efficiency on agricultural production sector in relation to natural resource use, the environment, and agricultural policy and development.",
    fullTitle: "Bachelor of Science in Agriculture major in Economics"
  },
  {
    PSCED_Name: "Agricultural Education",
    description:
      "Agricultural Education is a teacher-education in agriculture program aimed to prepare teachers and education development practitioners. As a research specialization stream, the program emphasizes the historical and critical analysis of managerial, curriculum, instructional strategies and techniques of formal educational systems.   Graduates under the specialization stream are prepared as leaders in the scientific investigation of educational phenomena that will evolve effective ways of managing, teaching and learning agriculture and its allied fields in order to improve the productivity of its practitioners and the institutions they represent.",
    fullTitle: "Bachelor of science in Agriculture major in Education"
  },
  {
    PSCED_Name: "Agricultural Engineering",
    description:
      "The Bachelor of Science in Agricultural Engineering is a five-year degree program that provides students with knowledge and skills on how to design agricultural machinery, agricultural equipment, and agricultural structures.",
    fullTitle: "Bachelor of Science in Agricultural Engineering"
  },
  {
    PSCED_Name: "Agricultural Extension",
    description:
      "Meaning and objectives of agricultural extension, role of extension workers, history and organization of extension services in Nigeria, selected extension methods and techniques, the extension process, meaning of rural sociology, rural leadership pattern and community organization. Principles and philosophy of extension communication, extension teaching process and adult learning.",
    fullTitle: "Bachelor of Science in Applied Agricultural Extension"
  },
  {
    PSCED_Name: "Agricultural Management",
    description:
      "Agriculture business management is a specialised management programme that focuses on the business aspect of agriculture production and its international trade. The course focuses on various aspects of business management such as making key business decisions and minimising risk.",
    fullTitle: "Bachelor of Science in Agribusiness management"
  },
  {
    PSCED_Name: "Agricultural Science",
    description:
      "under the Bachelor of Science in Agriculture program. The course includes basic agricultural courses such as soil science, genetics, plant breeding, plant physiology, cereals, and other elective subjects on plantation and ornamental crops.",
    fullTitle: "Bachelor of Science in Agriculture"
  },
  {
    PSCED_Name: "Agricultural Technology",
    description:
      "The Bachelor of Agricultural Technology program teaches students the practical and theoretical knowledge in animal production, crop production, postharvest technology, pest management and agribusiness management.",
    fullTitle: "Bachelor of Science in Agricultural Technology"
  },
  {
    PSCED_Name: "Agricultural Technology Education",
    description:
      "Bachelor of Agricultural Technology is a four-year ladderized degree program that focuses entirely on plant and animal technology. ... This strand provides various topics in Animal Production, Crop Production, Landscaping, Food Processing, and Fisheries. Learning these basic topics beforehand will be useful in college.",
    fullTitle: "Bachelor of Science in Agricultural Technology"
  },
  {
    PSCED_Name: "Agriculture",
    description:
      "The Bachelor of Science in Agriculture (BSA) is a four-year degree program designed to provide students with the technical knowledge in crop raising, agricultural chemicals, fertilizers, integrated pest management, seed conditioning and technology and other areas related to production and quality control in the food",
    fullTitle: "Bachelor of Science in Agriculture"
  },
  {
    PSCED_Name: "Agro-Forestry",
    description:
      "Agroforestry Education is the process of preparing human resource imbued with competencies in the science and practice of producing and maximizing the positive ecological and economic interactions between the woody perennials and agricultural crops and/ or animals grown in the same unit of land.",
    fullTitle: "Bachelor of Science in Agroforestry"
  },
  {
    PSCED_Name: "Agronomy",
    description:
      "The program includes topics in plant science, animal science, landscape and environmental management. It aims to answer the problems related to agriculture involved in research, production, extension and entrepreneurship in every region of the Philippines.",
    fullTitle: "Bachelor of Science in Agriculture major in Agronomy"
  },
  {
    PSCED_Name: "Aircraft Maintenance Technology",
    description:
      "The BS in Aircraft Maintenance Technology program provides students with knowledge and skills in the field of aircraft maintenance. Specifically, the curriculum trains students to be able to construct, inspect, operate, maintain and repair structures, systems and power plants for aircraft and other aerospace vehicles.",
    fullTitle: "Bachelor of Science in Aircraft Maintenance Technology"
  },
  {
    PSCED_Name: "Airline Business Administration/Management",
    description:
      "The Bachelor of Science in Airline Business Administration Department assures students of a balanced curriculum to acquire a solid foundation of general business knowledge, acquaints them with business marketing principles and theories, explores all facets of aviation business administration and management and enables them to determine the factors which affect the effectiveness of the system in high-powered multi-modal industries.",
    fullTitle: "Bachelor of Science in Airline Business Administration"
  },
  {
    PSCED_Name: "Animal Husbandry",
    description:
      "Animal husbandry, Controlled cultivation, management, and production of domestic animals, including improvement of the qualities considered desirable by humans by means of breeding. Animals are bred and raised for utility (e.g., food, fur), sport, pleasure, and research.",
    fullTitle: "Bachelor of Science in Agriculture major in Animal Science"
  },
  {
    PSCED_Name: "Animal Science",
    description:
      "Animal Science is concerned with the science and business of producing domestic livestock species, including but not limited to beef cattle, dairy cattle, horses, poultry, sheep, and swine. ... Animal Science is also concerned with foods of animal origin: meat, dairy foods, and eggs.",
    fullTitle: "Bachelor of Science in Agriculture major in Animal Science"
  },
  {
    PSCED_Name: "Animal Technology",
    description:
      "Animal Technician provides daily care for research animals of various species. Cleans and disinfects cages and equipment. Being an Animal Technician monitors the health and well being of the animals, maintains logs of animal diet, behavior, vital signs and other data.",
    fullTitle: "Bachelor of Veterinary Technology"
  },
  {
    PSCED_Name: "Anthropology",
    description:
      "Anthropology is the study of what makes us human. ... Anthropologists also compare humans with other animals (most often, other primates like monkeys and chimpanzees) to see what we have in common with them and what makes us unique.",
    fullTitle: "Bachelor of Science in Anthropology"
  },
  {
    PSCED_Name: "Applied Mathematics",
    description:
      "The Bachelor of Science in Applied Mathematics is a four-year program that provides students with a strong foundation in different mathematical techniques and its application in data analysis, optimization and modeling. The domains of study present in this course are Arithmetic, Algebra, Geometry, and Analysis.",
    fullTitle: "Bachelor of Science in Applied Mathematics"
  },
  {
    PSCED_Name: "Applied Physics",
    description:
      "Applied Physics is the application of all branches of physics to the broad realm of practical problems in engineering, science and industry. ... It provides the students with an opportunity to acquire abilities for continued advancement in technology from fundamental principles in physics.",
    fullTitle: "Bachelor of Science in Applied Physics"
  },
  {
    PSCED_Name: "Applied Science",
    description:
      "B.Sc Applied Sciences course is all about concentrating on the importance of Science in the modern society for the development of some specific Industries. This course puts more emphasis on the practical application of all the scientific procedures and laws.",
    fullTitle: "Bachelor of Science in Applied Science"
  },
  {
    PSCED_Name: "Applied Social Research",
    description:
      "Students develop an understanding of the uses, strengths and limitations of various research strategies and approaches to conducting social inquiry, and develop skills necessary for designing social survey research tools, data processing and analysis, the interpretation of numerical data and report writing",
    fullTitle: "Bachelor of Science in Applied Social Science"
  },
  {
    PSCED_Name: "Applied Statistics",
    description:
      "is a course designed for senior undergraduate and research students who need to design experiments and carry out statistical analysis of their data. Emphasis will be placed on the development of statistical concepts and statistical computing, rather than mathematical details.",
    fullTitle: "Bachelor of Science in Statistics"
  },
  {
    PSCED_Name: "Aquaculture",
    description:
      "BSc Aquaculture is a 3-year undergraduate course based on a semester system that deals with the Science of aquatic life which is not only about fish but also about the production, management, health, and other aspects of aquatic life.",
    fullTitle: "Bachelor of Science in Aquaculture and Fisheries"
  },
  {
    PSCED_Name: "Arabic Education (teaching Arabic)",
    description:
      "The course covers grammar, reading and writing practice as well as an insight into the culture of the region. Students will learn the basics of the language and be able to build up enough knowledge to read and write at a basic level. Given the subtle differences between eastern and western cultures, it is beneficial to the students to be aware of such differences which are embedded in the language.",
    fullTitle: "Bachelor of Secondary Education Major in Islamic Studies"
  },
  {
    PSCED_Name: "Architectural Drafting",
    description:
      "provides a strong foundation in the basic principles and techniques of drafting. The BSIT-ADT program teaches students how to create architectural designs, draft plans, working drawing of buildings and other infrastructures.",
    fullTitle: "Bachelor of Science in Architect Major in Drafting"
  },
  {
    PSCED_Name: "Architectural Science/Technology",
    description:
      "Architectural Technology is concerned with new and existing buildings and examines how detail relates to the design concept. ... Our course will help you evolve the knowledge and skills required in understanding, application, analysis, synthesis and evaluation relative to design, technology, management and practice.",
    fullTitle: "Bachelor of Science in Architectural Technology"
  },
  {
    PSCED_Name: "Architecture",
    description:
      "Architectural education provides students with knowledge and skills in planning, designing and constructing buildings taking into account the principles of utility, strength and aesthetics. Students who want to pursue a degree in Architecture are encouraged to take the Accountancy, Business and Management strand.",
    fullTitle: "Bachelor of Science in Architecture"
  },
  {
    PSCED_Name: "Art Education",
    description:
      "students learn to foster creativity and understand the world around them by teaching a wide variety of skills, including art making, art history, art criticism, and cultural understanding. Studies show that students benefit academically from art classes in a multitude of ways.",
    fullTitle: "Bachelor of Art in Art Education"
  },
  {
    PSCED_Name: "Arts",
    description:
      "Fine art programs typically combine a mixture of theoretical and practical course elements to nurture students in developing their own artistic work. Usually fine art students specialize in one or several media, such as painting, sculpture, photography, film, animation, illustration, printmaking or ceramics.",
    fullTitle: "Bachelor of Arts"
  },
  {
    PSCED_Name: "Arts (Classical/Philosophy)",
    description:
      "The Bachelor of Arts (BA) degree program in Philosophy prepares adults for career change, advancement or graduate education, while providing personal enrichment. The program explores philosophies that have shaped Western Civilization as well as critical thinking and the development of one's own philosophical views.",
    fullTitle: "Bachelor of Arts in Philosophy"
  },
  {
    PSCED_Name: "Asian Studies/Asian Culture",
    description:
      "examines the history and cultures of �Monsoon Asia�, or South, Southeast, and East Asia. ... Students will explore systems of values and their expression, history, social and political institutions in these regions.",
    fullTitle: "Bachelor of Asian Studies"
  },
  {
    PSCED_Name: "Automotive Technology",
    description:
      "This course will cover the theory, construction, inspection, diagnosis, and repair of internal combustion engines and related systems. Topics include fundamental operating principles of engines and diagnosis, inspection, adjustment, and repair of automotive engines using appropriate service information.",
    fullTitle:
      "Bachelor of Mechanical Technology Major in Automotive Technology"
  },
  {
    PSCED_Name: "Aviation Electronics/Electrical  Engineering",
    description:
      "Avionics is the study of aviation electronics, specifically the communication, navigation and instrumentation systems. Avionics degree programs, commonly offered at the associate's degree level, prepare students for careers as avionics technicians, who install, maintain and repair an aircraft's electrical components.",
    fullTitle: "Bachelor of Science in Aviation Electronics Technology"
  },
  {
    PSCED_Name: "Banking and Finance",
    description:
      "he BSBA in Banking and Finance curriculum is geared towards educating students in understanding the financial aspects of the economy such as the operations of financial institutions and markets, and the financial management of business operations. ... Banking and Finance is not a profession",
    fullTitle:
      "Bachelor of Science in Business Administration Major in Financial Management"
  },
  {
    PSCED_Name: "Basic Engineering",
    description:
      "The course aims to familiarize students with the engineering profession, the different engineering disciplines, the design process for exploratory projects, the work in interdisciplinary teams, the ethics and professional behavior, the lifelong learning, the written and oral presentation of technical concepts.",
    fullTitle: "Bachelor of Science in Engineering"
  },
  {
    PSCED_Name: "Biology",
    description:
      "This course includes a study of living organisms and vital processes. Themes that will be covered in this course include scientific skills, ecology, biochemistry, cellular processes, genetics, evolution, classification of organisms, as well as plant and human body systems.",
    fullTitle: "Bachelor of Science in Biology"
  },
  {
    PSCED_Name: "Biology Education",
    description:
      "A career in bio education primarily involves introducing students to the patterns and scientific processes that shape our world. Biology educators are responsible for developing curricula, presenting lessons, grading papers, evaluating students' performances and other basic school duties.",
    fullTitle: "Bachelor of Arts in Biology Education"
  },
  {
    PSCED_Name: "Broadcast",
    description:
      "Broadcast Prime is a comprehensive course that trains you in all aspects of channel packaging and makes you a job-ready professional. The course focuses on the design aspect of digital communication for films, TV and the digital media industry.",
    fullTitle: "Bachelor of Arts in Broadcast Journalism"
  },
  {
    PSCED_Name: "Building Technology",
    description:
      "The study of building technology covers the planning for the creation of residential or commercial properties, as well as structures. ... Students in both certificate and associate's degree programs learn the basics of construction drawing, blueprint reading, building codes and construction project management.",
    fullTitle: "Bachelor of Science in Building Technology"
  },
  {
    PSCED_Name: "Business Administration",
    description:
      "In simple terms, business administration is the work of managing an organization's resources, time and people. Business administration professionals work to ensure that businesses and organizations are run effectively, efficiently and profitably.",
    fullTitle: "Bachelor of Science in Business Administration"
  },
  {
    PSCED_Name: "Business Administration/Management & Accountancy",
    description:
      "Students learn about the principles of accounting, taxation and auditing. The program educates students in U.S. and international accounting practices, as well as finance principles. Students gain fundamental business knowledge in business law, marketing and business policy.",
    fullTitle:
      "Bachelor of Science in Business Administration Major in Financial and Management Accounting"
  },
  {
    PSCED_Name: "Business Data Processing",
    description:
      "Coursework in data processing can be found in diploma, certificate and undergraduate degree programs in database administration and computer information technology. In addition to diplomas and certificates, students enrolled in these programs may earn degrees, such as an Associate of Science (AS) in Information Technology or a Bachelor of Applied Science (BAS) in Information Systems and Technology.",
    fullTitle: "Bachelor of Science in Data Analytics"
  },
  {
    PSCED_Name: "Business Economics",
    description:
      "Bachelor of Science in Business Administration major in Business Economics is a four-year program that prepares graduates for careers in banking, economic and development planning, as well as general management. The program focuses on the relationship of business operations and the economy as a whole.",
    fullTitle:
      "Bachelor of Science in Business Administration major in Business Economics"
  },
  {
    PSCED_Name: "Business Education",
    description:
      "Business education is a term that encompasses a number of methods used to teach students the fundamentals of business practices. These methods range from formal educational degree programs, such as the Master of Business Administration (MBA), to school-to-work opportunity systems or cooperative education.",
    fullTitle: "Bachelor of Science in Business Education"
  },
  {
    PSCED_Name: "Business Entrepreneurship",
    description:
      "The BS Entrepreneurship program aims to develop highly motivated individuals who are not just able to scan the environment and identify business opportunities, but can mobilize the necessary resources to tap these opportunities on a continuing basis, typically through the creation of a new enterprise.",
    fullTitle:
      "Bachelor of Science in Business Administration Major in Entreneurship"
  },
  {
    PSCED_Name: "Business Management",
    description:
      "Studying for a business management degree allows you to develop a broad understanding of business organisations and provides you with subject-specific knowledge in areas such as markets, customers, finance, operations, communication, information technology and business policy and strategy.",
    fullTitle: "Bachelor of Science in Business Management"
  },
  {
    PSCED_Name: "Ceramics Engineering",
    description:
      "Ceramic engineering is the science and technology of creating objects from inorganic, non-metallic materials. ... The special character of ceramic materials gives rise to many applications in materials engineering, electrical engineering, chemical engineering and mechanical engineering.",
    fullTitle: "Bachelor of Science in Ceramic Engineering"
  },
  {
    PSCED_Name: "Chemical Engineering",
    description:
      "Chemical engineering is all about changing raw materials into useful products such as clothes, food and drink, and energy. Chemical engineers focus on processes and products they develop and design processes to create products; either focussing on improving existing processes or creating new ones.",
    fullTitle: "Bachelor of Science in Chemical Engineering"
  },
  {
    PSCED_Name: "Chemical Engineering Technology",
    description:
      "The Chemical Engineering program focuses on the development and application of industrial processes in which chemical or physical principles are involved. The program prepares students for careers in industries that deal with the production of chemicals, drugs, food, textile, cement, and other products.",
    fullTitle: "Bachelor of Science in Chemical Engineering Technology"
  },
  {
    PSCED_Name: "Chemical Technology",
    description:
      "Chemical technologists acquire, install, maintain, and operate equipment and instruments. The equipment might be used in environmental analysis or to monitor product quality. They may do experiments to develop or improve products.",
    fullTitle: "Bachelor of Science Honors Degree in Chemical Technology"
  },
  {
    PSCED_Name: "Chemistry",
    description:
      "The Bachelor of Science in Chemistry (BS Chem) is a four-year degree program that teaches students the conduct of standard laboratory procedures involved in chemistry and the use of chemical instrumentation in analytical and synthetic work.",
    fullTitle: "Bachelor of Science in Chemistry"
  },
  {
    PSCED_Name: "Chemistry Education",
    description:
      "General chemistry A general chemistry course may cover basic topics such as atomic structure, molecular structure, chemical bonding and acids and bases. Students may also learn about biological chemistry, organic chemistry and nuclear chemistry.",
    fullTitle: "Bachelor of Science in Chemistry major in Chemistry Education"
  },
  {
    PSCED_Name: "Childhood Education",
    description:
      "Bachelor of Early Childhood Education (BECEd) is a four-year program that prepares its students for both the art and science of teaching children 0 � 8 years old. It provides a solid foundation on developmentally appropriate practices in effective early childhood care and education.",
    fullTitle: ""
  },
  {
    PSCED_Name: "Christian Education",
    description:
      "This course will introduce the tensions and dimensions of historical, theological, and pedagogical foundations of Christian Formation. Time will be given to discussing leadership concerns as pastors of Christian Formation. Students will be encouraged to engage the material realizing other courses will pursue the topics in more detail. This course will facilitate a broad awareness of Christian formation in the Church.",
    fullTitle:
      "Bachelor of Science in in Elementary Education with an Emphasis in Christian Education"
  },
  {
    PSCED_Name: "Civil Engineering",
    description:
      "Civil Engineering involves planning, designing, constructing, maintaining and supervising infrastructures which include facilities essential to modern life like highways, bridges and tunnels, schools, hospitals, airports and other buildings, sewage systems and water treatment facilities. Subsequently, the course also involves protecting the public and environmental health as well as improving existing infrastructure.",
    fullTitle: "Bachelor of Science in Civil Engineering"
  },
  {
    PSCED_Name: "Clinical Psychology",
    description:
      "Clinical psychology is a broad branch of psychology that focuses on diagnosing and treating mental, emotional, and behavioral disorders, including learning disabilities, substance abuse, depression, anxiety, and eating disorders",
    fullTitle: "Bachelor of Science in Clinical Psychology"
  },
  {
    PSCED_Name: "Commerce",
    description:
      "Commerce is a dynamic and contemporary subject that provides the knowledge and skills that form the foundation on which people make sound decisions on consumer, financial, business, legal and employment issues.",
    fullTitle: "Bachelor of Science in Commerce"
  },
  {
    PSCED_Name: "Commercial Science/Arts",
    description:
      "Commercial art is the art of creative services, referring to art created for commercial purposes, primarily advertising. ... People can obtain training, certifications, and degrees that incorporate commercial arts in many exercises, activities, and programs.",
    fullTitle: "Bachelor of Fine Arts Major in Advertising Arts"
  },
  {
    PSCED_Name: "Communication",
    description:
      "Communication courses provide the specialized skills and knowledge necessary for individuals to advance in their career by learning the techniques and strategies for communicating effectively, whether for negotiation, or media purposes.",
    fullTitle: "Bachelor of Arts in Communication"
  },
  {
    PSCED_Name: "Communication Arts (Pilipino, English)",
    description:
      "The Communication Arts Program in Production is designed to introduce the student to the media � particularly print, film, radio, photography and television. The specific objectives are: To introduce the students to media history, criticism, and theory.",
    fullTitle: "Bachelor of Arts in Communication Major in Filipino and English"
  },
  {
    PSCED_Name: "Community Development",
    description:
      "The Bachelor of Community Development is designed to instil knowledge, skills and attitudes and to provide tools, all of which are focused on responding to the social and economic needs of the people as identified by the people themselves.",
    fullTitle:
      "Bachelor of Arts in Community Development major in Community Psychology"
  },
  {
    PSCED_Name: "Community Health",
    description:
      "This course offers students a basic introduction to community health. The class will present health issues with a focus on a community, not individual perspective; as a result, students will learn about public health approaches to health assessment, health promotion and disease prevention.",
    fullTitle:
      "Bachelor of Arts in Community Health Major in Community Psychology"
  },
  {
    PSCED_Name: "Community Health Development and Management",
    description:
      "This is a one and half year course whose objective is to equip students with skills and knowledge on patterns of diseases, organization and administration of different health services that may be provided to the community.",
    fullTitle:
      "Bachelor of Arts in Community Health Major in Community Psychology"
  },
  {
    PSCED_Name: "Computer Applications",
    description:
      "Computer Applications is a one-year introductory course that will provide students with the opportunity to use the computer as a problem-solving tool. This class provides an overview of microcomputer applications beginning with a brief introduction to computer concepts and Microsoft Windows XP.",
    fullTitle: "Bachelor of Science in Computer Applications"
  },
  {
    PSCED_Name: "Computer Engineering",
    description:
      "The Bachelor of Science in Computer Engineering is a program that embodies the science and technology of design, development, implementation, maintenance and integration of software and hardware components in modern computing systems and computer-controlled equipment.",
    fullTitle: "Bachelor of Science in Computer Engineering"
  },
  {
    PSCED_Name: "Computer Management",
    description:
      "computer management can be taken through bachelor's and master's degree programs in computer management or computer information systems. Online and on-site programs can be found at two-year community colleges and technical schools as well as four-year colleges and universities. It's common for computer information systems degree programs to feature various specializations such as networking, information security, web site design, database development or application development.",
    fullTitle:
      "Bachelor of Science in Business Administration Major in Computer Management"
  },
  {
    PSCED_Name: "Computer Science",
    description:
      "Computer science is about understanding computer systems and networks at a deep level. Computers and the programs they run are among the most complex products ever created; designing and using them effectively presents immense challenges.",
    fullTitle: "Bachelor of Science in Computer Science"
  },
  {
    PSCED_Name: "Computer Secretarial",
    description:
      "Secretarial studies programs are also called secretarial science, administrative assistant, general office assistant or executive assistant programs. ... Common secretary courses include those in keyboarding, word processing, business math, business English, records management, transcription and office operations.",
    fullTitle: "Bachelor of Science in Secretarial Administration"
  },
  {
    PSCED_Name: "Computer Technology",
    description:
      "Computer technology courses cover everything from computer hardware assembly and system design to data storage and network security to electronics and computer engineering. Introductory courses include instruction in operating systems and servers, computer diagnostics, device architecture and computer operation theory.",
    fullTitle:
      "Bachelor of Science in Computer Science Major in Software Technology"
  },
  {
    PSCED_Name: "Construction Technology",
    description:
      "The construction technology course helps develop in students an understanding of construction technology, of its applications related to the residential construction industry, of the organization of construction, and of construction's impacts on society and the environment.",
    fullTitle: "Bachelor of Science in Construction Engineering Technology"
  },
  {
    PSCED_Name: "Cooperative Management",
    description:
      "A cooperative manager is the gatekeeper or liaison between the board of directors and the employee group. The manager communicates the board's strategic goals to the employee group and communicates employee concerns and needs to the board. The cooperative manager both receives and disseminates information.",
    fullTitle: "Bachelor of Science in Cooperative Management"
  },
  {
    PSCED_Name: "Counseling Psychology",
    description:
      "Counselling students acquire knowledge about human behaviour, advanced interpersonal skills, learn ethical and professional boundaries and, depending on the career path chosen, may gain therapeutic capacities.",
    fullTitle: "Bachelor of Arts in Psychology in Christian Counseling"
  },
  {
    PSCED_Name: "Creative and Performing  Arts",
    description:
      "Studies in performing arts encompass both the academic and practical fields of music, theater and dance. From theater history to advanced choreography, the field of performing arts lends a wide lens of study for a variety of students.",
    fullTitle: "Bachelor of Arts in Performing Arts"
  },
  {
    PSCED_Name: "Criminal Justice",
    description:
      "This course provides an introduction to the criminal justice system. The primary goal of this course is to develop a general understanding of the criminal justice system's response to crime in society. ... It will introduce students to the components of the criminal justice system � police, courts, and corrections.",
    fullTitle: "Bachelor of Science in Criminal Justice"
  },
  {
    PSCED_Name: "Criminology",
    description:
      "Criminology focuses on the study of crime and criminals, the motivation behind the crime, the consequences and any theories for prevention. Criminology is a sub-group of sociology as it incorporates an array of fields of study including biology, penology, psychology and statistics.",
    fullTitle: "Bachelor of Science in Criminology"
  },
  {
    PSCED_Name: "Criminology and Police Administration",
    description:
      "B.A. Criminology and Police Administration is an in-depth study of crime and its investigation. The course is made to assist students of criminology and police administration in developing theories that can aid in explaining events and crimes by treating them as a social phenomenon.",
    fullTitle: "Bachelor of Science in Police Administration"
  },
  {
    PSCED_Name: "Crop Protection",
    description:
      "This course discusses basic knowledge about protection of plants from pest infestation and disease infection: importance, biomorphology, and ecology of plant pests; importance and concept of plant disease; classification of plant disease; symptom and the damage caused by plant pathogens; parasitism and disease",
    fullTitle: "Bachelor of Science in Agriculture major in Crop Science"
  },
  {
    PSCED_Name: "Crop Science",
    description:
      "Crop Science is a four-year course under the Bachelor of Science in Agriculture program. The course includes basic agricultural courses such as soil science, genetics, plant breeding, plant physiology, cereals, and other elective subjects on plantation and ornamental crops.",
    fullTitle: "Bachelor of Science in Agriculture major in Crop Science"
  },
  {
    PSCED_Name: "Culture Heritage Studies",
    description:
      "Cultural heritage studies provide tools for establishing theories and conducting research on cultural heritage as a historical, social and cultural phenomenon that evokes strong emotions and that is subject to financial and political interests.",
    fullTitle: "Bachelor of Science in Honours in Culture And Heritage Studies"
  },
  {
    PSCED_Name: "Curriculum and Instruction",
    description:
      "Curriculum and instruction is an education field that focuses on curriculum development, educational theory and student data evaluation.",
    fullTitle: "Bachelor of Science in Education Degree"
  },
  {
    PSCED_Name: "Customs Administration",
    description:
      "Customs Administration is the study of the administration of customis operations and brokerage. It includes a coverage of international trade practices more particularly in the import and export industry.",
    fullTitle: "Bachelor of Science in Customs Administration"
  },
  {
    PSCED_Name: "Dental Medicine",
    description:
      "Dental courses can be referred to as the study of teeth, gums and other organs in the mouth. Generally, Dental courses are taught at medical colleges at degree level, such as Bachelors or Masters in Dental Surgeries.",
    fullTitle: "Bachelor of Science in Doctor of Dental Medicine"
  },
  {
    PSCED_Name: "Development Communication",
    description:
      "focuses on how verbal and non-verbal messages are used to create meanings in multiple contexts using several media platforms. BS DevCom offers a broad range of subject matter. It ranges from communication, natural and social sciences, and other technical courses such as health, agriculture, and the environment.",
    fullTitle: "Bachelor of Science in Development Communication"
  },
  {
    PSCED_Name: "Development Economics",
    description:
      "Development Economics addresses development issues for poor countries. The course aims at explaining the causes and effects of poverty and deriving policy implications. The course is based on theoretical economics, adapted to reflect the special institutional structures that characterize most developing countries.",
    fullTitle: "Bachelor of Arts in Economics"
  },
  {
    PSCED_Name: "Development Management/Administration",
    description:
      "MSc International Development: Development Management analyses the management, planning and policy-making aspects of the development process. The course aims to blend theory and practice and seeks to explain policy behaviour through an integrated approach, drawing on a range of disciplinary perspectives",
    fullTitle:
      "Bachelor of Science in Business Administration Major in Human Resource Development Mangement"
  },
  {
    PSCED_Name: "Development Studies",
    description:
      "Development studies is a multidisciplinary subject that focuses on the evolution of nations from political, cultural, geographical, and socio-economic perspectives. ... Development studies graduates have a wide range of career options.",
    fullTitle: "Bachelor of Arts in Development Studies"
  },
  {
    PSCED_Name: "Divinity",
    description:
      "Divinity is the study of Christian theology and ministry at a school, divinity school, university, or seminary. ... While it most often refers to Christian study which is linked with the professional degrees for ordained ministry or related work, it is also used in an academic setting by other faith traditions.",
    fullTitle: "Bachelor of Arts major in Theology"
  },
  {
    PSCED_Name: "Early Childhood Education",
    description:
      "Bachelor of Early Childhood Education (BECEd) is a four-year program that prepares its students for both the art and science of teaching children 0-8 years old. It provides a solid foundation on developmentally appropriate practices in effective early childhood care and education.",
    fullTitle: "Bachelor of Science major in Early Childhood Education"
  },
  {
    PSCED_Name: "Economics",
    description:
      "In Economics you learn about supply and demand, perfect and imperfect competition, taxation, international trade, price controls, monetary policy, exchange rates, interest rates, unemployment and inflation amongst many other topics to understand individual markets, the aggregate economy and government policies.",
    fullTitle: "Bachelor of Science in Economics"
  },
  {
    PSCED_Name: "Economics Education",
    description:
      "This course combines economic theory, econometric literature and institutional literature to examine current issues in U.S. education. Topics include (but will not be limited to): The basic theory of investments in education (human capital theory); the empirical problem of disentangling the return to education from the return to innate ability; the role of education in national economic growth; the association between education and individual earnings and reasons why that relationship has changed over time; the role of early childhood education; the main approaches to K-12 school reform (money, choice, educational standards, and teacher selection/training); and the problem of increasing access to higher education.",
    fullTitle: "Bachelor of Arts in Economics Education"
  },
  {
    PSCED_Name: "Education",
    description:
      "Education is the study of the process of receiving and giving systematic instruction. As a degree, it mixes a theoretical grounding in the history, anthropology, sociology and economics of education, psychology and human development, and applied courses on teaching methods.",
    fullTitle: "Bachelor of Science in Education"
  },
  {
    PSCED_Name: "Educational Administration and Supervision",
    description:
      "Administration provides the physical and material conditions for education, such as building, equipment and the like. These are part of the education setting or the teaching-learning situation. Supervision is concerned with improving this situation.",
    fullTitle: "Master of Arts in Education Major in Educational Management"
  },
  {
    PSCED_Name: "Educational Administration/Management",
    description:
      "Education management and administration refer to both a field of study to pursue and a type of career a professional can work within. Professionals in this field not only have a passion for education, but they also want to be decision-makers for matters of policy, curriculum, and personnel.",
    fullTitle: "Bachelor of Education in Administration and Management"
  },
  {
    PSCED_Name: "Educational Technology",
    description:
      "Educational technology is a field of study that investigates the process of analyzing, designing, developing, implementing, and evaluating the instructional environment and learning materials in order to improve teaching and learning.",
    fullTitle: "Bachelor of Science in Educational Technology"
  },
  {
    PSCED_Name: "Electrical Engineering",
    description:
      "The Bachelor of Science in Electrical Engineering is a five-year degree program that focuses on conceptualizing, developing, and designing a safe, economical, and ethical utilization of electrical energy. ... They will learn topics relevant that to their degree that will be useful in their college life.",
    fullTitle: "Bachelor of Science in Electrical Engineering"
  },
  {
    PSCED_Name: "Electrical Technology",
    description:
      "The Electrical Technology Program is an instructional program that prepares individuals to apply technical knowledge and skills necessary to install, operate, maintain and repair electrically-energized residential, commercial and industrial systems, and DC and AC motors, controls and electrical distribution panels.",
    fullTitle:
      "Bachelor of Science in Information Technology major in Electrical Technology"
  },
  {
    PSCED_Name: "Electronics Engineering/Technology",
    description:
      "Electronics Engineering Technology program learn to design and build electronic systems and learn about analog and digital electronics. They are able to apply the engineering and mathematical principles that they learn in order to implement and maintain electronic systems, such as computers and controllers.",
    fullTitle: "Bachelor of Science in Electronics Engineering"
  },
  {
    PSCED_Name: "Electronics and Communications Engineering",
    description:
      "Electronics and Communications Engineering (ECE) involves researching, designing, developing and testing of electronic equipment used in various systems. ... It also deals with the manufacturing of electronic devices, circuits, and communications equipment.",
    fullTitle: "Bachelor of Science in ELECTRONIS AND COMMUNICATION ENGINEERING"
  },
  {
    PSCED_Name: "Elementary Education",
    description:
      "Description. Bachelor of Elementary Education (BEEd) is a four-year program that provides academic and appropriate training for future elementary school teachers of Grades 1 � 6 through the general education courses, professional education, and specialization courses.",
    fullTitle: "Bachelor of Science in ELEMENTARY EDUCATION"
  },
  {
    PSCED_Name: "Energy Engineering",
    description:
      "involved with the production of energy through natural resources, such as the extraction of oil and gas, as well as from renewable or sustainable sources of energy, including biofuels, hydro, wind and solar power.",
    fullTitle: "Bachelor of Science in Energy Technologies"
  },
  {
    PSCED_Name: "Engineering Education",
    description:
      "in engineering education (ENE) opportunities to explore their roles within the field of engineering education, to create a learning plan that maps to program requirements, and to develop habits of mind to support their ongoing professional development. In particular, students will refine their ability to write clearly and coherently in a scholarly context. The course also provides new graduate students with dedicated time to explore research trends and faculty interests so they can make informed choices about advising and program opportunities.",
    fullTitle: "Bachelor of science in Engineering education"
  },
  {
    PSCED_Name: "Engineering Technology",
    description:
      "Engineering technology graduates develop, design, and implement engineering and technology solutions, typically pursuing engineering careers in manufacturing firms on design, construction, and product improvement.",
    fullTitle: "Bachelor of Science in Engineering Technology"
  },
  {
    PSCED_Name: "English",
    description:
      "This course emphasizes the fundamental language skills of reading, writing, speaking, listening, thinking, viewing and presenting. ... The course includes studies of various literary genres: short story, poetry, novel, drama, and non-fiction.",
    fullTitle: ""
  },
  {
    PSCED_Name: "English Education",
    description:
      "English Language covers the history of the English language and the variation between English dialects in the UK and further afield. You will acquire the skills required for analytical language study alongside the means to apply those skills to the study of historical and present-day English.",
    fullTitle: "Bachelor of Arts in ENGLISH"
  },
  {
    PSCED_Name: "English Literature",
    description:
      "The study of English literature focuses mainly on analysis, debate and critical theorising about a large number of published works, be they novels, poems, plays or other literary works.",
    fullTitle: "Bachelor of Arts in Literature"
  },
  {
    PSCED_Name: "Entomology",
    description:
      "the study of insects, vermin, scorpions, spiders and further similar species. This is a branch of biology. Entomology course further deals with the study and classification of invertebrate animals i.e. animals with an exoskeleton.",
    fullTitle: "Bachelor of Science in Entomology"
  },
  {
    PSCED_Name: "Entrepreneurial Management",
    description:
      "The Bachelor of Science in Entrepreneurial Management (BSEM) is a four-year degree program designed to provide students with an in-depth understanding of the process of developing a business, running a business, and legal and ethical issues of business ownership.",
    fullTitle: "Bachelor of Science in Entrepreneurial Management"
  },
  {
    PSCED_Name: "Environmental Planning/Management",
    description:
      "Environmental management deals with the regulation process and protection of the health of our planet, by promoting human behaviours that make a positive impact on the natural environment. ... in resource management, geography, environmental science, and more.",
    fullTitle: "Bachelor of Science in ENvironmental Planning and Management"
  },
  {
    PSCED_Name: "Environmental Science",
    description:
      "Environmental Science provides an overview of how science affects our environment. We focus on interactions between the solid Earth, its water, its air and its living organisms, and on dynamic, interdependent relationships between these four components.",
    fullTitle: "Bachelor of Science in Environmental Science"
  },
  {
    PSCED_Name: "Environmental and Sanitary Engineering",
    description:
      "The Environmental and Sanitary Engineering program combines the discipline of civil engineering and the principles of ecology, chemistry and microbiology covering the applications of engineering to promote hygiene, sanitation and public health, and to protect and conserve the environment.",
    fullTitle: "Bachelor of Science in Sanitary Engineering"
  },
  {
    PSCED_Name: "Extension Education",
    description:
      "Extension Education is an applied social science which hinges on life long learning principles to achieve improvements in human welfare and societies. ... The program educates them to undertake independent research that would contribute to policy recommendation and improvement in extension service provision.",
    fullTitle:
      "Bachelor of Science in Agriculture Major in Agricultural Extension"
  },
  {
    PSCED_Name: "Farming System",
    description:
      "A farming system is defined as a population of individual farm systems that have broadly similar resource bases, enterprise patterns, household livelihoods and constraints, and for which similar development strategies and interventions would be appropriate.",
    fullTitle: "Bachelor of Science in Agriculture Major in Agronomy"
  },
  {
    PSCED_Name: "Filipino Education",
    description:
      "By law, education is compulsory for thirteen years (kindergarten and grades 1�12) and is grouped into three levels: elementary school (kindergarten�grade 6), junior high school (grades 7�10), and senior high school (grades 11-12).",
    fullTitle: "Bachelor of Science in Education major in Filipino"
  },
  {
    PSCED_Name: "Fine Arts",
    description:
      "Fine Arts is the study of drawing, sculpting, painting, literature, music, dance, architecture and theatre. The term 'fine art' refers to an art form practised mainly for its aesthetic value and beauty.",
    fullTitle: "Bachelor of Fine Arts"
  },
  {
    PSCED_Name: "Fish Processing Technology",
    description:
      "The term fish processing refers to the processes associated with fish and fish products between the time fish are caught or harvested, and the time the final product is delivered to the customer. ... The products of the fish industry are usually sold to grocery chains or to intermediaries.",
    fullTitle: "Bachelor of Science in Fishery Technology"
  },
  {
    PSCED_Name: "Fisheries",
    description:
      "Bachelor of Science in Fisheries and Aquatic Resources (BS-FAR) is a four-year degree program designed to teach the concepts of fisheries management, environmental management and multi-sectoral approach to coastal management. It educates students on the proper methods to enhance the production of fisheries resources.",
    fullTitle: "Bachelor of Science in Fisheries and Aquatic Resources "
  },
  {
    PSCED_Name: "Fisheries Technology",
    description:
      "The Fisheries Technology Programme is a practical agricultural based course with a focus on equipping students with good management skills in fish processing, production and other aquacultural practices.",
    fullTitle: "Bachelor of Science in Fisheries and Aquatic Resources "
  },
  {
    PSCED_Name: "Fishery Business Management",
    description:
      "Bachelor's degree programs in wildlife and fisheries management provide students with the skills needed to preserve fish habitats, manage harvesting and conserve species. Students study marine ecosystems and fish biology as well as breeding techniques.",
    fullTitle: "Bachelor of Science in Fisheries and Aquatic Resources"
  },
  {
    PSCED_Name: "Fishing Technology",
    description:
      "The Fisheries Technology Programme is a practical agricultural based course with a focus on equipping students with good management skills in fish processing, production and other aquacultural practices.",
    fullTitle: "Bachelor of Science in Fisheries and Aquatic Resources"
  },
  {
    PSCED_Name: "Food Processing",
    description:
      "Food processing is the branch of Food Science, where a set of techniques and methods are used to change the raw ingredients into prepared food. ... Food processing is a broad term, in itself, which includes processing, preservation, manufacturing, packaging, and canning of various food items.",
    fullTitle: "Bachelor of Science in Food Technology"
  },
  {
    PSCED_Name: "Food Science",
    description:
      "Food science is the study of food. Food scientists research everything from food safety to product development to food systems. Food scientists use engineering and chemistry principles to develop safer and more reliable food systems.",
    fullTitle: "Bachelor of Science in Food Technology"
  },
  {
    PSCED_Name: "Food Science and Technology",
    description:
      "Food Science and Technology is a field of integrated study of basic sciences, Microbiology, Biochemistry, Nutrition, Biotechnology, Engineering Technology for the development and management of food resources.",
    fullTitle: "Bachelor of Science in Food Technology"
  },
  {
    PSCED_Name: "Food Service Administration",
    description:
      "Foodservice Systems Administration/Management. ... Includes instruction in human nutrition, food safety, the design and organization of food service systems, purchasing, personnel management, and related business practices.",
    fullTitle: "Bachelor of Science in Management - Food Service Management"
  },
  {
    PSCED_Name: "Food Technology",
    description:
      "The Bachelor of Science in Food Technology (BSFT) is a four-year degree program that focuses on the scientific preparation, processing, and distribution of food. ... The program provides students with knowledge in the foundation of food technology associated with raw food materials, production management, and food science.",
    fullTitle: "Bachelor of Science in Food Technology"
  },
  {
    PSCED_Name: "Forest Ranger",
    description:
      "Educational qualifications for a forest ranger career vary depending on your job duties. ... You should study forestry, conservation, or environmental science to prepare for this career. Generally, the higher your degree achievements, the more potential you have for career advancement.",
    fullTitle: "Bachelor of Science in Forestry"
  },
  {
    PSCED_Name: "Forest Technology",
    description:
      "Forest technology is a field of study that focuses primarily on producing, harvesting and conserving trees. With a degree in forest technology, you might get a job in forestry production or wood processing, perhaps working as a mid-level manager or working under a conservation scientist or forester.",
    fullTitle: "Bachelor of Science in Forestry Technology"
  },
  {
    PSCED_Name: "Forestry",
    description:
      "Bachelor of Science in Forestry is a four-year undergraduate program that is divided into eight equal semesters. It provides students with the knowledge and training about Forestry. The forestry program trains students in the managing of forests, new plantation, maintaining old plantations and other natural resources.",
    fullTitle: "Bachelor of Science in Forestry "
  },
  {
    PSCED_Name: "Garment Technology",
    description:
      "One of the major areas of fashion designing is garment technology. As the name implies, Garment Technology is a discipline in which students learn about the different technical aspects of the production of garments. ... Students learn all the theoretical as well as practical aspects of the process.",
    fullTitle: "Bachelor of Science in Textile and Garment Technology"
  },
  {
    PSCED_Name: "General Mathematics",
    description:
      "The General Mathematics course introduces fundamental math concepts. The topics include whole numbers, operations on whole numbers, fractions, decimals, ratios, rates, and proportions. The focus is on learning the computational procedures and then applying the skills to problem solving in applications.",
    fullTitle: "Bachelor of Science in Mathematics"
  },
  {
    PSCED_Name: "General Science",
    description:
      "A general science major allows students to design their own program of study in the natural sciences. Students choose their areas of specialization from a broad range of sciences, tailoring their studies to their specific interests and career goals.",
    fullTitle: "Bachelor of Science in General Science"
  },
  {
    PSCED_Name: "General Science Education",
    description:
      "This degree is designed for those who are interested in teaching general science in middle school or high school. The program provides a solid background in general sciences including chemistry, geology, physics, astronomy, biology, geography, and physical science.",
    fullTitle: "Bachelor of Secondary Education major in General Science"
  },
  {
    PSCED_Name: "Geodetic Engineering",
    description:
      "Geodetic Engineering deals with the collection and measurement of spatial data using technologies and instruments. This program prepares future geodetic engineers to process and manage geographical data to produce maps, plans, charts, and other spatial information systems.",
    fullTitle: "Bachelor of Science in Geodetic Engineering"
  },
  {
    PSCED_Name: "Geology",
    description:
      "Geology is the science that studies the Earth's physical structure and substances, the history of rocks, the processes that act on them and the most economic way to use the world's resources. Geology involves methods and knowledge from biology, chemistry, physics and mathematics.",
    fullTitle: "Bachelor of Science in Geology"
  },
  {
    PSCED_Name: "Government Accounting and Auditing",
    description:
      "Government accounting is the process of recording, analyzing, classifying, summarizing communicating and interpreting financial information about government in aggregate and in detail reflecting transactions and other economic events involving the receipt, spending, transfer, usability and disposition of assets.",
    fullTitle: "Bachelor of Science in Accountancy "
  },
  {
    PSCED_Name: "Guidance and Counselling",
    description:
      "Guidance counseling degree programs help students develop an understanding of individuals based on unique developmental, ethnic and social situations. Guidance counselors also help students determine their academic goals and career paths. Students often take courses on the subjects below: Social basis of counseling.",
    fullTitle: "Bachelor of Arts in Education major in Guidance and Counseling"
  },
  {
    PSCED_Name: "Health Professional Education",
    description:
      "A health education specialist teaches behaviors that promote wellness. They develop and implement strategies to improve the health of individuals and communities. Health education specialists offer knowledge, skills and training that complements the work of others — health care providers, policy makers, and human resource personnel.",
    fullTitle: "Bachelor of Science in Health Profession"
  },
  {
    PSCED_Name: "Health Science Education",
    description:
      "Health education is a social science that draws from the biological, environmental, psychological, physical and medical sciences to promote health and prevent disease, disability and premature death through education-driven voluntary behavior change activities.",
    fullTitle: "Bachelor of Science in Health Science"
  },
  {
    PSCED_Name: "History",
    description:
      "History is the study of the past. Events before the invention of writing systems are considered prehistory. 'History' is an umbrella term comprising past events as well as the memory, discovery, collection, organization, presentation, and interpretation of these events.",
    fullTitle: "Bachelor of Science in History"
  },
  {
    PSCED_Name: "Home Economics",
    description:
      "a subject concerning human development, personal and family finance, housing and interior design, food science and preparation, nutrition and wellness, textiles and apparel, and consumer issues.",
    fullTitle: "Bachelor of Science in Home Economics"
  },
  {
    PSCED_Name: "Home Economics Education",
    description:
      "Home economics education advocates for positive change in home life experiences for individuals and families. It is the foundation of knowledge, attitudes and abilities that affect daily decision making throughout our lives.",
    fullTitle: "Bachelor of Science in Home Economics Education"
  },
  {
    PSCED_Name: "Home Technology",
    description:
      "Smart home technology, also often referred to as home automation or domotics (from the Latin 'domus' meaning home), provides homeowners security, comfort, convenience and energy efficiency by allowing them to control smart devices, often by a smart home app on their smartphone or other networked device.",
    fullTitle: "Bachelor of Science in Home Technology"
  },
  {
    PSCED_Name: "Horticulture",
    description:
      "Horticulture is the science and art of the development, sustainable production, marketing and use of high-value, intensively cultivated food and ornamental plants.",
    fullTitle: "Bachelor of Science in Agriculture major in Horticulture"
  },
  {
    PSCED_Name: "Hospital Administration",
    description:
      " Hospital Administration are individuals or groups of people who act as the central point of control within hospitals. These individuals may be previous or current clinicians, or individuals with other healthcare backgrounds.",
    fullTitle: "Bachelor of Science in Healthcare Administration"
  },
  {
    PSCED_Name: "Hotel and Restaurant Management",
    description:
      "Hotel and Restaurant Management involves the study and application of practical and managerial knowledge and functions, such as hotel and restaurant operations, culinary arts, food service, hospitality education, and research that are essential in preparing the students to become adept future restaurateurs and hoteliers.",
    fullTitle: "Bachelor of Science in Hotel and Restaurant Management"
  },
  {
    PSCED_Name: "Human Resource Development and Planning",
    description:
      "Human resources (HR) is an important job in any company or organization. There are multiple types of HR jobs available, but there are several shared commonalities among the professions. HR is responsible for protecting employees, ensuring their rights are upheld. If there are any disputes, whether due to labor laws or conflicts with a fellow employee, it must be reported to HR. In many companies, HR is also responsible for hiring and recruiting new staff members.",
    fullTitle:
      "Bachelor of Science in Business Administration major in Human Resource Management"
  },
  {
    PSCED_Name: "Industrial Education",
    description:
      "Industial education is a dual system learning between industry and school. In this learning of vocational high school must fulfill industry and school qualification. Industrial education will help student to know and understand industry demand",
    fullTitle: "Bachelor of Science in Industrial Education"
  },
  {
    PSCED_Name: "Industrial Engineering",
    description:
      "Industrial Engineering is an engineering profession that is concerned with the optimization of complex processes, systems, or organizations by developing, improving and implementing integrated systems of people, money, knowledge, information and equipment. Industrial engineering is central to manufacturing operations.",
    fullTitle: "Bachelor of Science in Industrial Engineering"
  },
  {
    PSCED_Name: "Industrial Psychology",
    description:
      "Industrial-organizational psychology is the branch of psychology that applies psychological theories and principles to organizations. Often referred to as I-O psychology, this field focuses on increasing workplace productivity and related issues such as the physical and mental well-being of employees.",
    fullTitle: "Bachelor of Science in Industrial Psychology"
  },
  {
    PSCED_Name: "Industrial Technology",
    description:
      "Industrial technology is the use of engineering and manufacturing technology to make production faster, simpler, and more efficient.",
    fullTitle: "Bachelor of Science in Industrial Technology"
  },
  {
    PSCED_Name: "Information Management",
    description:
      "Information management is a cycle of processes that support the organization's learning activities: identifying information needs, acquiring information, organizing and storing information, developing information products and services, distributing information, and using information",
    fullTitle: "Bachelor of Science in Information Management"
  },
  {
    PSCED_Name: "Information Technology",
    description:
      "Information technology (IT) is the use of any computers, storage, networking and other physical devices, infrastructure and processes to create, process, store, secure and exchange all forms of electronic data.",
    fullTitle: "Bachelor of Science in Information Technology"
  },
  {
    PSCED_Name: "Institutional Development Management",
    description:
      "Institutional Development and Management Consultants Limited  works in key areas of international development geared towards supporting developing countries to better mobilize resources from bilateral and multilateral cooperation, enhance natural resources management, the streamlining of Climate Change adaptation strategies, and the strengthening of institutional capacity for improved governance at the level of projects, programs and organisations.",
    fullTitle: "Bachelor of Science in Development Management"
  },
  {
    PSCED_Name: "Interdisciplinary Studies",
    description:
      "interdisciplinary studies involves the combination of two or more academic disciplines into one activity (e.g., a research project).It draws knowledge from several other fields like sociology, anthropology, psychology, economics etc. It is about creating something by thinking across boundaries",
    fullTitle: "Bachelor of Science in Interdisciplinary Studies"
  },
  {
    PSCED_Name: "Interior Design",
    description:
      "Interior design definition is the art or practice of planning and supervising the design and execution of architectural interiors and their furnishings.",
    fullTitle: "Bachelor of Science in Interior Design"
  },
  {
    PSCED_Name: "International Relations",
    description:
      "International relations attempts to explain the interactions of states in the global interstate system, and it also attempts to explain the interactions of others whose behavior originates within one country and is targeted toward members of other countries.",
    fullTitle: "Bachelor of Science in International Relations"
  },
  {
    PSCED_Name: "International Studies",
    description:
      "International studies (IS) is the study of international relations from a multidisciplinary perspective.Predominant topics are global politics, international economics and law, but also elements such as anthropology, ethnology, sociology, cultural studies and History, which is used to scientifically study the relations between sovereign nations states existing in a complex network of political alliances, diplomacy, trade networks, culture, history and legal institutions.",
    fullTitle: "Bachelor of Arts in International Studies "
  },
  {
    PSCED_Name: "Islamic Studies",
    description:
      "Islamic studies, as taught in the west, is a discipline that seeks to explain what the Islamic world has achieved in the past and what the future holds for it.It was held together by the Islamic faith and by Arabic, the language of the Qur'an.",
    fullTitle: "Bachelor of Islamic Studies"
  },
  {
    PSCED_Name: "Journalism",
    description:
      "Journalism is the activity of gathering, assessing, creating, and presenting news and information. It is also the product of these activities. Journalism can be distinguished from other activities and products by certain identifiable characteristics and practices.",
    fullTitle: "Bachelor of Arts in Journalism"
  },
  {
    PSCED_Name: "Jurisprudence",
    description:
      "Jurisprudence, or legal theory, is the theoretical study of law. Scholars of jurisprudence seek to explain the nature of law in its most general form and provide a deeper understanding of legal reasoning and analogy, legal systems, legal institutions, and the role of law in society.",
    fullTitle: "Bachelor of Arts in Jurisprudence"
  },
  {
    PSCED_Name: "Kindergarten Education",
    description:
      "A kindergarten is a preschool educational institution for children. The term was created by Friedrich Fröbel for the play and activity institute that he created in 1837 in Bad Blankenburg as a social experience for children for their transition from home to school",
    fullTitle: "Bachelor of Early Childhood Education"
  },
  {
    PSCED_Name: "Language Education/Language Teaching",
    description:
      "Language education – the process and practice of teaching a second or foreign language – is primarily a branch of applied linguistics, but can be an interdisciplinary field.",
    fullTitle: "Bachelor in Language Teaching"
  },
  {
    PSCED_Name: "Language and Literature",
    description:
      "language and literature course introduces the critical study and interpretation of written and spoken texts from a wide range of literary forms and non literary text-types. The formal analysis of texts is supplemented by awareness that meaning is not fixed but can change in respect to contexts of production and consumption.",
    fullTitle: "Bachelor of Arts in English Language and Literature"
  },
  {
    PSCED_Name: "Laws",
    description:
      "Law is a system of rules created and enforced through social or governmental institutions to regulate behavior,with its precise definition a matter of longstanding debate. It has been variously described as a science and the art of justice.",
    fullTitle: "Bachelor of Laws "
  },
  {
    PSCED_Name: "Legal Management",
    description:
      "Legal management is an academic and professional discipline that is a hybrid between the study of law and management (i.e., business administration, public administration, etc.).",
    fullTitle: "Bachelor of Science in Legal Management"
  },
  {
    PSCED_Name: "Liberal Arts-Liacom",
    description:
      "Liberal arts is a field of study based on rational thinking, and it includes the areas of humanities, social and physical sciences, and mathematics. A liberal arts education emphasizes the development of critical thinking and analytical skills, the ability to solve complex problems, and an understanding of ethics and morality, as well as a desire to continue to learn.",
    fullTitle: " Bachelor of Arts in LIACOM"
  },
  {
    PSCED_Name: "Library Science",
    description:
      "Library science is the field of study that teaches how to manage books and other information, particularly through collecting, preserving, and organizing books and other materials in libraries.",
    fullTitle: "Bachelor of Library and Information Science"
  },
  {
    PSCED_Name: "Library and Information Science",
    description:
      "Library and Information Science is a profession that is full of people passionate about making a positive change in the world, and they tend to be wildly happy about what they do.",
    fullTitle: "Bachelor of Library and Information Science"
  },
  {
    PSCED_Name: "Linguistics",
    description:
      "Linguistics is the scientific study of language. It encompasses the analysis of every aspect of language, as well as the methods for studying and modelling them. The traditional areas of linguistic analysis include phonetics, phonology, morphology, syntax, semantics, and pragmatics.",
    fullTitle: "Bachelor of Arts in Linguistics"
  },
  {
    PSCED_Name: "Literature",
    description:
      "Literature broadly is any collection of written work, but it is also used more narrowly for writings specifically considered to be an art form, especially prose fiction, drama, and poetry",
    fullTitle: "Bachelor of Arts in Literature"
  },
  {
    PSCED_Name: "Local Government & Regional Development",
    description:
      "The local government and regional development ministry (MLGRD) is responsible for guiding the sustainable economic development of each region's local government. It also promotes participation among local governments, the central government and civil society.",
    fullTitle: ""
  },
  {
    PSCED_Name: "Management",
    description:
      "Management is the act of getting people together to accomplish desired goals and objectives using available resources efficiently and effectively",
    fullTitle: "Bachelor of Science in Management"
  },
  {
    PSCED_Name: "Manufacturing/Production Engineering",
    description:
      "Manufacturing is the production of goods through the use of labour, machinery, tools and biological or chemical processing or formulation. Manufacturing can either mean transforming raw materials into finished goods on a large scale, or the creation of more complex items by selling basic goods to manufacturers for the production of items such as automobiles, aircraft, or household appliances.",
    fullTitle: "Bachelor of Science in Manufacturing"
  },
  {
    PSCED_Name: "Marine Bio-Diversity",
    description:
      "Marine biodiversity is an aggregation of highly inter-connected ecosystem components or features, encompassing all levels of biological organization from genes, species, populations to ecosystems, with the diversity of each level having structural and functional attributes",
    fullTitle: "Bachelor of Science in Bio-Diversity"
  },
  {
    PSCED_Name: "Marine Biology",
    description:
      "Marine biology is the study of marine organisms, their behaviors and interactions with the environment. Marine biologists study biological oceanography and the associated fields of chemical, physical, and geological oceanography to understand marine organisms.",
    fullTitle: "Bachelor of Science in Marine Biology"
  },
  {
    PSCED_Name: "Marine Engineering/Technology",
    description:
      "Marine engineering is the discipline that deals with matters related to the design, innovation, construction and maintenance of seagoing vessels and navigation equipment. Marine engineers focus primary on the development and production of internal systems of boats, ships, or submarines.",
    fullTitle: "Bachelor of Science in Marine Engineering"
  },
  {
    PSCED_Name: "Marine Transportation",
    description:
      "Marine transportation includes cargo-carrying commercial shipping (e.g., merchant marine) and non-cargo commercial shipping (e.g., ferries, cruise ships).",
    fullTitle: "Bachelor of Science in Marine Transportation"
  },
  {
    PSCED_Name: "Maritime Management",
    description:
      "Maritime management is a sector of business that promotes the strengthening and regulation of the maritime industry. Maritime research management refers to increasing sustainability practices within sea harvesting practices.",
    fullTitle: "Bachelor of Science in Maritime Management "
  },
  {
    PSCED_Name: "Marketing",
    description:
      "Marketing refers to activities a company undertakes to promote the buying or selling of a product or service. Marketing includes advertising, selling, and delivering products to consumers or other businesses. Some marketing is done by affiliates on behalf of a company.",
    fullTitle: "Bachelor of Science in Marketing"
  },
  {
    PSCED_Name: "Mass Communication",
    description:
      "A Mass Communication degree through the School of Journalism and Mass Communication will allow you to examine and analyze many forms of mass media, and even more importantly, equip you to gain successful work in this continuously evolving field.",
    fullTitle: "Bachelor of Arts in Mass Communication"
  },
  {
    PSCED_Name: "Materials Science and Engineering",
    description:
      "materials science and engineering is broad-based, encompassing a wide range of materials, and enables students to understand the scientific principles that govern the relationships among processing, structure, properties, and materials performance.",
    fullTitle: "Bachelor of Science in Materials Science and Engineering"
  },
  {
    PSCED_Name: "Mathematical Science",
    description:
      "mathematical sciences are a group of areas of study that includes, in addition to mathematics, those academic disciplines that are primarily mathematical in nature but may not be universally considered subfields of mathematics proper.",
    fullTitle: "Bachelor of Sciences in Mathematical Sciences"
  },
  {
    PSCED_Name: "Mathematics Teaching",
    description:
      "Mathematics education is referred to as the practice of teaching and learning of mathematics in a way of solving problems involving learning the algorithms and formulas necessary for computations. It is a platform to learn and teach mathematics with better way.",
    fullTitle: "Bachelor of Science in Mathematics Education"
  },
  {
    PSCED_Name: "Mechanical Engineering",
    description:
      "Mechanical engineering is an engineering branch that combines engineering physics and mathematics principles with materials science to design, analyze, manufacture, and maintain mechanical systems. It is one of the oldest and broadest of the engineering branches.",
    fullTitle: "Bachelor of Science in Mechanical Engineering "
  },
  {
    PSCED_Name: "Mechanical Technology",
    description:
      "Mechanical Technology is a hands-on curriculum that provides an in-depth course of study in the technological aspects of the mechanical design profession. Students are exposed to the current technology used in industry and prepared for careers in the field of mechanical design and technology.",
    fullTitle: "bachelor of mechanical engineering technology"
  },
  {
    PSCED_Name: "Medical Technology",
    description:
      "Medical technology can be defined as the application of science to develop solutions to health problems or issues such as the prevention or delay of onset of diseases or the promotion and monitoring of good health.",
    fullTitle: "Bachelor of Science in Medical Technology"
  },
  {
    PSCED_Name: "Medicine",
    description:
      "Medicine is the field of health and healing. It includes nurses, doctors, and various specialists. It covers diagnosis, treatment, and prevention of disease, medical research, and many other aspects of health.",
    fullTitle: "Bachelor of Medicine"
  },
  {
    PSCED_Name: "Metallurgical Engineering",
    description:
      "Metallurgical Engineering is a profession that involves the teaching. and practice of the science and technology of preparing minerals and. metals from ores by separating them from mechanical mixture and/or. chemical combination and finally processing them for economic benefit.",
    fullTitle: "Bachelor of Science in Metallurgical Engineering"
  },
  {
    PSCED_Name: "Midwifery",
    description:
      "Midwifery is the health science and health profession that deals with pregnancy, childbirth, and the postpartum period (including care of the newborn), in addition to the sexual and reproductive health of women throughout their lives",
    fullTitle: "Bachelor of Science in Midwifery"
  },
  {
    PSCED_Name: "Mining Engineering",
    description:
      "Mining Engineering is an engineering discipline that involves the science, technology and application of extracting and processing minerals from a natural environment.",
    fullTitle: "Bachelor of Science in Mining Engineering"
  },
  {
    PSCED_Name: "Music",
    description:
      "Music is a form of art that uses sound organised in time. Music is also a form of entertainment that puts sounds together in a way that people like, find interesting or dance to. Most music includes people singing with their voices or playing musical instruments, such as the piano, guitar, drums or violin.",
    fullTitle: "Bachelor of Science in Music"
  },
  {
    PSCED_Name: "Music Education",
    description:
      "Music education is a field of study associated with the teaching and learning of music. It touches on all domains of learning, including the psychomotor domain, the cognitive domain, and, in particular and significant ways, the affective domain, including music appreciation and sensitivity.",
    fullTitle: "Bachelor of Music Education"
  },
  {
    PSCED_Name: "Natural Science",
    description:
      "Natural science is a branch of science concerned with the description, understanding and prediction of natural phenomena, based on empirical evidence from observation and experimentation.",
    fullTitle: "Bachelor of Science in Natural Sciences"
  },
  {
    PSCED_Name: "Nursing",
    description:
      "Nursing is a profession within the health care sector focused on the care of individuals, families, and communities so they may attain, maintain, or recover optimal health and quality of life.",
    fullTitle: "Bachelor of Science in Nursing"
  },
  {
    PSCED_Name: "Nutrition and Dietetics",
    description:
      "program that teaches students with the principles and procedures of the use of food for therapeutic purposes in the management of persons suffering from a disease.",
    fullTitle: "Bachelor of Science in Nutrition and Dietetics"
  },
  {
    PSCED_Name: "Occupational Therapy/Health",
    description:
      "Occupational therapy (OT) is a branch of health care that helps people of all ages who have physical, sensory, or cognitive problems. OT can help them regain independence in all areas of their lives.",
    fullTitle: "Bachelor of Science in Occupational Therapy"
  },
  {
    PSCED_Name: "Office Administration/Management",
    description:
      "Office administration is the process of overseeing the day-to-day operations of an office. The task of administration is usually the responsibility of an office administrator or manager.",
    fullTitle: "Bachelor of Science in Office Administration"
  },
  {
    PSCED_Name: "Optometry",
    description:
      "Optometry is a healthcare profession that is autonomous, educated, and regulated (licensed/registered), and optometrists are the primary healthcare practitioners of the eye and visual system who provide comprehensive eye and vision care, which includes refraction and dispensing, detection/diagnosis and management of disease in the eye, and the rehabilitation of conditions of the visual system",
    fullTitle: "Bachelor of Optometry"
  },
  {
    PSCED_Name: "Organizational Development and Planning",
    description:
      "Organizational development and planning is the process of looking at an organization's current state, where it wants to go, and determining how it will get to that point. This process takes some hard analysis of the organization and its culture, plus the possibility of major change always exists.",
    fullTitle: "Bachelor of Arts in Organizational Development"
  },
  {
    PSCED_Name: "Other Agriculture, Forestry, Fisheries",
    description:
      "The agriculture, forestry, and fishing industry sector plays a vital role in our economy and our lives. It supplies us and many other countries with a wide variety of food products and non-food products such as fibers, lumber, and nursery items. It contributes positively to our foreign trade balance and it remains one of the Nation's larger industries in terms of total employment.",
    fullTitle: "Bachelor of Science in Agriculture"
  },
  {
    PSCED_Name: "Other Civil Security and Military",
    description:
      "Military officers are responsible for enforcing military laws and regulations on military installations. They respond to emergencies, control traffic, prevent crime, and protect people and property.",
    fullTitle: "Bachelor of Arts in Intelligence and Security Studies"
  },
  {
    PSCED_Name: "Other Education Science and Teacher Training",
    description:
      "Teacher Training programs are accessed for professional growth and development. These programs are either conducted by the school as part of their Teacher Development plan or pursued at an individual level for self-improvement.",
    fullTitle: "Bachelor of Education"
  },
  {
    PSCED_Name: "Other Education not elsewhere coded (NEC)",
    description:
      "Coding is the process of continually making mistakes, learning from them and correcting them. Coding requires creativity and critical thinking – future-ready skills, that, along with collaboration and communication, are essential.",
    fullTitle: "Bachelor of Education"
  },
  {
    PSCED_Name: "Other Engineering and Technology",
    description:
      "Engineering and Technology Engineering is defined as a systematic and iterative approach to designing objects, processes, and systems to meet human needs and wants. Technology is defined as any modification of the natural or designed world developed to fulfill human needs or desires.",
    fullTitle: "Bachelor of Science Engineering and Technology"
  },
  {
    PSCED_Name: "Other Fine and Applied Arts",
    description:
      "Applied arts is the work created and made.  Fine Arts deals with a freehand approach.",
    fullTitle: "Bachelor of Arts"
  },
  {
    PSCED_Name: "Other IT-Related",
    description:
      "Information Technology, and is pronounced I.T. It refers to anything related to computing technology, such as networking, hardware, software, the Internet, or the people that work with these technologies",
    fullTitle: "Bachelor of Information technology"
  },
  {
    PSCED_Name: "Other Maritime",
    description:
      "The Marine Transportation industry consists of companies engaged in marine and inland water transportation services primarily for freight. The industry includes deep sea freight and cargo, barge, inland water, vessel chartering and other freight transportation operations. The Marine Transportation industry excludes passenger cruise lines,",
    fullTitle: "Bachelor of marine transportation"
  },
  {
    PSCED_Name: "Other Medical and Allied",
    description:
      "Allied Health Professionals – a trained healthcare provider practicing under supervision of a physician or healthcare practitioner. They include pharmacists, dental hygienists, physical therapists and nurses. Medical and Allied Health Professionals",
    fullTitle: "Bachelor's Degree in Medical Assisting"
  },
  {
    PSCED_Name: "Other Social and Behavioral Science",
    description:
      "In the study of human behavior, the past and present are windows to the future. What we can learn from people’s decisions and actions help us draw conclusions and make predictions. The more we learn, the more we understand, and the more we can take action to improve the lives of those around us.",
    fullTitle: "Bachelor of Psychological Science"
  },
  {
    PSCED_Name: "Participatory Development",
    description:
      "Participatory development is an important approach for people-oriented development that emphasizes raising the quality of participation in local societies as a step toward the realization of self-reliant sustainable development and social justice.",
    fullTitle: "Bachelor of Science in Community Development"
  },
  {
    PSCED_Name: "Pastoral Ministry",
    description:
      "The Pastoral Ministry major prepares students to serve in general pastoral ministry or as a future member of a church planting team. Graduates will understand and experience the basic roles of a pastor/shepherd such as preaching, teaching, leading, pastoral care and church planting.",
    fullTitle: "Bachelor of Science in Pastoral Ministry"
  },
  {
    PSCED_Name: "Personnel and Human Resources Management",
    description:
      "Personnel management and human resource management are both involved in managing the members of an organization and engage in similar activities, including staffing, job analysis, planning, employee development, compensation, policy development, health and safety and employee relations.",
    fullTitle: " Bachelor of Science in Human Resource (HR) Management"
  },
  {
    PSCED_Name: "Pharmacy",
    description:
      "Pharmacy is the clinical health science that links medical science with chemistry and it is charged with the discovery, production, disposal, safe and effective use, and control of medications and drugs.",
    fullTitle: " Bachelor of Science in Pharmacy"
  },
  {
    PSCED_Name: "Philippine Literature",
    description:
      "Philippine literature is literature associated with the Philippines from prehistory, through its colonial legacies, and on to the present.",
    fullTitle: "Bachelor of Arts in Literature"
  },
  {
    PSCED_Name: "Philippine Studies/Arts",
    description:
      "The Certificate in Philippine Studies is designed to provide a strong introduction to the culture, language, and history of the Philippines and the Filipino people. With proper planning, the Certificate may be completed within the total credit requirements for the Associate in Arts degree.",
    fullTitle: "Bachelor of Arts in Philippine Studies"
  },
  {
    PSCED_Name: "Philosophy",
    description:
      "Philosophy is the study of general and fundamental questions, such as those about existence, reason, knowledge, values, mind, and language.",
    fullTitle: "Bachelor of Philosophy"
  },
  {
    PSCED_Name: "Physical Education",
    description:
      "Physical education, also known as Phys Ed., PE, or gym is a subject taught in schools. It is taught during primary and secondary education and encourages psychomotor learning in a play or movement exploration setting to promote health and physical fitness.",
    fullTitle: "Bachelor of Science in Education major in Physical Education"
  },
  {
    PSCED_Name: "Physical Therapy",
    description:
      "Physical Therapy is a four-year program that produces professionals who promote optimal health and function by providing services that develop, maintain, and restore maximum movement and functional ability, for people at any stage of life, when their movement and function are threatened by ageing, injury, diseases, disorders, conditions, or environmental factors.",
    fullTitle: "Bachelor of Science in Physical Therapy"
  },
  {
    PSCED_Name: "Physics",
    description:
      "Physics, science that deals with the structure of matter and the interactions between the fundamental constituents of the observable universe.",
    fullTitle: "Bachelor of Science in Physics"
  },
  {
    PSCED_Name: "Physics Teaching",
    description:
      "Physics education refers to the methods currently used to teach physics. Physics Education Research refers to an area of pedagogical research that seeks to improve those methods.",
    fullTitle: "Bachelor of Science in Physics Education"
  },
  {
    PSCED_Name: "Pilipino/Filipino",
    description:
      "Filipino mainly focus in Philippine literature. This tackles literary pieces of famous Filipino writers. Moreover, it also focus in learning the filipino language deeply.",
    fullTitle: "Bachelor of Science in Education Major in Filipino"
  },
  {
    PSCED_Name: "Plant Breeding",
    description:
      "Plant breeding uses principles from a variety of sciences to improve the genetic potential of plants. The process involves combining parental plants to obtain the next generation with the best characteristics.",
    fullTitle:
      "Bachelor of Science in Agriculture (Genetics and Plant Breeding) "
  },
  {
    PSCED_Name: "Plant Pathology",
    description:
      "Plant pathology is the science that studies the causes of plant diseases, the mechanisms by which diseases develop in individual plants and in plant populations, and the ways and means by which plant diseases can be managed or controlled.",
    fullTitle: "Bachelor of Science in Agriculture major in Plant Pathology"
  },
  {
    PSCED_Name: "Political Economy",
    description:
      "Political economy is an interdisciplinary branch of the social sciences that focuses on the interrelationships among individuals, governments, and public policy.",
    fullTitle: "Bachelor of Arts in Political Economy"
  },
  {
    PSCED_Name: "Political Science",
    description:
      "Political science is the social scientific study of political institutions and political behavior. The study of political institutions includes topics such as the effect of the design of electoral systems on the quality of representation in government, the formal and informal elements of the legislative process and their implications for the making of law and the impact of domestic political institutions on the incidence of international conflict.",
    fullTitle: "Bachelor of Arts in Political Science"
  },
  {
    PSCED_Name: "Pre-Dental",
    description:
      "Pre-Dental” is designed to give the student all of the science pre-requisites for a successful entry to dental school. Dental Hygienists earn a full BA, and is its own long term career. Dental Assistants typically earn a certification or an Associates degree.",
    fullTitle: "Bachelor’s Degree in Dental Hygiene"
  },
  {
    PSCED_Name: "Psychology",
    description:
      "Psychology is the scientific study of the mind and behavior. Psychologists are actively involved in studying and understanding mental processes, brain functions, and behavior.",
    fullTitle: "Bachelor of Science in Psychology"
  },
  {
    PSCED_Name: "Public Administration/Management",
    description:
      "Public administration is the implementation of government policy and also an academic discipline that studies this implementation and prepares civil employees for working in the public service.",
    fullTitle: "Bachelor of Science in Public Administration"
  },
  {
    PSCED_Name: "Public Health/Medical Health",
    description:
      "Public health is the science of protecting and improving the health of people and their communities. This work is achieved by promoting healthy lifestyles, researching disease and injury prevention, and detecting, preventing and responding to infectious diseases.",
    fullTitle: "Bachelor of Science in Public Health"
  },
  {
    PSCED_Name: "Radiologic Technology",
    description:
      "Radiologic technologists are the health care professionals who perform diagnostic imaging procedures, such as X-ray examinations, magnetic resonance imaging (MRI) scans and computed tomography (CT) scans.",
    fullTitle: "Bachelor of Science in Radiologic Technology"
  },
  {
    PSCED_Name: "Real Estate",
    description:
      "Real estate is property consisting of land and the buildings on it, along with its natural resources such as crops, minerals or water; immovable property of this nature; an interest vested in this (also) an item of real property, (more generally) buildings or housing in general.",
    fullTitle: "Bachelor of Science in Real Estate Management"
  },
  {
    PSCED_Name: "Religious Education (Character/Value Education)",
    description:
      "Religious education is the teaching of a particular religion (although in the United Kingdom the term religious instruction would refer to the teaching of a particular religion, with religious education referring to teaching about religions in general) and its varied aspects: its beliefs, doctrines, rituals, customs, rites, and personal roles.",
    fullTitle: "Bachelor of Religious Education "
  },
  {
    PSCED_Name: "Religious Formation",
    description:
      "Formation is the personal preparation that the Catholic Church offers to people with a defined mission, such as the priesthood or membership of a religious order such as the Society of Jesus. Such formation involves a program of spiritual and academic training.",
    fullTitle: "Bachelor of Religious Education"
  },
  {
    PSCED_Name: "Research and Evaluation",
    description:
      "Research and Evaluation Evaluation research is defined as a form of disciplined and systematic inquiry that is carried out to arrive at an assessment or appraisal of an object, program, practice, activity, or system with the purpose of providing information that will be of use in decision making.",
    fullTitle: "Bachelor of research studies"
  },
  {
    PSCED_Name: "Respiratory/Pulmonary Therapy",
    description:
      " therapy that is concerned with the maintenance or improvement of respiratory functioning (as in patients with pulmonary disease)",
    fullTitle: "Bachelor of Science in Respiratory Therapy"
  },
  {
    PSCED_Name: "Rural Development",
    description:
      "Rural Development refers to a distinct approach to interventions by the state in the economies of underdeveloped countries, and one which is at once broader and more specific than 'agricultural development'.",
    fullTitle: "Bachelor of Rural Studies"
  },
  {
    PSCED_Name: "Sanitary Engineering",
    description:
      "Sanitary engineering, also known as public health engineering or wastewater engineering, is the application of engineering methods to improve sanitation of human communities, primarily by providing the removal and disposal of human waste, and in addition to the supply of safe potable water.",
    fullTitle: "Bachelor of Science in Sanitary Engineering"
  },
  {
    PSCED_Name: "Science",
    description:
      "Science (from Latin scientia 'knowledge') is a systematic enterprise that builds and organizes knowledge in the form of testable explanations and predictions about the world.",
    fullTitle: "Bachelor of Science"
  },
  {
    PSCED_Name: "Science Education (teaching Science)",
    description:
      "Science education is the teaching and learning of science to non-scientists, such as school children, college students, or adults within the general public.",
    fullTitle: "Bachelor of Secondary Education major in Science"
  },
  {
    PSCED_Name: "Secondary Education with no specialization",
    description:
      "A degree in secondary education largely prepares students to teach at a public or private middle school or high school.",
    fullTitle: "Bachelor of Secondary Education"
  },
  {
    PSCED_Name: "Secretarial Science",
    description:
      "Programs in this field teach you the skills necessary to perform basic office work and, in some programs, teach you how to manage and run an office. The name 'secretarial science' is slightly outdated, though - most schools now offer programs in office administration, office management or office technology.",
    fullTitle: "Bachelor of Science in Secretarial Administration"
  },
  {
    PSCED_Name: "Secretarial/Medical Secretarial/Clerical",
    description:
      "Medical Secretarial-Medical Secretary will perform secretarial duties using specific knowledge of medical terminology and hospital, clinic, or laboratory procedures. Duties will include scheduling appointments, billing patients, and compiling and recording medical charts, reports, and correspondence.",
    fullTitle: "Bachelor's of Study Secretarial Science"
  },
  {
    PSCED_Name: "Social Development",
    description:
      "Social development refers to the process by which a child learns to interact with others around them. As they develop and perceive their own individuality within their community, they also gain skills to communicate with other people and process their actions.",
    fullTitle: "Bachelor of Science in Social Work"
  },
  {
    PSCED_Name: "Social Science",
    description:
      "social science is any branch of academic study or science that deals with human behaviour in its social and cultural aspects. Usually included within the social sciences are cultural (or social) anthropology, sociology, psychology, political science, and economics.",
    fullTitle: "Bachelor of Arts major in Social Science"
  },
  {
    PSCED_Name: "Social Science Education",
    description:
      "The social sciences play a critical role in a traditional liberal arts education. Social science entails the study of human behavior and society at a variety of levels. Popular social science majors include psychology, political science, and economics.",
    fullTitle: "Bachelor in Social Science Education"
  },
  {
    PSCED_Name: "Social Services",
    description:
      "Social services are a range of public services intended to provide support and assistance towards particular groups, which commonly include the disadvantaged. They may be provided by individual actors, private and independent organisations, or administered by a government agency",
    fullTitle: "Bachelor of Science in Social Work"
  },
  {
    PSCED_Name: "Social Studies",
    description:
      "a part of a school or college curriculum concerned with the study of social relationships and the functioning of society and usually made up of courses in history, government, economics, civics, sociology, geography, and anthropology.",
    fullTitle: "Bachelor in Secondary Education Major in Social Studies"
  },
  {
    PSCED_Name: "Social Work",
    description:
      "Social work is a practice-based profession that promotes social change, development, cohesion and the empowerment of people and communities. Social work practice involves the understanding of human development, behavior and the social, economic and cultural institutions and interactions.",
    fullTitle: "Bachelor of Science in Social Work"
  },
  {
    PSCED_Name: "Sociology",
    description:
      "Sociology is the study of human social relationships and institutions. Sociology’s subject matter is diverse, ranging from crime to religion, from the family to the state, from the divisions of race and social class to the shared beliefs of a common culture, and from social stability to radical change in whole societies.",
    fullTitle: "Bachelors of Science in Sociology"
  },
  {
    PSCED_Name: "Soil Science",
    description:
      "Soil science is the study of soil as a natural resource on the surface of the Earth including soil formation, classification and mapping; physical, chemical, biological, and fertility properties of soils; and these properties in relation to the use and management of soils.",
    fullTitle: "Bachelor of Science in Agriculture major in Soil Science"
  },
  {
    PSCED_Name: "Special Education",
    description:
      "Special education serves children with emotional, behavioral, or cognitive impairments or with intellectual, hearing, vision, speech, or learning disabilities; gifted children with advanced academic abilities; and children with orthopedic or neurological impairments.",
    fullTitle: "Bachelor of Special Needs Education"
  },
  {
    PSCED_Name: "Sports Science (Sports Officiating/Coaching)",
    description:
      "Sports science is a discipline that studies how the healthy human body works during exercise, and how sport and physical activity promote health and performance from cellular to whole body perspectives.",
    fullTitle: "Bachelor of Sports Science"
  },
  {
    PSCED_Name: "Statistics",
    description:
      "Statistics is the science concerned with developing and studying methods for collecting, analyzing, interpreting and presenting empirical data. Statistics is a highly interdisciplinary field; research in statistics finds applicability in virtually all scientific fields and research questions in the various scientific fields motivate the development of new statistical methods and theory.",
    fullTitle: "Bachelor of Science in Statistics"
  },
  {
    PSCED_Name: "Structural Engineering",
    description:
      "Structural engineering is a sub-discipline of civil engineering in which structural engineers are trained to design the 'bones and muscles' that create the form and shape of man-made structures.",
    fullTitle: "Bachelor of Science in Structural Engineering"
  },
  {
    PSCED_Name: "Teaching",
    description:
      "Teaching is the process of attending to people’s needs, experiences and feelings, and making specific interventions to help them learn particular things.",
    fullTitle: "Bachelor of Secondary Education"
  },
  {
    PSCED_Name: "Teaching Handicapped Children ",
    description:
      "Special education refers to a range of educational and social services provided by the public school system and other educational institutions to individuals with disabilities who are between three and 21 years of age.",
    fullTitle:
      "Bachelor of Special Needs Education (BSNEd) with specialization in Early Childhood Education"
  },
  {
    PSCED_Name: "Technician Teacher Education",
    description:
      "program that provides students with the knowledge and skills to teach technical-vocational courses like Automotive, Electrical, Civil and Drafting technology, Food and Service Management and many more.",
    fullTitle: "Bachelor of Technical Teacher Education"
  },
  {
    PSCED_Name: "Technology Communications Management",
    description:
      "a hybrid program integrating courses in mass communication, information technology and computing. It facilitates students in acquiring and enhancing relevant knowledge and skills to achieve an effective communication and management of technology.",
    fullTitle: "Bachelor of Science in Technology Communication Management"
  },
  {
    PSCED_Name: "Technology Management",
    description:
      "Technology management can also be defined as the integrated planning, design, optimization, operation and control of technological products, processes and services, a better definition would be the management of the use of technology for human advantage.",
    fullTitle: "Bachelor of Science in Technology Management"
  },
  {
    PSCED_Name: "Technology/Engineering",
    description:
      "Technology is science or knowledge put into practical use to solve problems or invent useful tools.",
    fullTitle: "Bachelor of Science in Technology"
  },
  {
    PSCED_Name: "Theology/Theological Studies",
    description:
      "Theology is the systematic study of the nature of the divine and, more broadly, of religious belief. It is taught as an academic discipline, typically in universities and seminaries.",
    fullTitle: "Bachelor of Theology"
  },
  {
    PSCED_Name: "Tourism",
    description:
      "Tourism is a social, cultural and economic phenomenon which entails the movement of people to countries or places outside their usual environment for personal or business/professional purposes.",
    fullTitle: "Bachelor of Science in Tourism"
  },
  {
    PSCED_Name: "Tourism and Hotel & Restaurant Mgt.",
    description:
      "It involves the study and application of practical and managerial knowledge and functions, such as hotel and restaurant operations, culinary arts, food service, hospitality education, and research that are essential in preparing the students to become adept future restaurateurs and hoteliers.",
    fullTitle: "Bachelor of Science in Hotel, Restaurant and Tourism Management"
  },
  {
    PSCED_Name: "Tourism and Travel Management",
    description:
      "Tourism and travel management this Program is designed to create professionals trained in tourism and travel organisation and management.",
    fullTitle:
      "Bachelor of Science in Tourism Management and Bachelor of Science in Travel Management"
  },
  {
    PSCED_Name: "Trade Technology",
    description:
      "Technology trade increases the efficiency of invention while at the same time lowering the total number of inventors relative to the equilibrium without technology trade. Technology trade increases the volume of trade in goods. Technology trade increases product variety at the market equilibrium.",
    fullTitle: "Bachelor of Technology, Trades and Technology Leadership"
  },
  {
    PSCED_Name: "Transport Engineering",
    description:
      "Transportation engineering is the application of technology and scientific principles to the design, operation, planning and management of transportation infrastructure, mobility service, traffic, and travelers for various travel modes, in order to provide for the safe, efficient, rapid, comfortable, convenient, economical, and environmentally sustainable movement of people and goods.",
    fullTitle: "Bachelor of Science in Trasport Engineering"
  },
  {
    PSCED_Name: "Urban and Regional Planning",
    description:
      "Urban and regional planning is a notion that encompasses the whole set of social activities aimed at anticipating, representing and regulating the development of an urban or a regional area.",
    fullTitle: "Bachelor or Science in Urban and Regional Planning"
  },
  {
    PSCED_Name: "Veterinary Medicine",
    description:
      "Veterinary medicine, also called veterinary science, medical specialty concerned with the prevention, control, diagnosis, and treatment of diseases affecting the health of domestic and wild animals and with the prevention of transmission of animal diseases to people.",
    fullTitle: "Doctor of Veterinary Medicine"
  },
  {
    PSCED_Name: "Veterinary Technology",
    description:
      "Veterinary Technology program is designed to meet the training needs of the veterinary community. The program provides students with field and classroom instruction and advisement and meets current standards for veterinary technicians.",
    fullTitle: "Bachelor of Science in Veterinary Technology"
  },
  {
    PSCED_Name: "Vocational/Technical Education",
    description:
      "Vocational education and training, abbreviated as VET, sometimes simply called vocational training, is the training in skills and teaching of knowledge related to a specific trade, occupation or vocation in which the student or employee wishes to participate.",
    fullTitle: "Bachelor of Vocation"
  },
  {
    PSCED_Name: "Water Resources Engineering",
    description:
      "Water resources engineering is the quantitative study of the hydrologic cycle -- the distribution and circulation of water linking the earth's atmosphere, land and oceans. Applications include the management of the urban water supply, the design of urban storm-sewer systems, and flood forecasting.",
    fullTitle:
      "Bachelor of Science in Irrigation and Water Resources Engineering "
  },
  {
    PSCED_Name: "Zoology",
    description:
      "Zoology (also known as animal science) is the branch of biology devoted to the study of animal life. It covers areas ranging from the structure of organisms to the subcellular unit of life.",
    fullTitle: "Bachelor of Science in Zoology "
  }
];

export default programs;
