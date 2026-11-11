// Current and past research tracks.

    const currentResearchData = [
      {
        id: 'cur-fair-pagerank',
        shortLabel: 'Fair PageRank & Network Embeddings',
        title: 'Fairness-Aware Network Embeddings & Fair PageRank (Fair & Explainable AI)',
        icon: 'fa-scale-balanced',
        accent: 'teal',
        scholars: [
          'Mukesh Kumar (PhD Scholar, MFSDS&AI)',
          'Ella Has',
          'Prof. Akrati Saxena (LIACS, Leiden University, Netherlands)',
          'Prof. Mykola Pechenizkiy'
        ],
        grant: 'International Collaboration on Data Science: Algorithmic Fairness (with LIACS, Leiden University, Netherlands)',
        details: 'Designing fairness-sensitive graph ranking, locally fair PageRank via mean-field approximation and one-step refinement, and fairness-aware network representation learning so that algorithmic link analysis and node rankings mitigate structural bias.',
        outcomes: [
          {
            citation: 'Kumar, M., Dixit, G., & Saxena, A. (2026)',
            title: 'Locally Fair PageRank: Mean-Field Approximation and One-Step Refinement',
            venue: 'arXiv:2609.22923',
            link: 'https://arxiv.org/abs/2609.22923',
            linkType: 'arXiv'
          },
          {
            citation: 'Kumar, M., Dixit, G., & Saxena, A. (2026)',
            title: 'Fairness-Sensitive PageRank Approximation',
            venue: 'arXiv Preprint',
            link: 'https://arxiv.org/abs/2602.02329',
            linkType: 'arXiv'
          },
          {
            citation: 'Has, E., Yadav, H. K., Dixit, G., Pechenizkiy, M., & Saxena, A. (2026)',
            title: 'Fairness-Aware Network Embeddings: Methods, Applications, and Challenges',
            venue: 'arXiv Preprint',
            link: 'https://arxiv.org/abs/2608.19381',
            linkType: 'arXiv'
          }
        ]
      },
      {
        id: 'cur-social-media',
        shortLabel: 'Conversational Consistency & Misinformation',
        title: 'Conversational Consistency, Influencer Dynamics & Suspicious Accounts in Social Media',
        icon: 'fa-comments',
        accent: 'cyan',
        scholars: [
          'Dr. Kunal Rao (PhD 2021–2026, now Faculty at IIM Bodh Gaya)',
          'Dr. Amit Kumar Kushwaha',
          'Prof. Sunil Mithas (University of South Florida, USA)'
        ],
        grant: 'International Collaboration on Social Media & Machine Learning (with USF, USA) & IMPRESS, ICSSR Social Media Project (PI, 12.60 Lacs)',
        details: 'Examining how prior linguistic behavior, posting language, and conversational consistency shape regular user and influencer participation, alongside machine learning frameworks to detect suspicious accounts and misinformation in social media.',
        outcomes: [
          {
            citation: 'Rao, K., & Dixit, G. (2026)',
            title: "Does language of posting in social media shape influencers and users' participation? Analysing conversational consistency using a computational social science approach",
            venue: 'Journal of Decision Systems, 35(1), 2658198',
            link: 'https://doi.org/10.1080/12460125.2026.2658198',
            linkType: 'DOI'
          },
          {
            citation: 'Rao, K., & Dixit, G. (2026)',
            title: 'Suspiciousness of social media accounts: examining the role of conversational consistency using a machine learning approach',
            venue: 'Data Science and Management, 9(2), 100167 (Best Paper Award, ISAP 2024)',
            link: 'https://doi.org/10.1016/j.dsm.2025.09.003',
            linkType: 'DOI'
          },
          {
            citation: 'Dixit, G., & Kushwaha, A. K. (2023)',
            title: "Algorithmic enhancements to identify predictable components from users' data and a framework to detect misinformation in social media",
            venue: 'Journal of Business Analytics, 6(2), 112-126',
            link: 'https://doi.org/10.1080/2573234X.2022.2100834',
            linkType: 'DOI'
          },
          {
            citation: 'Rao, K., & Dixit, G. (2022)',
            title: "Genuineness of Social Media Support: Role of Languages and Influencers in the Case of Farmers' Protest in India",
            venue: 'PACIS 2022 Proceedings, 248',
            link: 'https://aisel.aisnet.org/pacis2022/248',
            linkType: 'AISeL'
          }
        ]
      },
      {
        id: 'cur-llm-deepfakes',
        shortLabel: 'LLMs & Deepfake Discourse Analysis',
        title: 'LLM-Based Thematic Analysis of Deepfakes & Misinformation Narratives',
        icon: 'fa-robot',
        accent: 'amber',
        scholars: [
          'Parveen Kumar (PhD Scholar, DoMS)'
        ],
        grant: 'Core FXAIDS Lab Initiative on Large Language Models & Computational Social Science',
        details: 'Leveraging Large Language Models (LLMs) to perform thematic analysis of social media deepfake discourse and uncover empirical parallelism between synthetic media narratives and deepfake news.',
        outcomes: [
          {
            citation: 'Kumar, P., & Dixit, G. (2026)',
            title: 'LLMs-based Thematic Analysis of Social Media Deepfakes and its Empirical Parallelism with Deepfake News',
            venue: 'PACIS 2026 Proceedings, Paper 2',
            link: 'https://aisel.aisnet.org/pacis2026/ai_ml/ai_ml/2',
            linkType: 'AISeL'
          }
        ]
      },
      {
        id: 'cur-recommenders-cur',
        shortLabel: 'CUR Decomposition & Deep Recommenders',
        title: 'Hybrid Recommender Systems, CUR Matrix Decomposition & Deep Neural Architectures',
        icon: 'fa-diagram-project',
        accent: 'purple',
        scholars: [
          'Abhigyan (PhD Scholar, DoMS)',
          'Shyamal Das (PhD Scholar, IndiaAI Fellow, MFSDS&AI)',
          'Mukesh Kumar (PhD Scholar, MFSDS&AI)',
          'Dr. Sakshi Srivastava (PhD Alumni, Christ University)'
        ],
        grant: 'Fuzzy Logix Big Data & Analytics Lab Grant (PI, 7.80 Lacs) & IndiaAI Fellowship',
        details: 'Enhancing hybrid and item-based collaborative filtering recommender systems by integrating domain decision factors, CUR-based matrix decomposition, and deep neural network architectures for consumer behavior prediction.',
        outcomes: [
          {
            citation: 'Dixit, G., & Srivastava, S. (2026)',
            title: "Formulating gamers' decision factors into item-based collaborative filtering to enhance mobile game recommender systems",
            venue: 'Journal of Decision Systems, 35(1), 2642587',
            link: 'https://doi.org/10.1080/12460125.2026.2642587',
            linkType: 'DOI'
          },
          {
            citation: 'Abhigyan, Das, S., Kumar, M., & Dixit, G. (2026)',
            title: 'Enhancing Hybrid Recommendation Systems with CUR-based Matrix Decomposition and Deep Neural Network Architectures for Consumer Behaviour Prediction',
            venue: 'IEEE ICASS 2026, pp. 1-5',
            link: 'https://doi.org/10.1109/ICASS69550.2026.11547413',
            linkType: 'DOI'
          }
        ]
      },
      {
        id: 'cur-multimodal-finance',
        shortLabel: 'Multimodal Stock Forecasting & Prospect Theory',
        title: 'Multimodal Fusion for Crisis Stock Forecasting & Behavioral Finance (Prospect Theory)',
        icon: 'fa-chart-line',
        accent: 'emerald',
        scholars: [
          'Aaditya Chandra Tiwary (PhD Scholar, DoMS)',
          'Dr. Manisha Yadav (PhD 2021-2025, now Faculty at IIT Jodhpur)',
          'S. K. Morankar',
          'Prof. Abhinava Tripathi (IIT Kanpur)'
        ],
        grant: 'Joint Supervision with IIT Kanpur & Algorithmic Decision Making Track',
        details: 'Investigating multimodal data fusion for developed and emerging stock market forecasting under crisis, decoding internet signals during global shocks, and modeling prospect theory execution via quantile regression and structural break analysis.',
        outcomes: [
          {
            citation: 'Tiwary, A. C., & Dixit, G. (2026)',
            title: 'Resilience Across the Data Divide: A Design-Oriented Systematic Review of Multimodal Fusion for Developed and Emerging Stock Market Forecasting under Crisis',
            venue: 'PACIS 2026 Proceedings, Paper 19',
            link: 'https://aisel.aisnet.org/pacis2026/ai_ml/ai_ml/19',
            linkType: 'AISeL'
          },
          {
            citation: 'Yadav, M., & Dixit, G. (2025)',
            title: 'Asymmetric dependence between the prospect theory value and stock returns in India: a quantile regression approach',
            venue: 'Managerial Finance, 51(2), 236-261',
            link: 'https://doi.org/10.1108/MF-10-2023-0628',
            linkType: 'DOI'
          },
          {
            citation: 'Dixit, G., & Morankar, S. K. (2025)',
            title: 'Decoding Internet Signals for Stock Market Movement: A Machine Learning Study on Pharma Sector During Covid-19',
            venue: 'Proceedings of the 2024 Pre-ICIS SIGDSA Symposium, Paper 24',
            link: 'https://doi.org/10.1007/978-3-031-72234-9_13',
            linkType: 'DOI'
          }
        ]
      },
      {
        id: 'cur-genai-rural',
        shortLabel: 'Generative AI in Rural Uplands & Telecenters',
        title: 'Generative AI Interventions in Rural Uplands, Rural Education & Proxy ICT E-Governance',
        icon: 'fa-seedling',
        accent: 'rose',
        scholars: [
          'Dr. Pramod Kumar Patnaik (PhD 2021–2026, now Faculty at JGBS)',
          'Dr. Kunal Rao (IIM Bodh Gaya)',
          'Prof. Richard Heeks (The University of Manchester, UK)',
          'Prof. Ajay Kumar (Emlyon Business School, France)',
          'Prof. Thanos Papadopoulos (University of Kent, UK)'
        ],
        grant: 'Generative AI Intervention in Rural Uplands: An Action Research Study, Funded by The University of Manchester, UK (Sep 2025, PI: Dr. Gaurav Dixit)',
        details: 'Action research and socio-technical studies on Generative AI artefacts in rural educational classrooms and uplands, alongside strategies to overcome the digital divide and reduce proxy ICT usage in Indian rural telecenters.',
        outcomes: [
          {
            citation: 'Patnaik, P. K., Dixit, G., Kumar, A., & Papadopoulos, T. (2025)',
            title: "Digital Divide Among Marginalized Rural Communities in Developing Countries: Strategies and Practices to Reduce the 'Proxy Use of ICTs' for Rural e-Governance",
            venue: 'Communications of the Association for Information Systems (CAIS), Vol. 58',
            link: 'https://aisel.aisnet.org/cais/vol58/iss1/2',
            linkType: 'AISeL'
          },
          {
            citation: 'Patnaik, P. K., Rao, K., & Dixit, G. (2025)',
            title: 'Unveiling Enablers to the Use of Generative AI Artefacts in Rural Educational Settings: A Socio-Technical Perspective',
            venue: 'Communications of the Association for Information Systems (CAIS), Vol. 58',
            link: 'https://aisel.aisnet.org/cais/vol58/iss1/8',
            linkType: 'AISeL'
          },
          {
            citation: 'Patnaik, P. K., & Dixit, G. (2023)',
            title: 'Understanding potential risk factors in the use of ICTs for rural e-governance',
            venue: 'IFIP Joint Working Conference on the Future of Digital Work, pp. 92-109',
            link: 'https://doi.org/10.1007/978-3-031-50154-8_9',
            linkType: 'DOI'
          }
        ]
      },
      {
        id: 'cur-digital-credentialing',
        shortLabel: 'Digital Credentialing & IT Innovation Policy',
        title: 'Digital Credentialing, IT Policy & Business Innovation Ecosystems',
        icon: 'fa-certificate',
        accent: 'blue',
        scholars: [
          'Faye Simon (Dual Doctoral Scholar, AIT Thailand & IITR)',
          'Dr. Kunal Rao',
          'Akhilesh Das (PhD Scholar)',
          'Shelly Garg (IITR@175 Scholar)',
          'Shivam Soni (PhD Scholar)',
          'Prof. Sunil Mithas (USF, USA)',
          'Prof. Chutiporn Anutariya (AIT, Thailand)'
        ],
        grant: 'How Information Technology and Management Initiatives Facilitate Business Innovation, Funded by DST VAIBHAV, Govt. of India (Apr 2024, PI, Outlay: 72.225 Lacs) & AIT-IITR Dual Doctoral Program',
        details: 'Developing global digital credentialing frameworks for continuing professional development and analyzing how government policies and IT management initiatives shape IT spending and business innovation in startups and incumbents.',
        outcomes: [
          {
            citation: 'Simon, P. F. T., Anutariya, C., & Dixit, G. (2025)',
            title: 'Digital Credentialing Framework for Continuing Professional Development: Global Practices and Integration',
            venue: 'International Conference on Electronic Government and the Information Systems Perspective (EGOVIS 2025)',
            link: 'https://doi.org/10.1007/978-3-032-02225-7_3',
            linkType: 'DOI'
          },
          {
            citation: 'Dixit, G., Rao, K., & Mithas, S. (2025)',
            title: 'How Government Policies Shape IT Spending and Innovation in Startups and Incumbents in India',
            venue: 'PACIS 2025 Proceedings, Paper 8',
            link: 'https://aisel.aisnet.org/pacis2025/transform/transform/8',
            linkType: 'AISeL'
          }
        ]
      },
      {
        id: 'cur-space-weather-cnn',
        shortLabel: 'Space Weather & Ionospheric Plasma CNNs',
        title: 'Deep Learning for Ionospheric Plasma & Space Weather All-Sky Airglow Imagery',
        icon: 'fa-satellite',
        accent: 'indigo',
        scholars: [
          'S. Chakrabarti, J. Upadhyaya, R. Rathi, V. Yadav, D. Patgiri, S. Mondal',
          'Prof. Sumanta Sarkhel (Physics, IIT Roorkee)',
          'Prof. M. V. Sunilkrishna (Physics, IIT Roorkee)'
        ],
        grant: 'Investigation and characterization of ionospheric plasma using Artificial Intelligence and Machine Learning, Funded by SERB, DST (Mar 2022, Co-PI, Outlay: 29.99 Lacs)',
        details: 'Designing convolutional neural networks and deep learning object detection frameworks for automated localization, classification, and characterization of mid-latitude ionospheric plasma structures and annular LED patterns in all-sky airglow imagery.',
        outcomes: [
          {
            citation: 'Chakrabarti, S., Upadhyaya, J., Rathi, R., Yadav, V., Patgiri, D., Dixit, G., Krishna, M. S., & Sarkhel, S. (2025)',
            title: 'Automatic Localization and Characterization of Mid-latitude Ionospheric Plasma Structures from All-sky Airglow Images using a Deep Learning Framework',
            venue: 'Advances in Space Research, 76(4), 2302-2314',
            link: 'https://doi.org/10.1016/j.asr.2025.05.086',
            linkType: 'DOI'
          },
          {
            citation: 'Chakrabarti, S., Patgiri, D., Rathi, R., Dixit, G., Krishna, M. S., & Sarkhel, S. (2024)',
            title: "Optimizing a Deep Learning Framework for Accurate Detection of the Earth's Ionospheric Plasma Structures from All-sky Airglow Images",
            venue: 'Advances in Space Research, 73(12), 5990-6005',
            link: 'https://doi.org/10.1016/j.asr.2024.03.014',
            linkType: 'DOI'
          }
        ]
      }
    ];

    const pastResearchData = [
      {
        id: 'past-analytics-value',
        shortLabel: 'Business Value of Analytics in Decision Making',
        title: 'Business Value of Analytics Across Managerial & Analyst Decision Phases',
        icon: 'fa-chart-pie',
        accent: 'teal',
        scholars: [
          'Dr. Sakshi Srivastava (PhD 2017-2024, now Faculty at Christ University)'
        ],
        grant: 'Setting up Fuzzy Logix Big Data & Analytics Lab, Funded by Fuzzy Logix (Sep 2016, PI: Dr. Gaurav Dixit, Outlay: 7.80 Lacs)',
        details: 'Empirical and experimental investigations into how descriptive and predictive analytics create business value across different phases of decision-making for both business analysts and managers.',
        outcomes: [
          {
            citation: 'Srivastava, S., & Dixit, G. (2025)',
            title: 'Value of Analytics for Decision-Making: Role of Managers and Analysts',
            venue: 'Journal of Computer Information Systems (JCIS), 65(1), 28-46',
            link: 'https://doi.org/10.1080/08874417.2023.2255557',
            linkType: 'DOI'
          },
          {
            citation: 'Srivastava, S., & Dixit, G. (2024)',
            title: 'AI and Big Data Practices in Developing Country Context: A Socio-Technical Perspective',
            venue: 'IFIP WG 9.4 / Advances in ICT, pp. 77-91',
            link: 'https://doi.org/10.1007/978-3-031-50188-3_6',
            linkType: 'DOI'
          },
          {
            citation: 'Srivastava, S., & Dixit, G. (2023)',
            title: "E-channel Selection Intention: Role of Users' IT Characteristics and IT Usage",
            venue: 'IFIP I3E 2023 (LNCS), pp. 145-156',
            link: 'https://doi.org/10.1007/978-3-031-50040-4_12',
            linkType: 'DOI'
          },
          {
            citation: 'Srivastava, S., & Dixit, G. (2018)',
            title: 'Impact of business analytics on organizational outcomes: Role of analytical insights and usage',
            venue: 'ICIS 2018 Proceedings',
            link: 'https://aisel.aisnet.org/icis2018/datascience/Presentations/10',
            linkType: 'AISeL'
          }
        ]
      },
      {
        id: 'past-himalayan-bioenergy',
        shortLabel: 'Himalayan Bio-Energy & Rural Mobile Platforms',
        title: 'Localized Socio-Economic Platform Ecosystems & Himalayan Pine Bio-Energy',
        icon: 'fa-mountain-sun',
        accent: 'emerald',
        scholars: [
          'Dr. K. K. Joshi, Dr. A. Sengar, Dr. A. Dwivedi',
          'Prof. Vinay Sharma (DoMS, IIT Roorkee)',
          'Prof. Rajat Agarwal (DoMS, IIT Roorkee)'
        ],
        grant: 'Socio-Economic Value Creation through Forest Bio-Residue Based Energy Generation, Funded by NMHS (Jan 2019, Co-PI, Outlay: 90.80 Lacs)',
        details: 'Building localized mobile platform ecosystems to connect Himalayan forest villagers with markets and evaluating enablers and barriers to pine-needle bio-residue renewable energy generation aligned with the UN SDGs.',
        outcomes: [
          {
            citation: 'Dixit, G. (2023)',
            title: 'How do localized socio-economic platform ecosystems emerge? A mobile platform to bring the market to villagers in Himalayan forests',
            venue: 'Information Technology for Development, 29(2-3), 205-227',
            link: 'https://doi.org/10.1080/02681102.2022.2131702',
            linkType: 'DOI'
          },
          {
            citation: 'Sengar, A., Sharma, V., Joshi, K., Agrawal, R., Dwivedi, A., Dwivedi, P., Sharma, P. K., Dixit, G., Goswami, G., & Barthwal, M. (2022)',
            title: 'A fuzzy Analytic Hierarchy Process based analysis for prioritization of enablers to pine briquettes based energy generation in alignment with the UN SDGs: Evidence from India',
            venue: 'Biomass and Bioenergy, 165, 106580',
            link: 'https://doi.org/10.1016/j.biombioe.2022.106580',
            linkType: 'DOI'
          },
          {
            citation: 'Dwivedi, A., Dwivedi, P., Joshi, K., Sharma, V., Sengar, A., Agrawal, R., Sharma, P. K., Dixit, G., & Barthwal, M. (2022)',
            title: "Local leader's impact on adoption of renewable energy generation technology by rural communities in the Himalayan region",
            venue: 'Journal of Cleaner Production, 352, 131479',
            link: 'https://doi.org/10.1016/j.jclepro.2022.131479',
            linkType: 'DOI'
          },
          {
            citation: 'Sengar, A., Sharma, V., Agrawal, R., Dwivedi, A., Dwivedi, P., Joshi, K., Dixit, G., Sharma, P. K., & Barthwal, M. (2020)',
            title: 'Prioritization of barriers to energy generation using pine needles to mitigate climate change: Evidence from India',
            venue: 'Journal of Cleaner Production, 275, 123840',
            link: 'https://doi.org/10.1016/j.jclepro.2020.123840',
            linkType: 'DOI'
          }
        ]
      },
      {
        id: 'past-weee-ewaste',
        shortLabel: 'WEEE E-Waste & Green Partner Evaluation',
        title: 'Sustainable WEEE E-Waste Management & Circular Economy Decision Models',
        icon: 'fa-recycle',
        accent: 'amber',
        scholars: [
          'Dr. Ashwani Kumar (PhD 2015-2019, now Faculty at IIM Rohtak)',
          'Dr. Vineet Kaushik, Dr. H. Gupta, Dr. S. Luthra'
        ],
        grant: 'Sustainability & Multi-Criteria Decision Making (MCDM) Doctoral Research Stream',
        details: 'Developing hybrid Multi-Criteria Decision Making (ISM-DEMATEL, Fuzzy AHP, BWM) frameworks for evaluating green recycling partners, plant location selection, and barriers to Waste Electrical and Electronic Equipment (WEEE) management in India.',
        outcomes: [
          {
            citation: 'Kumar, A., Wasan, P., Luthra, S., & Dixit, G. (2020)',
            title: 'Development of a framework for selecting a sustainable location of waste electrical and electronic equipment recycling plant in emerging economies',
            venue: 'Journal of Cleaner Production, 277, 122645',
            link: 'https://doi.org/10.1016/j.jclepro.2020.122645',
            linkType: 'DOI'
          },
          {
            citation: 'Kumar, A., & Dixit, G. (2019)',
            title: 'A novel hybrid MCDM framework for WEEE recycling partner evaluation on the basis of green competencies',
            venue: 'Journal of Cleaner Production, 241, 118017',
            link: 'https://doi.org/10.1016/j.jclepro.2019.118017',
            linkType: 'DOI'
          },
          {
            citation: 'Kumar, A., & Dixit, G. (2018)',
            title: 'An analysis of barriers affecting the implementation of e-waste management practices in India: A novel ISM-DEMATEL approach',
            venue: 'Sustainable Production and Consumption, 14, 36-52',
            link: 'https://doi.org/10.1016/j.spc.2018.01.002',
            linkType: 'DOI'
          },
          {
            citation: 'Kumar, A., & Dixit, G. (2018)',
            title: 'Evaluating critical barriers to implementation of WEEE management using DEMATEL approach',
            venue: 'Resources, Conservation and Recycling, 131, 101-121',
            link: 'https://doi.org/10.1016/j.resconrec.2017.12.024',
            linkType: 'DOI'
          }
        ]
      },
      {
        id: 'past-fashion-retail',
        shortLabel: 'Online Fashion Retail & Return Modeling',
        title: 'Online Fashion Retail (OFR) Supplier Selection & Apparel Return Modeling',
        icon: 'fa-bag-shopping',
        accent: 'rose',
        scholars: [
          'Dr. Vineet Kaushik (JGBS)',
          'Dr. Ashwani Kumar (IIM Rohtak)',
          'Dr. Himanshu Gupta'
        ],
        grant: 'E-Commerce & Retail Decision Analytics Stream (with NIFT Bangalore Faculty Experience)',
        details: 'Modeling and prioritizing product return factors in online apparel retail and formulating hybrid decision models for supplier selection in Online Fashion Retail (OFR).',
        outcomes: [
          {
            citation: 'Kaushik, V., Kumar, A., Gupta, H., & Dixit, G. (2022)',
            title: 'A hybrid decision model for supplier selection in Online Fashion Retail (OFR)',
            venue: 'International Journal of Logistics Research and Applications, 25(1), 27-51',
            link: 'https://doi.org/10.1080/13675567.2020.1791810',
            linkType: 'DOI'
          },
          {
            citation: 'Kaushik, V., Kumar, A., Gupta, H., & Dixit, G. (2020)',
            title: 'Modelling and prioritizing the factors for online apparel return using BWM approach',
            venue: 'Electronic Commerce Research, 22, 843-873',
            link: 'https://doi.org/10.1007/s10660-020-09406-3',
            linkType: 'DOI'
          }
        ]
      },
      {
        id: 'past-mcommerce-it',
        shortLabel: 'M-Commerce, Smart Cities & IT Investments',
        title: 'M-Commerce, Cognitive Engagement, Smart Cities & Firm IT Investments',
        icon: 'fa-mobile-screen-button',
        accent: 'cyan',
        scholars: [
          'Dr. Himanshu Agarwal (PhD 2015-2022, now Manager at MSTC Ltd., Ministry of Steel)',
          'Prof. P. Panigrahi (IIM Indore)'
        ],
        grant: 'M-Commerce, M-Governance, and Internet of Things: Research on Current Issues and Future Directions, Funded by FIG, IIT Roorkee (Jul 2015, PI, Outlay: 9.80 Lacs)',
        details: 'Foundational research on multilingual social movements, user cognitive engagement with information technology, M-commerce adoption in smart cities, and determinants of IT investments by Indian firms.',
        outcomes: [
          {
            citation: 'Agarwal, H., & Dixit, G. (2020)',
            title: "Information technology usage and cognitive engagement: understanding effects on users' cognitive processes",
            venue: 'IFIP TDIT 2020, pp. 74-85',
            link: 'https://doi.org/10.1007/978-3-030-64861-9_7',
            linkType: 'DOI'
          },
          {
            citation: 'Agarwal, H., & Dixit, G. (2017)',
            title: 'M-commerce in smart cities: changing mindsets of individuals, organizations, and society',
            venue: 'In Advances in Smart Cities, CRC Press',
            link: 'https://doi.org/10.1201/9781315156040-13',
            linkType: 'DOI'
          },
          {
            citation: 'Dixit, G., & Panigrahi, P. (2014)',
            title: 'Information technology impact and role of firm age and export activity: An emerging economy context',
            venue: 'Journal of Global Information Technology Management, 17(3), 169-187',
            link: 'https://doi.org/10.1080/1097198X.2014.951295',
            linkType: 'DOI'
          },
          {
            citation: 'Dixit, G., & Panigrahi, P. (2013)',
            title: 'Investigating determinants of information technology investments by Indian firms',
            venue: 'Journal of Information Technology Management, 24(3), 13',
            link: 'http://home.thejitm.org/XXIV-3/article2.pdf',
            linkType: 'PDF'
          }
        ]
      }
    ];

    const allResearchTracks = [...currentResearchData, ...pastResearchData];

