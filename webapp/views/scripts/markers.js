//This file just contains data for the markers on the interactive map
//everything here manually found by Jakub Olbrisch

function returnMarkers() {

    //NHS Ayrshire & Arran
    var alisaHospital = L.marker([55.43616082006123, -4.592238580604235]);
    alisaHospital.bindPopup("<b>NHS Ayrshire & Arran</b><br><b>Alisa Hospital</b><br>Mental Health<br>");

    var ayrHospital = L.marker([55.430683273915264, -4.5941161249054945]);
    ayrHospital.bindPopup("<b>NHS Ayrshire & Arran</b><br><b>Ayr Hospital</b><br>Stroke Rehab<br>");

    var ayrshireCentral = L.marker([55.63496277493528, -4.674003071505734]);
    ayrshireCentral.bindPopup("<b>NHS Ayrshire & Arran</b><br><b>Ayrshire Central Hospital</b><br>");

    var biggartHospital = L.marker([55.49209174747914, -4.603625132961223]);
    biggartHospital.bindPopup("<b>NHS Ayrshire & Arran</b><br><b>Biggart Hospital</b><br>Paediatrics<br>");

    var crosshouseHospital = L.marker([55.613585190025425, -4.539815367611053]);
    crosshouseHospital.bindPopup("<b>NHS Ayrshire & Arran</b><br><b>Crosshouse Hospital</b><br>Surgical<br>");

    var eastAyrshire = L.marker([55.45089827339216, -4.2745248789738595]);
    eastAyrshire.bindPopup("<b>NHS Ayrshire & Arran</b><br><b>East Ayrshire Community Hospital</b><br>Elderly Rehab<br>");

    var kilmarnockFC = L.marker([55.60472638224345, -4.509247308231284]);
    kilmarnockFC.bindPopup("<b>NHS Ayrshire & Arran</b><br><b>Kilmarnock FC</b><br>");

    var irvineDouglas = L.marker([55.63375837270162, -4.6716773901463755]);
    irvineDouglas.bindPopup("<b>NHS Ayrshire & Arran</b><br><b>North Ayrshire, Irvine Douglas Grant Centre</b><br>");

    var rainbowHouse = L.marker([55.63191253783768, -4.675395857181517]);
    rainbowHouse.bindPopup("<b>NHS Ayrshire & Arran</b><br><b>Rainbow House</b><br>");


    //ayrshire array
    var nhsAyrshire = L.layerGroup([alisaHospital, ayrHospital, ayrshireCentral, biggartHospital, crosshouseHospital, eastAyrshire, kilmarnockFC, irvineDouglas, rainbowHouse]);


    //NHS Borders
    //home first, major trauma, mental health and learning difficulties, msk outpatients hawick/haylodge not included
    var bordersGeneral = L.marker([55.59558354934456, -2.7421250741736136]);
    bordersGeneral.bindPopup("<b>NHS Borders</b><br><b>Borders General Hospital</b><br>Orthopaedics<br>Rapid Assessment and Discharge (RAD)");

    var hawickCommunity = L.marker([55.4234723943693, -2.7943723552552724]);
    hawickCommunity.bindPopup("<b>NHS Borders</b><br><b>Hawick Community Hospital</b><br>Paediatrics");

    var haylodgeCommunity = L.marker([55.65187860245308, -3.1982597983276637]);
    haylodgeCommunity.bindPopup("<b>NHS Borders</b><br><b>Haylodge Community Hospital</b>");

    var knollCommunity = L.marker([55.77223140058659, -2.341147718572662]);
    knollCommunity.bindPopup("<b>NHS Borders</b><br><b>Knoll Community Hospital</b>");

    //borders array
    var nhsBorders = L.layerGroup([bordersGeneral, hawickCommunity, haylodgeCommunity, knollCommunity]);


    //NHS Dumfries & Galloway
    var annanCommunity = L.marker([54.988150977398526, -3.2468163515312036]);
    annanCommunity.bindPopup("<b>NHS Dumfries & Galloway</b><br><b>Annan Community Hospital</b>");

    var dumfriesGalloway = L.marker([55.058691873268685, -3.658377706078691]);
    dumfriesGalloway.bindPopup("<b>NHS Dumfries & Galloway</b><br><b>Dumfries & Galloway Royal Infirmary</b>");

    var mountainhill = L.marker([55.05766972842636, -3.5988842699025816]);
    mountainhill.bindPopup("<b>NHS Dumfries & Galloway</b><br><b>Mountainhall Treatment Centre</b><br>Outpatients");


    //dumfries array
    var nhsDumfries = L.layerGroup([annanCommunity, dumfriesGalloway, mountainhill]);


    //NHS Fife
    var adamsonsHospital = L.marker([56.3243531868271, -3.017373827197887]);
    adamsonsHospital.bindPopup("<b>NHS Fife</b><br><b>Adamsons Hospital</b><br>Inpatients<br>Community<br>Outpatients");

    var queenMargaret = L.marker([56.08211979885725, -3.426990317404657]);
    queenMargaret.bindPopup("<b>NHS Fife</b><br><b>Queen Margaret Hospital Dunfermline</b><br>MSK");

    var randolphWeymss = L.marker([56.1767663199924, -3.0277767354715865]);
    randolphWeymss.bindPopup("<b>NHS Fife</b><br><b>Randolph Weymss Memorial Hospital, Level</b><br>Outpatients");

    var stAndrews = L.marker([56.32752854631187, -2.805944943048076]);
    stAndrews.bindPopup("<b>NHS Fife</b><br><b>St Andrews Hospital</b><br>Community<br>Inpatients<br>Outpatients");

    var victoriaHospital = L.marker([56.124317891348404, -3.1588117253622277]);
    victoriaHospital.bindPopup("<b>NHS Fife</b><br><b>Victoria Hospital</b><br>General Medicine<br>Respiratory");

    var whytemannsBrae = L.marker([56.127866492685705, -3.1601519090824004]);
    whytemannsBrae.bindPopup("<b>NHS Fife</b><br><b>Whytemanns Brae Hospital</b><br>MSK Outpatients<br>Rheumatology");


    //fife array
    var nhsFife = L.layerGroup([adamsonsHospital, queenMargaret, randolphWeymss, stAndrews, victoriaHospital, whytemannsBrae]);


    //NHS Forth Valley
    //cant find rehab care group in falkirk

    //NHS Grampian
    //cant find dyce clinic, adult community learning disabilities, chronic pain team, city hospital rosewell, deeside banchory westhill aboyne, keith and buckie community therapy teams, paediatrics child development teams abredeen,  
    var ashgroveHouse = L.marker([57.15559352210335, -2.139292643767132]);
    ashgroveHouse.bindPopup("<b>NHS Grampian</b><br><b>Ashgrove House</b><br>Outpatients<br>Cardiac Rehabilitation");

    var bridgeOfDon = L.marker([57.18100593892756, -2.101123115010099]);
    bridgeOfDon.bindPopup("<b>NHS Grampian</b><br><b>Bridge of Don Health Clinic</b><br>Outpatients");

    //var dyceClinic = L.marker([]);
    //dyceClinic.bindPopup("<b>NHS Grampian</b><br><b>Dyce Clinic</b><br>Outpatients");

    var healthVillage = L.marker([57.150119634308545, -2.091949200816105]);
    healthVillage.bindPopup("<b>NHS Grampian</b><br><b>Health Village</b><br>Outpatients");

    var woodendHospital = L.marker([57.147941814834226, -2.173380515561239]);
    woodendHospital.bindPopup("<b>NHS Grampian</b><br><b>Woodend Hospital</b><br>Outpatients<br>Care of the Elderly<br>MARS Wheelchair Service<br>Neuro Rehab<br>Orthopaedics<br>Stroke Rehab<br>");

    var woolmanhill = L.marker([57.14904161250405, -2.105571459355104]);
    woolmanhill.bindPopup("<b>NHS Grampian</b><br><b>Woolmanhill</b><br>Outpatients");

    var aberdeenRoyal = L.marker([57.154557845110816, -2.1359884578385633]);
    aberdeenRoyal.bindPopup("<b>NHS Grampian</b><br><b>Aberdeen Royal Infirmary</b><br>Anchor Unit<br>- Anchor ARI<br>- Oncology, ARI<br>Cardiothoracic<br>- Cardiothoracic ARI<br>- Inverurie(Cardiac)<br>Cystic Fibrosis and Thoracic Medicine<br>GAU and Step Down Wards<br>General Medical<br>General Surgery<br>Home and Mobility Evaluation (HAME) Team<br>ITU<br>Major Trauma Unit<br>Medical HDU<br>Neurosciences<br>Orthopaedics<br>Rheumatology<br>Stroke Rehabilitation<br>Vascular");

    var alfordMedical = L.marker([57.2368809587556, -2.7036949306248594]);
    alfordMedical.bindPopup("<b>NHS Grampian</b><br><b>Alford Medical Practice</b><br>Outpatients");

    var inschMedical = L.marker([57.34020326266884, -2.614499843043784]);
    inschMedical.bindPopup("<b>NHS Grampian</b><br><b>Insch Medical Practice</b><br>Outpatients");

    var chalmersHospital = L.marker([57.668986738591656, -2.5250194319248846]);
    chalmersHospital.bindPopup("<b>NHS Grampian</b><br><b>Chalmers Hospital</b><br>Inpatients<br>Community<br>Outpatients");

    var craigCourt = L.marker([57.10927700385346, -2.2259496181578298]);
    craigCourt.bindPopup("<b>NHS Grampian</b><br><b>Craig Court Neurorehabilitation Unit</b><br>");

    var ellonHealth = L.marker([57.36629851273764, -2.0701307932161077]);
    ellonHealth.bindPopup("<b>NHS Grampian</b><br><b>Ellon Health Centre</b><br>Outpatients");

    var fraserburghHospital = L.marker([57.68728958784441, -2.019575790727118]);
    fraserburghHospital.bindPopup("<b>NHS Grampian</b><br><b>Fraserburgh Hospital</b><br>Inpatients<br>Community<br>Outpatients<br>Stroke<br>");

    var horizonRehab = L.marker([57.14904849831216, -2.168781182794607]);
    horizonRehab.bindPopup("<b>NHS Grampian</b><br><b>Horizons Rehabilitation Centre</b><br>Neuro Rehab<br>");

    var inverurieHospital = L.marker([57.276444897839326, -2.379653239627552]);
    inverurieHospital.bindPopup("<b>NHS Grampian</b><br><b>Inverurie Hospital</b><br>Inpatients<br>Outpatients<br>Cardiac Rehab<br>");

    var jubileeHospital = L.marker([57.44284388361515, -2.789970710252575]);
    jubileeHospital.bindPopup("<b>NHS Grampian</b><br><b>Jubilee Hospital</b><br>Inpatients<br>Outpatients<br>");

    var kincardineHospital = L.marker([56.96910245655657, -2.23082367031605]);
    kincardineHospital.bindPopup("<b>NHS Grampian</b><br><b>Kincardine Community Hospital</b><br>Community<br>Outpatients<br>Inpatient/Ward<br>");

    var peterheadHospital = L.marker([57.502433663784295, -1.7936451423254136]);
    peterheadHospital.bindPopup("<b>NHS Grampian</b><br><b>Peterhead Community Hospital</b><br>MSK<br>Community Rehab");

    var portlethenHealth = L.marker([57.06122775980703, -2.126869701079134]);
    portlethenHealth.bindPopup("<b>NHS Grampian</b><br><b>Portlethen Health Centre</b><br>");

    var royalCornhill = L.marker([57.15437504279905, -2.1173865867854684]);
    royalCornhill.bindPopup("<b>NHS Grampian</b><br><b>Royal Cornhill Hospital</b><br>Mental Health<br>");

    var seafieldHospital = L.marker([57.668127397809755, -2.9809802038342]);
    seafieldHospital.bindPopup("<b>NHS Grampian</b><br><b>Seafield Hospital</b><br>Outpatients");

    var turriffHospital = L.marker([57.537062863752695, -2.450808396084804]);
    turriffHospital.bindPopup("<b>NHS Grampian</b><br><b>Turriff Cottage Hospital</b><br>");


    //grampian array
    var nhsGrampian = L.layerGroup([ashgroveHouse, bridgeOfDon, healthVillage, woodendHospital, woolmanhill, aberdeenRoyal, alfordMedical, inschMedical, chalmersHospital,
                                    ellonHealth, fraserburghHospital, horizonRehab, inverurieHospital, jubileeHospital, kincardineHospital, peterheadHospital, portlethenHealth,
                                    royalCornhill, seafieldHospital, turriffHospital]);

    
    //NHS Grampian Moray Region
    var morayCommunity = L.marker([57.64607442496572, -3.3284247733749353]);
    morayCommunity.bindPopup("<b>NHS Grampian Moray Region</b><br><b>Moray Community Health</b><br>Inpatients<br>MSK Outpatient<br>Paediatrics<br>Community<br>Adults and Palliative Care<br>");


    //moray array
    var nhsMorray = L.layergroup([morayCommunity]);


    //NHS Greater Glasgow & Clyde
    //cant find westmarc
    var gartnavelGeneral = L.marker([55.88292009082367, -4.312787230919402]);
    gartnavelGeneral.bindPopup("<b>NHS Greater Glasgow & Clyde</b><br><b>Gartnavel General Hospital Beatson</b><br>Oncology<br>General Medical<br>");

    var glasgowRoyal = L.marker([55.86514637338779, -4.2336849404126795]);
    glasgowRoyal.bindPopup("<b>NHS Greater Glasgow & Clyde</b><br><b>Glasgow Royal Infirmary</b><br>Burns/Plastics<br>");

    var goldenJubilee = L.marker([55.905869660422525, -4.425053244402847]);
    goldenJubilee.bindPopup("<b>NHS Greater Glasgow & Clyde</b><br><b>Golden Jubilee National Hospital</b><br>Cardiothoracic<br>");

    var inverclydeRoyal = L.marker([55.94368788416098, -4.809221983040775]);
    inverclydeRoyal.bindPopup("<b>NHS Greater Glasgow & Clyde</b><br><b>Inverclyde Royal Hospital</b><br>Surgical<br>Medical<br>");

    var queenElizabeth = L.marker([55.86231289804637, -4.3404361020749365]);
    queenElizabeth.bindPopup("<b>NHS Greater Glasgow & Clyde</b><br><b>Queen Elizabeth University Hospital</b><br>Orthopaedics<br>Respiratory<br>Spinal Injuries Unity<br>");


    //greater glasgow array
    var nhsGreaterGlasgow = L.layerGroup([gartnavelGeneral, glasgowRoyal, goldenJubilee, inverclydeRoyal, queenElizabeth]);


    //NHS Highland
    //cant find caithness hosue community, durness, st vincent,
    var assyntMedical = L.marker([58.15394397913385, -5.239087263628262]);
    assyntMedical.bindPopup("<b>NHS Highland</b><br><b>Assynt Health Centre</b><br>Community<br>Outpatients<br>");

    var badenochStrathespey = L.marker([57.1983593090742, -3.822258793892146]);
    badenochStrathespey.bindPopup("<b>NHS Highland</b><br><b>Badenoch and Strathspey Community Hospital</b><br>");

    var belfordHospital = L.marker([56.819436631479654, -5.104528854493371]);
    belfordHospital.bindPopup("<b>NHS Highland</b><br><b>Belford Hospital</b><br>Inpatients<br>");

    var birnieChild = L.marker([57.47703209621046, -4.19559611918348]);
    birnieChild.bindPopup("<b>NHS Highland</b><br><b>Birnie Child Development Centre</b><br>Paediatrics<br>");

    var caithnessGeneral = L.marker([58.440733713160284, -3.0949973056420874]);
    caithnessGeneral.bindPopup("<b>NHS Highland</b><br><b>Caithness General Hospital</b><br>");

    var countyCommunity = L.marker([57.69601803782153, -4.1522211633480275]);
    countyCommunity.bindPopup("<b>NHS Highland</b><br><b>County Community Hospital</b><br>Care of the Elderly<br>MSK Outpatients<br>Womens Health<br>");

    var cowalCommunity = L.marker([55.95924812713568, -4.928134555021887]);
    cowalCommunity.bindPopup("<b>NHS Highland</b><br><b>Cowal Community Hospital</b><br>");

    var dunbarHospital = L.marker([58.58337332155573, -3.5389433991539083]);
    dunbarHospital.bindPopup("<b>NHS Highland</b><br><b>Dunbar Hospital</b><br>Outpatients<br>");

    var fortWilliam = L.marker([56.83903182917721, -5.079037970520309]);
    fortWilliam.bindPopup("<b>NHS Highland</b><br><b>Fort William Health Centre</b><br>Community<br>Paediatrics<br>Outpatients<br>");

    var grantownSpey = L.marker([57.33706645268885, -3.6040251761854547]);
    grantownSpey.bindPopup("<b>NHS Highland</b><br><b>Grantown On Spey Medical Practice</b><br>Outpatients<br>");

    var highlandChild = L.marker([57.475252758546, -4.191546441243578]);
    highlandChild.bindPopup("<b>NHS Highland</b><br><b>Highland Childrens Physiotherapy Service</b><br>");

    var lawsonMemorial = L.marker([57.97287984594828, -3.9879611921697604]);
    lawsonMemorial.bindPopup("<b>NHS Highland</b><br><b>Lawson Memorial Hospital</b><br>Outpatients<br>Inpatients<br>");

    var lornIsles = L.marker([56.40055210176721, -5.475065846224604]);
    lornIsles.bindPopup("<b>NHS Highland</b><br><b>Lorn and Isles District Hospital</b><br>Care of the Elderly<br>Medical<br>Neuro<br>Respiratory<br>Outpatients<br>");

    var migdaleHospital = L.marker([57.891326173950176, -4.343099626544093]);
    migdaleHospital.bindPopup("<b>NHS Highland</b><br><b>Migdale Hospital</b><br>Outaptients<br>Inpatients<br>Cardiac Rehab");

    var thePines = L.marker([57.45820763692193, -4.2270873273846625]);
    thePines.bindPopup("<b>NHS Highland</b><br><b>The Pines</b><br>Paediatrics");

    var portreeHospital = L.marker([57.410507290057055, -6.193210451651246]);
    portreeHospital.bindPopup("<b>NHS Highland</b><br><b>Portree Hospital</b><br>Orthopaedics<br>Outpatients<br>");

    var broadfordHospital = L.marker([57.245383563032824, -5.91162316192811]);
    broadfordHospital.bindPopup("<b>NHS Highland</b><br><b>Broadford Hospital</b><br>Orthopaedics<br>Outpatients<br>");

    var raigmoreHospital = L.marker([57.47410842429703, -4.19367447316338]);
    raigmoreHospital.bindPopup("<b>NHS Highland</b><br><b>Raigmore Hospital</b><br>Cystic Fibrosis and Respiratory<br>Elderly Rehab<br>General Medicine<br>MSK Outpatients<br>Neuro Rehab<br>Obstetrics and Gynaecology and Continence<br>Orthopaedics (Trauma and Elective)<br>Paediatrics (Respiratory MSK)<br>Practice Based Learning<br>Surgical Critical Care<br>Vascular and Oncology<br>");

    var rossMemorial = L.marker([57.593968907030806, -4.416991167943116]);
    rossMemorial.bindPopup("<b>NHS Highland</b><br><b>Ross Memorial Hospital</b><br>Care of the Elderly<br>Community<br>Outpatients<br>Rheumatology and Hydrotherapy<br>");

    var victoriaBute = L.marker([55.830031254260476, -5.055401095947029]);
    victoriaBute.bindPopup("<b>NHS Highland</b><br><b>Victoria Hospital Rothesay</b><br>");

    var royalNorthern = L.marker([57.47047018740647, -4.232031667264261]);
    royalNorthern.bindPopup("<b>NHS Highland</b><br><b>Royal Northern Infirmary</b><br>Care of the Elderly<br>Inpatients<br>Community Rehab<br>Neuro Rehab<br>");

    var nairnTown = L.marker([57.57806188030481, -3.872365802544334]);
    nairnTown.bindPopup("<b>NHS Highland</b><br><b>Town and County Hospital</b><br>Outpatients");


    //highland array
    var nhsHighland = L.layerGroup([assyntMedical, badenochStrathespey, belfordHospital, birnieChild, caithnessGeneral, countyCommunity, cowalCommunity, dunbarHospital,
                                    fortWilliam, grantownSpey, highlandChild, lawsonMemorial, lornIsles, migdaleHospital, thePines, portreeHospital, broadfordHospital,
                                    raigmoreHospital, rossMemorial, victoriaBute, royalNorthern, nairnTown]);



    //NHS Lanarkshire
    var airdrieHealth = L.marker([55.8658085612504, -3.977587426591535]);
    airdrieHealth.bindPopup("<b>NHS Lanarkshire</b><br><b>Airdrie Health Centre</b><br>Community");

    var hunterHealth = L.marker([55.76287068035748, -4.175485147250459]);
    hunterHealth.bindPopup("<b>NHS Lanarkshire</b><br><b>Hunter Health Centre</b><br>");

    var monklandsHospital = L.marker([55.86611809377746, -4.000104371442056]);
    monklandsHospital.bindPopup("<b>NHS Lanarkshire</b><br><b>Monklands Hospital</b><br>Elderly Rehabilitation<br>MSK Inpatients<br>Outpatients<br>Respiratory Medical<br>Respiratory Surgical<br>Stroke Unit<br>");


    //lanarkshire array
    var nhsLanarkshire = L.layerGroup([airdrieHealth, hunterHealth, monklandsHospital]);


    //NHS Lothian
    //cant find intermediate care hub edinburgh, paediatrics orkney
    var royalHospital = L.marker([55.921190499028654, -3.1386945713615053]);
    royalHospital.bindPopup("<b>NHS Lothian</b><br><b>Royal Hospital for Children &  Young People</b><br>Paediatrics");

    var publicHealth = L.marker([58.980895259576464, -2.961254535663308]);
    publicHealth.bindPopup("<b>NHS Lothian</b><br><b>Public Health</b><br>");


    //lothian array
    var nhsLothian = L.layerGroup([royalHospital, publicHealth]);


    //NHS Shetland
    var gilbertBain = L.marker([60.15090569595472, -1.1558431441982253]);
    gilbertBain.bindPopup("<b>NHS Shetland</b><br><b>Gilbert Bain Hospital</b><br>Inpatients<br>Neurology<br>Outpatients<br>Paediatrics<br>MSK<br>Community<br>");



    //shetland array
    var nhsShetland = L.layerGroup([gilbertBain]);


    //NHS Tayside
    //cant find dailcec, dundee learning disabilities service
    var arbroathInfirmary = L.marker([    56.554834291725335, -2.596739722668353]);
    arbroathInfirmary.bindPopup("<b>NHS Tayside</b><br><b>Arbroath Infirmary</b><br>Community and Pulmonary Rehabilitation<br>Community Stroke Team<br>Outpatients<br>");

    var armisteadChild = L.marker([56.476236870269375, -2.987744536286948]);
    armisteadChild.bindPopup("<b>NHS Tayside</b><br><b>Armistead Child Development Centre</b><br>Paediatrics<br>");

    var blairgowrieCottage = L.marker([56.58583106592918, -3.3462724765328375]);
    blairgowrieCottage.bindPopup("<b>NHS Tayside</b><br><b>Blairgowrie Community Hospital</b><br>");

    var carnoustieMedical = L.marker([56.50027570177928, -2.7343563799947495]);
    carnoustieMedical.bindPopup("<b>NHS Tayside</b><br><b>Carnoustie</b><br>Outpatients<br>Community<br>");

    var crieffCommunity = L.marker([56.370421023648454, -3.8426470915190287]);
    crieffCommunity.bindPopup("<b>NHS Tayside</b><br><b>Crieff Community Hospital</b><br>");

    var dundonaldCentre = L.marker([56.472338050451945, -2.9609409163969285]);
    dundonaldCentre.bindPopup("<b>NHS Tayside</b><br><b>Dundonald Centre</b><br>Adult Psychiatric Services<br>");

    var healthSocial = L.marker([55.85597387763602, -4.320412886175826]);
    healthSocial.bindPopup("<b>NHS Tayside</b><br><b>Health and Social Care Partnership</b><br>Learning Disability<br>");

    var kingsCross = L.marker([56.47596593684017, -2.985528164314256]);
    kingsCross.bindPopup("<b>NHS Tayside</b><br><b>Kings Cross Hospital</b><br>Working Health Services<br>Outpatients Pulmonary Rehab<br>Weight Mx<br>");

    var kingsparkSchool = L.marker([56.477838859028374, -2.9957671983907836]);
    kingsparkSchool.bindPopup("<b>NHS Tayside</b><br><b>Kingspark School - Special Needs</b><br>Paediatrics<br>");

    var linksHealth = L.marker([56.71017883612208, -2.4567830954933414]);
    linksHealth.bindPopup("<b>NHS Tayside</b><br><b>Links Health Centre</b><br>Community<br>Outpatients<br>");

    var msTherapy = L.marker([56.45764571039877, -2.9929902168465525]);
    msTherapy.bindPopup("<b>NHS Tayside</b><br><b>MS Therapy Centre</b><br>");

    var murrayRoyal = L.marker([56.40099488436406, -3.4138855474152163]);
    murrayRoyal.bindPopup("<b>NHS Tayside</b><br><b>Murray Royal Hospital</b><br>Mental Health<br>");

    var ninewellsHospital = L.marker([56.46439006929847, -3.0390290492127257]);
    ninewellsHospital.bindPopup("<b>NHS Tayside</b><br><b>Ninewells Hospital</b><br>Adult Cystic Fibrosis<br>Amputees  and Vascular<br>Cardiac Rehabilitation<br>Medical<br>Neuro outpatient and community<br>Neurosciences, neurology<br>Orthopaedics<br>Paediatriscs<br>Pelvic, Obstetric<br>Respiratory<br>Stroke<br>Acute Medicine<br>General Medical<br>");

    var perthRoyal = L.marker([56.397255324826354, -3.456417857352782]);
    perthRoyal.bindPopup("<b>NHS Tayside</b><br><b>Perth Royal Infirmary</b><br>Neuro Outpatients<br>Cardiac Rehab<br>Medical Surgical ITU<br>Medicine of the Elderly<br>Neuro Outpatients<br>Orthopaedics<br>Outpatients<br>Rheumatology<br>Stroke<br>Stroke Rehab<br>");

    var pitlochry = L.marker([56.701323431463365, -3.737002183916993]);
    pitlochry.bindPopup("<b>NHS Tayside</b><br><b>Pitlochry</b><br>Community<br>");

    var roxburgheHouse = L.marker([56.461890614882556, -3.0151455589127276]);
    roxburgheHouse.bindPopup("<b>NHS Tayside</b><br><b>Roxburghe House</b><br>");

    var royalVictoria = L.marker([56.46275321052279, -3.014145851601308]);
    royalVictoria.bindPopup("<b>NHS Tayside</b><br><b>Royal Victoria Hospital</b><br>Brain Injury Rehabilitation<br>Medicine for the Elderly<br>Stroke Rehab<br>");

    var stracathroHospital = L.marker([56.77560754121442, -2.6152237114574013]);
    stracathroHospital.bindPopup("<b>NHS Tayside</b><br><b>Stracathro Hospital</b><br>Care of the Elderly<br>Community<br>Outpatients<br>Stroke Rehab<br>");

    var sunflowerCentre = L.marker([56.13065524283709, -3.3124103178613975]);
    sunflowerCentre.bindPopup("<b>NHS Tayside</b><br><b>Sunflower Centre Special School</b><br>Paediatrics<br>");

    var whitehillsHealth = L.marker([56.651146010460074, -2.8714925977687367]);
    whitehillsHealth.bindPopup("<b>NHS Tayside</b><br><b>Whitehills Health and Community Care Centre</b><br>Community and Pulmonary Rehabilitation<br>Outpatients<br>");


    //tayside array
    var nhsTayside = L.layerGroup([ arbroathInfirmary, armisteadChild, blairgowrieCottage, carnoustieMedical, crieffCommunity, dundonaldCentre, healthSocial, kingsCross,
                                    kingsparkSchool, linksHealth, msTherapy, murrayRoyal, ninewellsHospital, perthRoyal, pitlochry, roxburgheHouse, royalVictoria, stracathroHospital,
                                    sunflowerCentre, whitehillsHealth]);

    
    //NHS Western Isles
    var westernIsles  = L.marker([58.22091684829912, -6.384320337962609]);
    westernIsles.bindPopup("<b>NHS Western Isles</b><br><b>Western Isles Hospital</b><br>Outpatients<br>");


    //western array
    var nhsWestern = L.layerGroup([westernIsles]);


    //Non-NHS
    var aberdeenFC = L.marker([57.15915441257328, -2.087034682461942]);
    aberdeenFC.bindPopup("<b>Non NHS Placement</b><br><b>Aberdeen FC</b><br>");

    var albyn = L.marker([57.14263253098328, -2.118240433139226]);
    albyn.bindPopup("<b>Non NHS Placement</b><br><b>Albyn Hospital</b><br>");

    var caledonianPhysio = L.marker([56.400525548846765, -3.4355636594444854]);
    caledonianPhysio.bindPopup("<b>Non NHS Placement</b><br><b>Caledonian Physiotheraphy Services</b><br>");

    var fernbraeBMI = L.marker([56.45731255147466, -3.013877419180273]);
    fernbraeBMI.bindPopup("<b>Non NHS Placement</b><br><b>Fernbrae BMI Healthcare</b><br>");

    var healPhysio = L.marker([56.46496546407914, -2.9745653424272267]);
    healPhysio.bindPopup("<b>Non NHS Placement</b><br><b>Heal Physiotherapy Limited</b><br>");

    var oxygenWorks = L.marker([57.48273249804861, -4.224607059310809]);
    oxygenWorks.bindPopup("<b>Non NHS Placement</b><br><b>The Oxygen Works (MS Therapy Centre)</b><br>");

    var stJohnstone = L.marker([56.410197222394906, -3.477803463199177]);
    stJohnstone.bindPopup("<b>Non NHS Placement</b><br><b>St.Johnstone Football Club</b><br>");

    var physioRGU = L.marker([57.11859695255058, -2.134266682168817]);
    physioRGU.bindPopup("<b>Non NHS Placement</b><br><b>The Physiotherapy Clinic RGU</b><br>");

    var exerciseRGU = L.marker([57.11898372594709, -2.1361482962982343]);
    exerciseRGU.bindPopup("<b>Non NHS Placement</b><br><b>Peer Exercise & Community Activity Placement (PECAP), RGU</b><br>");


    //nonNHS array
    var nonNHS = L.layerGroup([aberdeenFC, albyn, caledonianPhysio, fernbraeBMI, healPhysio, oxygenWorks, stJohnstone, physioRGU, exerciseRGU]);



    //PLACEMENT RESIDENCES========================================================================================================================================================

    //NHS Tayside
    //both ninewells are the same
    var ninewellsResidence = L.marker([56.4626058985445, -3.0369208539860773]);
    ninewellsResidence.bindPopup("<b>Ninewells Nursing Residence</b><br>Contact Name: Wendy Valentine<br>Contact Details: 01382632107 Extension 32107<br>");

    var abertayResidence = L.marker([56.46330192138707, -2.9739388800704125]);
    abertayResidence.bindPopup("<b>Abertay University</b><br>Contact Name: N/A<br>Contact Details:01382308059<br>");

    var westResidence = L.marker([56.45668206149013, -3.008951603782257]);
    westResidence.bindPopup("<b>West Park Flats & Villas</b><br>Contact Name:Sanctuary Management Services<br>Contact Details:01382573111<br>");

    var perthResidence = L.marker([56.397350090801105, -3.4562866175656306]);
    abertayResidence.bindPopup("<b>Accomodation at Perth Royal Infirmary</b><br>Contact Name: N/A<br>Contact Details:01738473207<br>");


    //tayside residence array
    var residenceTayside = L.layerGroup([ninewellsResidence, abertayResidence, westResidence, perthResidence]);


    //NHS Shetland
    var gilbertResidence = L.marker([60.15092437349327, -1.1559274199722125]);
    gilbertResidence.bindPopup("<b>Gilbert Bain Hospital</b><br>Contact Name: N/A<br>Contact Details:01595743000<br>");


    //shetland residence array
    var residenceShetland = L.layerGroup([gilbertResidence]);


    //NHS Highland
    //nairn no address, wick/dornoch no address, highland no address x2, innseagan doesnt exist anymore,  lochybridge no address
    var raigmoreResidence = L.marker([57.47437186483149, -4.193386527967032]);
    raigmoreResidence.bindPopup("<b>Raigmore Hospital Staff Accommodation</b><br>Contact Name: N/A<br>Contact Details:01463 704350 UHB.RaigmoreAccommodation@nhs.net<br>");

    var fortResidence = L.marker([56.818168685353875, -5.108437034196546]);
    fortResidence.bindPopup("<b>Bank Street Lodge</b><br>Contact Name: N/A<br>Contact Details:01397700070<br>");

    var alexandraResidence = L.marker([56.81934917388446, -5.1062874555897695]);
    alexandraResidence.bindPopup("<b>Alexandra Hotel</b><br>Contact Name: Reception<br>Contact Details:01397702241<br>");

    var rosedeneResidence = L.marker([57.97494358495765, -3.971492564446297]);
    rosedeneResidence.bindPopup("<b>Rosedene B&B</b><br>Contact Name: N/A<br>Contact Details:01397702254<br>");


    //highland residence array
    var residenceHighland = L.layerGroup([raigmoreResidence, fortResidence, alexandraResidence, rosedeneResidence]);


    //NHS Grampian Moray
    var maldaResidence = L.marker([57.64630680734482, -3.3126410414559824]);
    maldaResidence.bindPopup("<b>Malda View</b><br>Contact Name: N/A<br>Contact Details:01343548267<br>");

    var killinResidence = L.marker([57.64400151955345, -3.3208268660679816]);
    killinResidence.bindPopup("<b>Killin</b><br>Contact Name: N/A<br>Contact Details:01343550889<br>");

    var ardvoResidence = L.marker([57.646268382621216, -3.3241218496795097]);
    ardvoResidence.bindPopup("<b>Ardvorlich Guest House</b><br>Contact Name: N/A<br>Contact Details:01343556064 bookings@ardvorlich.com<br>");


    //grampian moray residence array
    var residenceMorray = L.layerGroup([maldaResidence, killinResidence, ardvoResidence]);


    //NHS Grampian
    //josie no info, glasgow no info x2,
    var havannahResidence = L.marker([55.85867963096294, -4.234994190089401]);
    havannahResidence.bindPopup("<b>Havannah House</b><br>Contact Name: N/A<br>Contact Details: N/A<br>");


    //grampian residence array
    var residenceGrampian = L.layerGroup([havannahResidence]);

    return[nhsAyrshire, nhsBorders, nhsDumfries, nhsFife, nhsGrampian, nhsMorray, nhsGreaterGlasgow, nhsHighland, nhsLanarkshire, nhsLothian, nhsShetland,
            nhsTayside, nhsWestern, nonNHS, residenceTayside, residenceShetland, residenceHighland, residenceMorray, residenceGrampian];

}