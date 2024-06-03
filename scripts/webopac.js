// const books = require('./ERESOURCES.js')
// console.log(books)

const BOOKS = [
    {
        "id": 1,
        "Publisher": "American Association for the Advancement of Science ( AAAS)",
        "Title": "Science Online",
        "Hyperlink": "https:\/\/www.sciencemag.org\/"
    },
    {
        "id": 2,
        "Publisher": "American Association for the Advancement of Science (AAAS)",
        "Title": "Science Signaling    ",
        "Hyperlink": "http:\/\/stke.sciencemag.org\/"
    },
    {
        "id": 3,
        "Publisher": "Association for Computing Machinery (ACM)",
        "Title": "ACM Digital Library",
        "Hyperlink": "https:\/\/dl.acm.org\/"
    },
    {
        "id": 4,
        "Publisher": "American Chemical Society (ACS)",
        "Title": "American Chemical Society ACS Web Edition Package",
        "Hyperlink": "https:\/\/pubs.acs.org\/action\/showPublications?pubType=journal"
    },
    {
        "id": 5,
        "Publisher": "American Institute of Physics (AIP)",
        "Title": "AIP ",
        "Hyperlink": "https:\/\/www.aip.org\/"
    },
    {
        "id": 6,
        "Publisher": "Am. Ass. Of Immunologists",
        "Title": "Journal of Immunology",
        "Hyperlink": "http:\/\/www.jimmunol.org\/"
    },
    {
        "id": 7,
        "Publisher": "American Association for Cancer Research (AACR)",
        "Title": "Molecular Cancer Research",
        "Hyperlink": "http:\/\/mcr.aacrjournals.org\/"
    },
    {
        "id": 8,
        "Publisher": "American Association for Cancer Research (AACR)",
        "Title": "Cancer Research",
        "Hyperlink": "http:\/\/cancerres.aacrjournals.org\/"
    },
    {
        "id": 9,
        "Publisher": "American Association for Cancer Research (AACR)",
        "Title": "Clinical Cancer Research",
        "Hyperlink": "http:\/\/clincancerres.aacrjournals.org\/"
    },
    {
        "id": 10,
        "Publisher": "American Association for Cancer Research (AACR)",
        "Title": "Cancer Epidemiology, Biomarkers & Prevention",
        "Hyperlink": "https:\/\/cebp.aacrjournals.org\/"
    },
    {
        "id": 11,
        "Publisher": "American Association for Cancer Research (AACR)",
        "Title": "Cancer Immunology Research",
        "Hyperlink": "https:\/\/cancerimmunolres.aacrjournals.org\/"
    },
    {
        "id": 12,
        "Publisher": "American Association for Cancer Research (AACR)",
        "Title": "Cancer Prevention Research",
        "Hyperlink": "https:\/\/cancerpreventionresearch.aacrjournals.org\/front"
    },
    {
        "id": 13,
        "Publisher": "American Association for Cancer Research (AACR)",
        "Title": "Molecular Cancer Therapeutics",
        "Hyperlink": "https:\/\/mct.aacrjournals.org\/"
    },
    {
        "id": 14,
        "Publisher": "American Association for Cancer Research (AACR)",
        "Title": "Cancer Discovery",
        "Hyperlink": "https:\/\/cancerdiscovery.aacrjournals.org\/"
    },
    {
        "id": 15,
        "Publisher": "American Association for Cancer Research (AACR)",
        "Title": "Blood Cancer Discovery",
        "Hyperlink": "https:\/\/aacrjournals.org\/bloodcancerdiscov"
    },
    {
        "id": 16,
        "Publisher": "American Mathematical Society (AMS)",
        "Title": "Jl. Of the Am. Mathematical Soc.",
        "Hyperlink": "https:\/\/www.ams.org\/publications\/journals\/journalsframework\/jams"
    },
    {
        "id": 17,
        "Publisher": "American Mathematical Society (AMS)",
        "Title": "Mathematics of Computation ",
        "Hyperlink": "https:\/\/www.ams.org\/publications\/journals\/journalsframework\/mcom"
    },
    {
        "id": 18,
        "Publisher": "American Mathematical Society (AMS)",
        "Title": "Proc. Of the Am. Math. Soc.",
        "Hyperlink": "https:\/\/www.ams.org\/publications\/journals\/journalsframework\/proc"
    },
    {
        "id": 19,
        "Publisher": "American Mathematical Society (AMS)",
        "Title": "St. Petersberg Mathematical Jl.",
        "Hyperlink": "http:\/\/www.ams.org\/journals\/spmj\/2018-29-05\/S1061-0022-2018-01518-1\/home.html"
    },
    {
        "id": 20,
        "Publisher": "American Mathematical Society (AMS)",
        "Title": "Theory of Probability & Math. Statistical",
        "Hyperlink": "https:\/\/www.ams.org\/publications\/journals\/journalsframework\/tpms"
    },
    {
        "id": 21,
        "Publisher": "American Mathematical Society (AMS)",
        "Title": "Trans. Of the American Mathematical Soc.   ",
        "Hyperlink": "https:\/\/www.ams.org\/publications\/journals\/journalsframework\/tran"
    },
    {
        "id": 22,
        "Publisher": "American Mathematical Society (AMS)",
        "Title": "Trans. of the Moscow Mathematical Soc.",
        "Hyperlink": "https:\/\/www.ams.org\/journals\/mosc\/all_issues.html"
    },
    {
        "id": 23,
        "Publisher": "American Mathematical Society (AMS)",
        "Title": "Representation Theory ",
        "Hyperlink": "https:\/\/www.ams.org\/publications\/journals\/journalsframework\/ert"
    },
    {
        "id": 24,
        "Publisher": "American Mathematical Society (AMS)",
        "Title": "Conformal Geometry & Dynamics ",
        "Hyperlink": "https:\/\/www.ams.org\/publications\/journals\/journalsframework\/ecgd"
    },
    {
        "id": 25,
        "Publisher": "American Mathematical Society (AMS)",
        "Title": "Memoirs of the American Mathematical Soc. ",
        "Hyperlink": "http:\/\/www.ams.org\/publications\/ebooks\/memoirs"
    },
    {
        "id": 26,
        "Publisher": "American Mathematical Society (AMS)",
        "Title": "Bulletin of the AMS ",
        "Hyperlink": "https:\/\/www.ams.org\/publications\/journals\/journalsframework\/bull"
    },
    {
        "id": 27,
        "Publisher": "American Mathematical Society (AMS)",
        "Title": "Notices of the AMS ",
        "Hyperlink": "https:\/\/www.ams.org\/notices"
    },
    {
        "id": 28,
        "Publisher": "American Mathematical Society (AMS)",
        "Title": "Proceedings of the American Mathematical Society, Series B",
        "Hyperlink": "https:\/\/www.ams.org\/publications\/journals\/journalsframework\/aboutbproc"
    },
    {
        "id": 29,
        "Publisher": "American Mathematical Society (AMS)",
        "Title": "Sugaku Expositions",
        "Hyperlink": "https:\/\/www.ams.org\/publications\/journals\/journalsframework\/aboutsuga"
    },
    {
        "id": 30,
        "Publisher": "American Mathematical Society (AMS)",
        "Title": "Transactions of the American Mathematical Society, Series B",
        "Hyperlink": "https:\/\/www.ams.org\/publications\/journals\/journalsframework\/btran"
    },
    {
        "id": 31,
        "Publisher": "American Meteorological Society",
        "Title": "Journal of Climate",
        "Hyperlink": "https:\/\/www.ametsoc.org\/index.cfm\/ams\/publications\/journals\/journal-of-climate\/"
    },
    {
        "id": 32,
        "Publisher": "American Physical Society (APS)",
        "Title": "Physical Review Materials",
        "Hyperlink": "https:\/\/journals.aps.org\/prmaterials\/"
    },
    {
        "id": 33,
        "Publisher": "American Soc. For Cell Biology ",
        "Title": "Molecular Biology of the Cell ",
        "Hyperlink": "https:\/\/www.molbiolcell.org\/"
    },
    {
        "id": 34,
        "Publisher": "American Soc. For Microbiology",
        "Title": "mSphere                                                         ",
        "Hyperlink": "https:\/\/msphere.asm.org\/"
    },
    {
        "id": 35,
        "Publisher": "American Soc. For Microbiology",
        "Title": "Journal of Bacteriology                                                 ",
        "Hyperlink": "https:\/\/jb.asm.org\/"
    },
    {
        "id": 36,
        "Publisher": "American Soc. For Microbiology",
        "Title": "Microbiology and Molecular Biology Reviews                  ",
        "Hyperlink": "https:\/\/mmbr.asm.org\/"
    },
    {
        "id": 37,
        "Publisher": "American Soc. For Microbiology",
        "Title": "Microbiology Resource Announcements",
        "Hyperlink": "https:\/\/journals.asm.org\/journal\/mra"
    },
    {
        "id": 38,
        "Publisher": "American Soc. For Microbiology",
        "Title": "Antimicrobial Agents and Chemotherapy                           ",
        "Hyperlink": "https:\/\/aac.asm.org\/"
    },
    {
        "id": 39,
        "Publisher": "American Soc. For Microbiology",
        "Title": "Applied and Environmental Microbiology                          ",
        "Hyperlink": "https:\/\/aem.asm.org\/"
    },
    {
        "id": 40,
        "Publisher": "American Soc. For Microbiology",
        "Title": "Clinical Microbiology Reviews                                                 ",
        "Hyperlink": "https:\/\/cmr.asm.org\/"
    },
    {
        "id": 41,
        "Publisher": "American Soc. For Microbiology",
        "Title": "Journal of Clinical Microbiology                                     ",
        "Hyperlink": "https:\/\/jcm.asm.org\/"
    },
    {
        "id": 42,
        "Publisher": "American Soc. For Microbiology",
        "Title": "Journal of Virology                                                        ",
        "Hyperlink": "https:\/\/jvi.asm.org\/"
    },
    {
        "id": 43,
        "Publisher": "American Soc. For Microbiology",
        "Title": "mBio                                                                                     ",
        "Hyperlink": "https:\/\/mbio.asm.org\/"
    },
    {
        "id": 44,
        "Publisher": "American Soc. For Microbiology",
        "Title": "Infection and Immunity                                          ",
        "Hyperlink": "https:\/\/iai.asm.org\/"
    },
    {
        "id": 45,
        "Publisher": "American Soc. For Microbiology",
        "Title": "Ecosal Plus",
        "Hyperlink": "http:\/\/www.asmscience.org\/content\/journal\/ecosalplus"
    },
    {
        "id": 46,
        "Publisher": "American Soc. For Microbiology",
        "Title": "Journal of Microbiology & Biology Education",
        "Hyperlink": "http:\/\/www.asmscience.org\/content\/journal\/jmbe"
    },
    {
        "id": 47,
        "Publisher": "American Soc. For Microbiology",
        "Title": "Microbiology Spectrum",
        "Hyperlink": "http:\/\/www.asmscience.org\/microbiologyspectrum"
    },
    {
        "id": 48,
        "Publisher": "American Soc. For Microbiology",
        "Title": "mSystems",
        "Hyperlink": "https:\/\/msystems.asm.org\/"
    },
    {
        "id": 49,
        "Publisher": "American Soc. For Plant Biologists\/OUP",
        "Title": "Plant Cell                                                                            ",
        "Hyperlink": "http:\/\/www.plantcell.org\/"
    },
    {
        "id": 50,
        "Publisher": "American Soc. For Plant Biologists\/OUP",
        "Title": "Plant Physiology                                                              ",
        "Hyperlink": "http:\/\/www.plantphysiol.org\/"
    },
    {
        "id": 51,
        "Publisher": "American Mathematical Society (AMS)",
        "Title": "MathSciNet DATABASE                             ",
        "Hyperlink": "https:\/\/mathscinet.ams.org\/mathscinet\/"
    },
    {
        "id": 52,
        "Publisher": "American Physical Society (APS)",
        "Title": "American Physical Society Journals                     ",
        "Hyperlink": "https:\/\/journals.aps.org\/"
    },
    {
        "id": 53,
        "Publisher": "Annual Review ",
        "Title": "Annual Review of Ecology, Evolution, and Systematics",
        "Remark": "New Subscription from 2023",
        "Hyperlink": "https:\/\/www.annualreviews.org\/journal\/ecolsys"
    },
    {
        "id": 54,
        "Publisher": "Annual Review ",
        "Title": "Annual Review of Plant Biology",
        "Remark": "New Subscription from 2023",
        "Hyperlink": "https:\/\/www.annualreviews.org\/journal\/arplant"
    },
    {
        "id": 55,
        "Publisher": "Arabidopsis Information Resource Center",
        "Title": "The Arabidopsis Information Resource (TAIR) ",
        "Hyperlink": "https:\/\/www.arabidopsis.org\/"
    },
    {
        "id": 56,
        "Publisher": "Bombay Natural History Society",
        "Title": "Journal of the Bombay Natural History Society (JBNHS)",
        "Remark": "New Subscription from 2023",
        "Hyperlink": "https:\/\/www.bnhsjournal.in\/index.php\/bnhs\/issue\/archive"
    },
    {
        "id": 57,
        "Publisher": "Brill",
        "Title": "Phronesis",
        "Hyperlink": "https:\/\/brill.com\/view\/journals\/phro\/phro-overview.xml?language=en"
    },
    {
        "id": 58,
        "Publisher": "Cambridge Crystallographic Data Centre",
        "Title": "Cambridge Structural Database (CSD) Enterprise Group License",
        "Hyperlink": "https:\/\/www.ccdc.cam.ac.uk\/solutions\/csd-core\/components\/csd\/"
    },
    {
        "id": 59,
        "Publisher": "Cambridge University Press",
        "Title": "Geological Magazine",
        "Remark": "OA from 2024",
        "Hyperlink": "https:\/\/www.cambridge.org\/core\/journals\/geological-magazine"
    },
    {
        "id": 60,
        "Publisher": "Cambridge University Press",
        "Title": "Glasgow Mathematical Journal",
        "Hyperlink": "https:\/\/www.cambridge.org\/core\/journals\/glasgow-mathematical-journal"
    },
    {
        "id": 61,
        "Publisher": "Cambridge University Press",
        "Title": "Mathematical Proceedings of the Cam. Philos. Soc.",
        "Hyperlink": "https:\/\/www.cambridge.org\/core\/journals\/mathematical-proceedings-of-the-cambridge-philosophical-society\/information\/instructions-contributors"
    },
    {
        "id": 62,
        "Publisher": "Cell Press",
        "Title": "Biophysical Journal      ",
        "Hyperlink": "https:\/\/www.cell.com\/biophysj\/home"
    },
    {
        "id": 63,
        "Publisher": "Cell Press",
        "Title": "Cell",
        "Hyperlink": "https:\/\/www.cell.com\/"
    },
    {
        "id": 64,
        "Publisher": "Cell Press",
        "Title": "Cell Host and Microbe",
        "Hyperlink": "https:\/\/www.cell.com\/cell-host-microbe\/home"
    },
    {
        "id": 65,
        "Publisher": "Cell Press",
        "Title": "Cell Metabolism",
        "Hyperlink": "https:\/\/www.cell.com\/cell-metabolism\/home"
    },
    {
        "id": 66,
        "Publisher": "Cell Press",
        "Title": "Cell StemCell",
        "Hyperlink": "https:\/\/www.cell.com\/cell-stem-cell\/home"
    },
    {
        "id": 67,
        "Publisher": "Cell Press",
        "Title": "Chemistry & Biology",
        "Hyperlink": "https:\/\/www.journals.elsevier.com\/chemistry-and-biology\/"
    },
    {
        "id": 68,
        "Publisher": "Cell Press",
        "Title": "Current Biology",
        "Hyperlink": "https:\/\/www.cell.com\/current-biology\/home"
    },
    {
        "id": 69,
        "Publisher": "Cell Press",
        "Title": "Developmental Cell",
        "Hyperlink": "https:\/\/www.cell.com\/developmental-cell\/home"
    },
    {
        "id": 70,
        "Publisher": "Cell Press",
        "Title": "The American Journal of Human Genetics",
        "Hyperlink": "https:\/\/www.cell.com\/ajhg\/home"
    },
    {
        "id": 71,
        "Publisher": "Cell Press",
        "Title": "Molecular Cell",
        "Hyperlink": "https:\/\/www.cell.com\/molecular-cell\/home"
    },
    {
        "id": 72,
        "Publisher": "Cell Press",
        "Title": "Neuron",
        "Hyperlink": "https:\/\/www.cell.com\/neuron\/home"
    },
    {
        "id": 73,
        "Publisher": "Cell Press",
        "Title": "Structure",
        "Hyperlink": "https:\/\/www.cell.com\/structure\/home"
    },
    {
        "id": 74,
        "Publisher": "Cell Press",
        "Title": "Immunity",
        "Hyperlink": "https:\/\/www.cell.com\/immunity\/home"
    },
    {
        "id": 75,
        "Publisher": "Cell Press ",
        "Title": "Cancer Cell      ",
        "Hyperlink": "https:\/\/www.cell.com\/cancer-cell\/home"
    },
    {
        "id": 76,
        "Publisher": "Cell Press ",
        "Title": "Trends in Pharmacological Sciences",
        "Hyperlink": "https:\/\/www.cell.com\/trends\/pharmacological-sciences\/home"
    },
    {
        "id": 77,
        "Publisher": "Cell Press ",
        "Title": "Molecular Plant",
        "Hyperlink": "https:\/\/www.cell.com\/molecular-plant\/home"
    },
    {
        "id": 78,
        "Publisher": "Cell Press",
        "Title": "Chem ",
        "Hyperlink": "https:\/\/www.cell.com\/chem\/home"
    },
    {
        "id": 79,
        "Publisher": "Chemical Abstract Service",
        "Title": "SciFinder Academic Universal Share W\/SSM",
        "Hyperlink": "https:\/\/www.cas.org\/products\/scifinder"
    },
    {
        "id": 80,
        "Publisher": "CMIE Pvt. Ltd.",
        "Title": "ProwessIQ (IP)",
        "Hyperlink": "https:\/\/prowessiq.cmie.com\/"
    },
    {
        "id": 81,
        "Publisher": "CMIE Pvt. Ltd.",
        "Title": "Consumer Pyramid Household Survey Dx",
        "Hyperlink": "https:\/\/consumerpyramidsdx.cmie.com\/"
    },
    {
        "id": 82,
        "Publisher": "CMIE Pvt. Ltd.",
        "Title": "Economic Outlook (IP)",
        "Hyperlink": "https:\/\/economicoutlook.cmie.com\/"
    },
    {
        "id": 83,
        "Publisher": "Company of Biologists",
        "Title": "Journal of Cell Science",
        "Hyperlink": "http:\/\/jcs.biologists.org\/"
    },
    {
        "id": 84,
        "Publisher": "Company of Biologists",
        "Title": "Development",
        "Hyperlink": "https:\/\/journals.biologists.com\/dev"
    },
    {
        "id": 85,
        "Publisher": "Company of Biologists",
        "Title": "Journal of Experimental Biology",
        "Hyperlink": "https:\/\/journals.biologists.com\/jeb"
    },
    {
        "id": 86,
        "Publisher": "Company of Biologists",
        "Title": "Biology Open",
        "Hyperlink": "https:\/\/journals.biologists.com\/bio"
    },
    {
        "id": 87,
        "Publisher": "Company of Biologists",
        "Title": "Disease Models and Mechanisms (DMM)",
        "Hyperlink": "https:\/\/journals.biologists.com\/dmm"
    },
    {
        "id": 88,
        "Publisher": "Datanet India  Pvt. Ltd.",
        "Title": "Indiastat",
        "Hyperlink": "https:\/\/www.indiastat.com\/"
    },
    {
        "id": 89,
        "Publisher": "De Gruyter",
        "Title": "Apeiron",
        "Hyperlink": "https:\/\/www.degruyter.com\/journal\/key\/apeiron\/html?lang=en"
    },
    {
        "id": 90,
        "Publisher": "Elsevier",
        "Title": "Ore Geology Reviews-Open Access",
        "Hyperlink": "https:\/\/www.sciencedirect.com\/journal\/ore-geology-reviews"
    },
    {
        "id": 91,
        "Publisher": "Elsevier",
        "Title": "Atmospheric Environment",
        "Hyperlink": "https:\/\/www.journals.elsevier.com\/atmospheric-environment"
    },
    {
        "id": 92,
        "Publisher": "Elsevier",
        "Title": "Science of the Total Environment",
        "Hyperlink": "https:\/\/www.journals.elsevier.com\/science-of-the-total-environment"
    },
    {
        "id": 93,
        "Publisher": "Elsevier",
        "Title": "Environmental Pollution",
        "Hyperlink": "https:\/\/www.journals.elsevier.com\/environmental-pollution"
    },
    {
        "id": 94,
        "Publisher": "Elsevier",
        "Title": "Journal of Structural Geology",
        "Hyperlink": "https:\/\/www.journals.elsevier.com\/journal-of-structural-geology"
    },
    {
        "id": 95,
        "Publisher": "Elsevier",
        "Title": "Precambrian Research",
        "Hyperlink": "https:\/\/www.journals.elsevier.com\/precambrian-research"
    },
    {
        "id": 96,
        "Publisher": "Elsevier",
        "Title": "Journal of African Earth Sciences",
        "Hyperlink": "https:\/\/www.journals.elsevier.com\/journal-of-african-earth-sciences"
    },
    {
        "id": 97,
        "Publisher": "Elsevier",
        "Title": "Journal of Asian Earth Sciences",
        "Hyperlink": "https:\/\/www.journals.elsevier.com\/journal-of-asian-earth-sciences"
    },
    {
        "id": 98,
        "Publisher": "Elsevier",
        "Title": "Journal of Geodynamics",
        "Hyperlink": "https:\/\/www.journals.elsevier.com\/journal-of-geodynamics"
    },
    {
        "id": 99,
        "Publisher": "Elsevier",
        "Title": "Chemical Geology",
        "Hyperlink": "https:\/\/www.journals.elsevier.com\/chemical-geology"
    },
    {
        "id": 100,
        "Publisher": "Elsevier",
        "Title": "Geochimica et Cosmochimica Acta ",
        "Hyperlink": "https:\/\/www.journals.elsevier.com\/geochimica-et-cosmochimica-acta"
    },
    {
        "id": 101,
        "Publisher": "Elsevier",
        "Title": "Godwana Research",
        "Hyperlink": "https:\/\/www.journals.elsevier.com\/gondwana-research"
    },
    {
        "id": 102,
        "Publisher": "Elsevier",
        "Title": "Journal of Volcanology and Geothermal Research",
        "Hyperlink": "https:\/\/www.journals.elsevier.com\/journal-of-volcanology-and-geothermal-research"
    },
    {
        "id": 103,
        "Publisher": "Elsevier",
        "Title": "Computers and Geotechnics",
        "Hyperlink": "https:\/\/www.journals.elsevier.com\/computers-and-geotechnics"
    },
    {
        "id": 104,
        "Publisher": "Elsevier",
        "Title": "Earth and Planetary Science Letters",
        "Hyperlink": "https:\/\/www.journals.elsevier.com\/earth-and-planetary-science-letters"
    },
    {
        "id": 105,
        "Publisher": "Elsevier",
        "Title": "Earth Science Reviews",
        "Hyperlink": "https:\/\/www.journals.elsevier.com\/earth-science-reviews"
    },
    {
        "id": 106,
        "Publisher": "Elsevier",
        "Title": "Tectonophysics",
        "Hyperlink": "https:\/\/www.journals.elsevier.com\/tectonophysics"
    },
    {
        "id": 107,
        "Publisher": "Elsevier",
        "Title": "Applied Geochemistry",
        "Hyperlink": "https:\/\/www.journals.elsevier.com\/applied-geochemistry"
    },
    {
        "id": 108,
        "Publisher": "Elsevier",
        "Title": "Journal of Geochemical Exploration",
        "Hyperlink": "https:\/\/www.journals.elsevier.com\/journal-of-geochemical-exploration"
    },
    {
        "id": 109,
        "Publisher": "Elsevier",
        "Title": "Journal of Hydrology ",
        "Hyperlink": "https:\/\/www.journals.elsevier.com\/journal-of-hydrology"
    },
    {
        "id": 110,
        "Publisher": "Elsevier",
        "Title": "Lithos",
        "Hyperlink": "https:\/\/www.journals.elsevier.com\/lithos"
    },
    {
        "id": 111,
        "Publisher": "Elsevier",
        "Title": "Palaeogeography, Palaeoclimatology, Palaeoecology",
        "Hyperlink": "https:\/\/www.journals.elsevier.com\/palaeogeography-palaeoclimatology-palaeoecology"
    },
    {
        "id": 112,
        "Publisher": "Elsevier",
        "Title": "Geomorphology",
        "Hyperlink": "https:\/\/www.journals.elsevier.com\/geomorphology"
    },
    {
        "id": 113,
        "Publisher": "Elsevier",
        "Title": "Energy Policy",
        "Hyperlink": "https:\/\/www.journals.elsevier.com\/energy-policy"
    },
    {
        "id": 114,
        "Publisher": "Elsevier",
        "Title": "Trends in Ecology & Evolution",
        "Hyperlink": "https:\/\/www.journals.elsevier.com\/trends-in-ecology-and-evolution"
    },
    {
        "id": 115,
        "Publisher": "Elsevier ",
        "Title": "Environmental Modelling & Software ",
        "Hyperlink": "https:\/\/www.journals.elsevier.com\/environmental-modelling-and-software"
    },
    {
        "id": 116,
        "Publisher": "Elsevier",
        "Title": "Science Direct ( 4 Subject Collection: Bio, Chm, Math & Phy)",
        "Hyperlink": "https:\/\/www.sciencedirect.com\/"
    },
    {
        "id": 117,
        "Publisher": "Elsevier",
        "Title": "Geochemistry",
        "Remark": "New Subscription from 2023",
        "Hyperlink": "https:\/\/www.sciencedirect.com\/topics\/earth-and-planetary-sciences\/geochemistry"
    },
    {
        "id": 118,
        "Publisher": "FIZ Karlsruhe",
        "Title": "ICSD ( Institute\/department ICSD WEB)\/ Academic user institute\/department ( Multiple license 2-4 accesses)",
        "Hyperlink": "http:\/\/www2.fiz-karlsruhe.de\/14021.html"
    },
    {
        "id": 119,
        "Publisher": "Grammarly Inc.",
        "Title": "Grammarly Premium-Writing Support Tool",
        "Hyperlink": "https:\/\/www.grammarly.com\/edu"
    },
    {
        "id": 120,
        "Publisher": "Geological Soc. Of America Pub.",
        "Title": "Geology ",
        "Hyperlink": "https:\/\/pubs.geoscienceworld.org\/geology"
    },
    {
        "id": 121,
        "Publisher": "Institute of Electrical and Electronics Engineers (IEEE Xplore)",
        "Title": "IEEE-ASPP",
        "Hyperlink": "https:\/\/www.ieee.org\/publications\/subscriptions\/iel-overview-pricing.html"
    },
    {
        "id": 122,
        "Publisher": "Institute of Electrical and Electronics Engineers (IEEE Xplore)",
        "Title": "Confrence IEEE-POP ALL",
        "Remark": "New Subscription from 2023",
        "Hyperlink": "https:\/\/ieeexplore.ieee.org\/browse\/conferences\/title"
    },
    {
        "id": 123,
        "Publisher": "Institute of Electrical and Electronics Engineers (IEEE Xplore)",
        "Title": "Proceedings of the IEEE",
        "Remark": "New Subscription from 2023",
        "Hyperlink": "https:\/\/ieeexplore.ieee.org\/xpl\/tocresult.jsp?isnumber=10092901&punumber=5"
    },
    {
        "id": 124,
        "Publisher": "Indian Forester",
        "Title": "The Indian Forester",
        "Hyperlink": "http:\/\/www.indianforester.co.in\/"
    },
    {
        "id": 125,
        "Publisher": "Institute of Physics (IOP)",
        "Title": "Jl. Of Physics- Condensed Matter",
        "Hyperlink": "https:\/\/iopscience.iop.org\/journal\/0953-8984"
    },
    {
        "id": 126,
        "Publisher": "Institute of Physics (IOP)",
        "Title": "Jl. Of Physics D- Applied Physics ",
        "Hyperlink": "https:\/\/iopscience.iop.org\/journal\/0022-3727"
    },
    {
        "id": 127,
        "Publisher": "Institute of Physics (IOP)",
        "Title": "Reports on Progress in Physics",
        "Hyperlink": "https:\/\/iopscience.iop.org\/journal\/0034-4885"
    },
    {
        "id": 128,
        "Publisher": "International Centre for Diffraction Data",
        "Title": "ICDD PDF4+Sub DVD (single user license version)",
        "Hyperlink": "http:\/\/www.icdd.com\/"
    },
    {
        "id": 129,
        "Publisher": "Johns Hopkins University Press",
        "Title": "American Journal of Philology",
        "Hyperlink": "https:\/\/www.press.jhu.edu\/journals\/american-journal-philology"
    },
    {
        "id": 130,
        "Publisher": "Johns Hopkins University Press",
        "Title": "Literature and Medicine",
        "Hyperlink": "https:\/\/www.press.jhu.edu\/journals\/literature-and-medicine"
    },
    {
        "id": 131,
        "Publisher": "JOVE DATABASES",
        "Title": "JoVE DATABASE",
        "Hyperlink": "https:\/\/www.jove.com\/science-education-library"
    },
    {
        "id": 132,
        "Publisher": "Duke University Press",
        "Title": "Annals of Mathematics",
        "Hyperlink": "http:\/\/annals.math.princeton.edu\/"
    },
    {
        "id": 133,
        "Publisher": "JSTOR, ITHAKA",
        "Title": "JSTOR Database",
        "Hyperlink": "https:\/\/www.jstor.org\/"
    },
    {
        "id": 134,
        "Publisher": "Magnolia press, NZ",
        "Title": "Phytotaxa",
        "Remark": "New Subscription from 2023",
        "Hyperlink": "https:\/\/phytotaxa.mapress.com\/pt\/issue\/view\/phytotaxa.600.1"
    },
    {
        "id": 135,
        "Publisher": "MIT Press",
        "Title": "Perspectives on science",
        "Hyperlink": "https:\/\/muse.jhu.edu\/issue\/52001"
    },
    {
        "id": 136,
        "Publisher": "Mathematical Sciences Publishers (MSP)",
        "Title": "Pacific Journal of Mathematics",
        "Remark": "New Subscription from 2023",
        "Hyperlink": "https:\/\/msp.org\/pjm\/2023\/323-2\/"
    },
    {
        "id": 137,
        "Publisher": "Nat. Academy of Sc.,PNAS",
        "Title": "Proceedings of the National Academy of Sciences",
        "Hyperlink": "https:\/\/www.pnas.org\/"
    },
    {
        "id": 138,
        "Publisher": "New Left Review Ltd",
        "Title": "New Left Review",
        "Remark": "New Subscription from 2023",
        "Hyperlink": "https:\/\/newleftreview.org\/"
    },
    {
        "id": 139,
        "Publisher": "Oxford University Press ",
        "Title": "Oxford Journals -(1)Mathematics & Physical Science (2) Life Science Collection",
        "Hyperlink": "https:\/\/academic.oup.com\/journals\/pages\/science_and_mathematics"
    },
    {
        "id": 140,
        "Publisher": "Oxford University Press",
        "Title": "Migration Studies",
        "Remark": "New Subscription from 2023-Access through eSS",
        "Hyperlink": "https:\/\/academic.oup.com\/migration"
    },
    {
        "id": 141,
        "Publisher": "Oxford University Press",
        "Title": "Journal of Refugee Studies",
        "Remark": "New Subscription from 2023-Access through eSS",
        "Hyperlink": "https:\/\/academic.oup.com\/jrs"
    },
    {
        "id": 142,
        "Publisher": "Oxford University Press",
        "Title": "Quarterly Journal of Economics",
        "Remark": "New Subscription from 2023-Access through eSS",
        "Hyperlink": "https:\/\/academic.oup.com\/qje"
    },
    {
        "id": 143,
        "Publisher": "Philosophy Documentation Center (PDC)",
        "Title": "Ancient Philosophy ",
        "Hyperlink": "https:\/\/www.pdcnet.org\/collection-anonymous\/browse?fp=ancientphil"
    },
    {
        "id": 144,
        "Publisher": "Physical Society of Japan\/AIP",
        "Title": "Journal of Physical Society of Japan",
        "Hyperlink": "https:\/\/journals.jps.jp\/journal\/jpsj"
    },
    {
        "id": 145,
        "Publisher": "Rockefeller University Press",
        "Title": "Jl. Of Experimental Medicine",
        "Hyperlink": "http:\/\/jem.rupress.org\/"
    },
    {
        "id": 146,
        "Publisher": "Rockefeller University Press",
        "Title": "Jl. Of Cell Biology",
        "Hyperlink": "http:\/\/jcb.rupress.org\/"
    },
    {
        "id": 147,
        "Publisher": "Royal Society Publishing",
        "Title": "Philosophical Transactions of the Royal Soc. A : Mathematical, Physical and Engineering Sciences",
        "Hyperlink": "https:\/\/royalsocietypublishing.org\/journal\/rsta"
    },
    {
        "id": 148,
        "Publisher": "Royal Society Publishing",
        "Title": "Philosophical Transactions of the Royal Soc.B : Biological Sciences",
        "Hyperlink": "https:\/\/royalsocietypublishing.org\/journal\/rstb"
    },
    {
        "id": 149,
        "Publisher": "Royal Society Publishing",
        "Title": "Proceedings of the Royal Society A",
        "Hyperlink": "https:\/\/royalsocietypublishing.org\/journal\/rspa"
    },
    {
        "id": 150,
        "Publisher": "Royal Society Publishing",
        "Title": "Proceedings of the Royal Society B",
        "Hyperlink": "https:\/\/royalsocietypublishing.org\/journal\/rspb"
    },
    {
        "id": 151,
        "Publisher": "Royal Society Publishing",
        "Title": "Biology Letters",
        "Hyperlink": "https:\/\/royalsocietypublishing.org\/journal\/rsbl"
    },
    {
        "id": 152,
        "Publisher": "Royal Society Publishing",
        "Title": "Jl. Of the Royal Society Interface",
        "Hyperlink": "https:\/\/royalsocietypublishing.org\/toc\/rsif\/6\/30"
    },
    {
        "id": 153,
        "Publisher": "Royal Society Publishing",
        "Title": "Interface Focus",
        "Hyperlink": "https:\/\/royalsocietypublishing.org\/toc\/rsfs\/7\/1"
    },
    {
        "id": 154,
        "Publisher": "Royal Society Publishing",
        "Title": "Notes and Records of the Royal Society",
        "Hyperlink": "https:\/\/royalsocietypublishing.org\/journal\/rsnr"
    },
    {
        "id": 155,
        "Publisher": "Royal Society of Chemistry (RSC)",
        "Title": "Royal Society of Chemistry Online Package- RSC GOLD",
        "Hyperlink": "https:\/\/www.rsc.org\/journals-books-databases\/librarians-information\/products-prices\/rsc-gold\/"
    },
    {
        "id": 156,
        "Publisher": "SAGE Publishing",
        "Title": "Memory Studies",
        "Remark": "New Subscription from 2023",
        "Hyperlink": "https:\/\/journals.sagepub.com\/home\/mss"
    },
    {
        "id": 157,
        "Publisher": "SAGE Publishing",
        "Title": "Social Studies of Science",
        "Remark": "New Subscription from 2023",
        "Hyperlink": "https:\/\/journals.sagepub.com\/home\/sss"
    },
    {
        "id": 158,
        "Publisher": "SAGE Publishing",
        "Title": "Science, Technology and Society",
        "Hyperlink": "https:\/\/journals.sagepub.com\/home\/sts"
    },
    {
        "id": 159,
        "Publisher": "SAGE Publishing",
        "Title": "Contributions to Indian Sociology",
        "Remark": "New Subscription from 2023",
        "Hyperlink": "https:\/\/journals.sagepub.com\/home\/cis"
    },
    {
        "id": 160,
        "Publisher": "SEPM Society for Sedimentary Geology\/ GeoScienceWorld ",
        "Title": "Journal of Sedimentary Research",
        "Remark": "New Subscription from 2023",
        "Hyperlink": "https:\/\/pubs.geoscienceworld.org\/jsedres"
    },
    {
        "id": 161,
        "Publisher": "Society for Neuroscience",
        "Title": "Journal of Neuroscience    ",
        "Hyperlink": "http:\/\/www.jneurosci.org\/"
    },
    {
        "id": 162,
        "Publisher": "Springer",
        "Title": "Plant Systematics and Evolution",
        "Hyperlink": "https:\/\/link.springer.com\/journal\/606"
    },
    {
        "id": 163,
        "Publisher": "Springer",
        "Title": "Journal of the Geological Society of India",
        "Hyperlink": "https:\/\/www.springer.com\/earth+sciences+and+geography\/geology\/journal\/12594"
    },
    {
        "id": 164,
        "Publisher": "Springer",
        "Title": "Climate Dynamics",
        "Hyperlink": "https:\/\/www.springer.com\/earth+sciences+and+geography\/geophysics\/journal\/382\/PSEL"
    },
    {
        "id": 165,
        "Publisher": "Springer",
        "Title": "Theoretical and Applied Climatology",
        "Hyperlink": "https:\/\/link.springer.com\/journal\/704"
    },
    {
        "id": 166,
        "Publisher": "Springer",
        "Title": "Mathematische Annalen ",
        "Hyperlink": "https:\/\/link.springer.com\/journal\/208"
    },
    {
        "id": 167,
        "Publisher": "Springer",
        "Title": "Ramanujan Journal",
        "Hyperlink": "https:\/\/www.springer.com\/mathematics\/numbers\/journal\/11139?gclid=EAIaIQobChMI5p_gwYi24QIVj4uPCh2kFwIIEAAYASAAEgJ5UvD_BwE"
    },
    {
        "id": 168,
        "Publisher": "Springer",
        "Title": "Mathematische Zeitschrift ",
        "Hyperlink": "https:\/\/link.springer.com\/journal\/209"
    },
    {
        "id": 169,
        "Publisher": "Springer",
        "Title": "Archiv der Mathematik ",
        "Hyperlink": "https:\/\/www.springer.com\/birkhauser\/mathematics\/journal\/13"
    },
    {
        "id": 170,
        "Publisher": "Springer",
        "Title": "Inventiones mathematicae",
        "Hyperlink": "https:\/\/link.springer.com\/journal\/222"
    },
    {
        "id": 171,
        "Publisher": "Springer",
        "Title": "Geometric And Functional Analysis (GAFA)",
        "Hyperlink": "https:\/\/link.springer.com\/journal\/39"
    },
    {
        "id": 172,
        "Publisher": "Springer-Nature",
        "Title": "Nature International Weekly",
        "Hyperlink": "https:\/\/www.nature.com\/"
    },
    {
        "id": 173,
        "Publisher": "Springer-Nature",
        "Title": "Cell Death & Differentation ",
        "Hyperlink": "https:\/\/www.nature.com\/cdd\/"
    },
    {
        "id": 174,
        "Publisher": "Springer-Nature",
        "Title": "Cellular & molecular Immunology ",
        "Hyperlink": "https:\/\/www.nature.com\/cmi\/"
    },
    {
        "id": 175,
        "Publisher": "Springer-Nature",
        "Title": "European Journal of Human Genetics",
        "Hyperlink": "https:\/\/www.nature.com\/ejhg\/"
    },
    {
        "id": 176,
        "Publisher": "Springer-Nature",
        "Title": "Genes and Immunity",
        "Hyperlink": "https:\/\/www.nature.com\/gene\/"
    },
    {
        "id": 177,
        "Publisher": "Springer-Nature",
        "Title": "Journal of Human Genetics",
        "Hyperlink": "https:\/\/www.nature.com\/jhg\/"
    },
    {
        "id": 178,
        "Publisher": "Springer-Nature",
        "Title": "Nature Biotechnology",
        "Hyperlink": "https:\/\/www.nature.com\/nbt\/"
    },
    {
        "id": 179,
        "Publisher": "Springer-Nature",
        "Title": "Nature Cell Biology",
        "Hyperlink": "https:\/\/www.nature.com\/ncb\/"
    },
    {
        "id": 180,
        "Publisher": "Springer-Nature",
        "Title": "Nature Chemical Biology",
        "Hyperlink": "https:\/\/www.nature.com\/nchembio\/"
    },
    {
        "id": 181,
        "Publisher": "Springer-Nature",
        "Title": "Nature Chemistry",
        "Hyperlink": "https:\/\/www.nature.com\/nchem\/"
    },
    {
        "id": 182,
        "Publisher": "Springer-Nature",
        "Title": "Nature Genetics",
        "Hyperlink": "https:\/\/www.nature.com\/ng\/"
    },
    {
        "id": 183,
        "Publisher": "Springer-Nature",
        "Title": "Nature Immunology",
        "Hyperlink": "https:\/\/www.nature.com\/ni\/"
    },
    {
        "id": 184,
        "Publisher": "Springer-Nature",
        "Title": "Nature Materials",
        "Hyperlink": "https:\/\/www.nature.com\/nmat\/"
    },
    {
        "id": 185,
        "Publisher": "Springer-Nature",
        "Title": "Nature Medicine",
        "Hyperlink": "https:\/\/www.nature.com\/nm\/"
    },
    {
        "id": 186,
        "Publisher": "Springer-Nature",
        "Title": "Nature Methods",
        "Hyperlink": "https:\/\/www.nature.com\/nmeth\/"
    },
    {
        "id": 187,
        "Publisher": "Springer-Nature",
        "Title": "Nature Nanotechnology",
        "Hyperlink": "https:\/\/www.nature.com\/nnano\/"
    },
    {
        "id": 188,
        "Publisher": "Springer-Nature",
        "Title": "Nature Neuroscience",
        "Hyperlink": "https:\/\/www.nature.com\/neuro\/"
    },
    {
        "id": 189,
        "Publisher": "Springer-Nature",
        "Title": "Nature Photonics",
        "Hyperlink": "https:\/\/www.nature.com\/nphoton\/"
    },
    {
        "id": 190,
        "Publisher": "Springer-Nature",
        "Title": "Nature Physics",
        "Hyperlink": "https:\/\/www.nature.com\/nphys\/"
    },
    {
        "id": 191,
        "Publisher": "Springer-Nature",
        "Title": "Nature Protocols",
        "Hyperlink": "https:\/\/www.nature.com\/nprot\/"
    },
    {
        "id": 192,
        "Publisher": "Springer-Nature",
        "Title": "Nature Reviews Cancer",
        "Hyperlink": "https:\/\/www.nature.com\/nrc\/"
    },
    {
        "id": 193,
        "Publisher": "Springer-Nature",
        "Title": "Nature Reviews Drug Discovery",
        "Hyperlink": "https:\/\/www.nature.com\/nrd\/"
    },
    {
        "id": 194,
        "Publisher": "Springer-Nature",
        "Title": "Nature Reviews Genetics",
        "Hyperlink": "https:\/\/www.nature.com\/nrg\/"
    },
    {
        "id": 195,
        "Publisher": "Springer-Nature",
        "Title": "Nature Reviews Immunology",
        "Hyperlink": "https:\/\/www.nature.com\/nri\/"
    },
    {
        "id": 196,
        "Publisher": "Springer-Nature",
        "Title": "Nature Reviews Microbiology",
        "Hyperlink": "https:\/\/www.nature.com\/nrmicro\/"
    },
    {
        "id": 197,
        "Publisher": "Springer-Nature",
        "Title": "Nature Reviews Molecular Cell Biology",
        "Hyperlink": "https:\/\/www.nature.com\/nrm\/"
    },
    {
        "id": 198,
        "Publisher": "Springer-Nature",
        "Title": "Nature Reviews Neuroscience",
        "Hyperlink": "https:\/\/www.nature.com\/nrn\/"
    },
    {
        "id": 199,
        "Publisher": "Springer-Nature",
        "Title": "Nature Structural and Molecular Biology",
        "Hyperlink": "https:\/\/www.nature.com\/nsmb\/"
    },
    {
        "id": 200,
        "Publisher": "Springer-Nature",
        "Title": "Oncogene",
        "Hyperlink": "https:\/\/www.nature.com\/onc\/"
    },
    {
        "id": 201,
        "Publisher": "Springer-Nature",
        "Title": "Scientific American",
        "Hyperlink": "https:\/\/www.scientificamerican.com\/"
    },
    {
        "id": 202,
        "Publisher": "Springer-Nature",
        "Title": "Nature Plants",
        "Hyperlink": "https:\/\/www.nature.com\/nplants\/"
    },
    {
        "id": 203,
        "Publisher": "Springer-Nature",
        "Title": "Nature Microbiology ",
        "Hyperlink": "https:\/\/www.nature.com\/nmicrobiol\/"
    },
    {
        "id": 204,
        "Publisher": "Springer-Nature",
        "Title": "Nature Ecology and Evolution",
        "Hyperlink": "https:\/\/www.nature.com\/natecolevol\/"
    },
    {
        "id": 205,
        "Publisher": "Springer-Nature",
        "Title": "Nature Geoscience",
        "Hyperlink": "https:\/\/www.nature.com\/ngeo\/"
    },
    {
        "id": 206,
        "Publisher": "Springer-Nature",
        "Title": "Springer S&T Collection (1725 e-journals)",
        "Hyperlink": "https:\/\/ess.inflibnet.ac.in\/journals.php?pg=collection&id=Springer+Link+1700+Collection+and+Nature+Journal"
    },
    {
        "id": 207,
        "Publisher": "Thieme",
        "Title": "Synfacts        ",
        "Hyperlink": "https:\/\/www.thieme-connect.com\/products\/ejournals\/journal\/10.1055\/s-00000131"
    },
    {
        "id": 208,
        "Publisher": "Thieme",
        "Title": "Synthesis",
        "Hyperlink": "https:\/\/www.thieme.de\/en\/thieme-chemistry\/journals-synthesis-54847.htm"
    },
    {
        "id": 209,
        "Publisher": "Thieme",
        "Title": "Synlett",
        "Hyperlink": "https:\/\/www.thieme-connect.com\/products\/ejournals\/journal\/10.1055\/s-00000083"
    },
    {
        "id": 210,
        "Publisher": "Thomson Reuters\/Clarivate Analytics",
        "Title": "WEB OF SCIENCE",
        "Hyperlink": "https:\/\/clarivate.com\/products\/web-of-science\/"
    },
    {
        "id": 211,
        "Publisher": "Turnitin",
        "Title": "Turnitin Plagiarism Web Tool",
        "Hyperlink": "https:\/\/www.turnitin.com\/"
    },
    {
        "id": 212,
        "Publisher": "Univ. Of Chicago Press",
        "Title": "Journal of Geology",
        "Hyperlink": "https:\/\/www.jstor.org\/journal\/jgeology"
    },
    {
        "id": 213,
        "Publisher": "University of Chicago Press",
        "Title": "Journal of Political Economy",
        "Remark": "New Subscription from 2023",
        "Hyperlink": "https:\/\/www.journals.uchicago.edu\/toc\/jpe\/current"
    },
    {
        "id": 214,
        "Publisher": "University of Chicago Press",
        "Title": "Current Anthropology",
        "Remark": "New Subscription from 2023",
        "Hyperlink": "https:\/\/www.journals.uchicago.edu\/toc\/ca\/current"
    },
    {
        "id": 215,
        "Publisher": "University of Chicago Press",
        "Title": "Critical Inquiry",
        "Hyperlink": "https:\/\/criticalinquiry.uchicago.edu\/"
    },
    {
        "id": 216,
        "Publisher": "University of Chicago Press",
        "Title": "British Journal for the Philosophy of Science",
        "Hyperlink": "https:\/\/www.journals.uchicago.edu\/toc\/bjps\/current"
    },
    {
        "Publisher": "Wiley",
        "Title": "WILEY CORE & CUSTOM COLLECTION ",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/library-info\/products\/journals"
    },
    {
        "id": 217,
        "Publisher": "Wiley",
        "Title": "Journal of Geophysical Research: Atmospheres",
        "Hyperlink": "https:\/\/agupubs.onlinelibrary.wiley.com\/journal\/21698996"
    },
    {
        "id": 218,
        "Publisher": "Wiley",
        "Title": "Journal of Geophysical Research: Space Physics",
        "Hyperlink": "https:\/\/agupubs.onlinelibrary.wiley.com\/journal\/21699402"
    },
    {
        "id": 219,
        "Publisher": "Wiley",
        "Title": "Journal of Geophysical Research: Solid Earth",
        "Hyperlink": "https:\/\/agupubs.onlinelibrary.wiley.com\/journal\/21699356"
    },
    {
        "id": 220,
        "Publisher": "Wiley",
        "Title": "Journal of Geophysical Research: Oceans",
        "Hyperlink": "https:\/\/agupubs.onlinelibrary.wiley.com\/journal\/21699291"
    },
    {
        "id": 221,
        "Publisher": "Wiley",
        "Title": "Journal of Geophysical Research: Planets",
        "Hyperlink": "https:\/\/agupubs.onlinelibrary.wiley.com\/journal\/21699100"
    },
    {
        "id": 222,
        "Publisher": "Wiley",
        "Title": "Journal of Geophysical Research: Earth Surface",
        "Hyperlink": "https:\/\/agupubs.onlinelibrary.wiley.com\/journal\/21699011"
    },
    {
        "id": 223,
        "Publisher": "Wiley",
        "Title": "Journal of Geophysical Research: Biogeosciences",
        "Hyperlink": "https:\/\/agupubs.onlinelibrary.wiley.com\/journal\/21698961"
    },
    {
        "id": 224,
        "Publisher": "Wiley",
        "Title": "Global Biogeochemical Cycles",
        "Hyperlink": "https:\/\/agupubs.onlinelibrary.wiley.com\/journal\/19449224"
    },
    {
        "id": 225,
        "Publisher": "Wiley",
        "Title": "Radio Science",
        "Hyperlink": "https:\/\/agupubs.onlinelibrary.wiley.com\/journal\/1944799x"
    },
    {
        "id": 226,
        "Publisher": "Wiley",
        "Title": "Tectonics",
        "Hyperlink": "https:\/\/agupubs.onlinelibrary.wiley.com\/journal\/19449194"
    },
    {
        "id": 227,
        "Publisher": "Wiley",
        "Title": "Paleoceanography and Paleoclimatology",
        "Hyperlink": "https:\/\/agupubs.onlinelibrary.wiley.com\/loi\/25724525"
    },
    {
        "id": 228,
        "Publisher": "Wiley",
        "Title": "Reviews of Geophysics",
        "Hyperlink": "https:\/\/agupubs.onlinelibrary.wiley.com\/journal\/19449208"
    },
    {
        "id": 229,
        "Publisher": "Wiley",
        "Title": "American Journal of Botany",
        "Hyperlink": "https:\/\/bsapubs.onlinelibrary.wiley.com\/journal\/15372197"
    },
    {
        "id": 230,
        "Publisher": "Wiley",
        "Title": "Chemistry - A European Journal  (Electronic)",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/15213765"
    },
    {
        "id": 231,
        "Publisher": "Wiley",
        "Title": "Angewandte Chemie International Edition  (Electronic)",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/15213773"
    },
    {
        "id": 232,
        "Publisher": "Wiley",
        "Title": "ChemSystemsChem",
        "Hyperlink": "https:\/\/chemsystems.co.za\/"
    },
    {
        "id": 233,
        "Publisher": "Wiley",
        "Title": "Limnology and Oceanography",
        "Hyperlink": "https:\/\/aslopubs.onlinelibrary.wiley.com\/journal\/19395590"
    },
    {
        "id": 234,
        "Publisher": "Wiley",
        "Title": "Limnology and Oceanography: Methods",
        "Hyperlink": "https:\/\/aslopubs.onlinelibrary.wiley.com\/journal\/15415856\/"
    },
    {
        "id": 235,
        "Publisher": "Wiley",
        "Title": "Limnology and Oceanography Bulletin",
        "Hyperlink": "https:\/\/aslopubs.onlinelibrary.wiley.com\/journal\/15396088"
    },
    {
        "id": 236,
        "Publisher": "Wiley",
        "Title": "Advanced Materials (Electronic)",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/2199160x"
    },
    {
        "id": 237,
        "Publisher": "Wiley",
        "Title": "SMALL (Electronic)",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/16136829"
    },
    {
        "id": 238,
        "Publisher": "Wiley",
        "Title": "International Journal of Climatology",
        "Hyperlink": "https:\/\/rmets.onlinelibrary.wiley.com\/journal\/10970088"
    },
    {
        "id": 239,
        "Publisher": "Wiley",
        "Title": "Chemistry - An Asian Journal  (Electronic)",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/1861471x"
    },
    {
        "id": 240,
        "Publisher": "Wiley",
        "Title": "Advanced Synthesis & Catalysis  (Electronic)",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/16154169"
    },
    {
        "id": 241,
        "Publisher": "Wiley",
        "Title": "ChemPhysChem (Electronic)",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/14397641"
    },
    {
        "id": 242,
        "Publisher": "Wiley",
        "Title": "ChemBioChem (Electronic)",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/14397633"
    },
    {
        "id": 243,
        "Publisher": "Wiley",
        "Title": "Biotechnology Journal (Electronic)",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/18607314"
    },
    {
        "id": 244,
        "Publisher": "Wiley",
        "Title": "ChemCatChem (Electronic)",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/18673899"
    },
    {
        "id": 245,
        "Publisher": "Wiley",
        "Title": "Flavour and Fragrance Journal",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/loi\/10991026"
    },
    {
        "id": 246,
        "Publisher": "Wiley",
        "Title": "Protein Science",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/1469896x"
    },
    {
        "id": 247,
        "Publisher": "Wiley",
        "Title": "Traffic",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/16000854"
    },
    {
        "id": 248,
        "Publisher": "Wiley",
        "Title": "Wiley Interdisciplinary Reviews: RNA",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/17577012"
    },
    {
        "id": 249,
        "Publisher": "Wiley",
        "Title": "Ecological Applications",
        "Hyperlink": "https:\/\/esajournals.onlinelibrary.wiley.com\/journal\/19395582"
    },
    {
        "id": 250,
        "Publisher": "Wiley",
        "Title": "Ecology",
        "Hyperlink": "https:\/\/esajournals.onlinelibrary.wiley.com\/journal\/19399170\/"
    },
    {
        "id": 251,
        "Publisher": "Wiley",
        "Title": "Frontiers in Ecology and the Environment",
        "Hyperlink": "https:\/\/esajournals.onlinelibrary.wiley.com\/journal\/15409309\/"
    },
    {
        "id": 252,
        "Publisher": "Wiley",
        "Title": "Acta crystallographica Section A  Foundations and Advances",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/s20532733"
    },
    {
        "id": 253,
        "Publisher": "Wiley",
        "Title": "Acta crystallographica Section F Structural Biology Communications",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/s2053230x"
    },
    {
        "id": 254,
        "Publisher": "Wiley",
        "Title": "Acta Crystallographica Section B: Structural Science, Crystal Engineering and Materials",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/s20525206"
    },
    {
        "id": 255,
        "Publisher": "Wiley",
        "Title": "Acta Crystallographica Section C:  Structural Chemistry",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/s20532296"
    },
    {
        "id": 256,
        "Publisher": "Wiley",
        "Title": "Acta Crystallographica Section D  Structural Biology",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/s20597983"
    },
    {
        "id": 257,
        "Publisher": "Wiley",
        "Title": "Advanced Functional Materials  (Electronic)",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/16163028"
    },
    {
        "id": 258,
        "Publisher": "Wiley",
        "Title": "Annalen der Physik (Electronic)",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/toc\/15213889\/523\/8%E2%80%909"
    },
    {
        "id": 259,
        "Publisher": "Wiley",
        "Title": "Annals of Neurology",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/15318249"
    },
    {
        "id": 260,
        "Publisher": "Wiley",
        "Title": "Basin Research",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/13652117"
    },
    {
        "id": 261,
        "Publisher": "Wiley",
        "Title": "Biological Reviews",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/1469185x"
    },
    {
        "id": 262,
        "Publisher": "Wiley",
        "Title": "Biopolymers",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/loi\/10970282"
    },
    {
        "id": 263,
        "Publisher": "Wiley",
        "Title": "Biotechnology and Bioengineering",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/10970290"
    },
    {
        "id": 264,
        "Publisher": "Wiley",
        "Title": "Biotropica",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/17447429"
    },
    {
        "id": 265,
        "Publisher": "Wiley",
        "Title": "BioEssays",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/15211878"
    },
    {
        "id": 266,
        "Publisher": "Wiley",
        "Title": "Cancer",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/10970142"
    },
    {
        "id": 267,
        "Publisher": "Wiley",
        "Title": "Chemical Biology & Drug Design",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/17470285"
    },
    {
        "id": 268,
        "Publisher": "Wiley",
        "Title": "Chinese Journal of Chemistry  (Electronic)",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/16147065"
    },
    {
        "id": 269,
        "Publisher": "Wiley",
        "Title": "Chirality",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/1520636x"
    },
    {
        "id": 270,
        "Publisher": "Wiley",
        "Title": "Cladistics",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/10960031"
    },
    {
        "id": 271,
        "Publisher": "Wiley",
        "Title": "Communications On Pure and Applied Mathematics",
        "Hyperlink": "https:\/\/www.onlinelibrary.wiley.com\/journal\/10970312"
    },
    {
        "id": 272,
        "Publisher": "Wiley",
        "Title": "Conservation Biology",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/15231739"
    },
    {
        "id": 273,
        "Publisher": "Wiley",
        "Title": "Cytoskeleton",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/19493592"
    },
    {
        "id": 274,
        "Publisher": "Wiley",
        "Title": "Developmental Dynamics",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/10970177"
    },
    {
        "id": 275,
        "Publisher": "Wiley",
        "Title": "Developmental Neurobiology",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/1932846x"
    },
    {
        "id": 276,
        "Publisher": "Wiley",
        "Title": "Earth Surface Processes and Landforms",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/10969837"
    },
    {
        "id": 277,
        "Publisher": "Wiley",
        "Title": "Ecological Entomology",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/13652311"
    },
    {
        "id": 278,
        "Publisher": "Wiley",
        "Title": "Ecology Letters",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/14610248"
    },
    {
        "id": 279,
        "Publisher": "Wiley",
        "Title": "Environmental Microbiology",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/14622920"
    },
    {
        "id": 280,
        "Publisher": "Wiley",
        "Title": "Environmental Toxicology",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/15227278"
    },
    {
        "id": 281,
        "Publisher": "Wiley",
        "Title": "Ethology",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/14390310"
    },
    {
        "id": 282,
        "Publisher": "Wiley",
        "Title": "European Journal of Inorganic Chemistry  (Electronic)",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/10990682c"
    },
    {
        "id": 283,
        "Publisher": "Wiley",
        "Title": "European Journal of Neuroscience",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/14609568"
    },
    {
        "id": 284,
        "Publisher": "Wiley",
        "Title": "European Journal of Organic Chemistry  (Electronic)",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/10990690"
    },
    {
        "id": 285,
        "Publisher": "Wiley",
        "Title": "Fuel Cells (Electronic)",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/16156854"
    },
    {
        "id": 286,
        "Publisher": "Wiley",
        "Title": "Functional Ecology",
        "Hyperlink": "https:\/\/besjournals.onlinelibrary.wiley.com\/journal\/13652435"
    },
    {
        "id": 287,
        "Publisher": "Wiley",
        "Title": "Genes, Chromosomes and Cancer",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/10982264"
    },
    {
        "id": 288,
        "Publisher": "Wiley",
        "Title": "Geological Journal",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/10991034"
    },
    {
        "id": 289,
        "Publisher": "Wiley",
        "Title": "Geology Today",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/13652451"
    },
    {
        "id": 290,
        "Publisher": "Wiley",
        "Title": "Geostandards & Geoanalytical Research",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/1751908x"
    },
    {
        "id": 291,
        "Publisher": "Wiley",
        "Title": "Global Change Biology",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/13652486"
    },
    {
        "id": 292,
        "Publisher": "Wiley",
        "Title": "Global Ecology and Biogeography",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/14668238"
    },
    {
        "id": 293,
        "Publisher": "Wiley",
        "Title": "Helvetica Chimica Acta (Electronic)",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/15222675"
    },
    {
        "id": 294,
        "Publisher": "Wiley",
        "Title": "Ibis",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/1474919x"
    },
    {
        "id": 295,
        "Publisher": "Wiley",
        "Title": "Immunology",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/13652567"
    },
    {
        "id": 296,
        "Publisher": "Wiley",
        "Title": "Insect Conservation and Diversity",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/17524598"
    },
    {
        "id": 297,
        "Publisher": "Wiley",
        "Title": "International Journal of Cancer",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/10970215"
    },
    {
        "id": 298,
        "Publisher": "Wiley",
        "Title": "International Journal of Chemical Kinetics",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/10974601"
    },
    {
        "id": 299,
        "Publisher": "Wiley",
        "Title": "International Journal of Quantum Chemistry",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/1097461x"
    },
    {
        "id": 300,
        "Publisher": "Wiley",
        "Title": "Island Arc",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/14401738"
    },
    {
        "id": 301,
        "Publisher": "Wiley",
        "Title": "Journal of Animal Ecology",
        "Hyperlink": "https:\/\/besjournals.onlinelibrary.wiley.com\/journal\/13652656"
    },
    {
        "id": 302,
        "Publisher": "Wiley",
        "Title": "Journal of Applied Crystallography",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/s16005767"
    },
    {
        "id": 303,
        "Publisher": "Wiley",
        "Title": "Journal of Biogeography",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/13652699"
    },
    {
        "id": 304,
        "Publisher": "Wiley",
        "Title": "Journal of Cellular Biochemistry",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/10974644"
    },
    {
        "id": 305,
        "Publisher": "Wiley",
        "Title": "Journal of Computational Chemistry",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/10974644"
    },
    {
        "id": 306,
        "Publisher": "Wiley",
        "Title": "Journal of Ecology",
        "Hyperlink": "https:\/\/besjournals.onlinelibrary.wiley.com\/journal\/13652745"
    },
    {
        "id": 307,
        "Publisher": "Wiley",
        "Title": "Journal of Experimental Zoology Part A: Ecological and Integrative Physiology",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/24715646"
    },
    {
        "id": 308,
        "Publisher": "Wiley",
        "Title": "Journal of Graph Theory",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/page\/journal\/10970118\/homepage\/editorialboard.html"
    },
    {
        "id": 309,
        "Publisher": "Wiley",
        "Title": "Journal of Metamorphic Geology",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/15251314"
    },
    {
        "id": 310,
        "Publisher": "Wiley",
        "Title": "Journal of Microscopy",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/13652818"
    },
    {
        "id": 311,
        "Publisher": "Wiley",
        "Title": "Journal of Molecular Recognition",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/page\/journal\/10991352\/homepage\/forauthors.html"
    },
    {
        "id": 312,
        "Publisher": "Wiley",
        "Title": "Journal of Neurochemistry",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/14714159"
    },
    {
        "id": 313,
        "Publisher": "Wiley",
        "Title": "Journal of Neuroscience Research",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/10974547"
    },
    {
        "id": 314,
        "Publisher": "Wiley",
        "Title": "Journal of Peptide Science",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/10991387"
    },
    {
        "id": 315,
        "Publisher": "Wiley",
        "Title": "Journal of Petroleum Geology",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/17475457"
    },
    {
        "id": 316,
        "Publisher": "Wiley",
        "Title": "Journal of Physical Organic Chemistry",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/10991395"
    },
    {
        "id": 317,
        "Publisher": "Wiley",
        "Title": "Journal of Polymer Science Part A:  Polymer Chemistry",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/10990518"
    },
    {
        "id": 318,
        "Publisher": "Wiley",
        "Title": "Journal of Quaternary Science",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/page\/journal\/10991417\/homepage\/forauthors.html"
    },
    {
        "id": 319,
        "Publisher": "Wiley",
        "Title": "Journal of Raman Spectroscopy",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/10974555"
    },
    {
        "id": 320,
        "Publisher": "Wiley",
        "Title": "Luminescence: The Journal of Biological and  Chemical Luminescence",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/page\/journal\/15227243\/homepage\/forauthors.html"
    },
    {
        "id": 321,
        "Publisher": "Wiley",
        "Title": "Macromolecular Bioscience  (Electronic)",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/16165195"
    },
    {
        "id": 322,
        "Publisher": "Wiley",
        "Title": "Macromolecular Rapid Communications  (Electronic)",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/page\/journal\/15213927\/homepage\/2263_contact.html"
    },
    {
        "id": 323,
        "Publisher": "Wiley",
        "Title": "Magnetic Resonance in Chemistry",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/1097458xa"
    },
    {
        "id": 324,
        "Publisher": "Wiley",
        "Title": "Mathematical Finance",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/14679965"
    },
    {
        "id": 325,
        "Publisher": "Wiley",
        "Title": "Medicinal Research Reviews",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/10981128"
    },
    {
        "id": 326,
        "Publisher": "Wiley",
        "Title": "Meteoritics & Planetary Science",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/19455100"
    },
    {
        "id": 327,
        "Publisher": "Wiley",
        "Title": "Molecular Ecology",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/1365294x"
    },
    {
        "id": 328,
        "Publisher": "Wiley",
        "Title": "Molecular Ecology Resources",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/17550998"
    },
    {
        "id": 329,
        "Publisher": "Wiley",
        "Title": "Molecular Microbiology",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/13652958"
    },
    {
        "id": 330,
        "Publisher": "Wiley",
        "Title": "Naval Research Logistics",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/15206750"
    },
    {
        "id": 331,
        "Publisher": "Wiley",
        "Title": "New Phytologist",
        "Hyperlink": "https:\/\/nph.onlinelibrary.wiley.com\/journal\/14698137"
    },
    {
        "id": 332,
        "Publisher": "Wiley",
        "Title": "Nordic Journal of Botany",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/17561051"
    },
    {
        "id": 333,
        "Publisher": "Wiley",
        "Title": "Oikos",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/16000706"
    },
    {
        "id": 334,
        "Publisher": "Wiley",
        "Title": "Plant Biology",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/page\/journal\/14388677\/homepage\/forauthors.html"
    },
    {
        "id": 335,
        "Publisher": "Wiley",
        "Title": "Plant Cell & Environment",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/13653040"
    },
    {
        "id": 336,
        "Publisher": "Wiley",
        "Title": "Polymer International",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/10970126"
    },
    {
        "id": 337,
        "Publisher": "Wiley",
        "Title": "Proteins: Structure, Function and Bioinformatics",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/10970134"
    },
    {
        "id": 338,
        "Publisher": "Wiley",
        "Title": "Proteomics (Electronic)",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/page\/journal\/16159861\/homepage\/2120_authorguidelines.html"
    },
    {
        "id": 339,
        "Publisher": "Wiley",
        "Title": "physica status solidi (a) applications and materials science   (Electronic)",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/18626319"
    },
    {
        "id": 340,
        "Publisher": "Wiley",
        "Title": "physica status solidi (b) basic solid state physics",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/15213951"
    },
    {
        "id": 341,
        "Publisher": "Wiley",
        "Title": "Random Structures & Algorithms",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/10982418"
    },
    {
        "id": 342,
        "Publisher": "Wiley",
        "Title": "Sedimentology",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/13653091"
    },
    {
        "id": 343,
        "Publisher": "Wiley",
        "Title": "Terra Nova",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/13653121"
    },
    {
        "id": 344,
        "Publisher": "Wiley",
        "Title": "The FEBS Journal",
        "Hyperlink": "https:\/\/febs.onlinelibrary.wiley.com\/journal\/17424658"
    },
    {
        "id": 345,
        "Publisher": "Wiley",
        "Title": "The Journal of Comparative Neurology",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/10969861"
    },
    {
        "id": 346,
        "Publisher": "Wiley",
        "Title": "The Journal of Finance",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/15406261"
    },
    {
        "id": 347,
        "Publisher": "Wiley",
        "Title": "The Plant Journal",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/1365313x"
    },
    {
        "id": 348,
        "Publisher": "Wiley",
        "Title": "Zeitschrift für anorganische und allgemeine Chemie",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/15213749"
    },
    {
        "id": 349,
        "Publisher": "Wiley",
        "Title": "Journal of Systematics and Evolution ",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/17596831"
    },
    {
        "id": 350,
        "Publisher": "Wiley",
        "Title": "Chemical Record (TCR) ",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/15280691"
    },
    {
        "id": 351,
        "Publisher": "Wiley",
        "Title": "Advanced Energy Materials",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/16146840"
    },
    {
        "id": 352,
        "Publisher": "Wiley",
        "Title": "Advanced Optical Materials",
        "Hyperlink": "https:\/\/onlinelibrary.wiley.com\/journal\/21951071"
    }
]