// Research track cards and details modal.

    function buildResearchCardHTML(item, isCurrent) {
      const palette = {
        teal: {
          banner: 'from-teal-50 via-cyan-50 to-slate-100 dark:from-teal-950/70 dark:via-slate-900 dark:to-slate-900',
          iconWrap: 'bg-teal-600 text-white shadow-teal-500/20',
          badge: 'bg-teal-50 dark:bg-teal-950/80 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800'
        },
        cyan: {
          banner: 'from-cyan-50 via-sky-50 to-slate-100 dark:from-cyan-950/70 dark:via-slate-900 dark:to-slate-900',
          iconWrap: 'bg-cyan-600 text-white shadow-cyan-500/20',
          badge: 'bg-cyan-50 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800'
        },
        amber: {
          banner: 'from-amber-50 via-orange-50 to-slate-100 dark:from-amber-950/70 dark:via-slate-900 dark:to-slate-900',
          iconWrap: 'bg-amber-600 text-white shadow-amber-500/20',
          badge: 'bg-amber-50 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800'
        },
        purple: {
          banner: 'from-purple-50 via-fuchsia-50 to-slate-100 dark:from-purple-950/70 dark:via-slate-900 dark:to-slate-900',
          iconWrap: 'bg-purple-600 text-white shadow-purple-500/20',
          badge: 'bg-purple-50 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800'
        },
        emerald: {
          banner: 'from-emerald-50 via-teal-50 to-slate-100 dark:from-emerald-950/70 dark:via-slate-900 dark:to-slate-900',
          iconWrap: 'bg-emerald-600 text-white shadow-emerald-500/20',
          badge: 'bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
        },
        rose: {
          banner: 'from-rose-50 via-pink-50 to-slate-100 dark:from-rose-950/70 dark:via-slate-900 dark:to-slate-900',
          iconWrap: 'bg-rose-600 text-white shadow-rose-500/20',
          badge: 'bg-rose-50 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800'
        },
        blue: {
          banner: 'from-blue-50 via-sky-50 to-slate-100 dark:from-blue-950/70 dark:via-slate-900 dark:to-slate-900',
          iconWrap: 'bg-blue-600 text-white shadow-blue-500/20',
          badge: 'bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800'
        },
        indigo: {
          banner: 'from-indigo-50 via-blue-50 to-slate-100 dark:from-indigo-950/70 dark:via-slate-900 dark:to-slate-900',
          iconWrap: 'bg-indigo-600 text-white shadow-indigo-500/20',
          badge: 'bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800'
        }
      };

      const style = palette[item.accent] || palette.teal;

      return `
        <div onclick="openResearchModal('${item.id}')" class="group cursor-pointer bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl hover:border-teal-500/50 card-hover flex flex-col justify-between">
          <div>
            <!-- Clickable Visual Banner (Modeled on balarsgroup.github.io Image Tile) -->
            <div class="relative h-40 bg-gradient-to-br ${style.banner} border-b border-slate-200/70 dark:border-slate-800 p-4 flex flex-col items-center justify-center text-center overflow-hidden">
              <div class="absolute inset-0 grid-pattern opacity-60 pointer-events-none"></div>
              <div class="relative z-10 w-14 h-14 rounded-2xl ${style.iconWrap} shadow-lg flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                <i class="fa-solid ${item.icon}"></i>
              </div>
              <span class="relative z-10 mt-2.5 text-xs font-display font-bold text-slate-800 dark:text-slate-100 px-2 line-clamp-1">
                ${item.shortLabel}
              </span>
              <span class="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold border ${style.badge}">
                ${item.outcomes.length} ${item.outcomes.length === 1 ? 'Outcome' : 'Outcomes'}
              </span>
            </div>

            <!-- Card Body: Title, Associated Scholars & Grant Match -->
            <div class="p-5 space-y-3">
              <h3 class="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors leading-snug">
                ${item.title}
              </h3>

              <div>
                <div class="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">Associated Researchers</div>
                <p class="text-xs text-slate-600 dark:text-slate-300 mt-0.5 line-clamp-2 leading-relaxed">
                  ${item.scholars.join(' ')}
                </p>
              </div>

              <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/70">
                <div class="text-[10px] font-mono uppercase tracking-wider text-teal-700 dark:text-teal-400 font-semibold flex items-center gap-1">
                  <i class="fa-solid fa-award text-[10px]"></i> Research Grant / Collab
                </div>
                <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5 line-clamp-2 leading-snug">
                  ${item.grant}
                </p>
              </div>
            </div>
          </div>

          <!-- Footer Click Prompt -->
          <div class="px-5 py-3 bg-slate-50/70 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-teal-600 dark:text-teal-400">
            <span>Click for Papers, DOIs &amp; Details</span>
            <i class="fa-solid fa-arrow-up-right-from-square text-[10px] group-hover:translate-x-0.5 transition-transform"></i>
          </div>
        </div>
      `;
    }

    function renderResearch() {
      const currentGrid = document.getElementById('currentResearchGrid');
      const pastGrid = document.getElementById('pastResearchGrid');
      if (currentGrid) {
        currentGrid.innerHTML = currentResearchData.map(item => buildResearchCardHTML(item, true)).join('');
      }
      if (pastGrid) {
        pastGrid.innerHTML = pastResearchData.map(item => buildResearchCardHTML(item, false)).join('');
      }
    }

    function openResearchModal(id) {
      const domain = allResearchTracks.find(d => d.id === id);
      if (!domain) return;
      const isCurrent = currentResearchData.some(d => d.id === id);
      const modal = document.getElementById('researchModal');
      const content = document.getElementById('researchModalContent');

      content.innerHTML = `
        <div class="space-y-5">
          <div>
            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider font-semibold ${isCurrent ? 'bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800' : 'bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800'}">
              <i class="fa-solid ${domain.icon}"></i>
              ${isCurrent ? 'Current Research Stream' : 'Past Research Stream'} &bull; ${domain.shortLabel}
            </span>
            <h3 class="font-display font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white mt-2.5 pr-8 leading-snug">
              ${domain.title}
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
              ${domain.details}
            </p>
          </div>

          <!-- Associated Research Scholars & Collaborators -->
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <div class="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-2 flex items-center gap-1.5">
              <i class="fa-solid fa-user-graduate text-teal-600 dark:text-teal-400"></i>
              Associated Lab Scholars &amp; Collaborators
            </div>
            <div class="flex flex-wrap gap-1.5">
              ${domain.scholars.map(s => `<span class="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-800 dark:text-slate-200">${s}</span>`).join('')}
            </div>
          </div>

          <!-- Research Research Grant / Collaboration -->
          <div class="p-4 rounded-xl bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200/80 dark:border-teal-800/60">
            <div class="text-[11px] font-mono uppercase tracking-wider text-teal-800 dark:text-teal-300 font-semibold mb-1 flex items-center gap-1.5">
              <i class="fa-solid fa-hand-holding-dollar text-teal-600 dark:text-teal-400"></i>
              Research Grant / Collaboration
            </div>
            <p class="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
              ${domain.grant}
            </p>
          </div>

          <!-- Research Outcomes (Papers & DOIs) -->
          <div>
            <div class="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-3 flex items-center justify-between">
              <span><i class="fa-solid fa-book-open text-teal-600 dark:text-teal-400 mr-1.5"></i> Representative Research Outcomes (${domain.outcomes.length} Papers)</span>
            </div>
            <div class="space-y-3">
              ${domain.outcomes.map(o => `
                <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div class="space-y-1">
                    <div class="text-xs font-semibold text-teal-700 dark:text-teal-400 font-mono">${o.citation}</div>
                    <h4 class="font-display font-bold text-xs sm:text-sm text-slate-900 dark:text-white leading-snug">${o.title}</h4>
                    <p class="text-xs text-slate-500 dark:text-slate-400 italic">${o.venue}</p>
                  </div>
                  ${o.link ? `
                    <a href="${o.link}" target="_blank" rel="noopener noreferrer" class="shrink-0 self-start sm:self-center inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white text-xs font-mono font-semibold transition-colors shadow-sm">
                      <span>${o.linkType || 'Link'}</span>
                      <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                    </a>
                  ` : ''}
                </div>
              `).join('')}
            </div>
          </div>

          <div class="pt-2 flex justify-end">
            <button onclick="closeResearchModal()" class="px-5 py-2 rounded-xl bg-slate-900 dark:bg-slate-700 hover:bg-teal-600 text-white text-xs font-semibold transition-colors">
              Close Details
            </button>
          </div>
        </div>
      `;
      modal.classList.remove('hidden');
    }

    function closeResearchModal() {
      document.getElementById('researchModal').classList.add('hidden');
    }
