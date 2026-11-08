// CURRENT RESEARCH TEAM DATA (All 9 Active PhD Scholars)
    const teamMembers = [
      {
        name: 'Shyamal Das',
        initials: 'SD',
        image: 'img/People/Shyamal.png',
        profile: 'https://www.linkedin.com/in/shyamal-das-932ba9247/',
        role: 'Regular Ph.D. Scholar',
        cohort: 'Joined Jan 2025',
        badge: 'IndiaAI Fellow',
        dept: 'Mehta Family School of Data Science & AI (MFSDS&AI)',
        category: 'mfsdsai',
        focus: 'Fair & Explainable AI, Deep Neural Architectures & Hybrid Recommendation Systems'
      },
      {
        name: 'Mukesh Kumar',
        initials: 'MK',
        image: 'img/People/Mukesh.jpg',
        profile: 'https://www.linkedin.com/in/mukesh-kumar-092777306/',
        role: 'Regular Ph.D. Scholar',
        cohort: 'Joined Dec 2023',
        badge: 'MHRD Scholar',
        dept: 'Mehta Family School of Data Science & AI (MFSDS&AI)',
        category: 'mfsdsai',
        focus: 'Algorithmic Fairness in Data Science & Complex Networks (Jointly supervised with Prof. Akrati Saxena, Leiden University)'
      },
      {
        name: 'Aaditya Chandra Tiwary',
        initials: 'AT',
        profile: 'https://www.linkedin.com/in/aaditya-tiwary-0a7698114/',
        role: 'Regular Ph.D. Scholar',
        cohort: 'Joined Jul 2025',
        badge: 'MHRD Scholar',
        dept: 'Department of Management Studies (DoMS)',
        category: 'doms',
        focus: 'Multimodal Fusion for Financial Forecasting under Crisis & Applied Machine Learning'
      },
      {
        name: 'Parveen Kumar',
        initials: 'PK',
        profile: 'https://www.linkedin.com/in/parveen-kumar-485082172/',
        role: 'Regular Ph.D. Scholar',
        cohort: 'Joined Jan 2025',
        badge: 'MHRD Scholar',
        dept: 'Department of Management Studies (DoMS)',
        category: 'doms',
        focus: 'LLM-based Thematic Analysis of Social Media Deepfakes & Computational Social Science'
      },
      {
        name: 'Abhigyan',
        initials: 'AB',
        image: 'img/People/Abhigyan.png',
        profile: 'https://atiwa11.github.io/abhigyan.github/',
        role: 'Regular Ph.D. Scholar',
        cohort: 'Joined Jul 2023',
        badge: 'MHRD Scholar',
        dept: 'Department of Management Studies (DoMS)',
        category: 'doms',
        focus: 'CUR-based Matrix Decomposition, Deep Neural Networks & Consumer Behaviour Prediction'
      },
      {
        name: 'Faye Simon',
        initials: 'FS',
        profile: 'https://www.linkedin.com/in/faye-simon-b04822102/',
        role: 'Dual Doctoral Degree Scholar',
        cohort: 'Joined Sep 2024',
        badge: 'AIT–IITR Dual PhD',
        dept: 'IIT Roorkee & Asian Institute of Technology (AIT), Thailand',
        category: 'doms',
        focus: 'Digital Credentialing & Information Systems (Jointly supervised with Prof. Chutiporn Anutariya, AIT)'
      },
      {
        name: 'Shivam Soni',
        initials: 'SS',
        profile: 'https://www.linkedin.com/in/shivam-soni-b46992148/',
        role: 'Part-Time Ph.D. Scholar',
        cohort: 'Joined Jan 2026',
        badge: 'Part-Time Scholar',
        dept: 'Mehta Family School of Data Science & AI (MFSDS&AI)',
        category: 'mfsdsai',
        focus: 'Applied Artificial Intelligence & Data Science'
      },
      {
        name: 'Akhilesh Das',
        initials: 'AD',
        profile: 'https://www.linkedin.com/in/akhileshkdas/',
        role: 'Part-Time Ph.D. Scholar',
        cohort: 'Joined Dec 2023',
        badge: 'Part-Time Scholar',
        dept: 'Department of Management Studies (DoMS)',
        category: 'doms',
        focus: 'Information Systems & Enterprise Decision Analytics'
      },
      {
        name: 'Shelly Garg',
        initials: 'SG',
        image: 'img/People/Shelly.jpeg',
        profile: 'https://www.linkedin.com/in/shelly-garg-383a47120/',
        role: 'IITR@175 Ph.D. Scholar',
        cohort: 'Joined Jul 2023',
        badge: 'IITR@175 Fellow',
        dept: 'Department of Management Studies (DoMS)',
        category: 'doms',
        focus: 'Information Systems & Digital Transformation'
      }
    ];

    // LAB ALUMNI DATA
    const alumniMembers = [
      {
        name: 'Dr. Kunal Rao',
        initials: 'KR',
        profile: 'https://iimbg.ac.in/faculty/kunal-rao/',
        graduated: 'May 2026',
        focus: 'Social Media Analytics, Conversational Consistency & Machine Learning',
        position: 'Faculty, Indian Institute of Management (IIM) Bodh Gaya'
      },
      {
        name: 'Dr. Pramod Kumar Patnaik',
        initials: 'PP',
        image: 'img/People/Pramod.webp',
        profile: 'https://jgu.edu.in/jgbs/faculty/prof-dr-pramod-kumar-patnaik',
        graduated: 'Jan 2026',
        focus: 'Rural e-Governance, Digital Divide & Generative AI in Rural Education',
        position: 'Faculty, Jindal Global Business School (JGBS)'
      },
      {
        name: 'Dr. Manisha Yadav',
        initials: 'MY',
        image: 'img/People/manisha.jpg',
        profile: 'https://www.iitj.ac.in/People/Profile/a9759bad-c910-4281-99af-56280b885ed0',
        graduated: 'Mar 2025',
        focus: 'Prospect Theory Execution, Structural Breaks & Quantile Regression',
        position: 'Faculty, Indian Institute of Technology (IIT) Jodhpur'
      },
      {
        name: 'Dr. Sakshi Srivastava',
        initials: 'SS',
        image: 'img/People/Sakshi.jpg',
        profile: 'https://christuniversity.in/Business%20and%20Management/faculty-details/ODMzMA==/MzAx',
        graduated: 'Feb 2024',
        focus: 'Business Value of Descriptive & Predictive Analytics and Recommender Systems',
        position: 'Faculty, Christ University'
      },
      {
        name: 'Dr. Himanshu Agarwal',
        initials: 'HA',
        profile: 'https://www.mstcindia.co.in/content/contact.aspx',
        graduated: 'Dec 2022',
        focus: 'Multilingual Social Movements, Digital Activism & Smart Cities',
        position: 'Manager, MSTC Limited (Ministry of Steel, Govt. of India)'
      },
      {
        name: 'Dr. Ashwani Kumar',
        initials: 'AK',
        image: 'img/People/ashwani.webp',
        profile: 'https://www.iimrohtak.ac.in/faculty-detail.php?facultyId=46',
        graduated: 'Sep 2019',
        focus: 'WEEE E-Waste Management & Green Partner Evaluation using Hybrid MCDM',
        position: 'Faculty, Indian Institute of Management (IIM) Rohtak'
      }
    ];

    const researchInterns = [
      {
        year: 2025,
        name: 'Sushma Bhandary',
        programme: 'NPTEL',
        institution: "MKSSS's Cummins College of Engineering for Women, Pune",
        focus: 'SciSci using Citation Networks'
      },
      {
        year: 2025,
        name: 'Ansh Kumar',
        programme: 'NPTEL',
        institution: 'Guru Nanak Dev Engineering College, Ludhiana'
      },
      {
        year: 2025,
        name: 'Sanyam Garg',
        programme: 'NPTEL',
        institution: 'National Institute of Technology Patna'
      },
      {
        year: 2025,
        name: 'Karia Abhimanyu Himanshu',
        programme: 'NPTEL',
        institution: 'Dhirubhai Ambani University, Gandhinagar'
      },
      {
        year: 2023,
        name: 'Sai Satyadarshan Bhuyan',
        programme: 'MS Project',
        institution: 'IISER Bhopal',
        focus: 'LLMs in Finance'
      },
      {
        year: 2023,
        name: 'Sumant R Chopde',
        programme: 'Research intern',
        institution: 'IISER Pune',
        focus: 'Recommender Systems'
      },
      {
        year: 2022,
        name: 'Satyam Morankar',
        programme: 'NPTEL',
        institution: 'MIT World Peace University Pune',
        focus: 'ML on Finance and Web Data'
      },
      {
        year: 2022,
        name: 'Neha Bhat',
        programme: 'NPTEL',
        institution: 'Sai Vidya Institute of Technology, Bengaluru',
        focus: 'ML on Web Data'
      },
      {
        year: 2020,
        name: 'Shristi Bose',
        programme: 'Research Project intern',
        institution: 'Devi Ahilya Vishwavidyalaya Indore',
        focus: 'NeuroIS and Social Media'
      },
      {
        year: 2019,
        name: 'Amit Kumar Kushwaha',
        programme: 'Industry intern',
        institution: 'Sling Media Bangalore',
        focus: 'ML for Social Media'
      },
      {
        year: 2019,
        name: 'Vineet Kaushik',
        programme: 'Research intern',
        institution: 'NIFT, New Delhi',
        focus: 'MCDM in E-commerce'
      }
    ];

    // JOURNALS AND CONFERENCE PROCEEDINGS
    const earlierPublications = [
      {year:2026,type:'journal',title:"Does language of posting in social media shape influencers and users' participation? Analysing conversational consistency using a computational social science approach",authors:'Rao, K., & Dixit, G.',venue:'Journal of Decision Systems, 35(1), 2658198',doi:'https://doi.org/10.1080/12460125.2026.2658198'},
      {year:2026,type:'journal',title:"Formulating gamers' decision factors into item-based collaborative filtering to enhance mobile game recommender systems",authors:'Dixit, G., & Srivastava, S.',venue:'Journal of Decision Systems, 35(1), 2642587',doi:'https://doi.org/10.1080/12460125.2026.2642587'},
      {year:2026,type:'journal',title:'Suspiciousness of social media accounts: examining the role of conversational consistency using a machine learning approach',authors:'Rao, K., & Dixit, G.',venue:'Data Science and Management, 9(2), 100167',doi:'https://doi.org/10.1016/j.dsm.2025.09.003',note:'Best Paper, ISAP 2024'},
      {year:2025,type:'journal',title:"Digital Divide Among Marginalized Rural Communities in Developing Countries: Strategies and Practices to Reduce the 'Proxy Use of ICTs' for Rural e-Governance",authors:'Patnaik, P. K., Dixit, G., Kumar, A., & Papadopoulos, T.',venue:'Communications of the Association for Information Systems, 58',doi:'https://aisel.aisnet.org/cais/vol58/iss1/2'},
      {year:2025,type:'journal',title:'Unveiling Enablers to the Use of Generative AI Artefacts in Rural Educational Settings: A Socio-Technical Perspective',authors:'Patnaik, P. K., Rao, K., & Dixit, G.',venue:'Communications of the Association for Information Systems, 58',doi:'https://aisel.aisnet.org/cais/vol58/iss1/8/'},
      {year:2025,type:'journal',title:'Automatic Localization and Characterization of Mid-latitude Ionospheric Plasma Structures from All-sky Airglow Images using a Deep Learning Framework',authors:'Chakrabarti, S., Upadhyaya, J., Rathi, R., Yadav, V., Patgiri, D., Dixit, G., Krishna, M. S., & Sarkhel, S.',venue:'Advances in Space Research, 76(4), 2302–2314',doi:'https://doi.org/10.1016/j.asr.2025.05.086'},
      {year:2025,type:'journal',title:'Asymmetric dependence between the prospect theory value and stock returns in India: a quantile regression approach',authors:'Yadav, M., & Dixit, G.',venue:'Managerial Finance, 51(2), 236–261',doi:'https://doi.org/10.1108/MF-10-2023-0628'},
      {year:2025,type:'journal',title:'Value of Analytics for Decision-Making: Role of Managers and Analysts',authors:'Srivastava, S., & Dixit, G.',venue:'Journal of Computer Information Systems, 65(1), 28–46',doi:'https://doi.org/10.1080/08874417.2023.2255557'},
      {year:2024,type:'journal',title:"Optimizing a Deep Learning Framework for Accurate Detection of the Earth's Ionospheric Plasma Structures from All-sky Airglow Images",authors:'Chakrabarti, S., Patgiri, D., Rathi, R., Dixit, G., Krishna, M. S., & Sarkhel, S.',venue:'Advances in Space Research, 73(12), 5990–6005',doi:'https://doi.org/10.1016/j.asr.2024.03.014'},
      {year:2023,type:'journal',title:'Algorithmic enhancements to identify predictable components from users data and a framework to detect misinformation in social media',authors:'Dixit, G., & Kushwaha, A. K.',venue:'Journal of Business Analytics, 6(2), 112–126',doi:'https://doi.org/10.1080/2573234X.2022.2100834'},
      {year:2023,type:'journal',title:'How do localized socio-economic platform ecosystems emerge? A mobile platform to bring the market to villagers in Himalayan forests',authors:'Dixit, G.',venue:'Information Technology for Development, 29(2–3), 205–227',doi:'https://doi.org/10.1080/02681102.2022.2131702'},
      {year:2022,type:'journal',title:'A fuzzy Analytic Hierarchy Process based analysis for prioritization of enablers to pine briquettes based energy generation in alignment with the UN SDGs: Evidence from India',authors:'Sengar, A., Sharma, V., Joshi, K., Agrawal, R., Dwivedi, A., Dwivedi, P., Sharma, P. K., Dixit, G., Goswami, G., & Barthwal, M.',venue:'Biomass and Bioenergy, 165, 106580',doi:'https://doi.org/10.1016/j.biombioe.2022.106580'},
      {year:2022,type:'journal',title:"Local leader's impact on adoption of renewable energy generation technology by rural communities in the Himalayan region",authors:'Dwivedi, A., Dwivedi, P., Joshi, K., Sharma, V., Sengar, A., Agrawal, R., Sharma, P. K., Dixit, G., & Barthwal, M.',venue:'Journal of Cleaner Production, 352, 131479',doi:'https://doi.org/10.1016/j.jclepro.2022.131479'},
      {year:2022,type:'journal',title:'A hybrid decision model for supplier selection in Online Fashion Retail (OFR)',authors:'Kaushik, V., Kumar, A., Gupta, H., & Dixit, G.',venue:'International Journal of Logistics Research and Applications, 25(1), 27–51',doi:'https://doi.org/10.1080/13675567.2020.1791810'},
      {year:2022,type:'journal',title:'Modelling and prioritizing the factors for online apparel return using BWM approach',authors:'Kaushik, V., Kumar, A., Gupta, H., & Dixit, G.',venue:'Electronic Commerce Research, 22, 843–873',doi:'https://doi.org/10.1007/s10660-020-09406-3'},
      {year:2020,type:'journal',title:'Development of a framework for selecting a sustainable location of waste electrical and electronic equipment recycling plant in emerging economies',authors:'Kumar, A., Wasan, P., Luthra, S., & Dixit, G.',venue:'Journal of Cleaner Production, 277, 122645',doi:'https://doi.org/10.1016/j.jclepro.2020.122645'},
      {year:2020,type:'journal',title:'Prioritization of barriers to energy generation using pine needles to mitigate climate change: Evidence from India',authors:'Sengar, A., Sharma, V., Agrawal, R., Dwivedi, A., Dwivedi, P., Joshi, K., Dixit, G., Sharma, P. K., & Barthwal, M.',venue:'Journal of Cleaner Production, 275, 123840',doi:'https://doi.org/10.1016/j.jclepro.2020.123840'},
      {year:2019,type:'journal',title:'A novel hybrid MCDM framework for WEEE recycling partner evaluation on the basis of green competencies',authors:'Kumar, A., & Dixit, G.',venue:'Journal of Cleaner Production, 241, 118017',doi:'https://doi.org/10.1016/j.jclepro.2019.118017'},
      {year:2018,type:'journal',title:'An analysis of barriers affecting the implementation of e-waste management practices in India: A novel ISM–DEMATEL approach',authors:'Kumar, A., & Dixit, G.',venue:'Sustainable Production and Consumption, 14, 36–52',doi:'https://doi.org/10.1016/j.spc.2018.01.002'},
      {year:2018,type:'journal',title:'Evaluating critical barriers to implementation of WEEE management using DEMATEL approach',authors:'Kumar, A., & Dixit, G.',venue:'Resources, Conservation and Recycling, 131, 101–121',doi:'https://doi.org/10.1016/j.resconrec.2017.12.024'},
      {year:2016,type:'journal',title:'Analyzing the factors affecting the sustainable municipal solid waste management (MSWM)',authors:'Kumar, A., Dixit, G., & Prabhakar, D.',venue:'Indian Journal of Science and Technology, 9(47), 1–7',doi:'https://dx.doi.org/10.17485/ijst/2016/v9i47/105286'},
      {year:2014,type:'journal',title:'Information technology impact and role of firm age and export activity: An emerging economy context',authors:'Dixit, G., & Panigrahi, P.',venue:'Journal of Global Information Technology Management, 17(3), 169–187',doi:'https://doi.org/10.1080/1097198X.2014.951295'},
      {year:2013,type:'journal',title:'Investigating determinants of information technology investments by Indian firms',authors:'Dixit, G., & Panigrahi, P.',venue:'Journal of Information Technology Management, 24(3), 13',doi:'https://home.thejitm.org/XXIV-3/article2.pdf'},
      {year:2013,type:'journal',title:'Predicting India Volatility Index: An application of artificial neural network',authors:'Dixit, G., Roy, D., & Uppal, N.',venue:'International Journal of Computer Applications, 70(4)',doi:'https://doi.org/10.5120/11950-7768'},
      {year:2026,type:'conference',title:'Resilience Across the Data Divide: A Design-Oriented Systematic Review of Multimodal Fusion for Developed and Emerging Stock Market Forecasting under Crisis',authors:'Tiwary, A. C., & Dixit, G.',venue:'PACIS 2026 Proceedings, 19',doi:'https://aisel.aisnet.org/pacis2026/ai_ml/ai_ml/19'},
      {year:2026,type:'conference',title:'LLMs-based Thematic Analysis of Social Media Deepfakes and its Empirical Parallelism with Deepfake News',authors:'Kumar, P., & Dixit, G.',venue:'PACIS 2026 Proceedings, 2',doi:'https://aisel.aisnet.org/pacis2026/ai_ml/ai_ml/2'},
      {year:2026,type:'conference',title:'Enhancing Hybrid Recommendation Systems with CUR-based Matrix Decomposition and Deep Neural Network Architectures for Consumer Behaviour Prediction',authors:'Abhigyan, Das, S., Kumar, M., & Dixit, G.',venue:'Intl. Conf. on Intelligent Computing and Automation for Sustainable Solutions, 1–5, Faridabad',doi:'https://doi.org/10.1109/ICASS69550.2026.11547413'},
      {year:2025,type:'conference',title:'Digital Credentialing Framework for Continuing Professional Development: Global Practices and Integration',authors:'Simon, P. F. T., Anutariya, C., & Dixit, G.',venue:'Intl. Conf. on Electronic Government and the Information Systems Perspective, 33–47, Springer',doi:'https://doi.org/10.1007/978-3-032-02225-7_3'},
      {year:2025,type:'conference',title:'How Government Policies Shape IT Spending and Innovation in Startups and Incumbents in India',authors:'Dixit, G., Rao, K., & Mithas, S.',venue:'PACIS 2025 Proceedings, 8',doi:'https://aisel.aisnet.org/pacis2025/transform/transform/8'},
      {year:2025,type:'conference',title:'Decoding Internet Signals for Stock Market Movement: A Machine Learning Study on the Pharma Sector During Covid-19',authors:'Dixit, G., & Morankar, S. K.',venue:'Proceedings of the 2024 Pre-ICIS SIGDSA Symposium, 24',doi:'https://aisel.aisnet.org/sigdsa2024/24'},
      {year:2024,type:'conference',title:'A Novel End-User-Oriented Perspective for Mobile Service Artefacts: Conceptualizing Usage Patterns',authors:'Dixit, G.',venue:'Conf. on e-Business, e-Services and e-Society, 156–170, Springer',doi:'https://doi.org/10.1007/978-3-031-72234-9_13'},
      {year:2023,type:'conference',title:'AI and Big Data Practices in Developing Country Context: A Socio-Technical Perspective',authors:'Srivastava, S., & Dixit, G.',venue:'Intl. Working Conf. on Transfer and Diffusion of IT, 55–67, Springer',doi:'https://doi.org/10.1007/978-3-031-50188-3_6'},
      {year:2023,type:'conference',title:"E-channel Selection Intention: Role of Users' IT Characteristics and IT Usage",authors:'Srivastava, S., & Dixit, G.',venue:'Conf. on e-Business, e-Services and e-Society, 156–165, Springer',doi:'https://doi.org/10.1007/978-3-031-50040-4_12'},
      {year:2023,type:'conference',title:'Understanding Potential Risk Factors in the Use of ICTs for Rural e-Governance',authors:'Patnaik, P. K., & Dixit, G.',venue:'IFIP Joint Working Conf. on the Future of Digital Work, 92–109, Springer',doi:'https://doi.org/10.1007/978-3-031-50154-8_9'},
      {year:2023,type:'conference',title:'Development Complexity of Chatbot Artefacts: A Perspective of Developer Communities',authors:'Dixit, G.',venue:'ACIS 2023 Proceedings, 78',doi:'https://aisel.aisnet.org/acis2023/78'},
      {year:2022,type:'conference',title:'Genuineness of Social Media Support: Role of Languages and Influencers in the Case of Farmers Protest in India',authors:'Rao, K., & Dixit, G.',venue:'PACIS 2022 Proceedings, 248',doi:'https://aisel.aisnet.org/pacis2022/248'},
      {year:2020,type:'conference',title:'Trusting Social Media News: Role of Social Influence and Emotions Using EEG as a Brain Imaging Tool',authors:'Dixit, G., & Bose, S.',venue:'Intl. Working Conf. on Transfer and Diffusion of IT, 463–474, Springer',doi:'https://doi.org/10.1007/978-3-030-64861-9_41'},
      {year:2020,type:'conference',title:'ICT Platform-Enabled Socio-Economic Ecosystem in Himalayan Villages of India: The Case of a Forest Protection and Renewable Energy Production Project',authors:'Dixit, G., Joshi, K. K., & Sharma, V.',venue:'Intl. Working Conf. on Transfer and Diffusion of IT, 3–14, Springer',doi:'https://doi.org/10.1007/978-3-030-64861-9_1'},
      {year:2020,type:'conference',title:'Designing an IT Artefact to Enable a Sustainable Business Model for a Bio-Energy Program: Case of a Briquette Ecosystem',authors:'Dixit, G.',venue:'ICIS 2020 TREOs, 6',doi:'https://aisel.aisnet.org/treos_icis2020/6'},
      {year:2020,type:'conference',title:'Information Technology Usage and Cognitive Engagement: Understanding Effects on Users Cognitive Processes',authors:'Agarwal, H., & Dixit, G.',venue:'Intl. Working Conf. on Transfer and Diffusion of IT, 70–81, Springer',doi:'https://doi.org/10.1007/978-3-030-64861-9_7'},
      {year:2018,type:'conference',title:'Impact of Business Analytics on Organizational Outcomes: Role of Analytical Insights and Usage',authors:'Srivastava, S., & Dixit, G.',venue:'ICIS 2018 Proceedings, 10',doi:'https://aisel.aisnet.org/icis2018/datascience/Presentations/10'},
      {year:2017,type:'conference',title:'M-commerce in Smart Cities: Changing Mindsets of Individuals, Organizations, and Society',authors:'Agarwal, H., & Dixit, G.',venue:'Advances in Smart Cities, 167–180, Chapman and Hall/CRC',doi:'https://www.taylorfrancis.com/chapters/edit/10.1201/9781315156040-13/commerce-smart-cities-changing-mindsets-individuals-organizations-society-himanshu-agarwal-gaurav-dixit'},
      {year:2014,type:'conference',title:'Economic Impact of Information Technology in Firms with Different Ownership Structures',authors:'Dixit, G.',venue:'Academy of Management Proceedings, 2014(1), 15455',doi:'https://doi.org/10.5465/ambpp.2014.15455abstract'}
    ];    let currentPubType = 'all';
    let isArchiveExpanded = false;