BOOKS.sort((a, b)=> a.Title.localeCompare(b.Title)) 
const product_list = document.querySelector('.product_result')


// A to Z buttons

const AtoZ = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const AtoZ_container = document.querySelector('.AtoZ_container')
AtoZ.forEach((letter) => {  
    const bookItem = document.createElement("button");
    bookItem.classList.add('border', 'p-2', 'hover:border-black', 'rounded-xl', 'm-2')  
    bookItem.addEventListener('click', () => {  
        const FILTERED_BOOKS = BOOKS.filter((book) => book.Title.charAt(0).toLowerCase() === letter.toLowerCase())
        product_list.innerHTML = ``
        FILTERED_BOOKS.forEach((book) => {
            
            const book_title = book.Title
            const book_publication = book.Publisher    
            const bookItem = document.createElement("div");
            bookItem.innerHTML = ` 
            <div class="max-w-[700px] border rounded-xl p-4 py-8 shadow m-4">
                <h1 class="hover:underline hover:text-blue-500 text-3xl mt-3">
                <a target="_blank" href="${book.Hyperlink}">${book_title}</a></h1>
                <h3 class="italic">${book_publication}</h3>
            </div>
            `
            product_list.appendChild(bookItem)
        }
        )
        
    })
    bookItem.innerHTML = `
            ${letter}
        
    
    `
    AtoZ_container.appendChild(bookItem)

})
// product_list.appendChild(AtoZ_container)




















    const INITIAL_BOOKS = BOOKS.filter((book) => book.Remark)
    INITIAL_BOOKS.forEach((book) => {
        const book_title = book.Title
        const book_publication = book.Publisher    
        const bookItem = document.createElement("div");
        bookItem.innerHTML = `
        <div class="max-w-[700px] border rounded-xl p-4 py-8 shadow m-4">
            <i>${book.Remark}</i>
            <h1 class="hover:underline hover:text-blue-500 text-3xl mt-3">
            <a target="_blank" href="${book.Hyperlink}">${book_title}</a></h1>
            <h3 class="font-semibold mt-2">${book_publication}</h3>

        </div>
        `
        // console.log(book)           
        product_list.appendChild(bookItem)
    }) 





const filter_items = () => {
    
    const product_list = document.querySelector('.product_result')
    const search = document.querySelector('#input_search').value.toLowerCase();
    const FILTERED_BOOKS = BOOKS.filter((book) => book.Title.toLowerCase().includes(search.toLowerCase())) || BOOKS.filter((book) => book.Publisher.toLowerCase().includes(search.toLowerCase()))
    product_list.innerHTML = `
    <h1 class="p-4 flex justify-center ">
    <b>Total results:&nbsp;</b>
        <span class="italic ">
         ${FILTERED_BOOKS.length} resources found.
        </span>
    </h1>
    `
    
    FILTERED_BOOKS.forEach((book) => {
        const book_title = book.Title
        const book_publication = book.Publisher    
        const bookItem = document.createElement("div");
        bookItem.innerHTML = `
        <div class="max-w-[700px] border rounded-xl p-4 py-8 shadow m-4">
            <h1 class="hover:underline hover:text-blue-500 text-3xl mt-3">
            <a target="_blank" href="${book.Hyperlink}"> ${book_title}</a></h1>
            <h3 class="italic">${book_publication}</h3>
        </div>
        `
        // console.log(book)           
        product_list.appendChild(bookItem)
    })


    if(product_list.innerHTML === ''){
        product_list.innerHTML = `
        <div class="max-w-[700px] border rounded-xl p-4 py-8 shadow m-4">
            <h1 class="text-3xl mt-3">
            No results found</h1>
        </div>
        `
    }   
}


document.querySelector('#input_search').addEventListener('keyup', filter_items)

